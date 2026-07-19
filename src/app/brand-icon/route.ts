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
 * With nothing uploaded, it falls back to the icon bundled in the app.
 */
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { faviconUrl } = await getSettings();
  const target = faviconUrl?.trim()
    ? faviconUrl
    : new URL("/favicon.ico", request.url).toString();

  return Response.redirect(target, 307);
}
