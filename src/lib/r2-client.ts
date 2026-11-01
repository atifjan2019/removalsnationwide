import "server-only";
import { createHash } from "node:crypto";
import { AwsClient } from "aws4fetch";
import type { CloudflareConfig } from "@/lib/cloudflare-config";

/**
 * Cloudflare R2 over its S3-compatible API, shaped like the Worker binding.
 *
 * Covers what the app uses of `R2Bucket`: put, get, head, delete (one key or
 * many) and list with a prefix and cursor. The global `R2Bucket` type
 * (src/types/cloudflare.d.ts) points here, so the call sites did not change.
 *
 * Credentials: R2's S3 endpoint accepts a Cloudflare API token as the access
 * key pair, where the key id is the token's id and the secret is the SHA-256
 * of the token value. Deriving them from CLOUDFLARE_API_TOKEN means one secret
 * covers both D1 and R2. R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY override that.
 */

export type R2HttpMetadata = {
  contentType?: string;
  cacheControl?: string;
  contentDisposition?: string;
};

export type R2ListedObject = {
  key: string;
  size: number;
  etag: string;
  uploaded: Date;
  httpMetadata?: R2HttpMetadata;
};

export type R2ObjectBody = {
  key: string;
  size: number;
  etag: string;
  uploaded: Date;
  httpMetadata: R2HttpMetadata;
  body: ReadableStream<Uint8Array>;
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
};

export type R2Listing = {
  objects: R2ListedObject[];
  truncated: boolean;
  cursor?: string;
};

type Credentials = { accessKeyId: string; secretAccessKey: string };

let derived: Promise<Credentials> | null = null;

