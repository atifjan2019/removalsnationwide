import "server-only";
import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Uploads for site branding, stored in the R2 `MEDIA` bucket and served over
 * the bucket's custom domain (media.removalsnationwide.uk).
 */

/** Public base for the media bucket. Mirrors next.config.ts remotePatterns. */
export const MEDIA_BASE =
  process.env.NEXT_PUBLIC_R2_PUBLIC_URL ?? "https://media.removalsnationwide.uk";

export async function getMediaBucket(): Promise<R2Bucket | null> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    return env.MEDIA ?? null;
  } catch {
    return null;
  }
}

const MAX_BYTES = 2 * 1024 * 1024; // 2 MB — plenty for a logo or icon.

const ALLOWED: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/svg+xml": "svg",
  "image/webp": "webp",
  "image/x-icon": "ico",
  "image/vnd.microsoft.icon": "ico",
};

export type UploadResult = { ok: true; url: string } | { ok: false; error: string };

/**
 * Writes a branding file to a deterministic key such as `branding/logo.png`.
 *
 * A cache-busting query is appended to the returned URL rather than varying the
 * key, so replacing the logo never leaves orphaned objects in the bucket.
 */
export async function uploadBranding(
  file: File,
  name: "logo" | "favicon",
): Promise<UploadResult> {
  if (!file || file.size === 0) return { ok: false, error: "No file selected." };
  if (file.size > MAX_BYTES) {
    return { ok: false, error: `File is too large (max ${MAX_BYTES / 1024 / 1024} MB).` };
  }

  const ext = ALLOWED[file.type];
  if (!ext) {
    return {
      ok: false,
      error: `Unsupported file type "${file.type || "unknown"}". Use PNG, JPEG, SVG, WebP or ICO.`,
    };
  }

  const bucket = await getMediaBucket();
  if (!bucket) {
    return { ok: false, error: "R2 is not available. Check the MEDIA binding in wrangler.jsonc." };
  }

  const key = `branding/${name}.${ext}`;
  try {
    await bucket.put(key, await file.arrayBuffer(), {
      httpMetadata: {
        contentType: file.type,
        // Long max-age is safe because the URL carries a version query.
        cacheControl: "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    return { ok: false, error: `Upload failed: ${(err as Error).message}` };
  }

  return { ok: true, url: `${MEDIA_BASE}/${key}?v=${Date.now()}` };
}
