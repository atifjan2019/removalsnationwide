import "server-only";
import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Access to the Cloudflare D1 binding declared as `DB` in wrangler.jsonc.
 *
 * The binding only exists inside the Worker (or under `wrangler dev` / the dev
 * platform proxy wired up in next.config.ts). Outside those — a plain `next
 * build` step, for instance — there is no binding, so this returns null and
 * callers degrade to empty results rather than crashing the build.
 */
export async function getDb(): Promise<D1Database | null> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    return env.DB ?? null;
  } catch {
    // No Cloudflare context at all (e.g. a build-time render outside the proxy).
    return null;
  }
}

/** Throws so a server action can surface a real message instead of failing mute. */
export async function requireDb(): Promise<D1Database> {
  const db = await getDb();
  if (!db) {
    throw new Error(
      "D1 is not available. Check the `DB` binding in wrangler.jsonc, and run the dev server so the Cloudflare dev platform proxy is active.",
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