async function credentials(config: CloudflareConfig): Promise<Credentials> {
  if (config.r2AccessKeyId && config.r2SecretAccessKey) {
    return { accessKeyId: config.r2AccessKeyId, secretAccessKey: config.r2SecretAccessKey };
  }
  derived ??= (async () => {
    const response = await fetch("https://api.cloudflare.com/client/v4/user/tokens/verify", {
      headers: { Authorization: `Bearer ${config.apiToken}` },
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    const payload = (await response.json().catch(() => null)) as { success?: boolean; result?: { id?: string } } | null;
    if (!payload?.success || !payload.result?.id) {
      throw new Error("CLOUDFLARE_API_TOKEN could not be verified, so R2 credentials could not be derived from it.");
    }
    return {
      accessKeyId: payload.result.id,
      secretAccessKey: createHash("sha256").update(config.apiToken).digest("hex"),
    };
  })().catch((error) => {
    derived = null;
    throw error;
  });
  return derived;
}

/** Content types for keys listed from S3, which does not return per-object metadata in a listing. */
const TYPES_BY_EXTENSION: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
  gif: "image/gif",
  avif: "image/avif",
  svg: "image/svg+xml",
  ico: "image/x-icon",
  pdf: "application/pdf",
};

function contentTypeFor(key: string): string {
  const extension = key.toLowerCase().match(/\.([a-z0-9]+)$/)?.[1] ?? "";
  return TYPES_BY_EXTENSION[extension] ?? "";
}

function decodeXml(value: string): string {
  return value
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&amp;", "&");
}

function tag(xml: string, name: string): string | undefined {
  const match = new RegExp(`<${name}>([\\s\\S]*?)</${name}>`).exec(xml);
  return match ? decodeXml(match[1]) : undefined;
}

export class R2HttpBucket {
  constructor(
    readonly name: string,
    private readonly config: CloudflareConfig,
    private readonly jurisdiction?: "eu",
  ) {}

  private get endpoint(): string {
    const region = this.jurisdiction ? `.${this.jurisdiction}` : "";
    return `https://${this.config.accountId}${region}.r2.cloudflarestorage.com`;
  }

  private objectUrl(key: string): string {
    return `${this.endpoint}/${this.name}/${key.split("/").map(encodeURIComponent).join("/")}`;
  }

  private async client(): Promise<AwsClient> {
    const { accessKeyId, secretAccessKey } = await credentials(this.config);
    return new AwsClient({ accessKeyId, secretAccessKey, service: "s3", region: "auto" });
  }

  private async send(url: string, init: RequestInit & { headers?: Record<string, string> }): Promise<Response> {
    const client = await this.client();
    return client.fetch(url, {
      ...init,
      headers: { "x-amz-content-sha256": "UNSIGNED-PAYLOAD", ...init.headers },
      signal: AbortSignal.timeout(60_000),
    });
  }

  async put(
    key: string,
    body: ArrayBuffer | ArrayBufferView | string,
    options?: { httpMetadata?: R2HttpMetadata },
  ): Promise<void> {
    const headers: Record<string, string> = {};
    const meta = options?.httpMetadata;
    if (meta?.contentType) headers["Content-Type"] = meta.contentType;
    if (meta?.cacheControl) headers["Cache-Control"] = meta.cacheControl;
    if (meta?.contentDisposition) headers["Content-Disposition"] = meta.contentDisposition;
    const response = await this.send(this.objectUrl(key), { method: "PUT", body: body as BodyInit, headers });
    if (!response.ok) throw new Error(`R2 put failed for ${key}: HTTP ${response.status} ${await response.text()}`);
  }

  async get(key: string): Promise<R2ObjectBody | null> {
    const response = await this.send(this.objectUrl(key), { method: "GET" });
    if (response.status === 404) return null;
    if (!response.ok || !response.body) {
      throw new Error(`R2 get failed for ${key}: HTTP ${response.status}`);
    }
    return {
      key,
      size: Number(response.headers.get("content-length") ?? 0),
      etag: (response.headers.get("etag") ?? "").replaceAll('"', ""),
      uploaded: new Date(response.headers.get("last-modified") ?? Date.now()),
      httpMetadata: {
        contentType: response.headers.get("content-type") ?? undefined,
        cacheControl: response.headers.get("cache-control") ?? undefined,
        contentDisposition: response.headers.get("content-disposition") ?? undefined,
      },
      body: response.body,
      arrayBuffer: () => response.arrayBuffer(),
      text: () => response.text(),
    };
  }

  async head(key: string): Promise<Omit<R2ObjectBody, "body" | "arrayBuffer" | "text"> | null> {
    const response = await this.send(this.objectUrl(key), { method: "HEAD" });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`R2 head failed for ${key}: HTTP ${response.status}`);
    return {
      key,
      size: Number(response.headers.get("content-length") ?? 0),
      etag: (response.headers.get("etag") ?? "").replaceAll('"', ""),
      uploaded: new Date(response.headers.get("last-modified") ?? Date.now()),
      httpMetadata: {
        contentType: response.headers.get("content-type") ?? undefined,
        cacheControl: response.headers.get("cache-control") ?? undefined,
      },
    };
  }

  /** Deleting a key that does not exist is not an error, as with the binding. */
  async delete(keys: string | string[]): Promise<void> {
    const list = Array.isArray(keys) ? keys : [keys];
    const CONCURRENCY = 8;
    for (let index = 0; index < list.length; index += CONCURRENCY) {
      await Promise.all(
        list.slice(index, index + CONCURRENCY).map(async (key) => {
          const response = await this.send(this.objectUrl(key), { method: "DELETE" });
          if (!response.ok && response.status !== 404) {
            throw new Error(`R2 delete failed for ${key}: HTTP ${response.status}`);
          }
        }),
      );
    }
  }

  async list(options?: { prefix?: string; cursor?: string; limit?: number; include?: string[] }): Promise<R2Listing> {
    const query = new URLSearchParams({ "list-type": "2" });
    if (options?.prefix) query.set("prefix", options.prefix);
    if (options?.cursor) query.set("continuation-token", options.cursor);
    query.set("max-keys", String(Math.min(options?.limit ?? 1000, 1000)));
    const response = await this.send(`${this.endpoint}/${this.name}?${query}`, { method: "GET" });
    if (!response.ok) throw new Error(`R2 list failed for ${this.name}: HTTP ${response.status} ${await response.text()}`);
    const xml = await response.text();

    const objects: R2ListedObject[] = [];
    for (const match of xml.matchAll(/<Contents>([\s\S]*?)<\/Contents>/g)) {
      const entry = match[1];
      const key = tag(entry, "Key") ?? "";
      objects.push({
        key,
        size: Number(tag(entry, "Size") ?? 0),
        etag: (tag(entry, "ETag") ?? "").replaceAll('"', ""),
        uploaded: new Date(tag(entry, "LastModified") ?? Date.now()),
        httpMetadata: { contentType: contentTypeFor(key) },
      });
    }
    const truncated = tag(xml, "IsTruncated") === "true";
    return { objects, truncated, cursor: truncated ? tag(xml, "NextContinuationToken") : undefined };
  }
}
