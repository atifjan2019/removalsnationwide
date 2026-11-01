import "server-only";
import { cloudflareConfig, type CloudflareConfig } from "@/lib/cloudflare-config";

/**
 * Cloudflare D1 over its HTTP API, shaped like the Worker binding.
 *
 * The app was written against the D1 binding (`db.prepare(sql).bind(...).first()`
 * and friends). It now runs on Vercel, where there is no binding, so this
 * module speaks to D1's REST endpoint and presents the same small surface. The
 * global `D1Database` type (src/types/cloudflare.d.ts) points at the class
 * below, so the call sites did not change.
 *
 * Differences from the binding worth knowing:
 *  - Each statement is one HTTPS round trip to Cloudflare. D1 answers from
 *    Western Europe; Vercel runs this app in London (vercel.json).
 *  - Parameters travel as JSON: strings, numbers, booleans and null. Binary
 *    values cannot be bound; files belong in R2 (see src/lib/r2.ts).
 *  - BLOB columns come back as byte arrays and are turned into Uint8Array.
 *  - batch() runs its statements one after another, not atomically.
 */

export type D1Meta = {
  duration: number;
  changes: number;
  last_row_id: number;
  rows_read: number;
  rows_written: number;
  served_by?: string;
};

export type D1Result<T = Record<string, unknown>> = {
  results: T[];
  success: true;
  meta: D1Meta;
};

type QueryResponse = {
  success: boolean;
  errors?: { code: number; message: string }[];
  result?: { results: Record<string, unknown>[]; success: boolean; meta: D1Meta }[];
};

const QUERY_TIMEOUT_MS = 20_000;

export class D1HttpPreparedStatement {
  constructor(
    private readonly db: D1HttpDatabase,
    private readonly sql: string,
    private readonly params: unknown[] = [],
  ) {}

  bind(...values: unknown[]): D1HttpPreparedStatement {
    return new D1HttpPreparedStatement(this.db, this.sql, values.map(toParam));
  }

  async first<T = Record<string, unknown>>(column?: string): Promise<T | null> {
    const { results } = await this.db.execute<Record<string, unknown>>(this.sql, this.params);
    const row = results[0];
    if (row === undefined) return null;
    if (column !== undefined) return (column in row ? row[column] : null) as T | null;
    return row as T;
  }

  all<T = Record<string, unknown>>(): Promise<D1Result<T>> {
    return this.db.execute<T>(this.sql, this.params);
  }

  run<T = Record<string, unknown>>(): Promise<D1Result<T>> {
    return this.db.execute<T>(this.sql, this.params);
  }

  /** Rows as arrays, in column order. */
  async raw<T = unknown[]>(options?: { columnNames?: boolean }): Promise<T[]> {
    const { results } = await this.db.execute<Record<string, unknown>>(this.sql, this.params);
    const rows = results.map((row) => Object.values(row) as unknown as T);
    if (options?.columnNames && results[0]) rows.unshift(Object.keys(results[0]) as unknown as T);
    return rows;
  }
}

export class D1HttpDatabase {
  constructor(private readonly config: CloudflareConfig) {}

  prepare(sql: string): D1HttpPreparedStatement {
    return new D1HttpPreparedStatement(this, sql);
  }

  async batch<T = Record<string, unknown>>(statements: D1HttpPreparedStatement[]): Promise<D1Result<T>[]> {
    const out: D1Result<T>[] = [];
    for (const statement of statements) out.push(await statement.run<T>());
    return out;
  }

  /** Statements without parameters, e.g. a migration file. */
  async exec(sql: string): Promise<{ count: number; duration: number }> {
    const started = Date.now();
    const result = await this.execute(sql, []);
    return { count: result.results.length, duration: Date.now() - started };
  }

  async execute<T>(sql: string, params: unknown[]): Promise<D1Result<T>> {
    const { accountId, d1DatabaseId, apiToken } = this.config;
    const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${d1DatabaseId}/query`;
    let response: Response;
    try {
      response = await fetch(url, {
        method: "POST",
        headers: { Authorization: `Bearer ${apiToken}`, "Content-Type": "application/json" },
        body: JSON.stringify({ sql, params }),
        cache: "no-store",
        signal: AbortSignal.timeout(QUERY_TIMEOUT_MS),
      });
    } catch (error) {
      throw new Error(`D1 request failed: ${(error as Error).message}`);
    }

    let payload: QueryResponse | null = null;
    try {
      payload = (await response.json()) as QueryResponse;
    } catch {
      payload = null;
    }
    if (!response.ok || !payload?.success || !payload.result?.[0]) {
      const detail = payload?.errors?.map((e) => `${e.code}: ${e.message}`).join("; ") || `HTTP ${response.status}`;
      throw new Error(`D1 query failed (${detail})`);
    }

    // The /query endpoint answers one result per statement. The app sends one
    // statement at a time, so the last result is the one that matters when a
    // caller does pass several (exec of a migration file).
    const result = payload.result[payload.result.length - 1];
    return {
      results: result.results.map(decodeRow) as T[],
      success: true,
      meta: result.meta,
    };
  }
}

/** D1 accepts JSON values. Booleans become 0/1 like the binding does. */
function toParam(value: unknown): unknown {
  if (value === undefined) return null;
  if (typeof value === "boolean") return value ? 1 : 0;
  if (value instanceof ArrayBuffer || ArrayBuffer.isView(value)) {
    throw new Error("Binary values cannot be bound over the D1 HTTP API. Store the file in R2 and keep its URL or key in D1.");
  }
  return value;
}

/** SQLite has no array type, so an array in a row is a BLOB serialised as bytes. */
function decodeRow(row: Record<string, unknown>): Record<string, unknown> {
  for (const key of Object.keys(row)) {
    const value = row[key];
    if (Array.isArray(value)) row[key] = Uint8Array.from(value as number[]);
  }
  return row;
}

let database: D1HttpDatabase | null | undefined;

/**
 * The CMS database, or null when the Cloudflare variables are not set. That is
 * the case during `next build`, where callers degrade to empty results rather
 * than crashing the build, exactly as they did when the binding was missing.
 */
export async function getDb(): Promise<D1HttpDatabase | null> {
  if (database !== undefined) return database;
  const config = cloudflareConfig();
  database = config ? new D1HttpDatabase(config) : null;
  return database;
}

/**
 * Kept for the callers that flag a render built from fallback data. On Workers
 * this stopped the edge cache storing such a page; on Vercel pages are not
 * cached at the edge, so there is nothing to mark.
 */
export function markDegraded(): void {}

/** Throws so a server action can surface a real message instead of failing mute. */
export async function requireDb(): Promise<D1HttpDatabase> {
  const db = await getDb();
  if (!db) {
    throw new Error(
      "The database is not configured. Set CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN and CLOUDFLARE_D1_DATABASE_ID.",
    );
  }
  return db;
}

/**
 * SQLite has no boolean type, so `published` round-trips as INTEGER 0/1.
 * Every row leaving this module is normalised back to a real JS boolean —
 * without this, `published` would be `0`, which is falsy but not `false`, and
 * `JSON.stringify` would leak `0` into client props.
 */
export function toBool(value: unknown): boolean {
  return value === 1 || value === true || value === "1";
}

/** Inverse of toBool, for writes. */
export function fromBool(value: boolean): number {
  return value ? 1 : 0;
}
