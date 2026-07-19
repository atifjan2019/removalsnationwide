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

/* ─── General media (post/area cover images, library uploads) ───────────── */

/** Everything the media manager needs to render one object. */
export type MediaObject = {
  key: string;
  url: string;
  size: number;
  uploaded: string; // ISO timestamp
  contentType: string;
};

/**
 * Content-image uploads (post covers, area covers, library). Unlike branding,
 * keys are unique per upload — replacing an image must not break older posts
 * that still reference the previous one.
 */
export async function uploadMedia(file: File): Promise<UploadResult> {
  if (!file || file.size === 0) return { ok: false, error: "No file selected." };
  if (file.size > MAX_BYTES * 4) {
    // 8 MB for content photos — hero shots are bigger than logos.
    return { ok: false, error: "File is too large (max 8 MB)." };
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

  // Readable, collision-proof key: uploads/<original-name>-<random>.<ext>
  const base = (file.name ?? "image")
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "image";
  const key = `uploads/${base}-${crypto.randomUUID().slice(0, 8)}.${ext}`;

  try {
    await bucket.put(key, await file.arrayBuffer(), {
      httpMetadata: {
        contentType: file.type,
        cacheControl: "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    return { ok: false, error: `Upload failed: ${(err as Error).message}` };
  }
  return { ok: true, url: `${MEDIA_BASE}/${key}` };
}

/** Lists bucket contents for the media manager, newest first. */
export async function listMedia(): Promise<MediaObject[]> {
  const bucket = await getMediaBucket();
  if (!bucket) return [];
  const out: MediaObject[] = [];
  let cursor: string | undefined;
  try {
    // Paginate defensively; a site's media library can exceed one page.
    do {
      const page = await bucket.list({ cursor, include: ["httpMetadata"] });
      for (const obj of page.objects) {
        out.push({
          key: obj.key,
          url: `${MEDIA_BASE}/${obj.key}`,
          size: obj.size,
          uploaded: obj.uploaded.toISOString(),
          contentType: obj.httpMetadata?.contentType ?? "",
        });
      }
      cursor = page.truncated ? page.cursor : undefined;
    } while (cursor);
  } catch {
    return out;
  }
  return out.sort((a, b) => b.uploaded.localeCompare(a.uploaded));
}

export async function deleteMedia(key: string): Promise<{ ok: boolean; error?: string }> {
  // Guard against path tricks — only allow keys inside the two known prefixes.
  if (!/^(uploads|branding)\//.test(key) || key.includes("..")) {
    return { ok: false, error: "Invalid key." };
  }
  const bucket = await getMediaBucket();
  if (!bucket) return { ok: false, error: "R2 is not available." };
  try {
    await bucket.delete(key);
    return { ok: true };
  } catch (err) {
    return { ok: false, error: (err as Error).message };
  }
}
