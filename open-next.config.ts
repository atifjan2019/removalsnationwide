import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

/**
 * OpenNext build config for the Cloudflare Workers target.
 *
 * The incremental cache backs ISR and revalidatePath(). It writes to the
 * NEXT_INC_CACHE_R2_BUCKET binding (the `removals-nationwide-cache` bucket),
 * kept separate from the MEDIA bucket so purging cache never touches media.
 */
export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
});
