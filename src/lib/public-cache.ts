import "server-only";
import { getDb } from "@/lib/d1";

/**
 * Moves the public site to a new content version. The edge HTML cache in
 * cf-worker.ts keys every page on this number, so after a bump the next
 * request for any page, in any data centre, renders fresh.
 *
 * Call it after the D1 write has committed (never before: a render that starts
 * between a bump and the write would store old content under the new key).
 * Never throws; returns false so the caller can tell the admin.
 */
export async function bumpPublicCacheVersion(reason: string): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;
  try {
    await db
      .prepare(
        `insert into site_cache_version (id, v, updated_at)
           values (1, 1, strftime('%Y-%m-%dT%H:%M:%fZ','now'))
         on conflict(id) do update set v = v + 1, updated_at = excluded.updated_at`,
      )
      .run();
    return true;
  } catch (err) {
    console.error(`[public-cache] version bump failed (${reason}):`, err);
    return false;
  }
}
