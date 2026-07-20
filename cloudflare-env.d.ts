/**
 * Augments the `CloudflareEnv` interface that `@opennextjs/cloudflare` exposes
 * through `getCloudflareContext().env`.
 *
 * `wrangler types` generates `worker-configuration.d.ts`, but that declares
 * `Cloudflare.Env` / `Env` — not the `CloudflareEnv` interface the adapter
 * returns. This bridges the two so `env.DB` and `env.MEDIA` are typed at the
 * call sites in src/lib/d1.ts.
 *
 * Re-run `wrangler types` after changing bindings in wrangler.jsonc, and mirror
 * any new binding here.
 */
export {};

declare global {
  interface CloudflareEnv {
    /** D1 CMS database — posts and areas. */
    DB: D1Database;
    /** R2 bucket holding site media (images). */
    MEDIA: R2Bucket;
    /** Elastic Email SMTP connection settings. */
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_USERNAME: string;
    SMTP_PASSWORD: string;
    SMTP_FROM_EMAIL: string;
    SMTP_FROM_NAME?: string;
    ADMIN_PIN: string;
    MASTER_ADMIN_PIN: string;
    ADMIN_SESSION_SECRET: string;
    /** Browser-visible Google Maps JavaScript API key. */
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: string;
  }
}
