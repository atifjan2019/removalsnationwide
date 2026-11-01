import "server-only";

/**
 * Where the app finds its Cloudflare services now that it runs on Vercel.
 *
 * The database (D1) and the two object stores (R2) stayed on Cloudflare; only
 * the web app moved. Without Worker bindings, the app reaches them over HTTPS
 * with one scoped API token (permissions: D1 Edit and Workers R2 Storage
 * Edit). Set these in the Vercel project's environment variables, and in
 * .env.local for development.
 */
export type CloudflareConfig = {
  accountId: string;
  apiToken: string;
  d1DatabaseId: string;
  mediaBucket: string;
  uploadsBucket: string;
  /** The uploads bucket was created in the EU jurisdiction, which has its own S3 endpoint. */
  uploadsJurisdiction: "eu" | undefined;
  /** Optional explicit S3 credentials. Left unset, they are derived from the API token. */
  r2AccessKeyId: string | undefined;
  r2SecretAccessKey: string | undefined;
};

let memo: CloudflareConfig | null | undefined;

/** The configuration, or null when the three required variables are not all set (e.g. during `next build`). */
export function cloudflareConfig(): CloudflareConfig | null {
  if (memo !== undefined) return memo;
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID?.trim();
  const apiToken = process.env.CLOUDFLARE_API_TOKEN?.trim();
  const d1DatabaseId = process.env.CLOUDFLARE_D1_DATABASE_ID?.trim();
  if (!accountId || !apiToken || !d1DatabaseId) {
    memo = null;
    return memo;
  }
  const jurisdiction = process.env.R2_UPLOADS_JURISDICTION?.trim().toLowerCase();
  memo = {
    accountId,
    apiToken,
    d1DatabaseId,
    mediaBucket: process.env.R2_MEDIA_BUCKET?.trim() || "removals-nationwide-media",
    uploadsBucket: process.env.R2_UPLOADS_BUCKET?.trim() || "removals-nationwide-uploads",
    uploadsJurisdiction: jurisdiction === "eu" ? "eu" : jurisdiction === "" || jurisdiction === undefined ? "eu" : undefined,
    r2AccessKeyId: process.env.R2_ACCESS_KEY_ID?.trim() || undefined,
    r2SecretAccessKey: process.env.R2_SECRET_ACCESS_KEY?.trim() || undefined,
  };
  return memo;
}
