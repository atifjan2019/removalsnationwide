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
    /** Transactional booking notification email sender. */
    EMAIL: SendEmail;
  }
}
