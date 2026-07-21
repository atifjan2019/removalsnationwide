import { getSettings } from "@/lib/settings";

/**
 * Serves the site favicon from a stable URL.
 *
 * The uploaded icon lives in R2 under a key that can change extension, and its
 * presence is recorded in D1. Pointing `metadata.icons` straight at that would
 * mean reading D1 inside the root layout's metadata, which would turn every
 * statically prerendered page into a dynamic one. Redirecting from a fixed path
 * keeps the metadata static — only this tiny route touches the database.
 *
 * With nothing uploaded, it falls back to the logo stored in R2.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  const { faviconUrl } = await getSettings();
  const target = faviconUrl?.trim()
    ? faviconUrl
    : "https://media.removalsnationwide.uk/public/images/brand/removals-nationwide-logo.png";

  // Browsers cache favicon redirects especially aggressively. The asset URL is
  // versioned when it is uploaded, so always re-check this small redirect and
  // let the final image URL carry the long-lived cache instead.
  return new Response(null, {
    status: 307,
    headers: {
      Location: target,
      "Cache-Control": "no-store, max-age=0",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}
