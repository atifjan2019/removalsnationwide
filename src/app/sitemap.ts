import type { MetadataRoute } from "next";
import { SITE_URL, META, withTrailingSlash } from "@/lib/seo";
import { getPostSlugs } from "@/lib/news";
import { getDbPosts, getAreas } from "@/lib/cms";
import { boroughs } from "@/lib/boroughs";

// The DB-backed entries below need the D1 binding, which only exists at request
// time inside the Worker. Prerendering this at build time would silently bake in
// a sitemap with no posts or areas.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPaths = Object.values(META)
    .filter((m) => !m.noindex)
    .map((m) => m.path);

  const filePosts = getPostSlugs().map((s) => `/news/${s}`);
  const dbPosts = (await getDbPosts()).map((p) => `/news/${p.slug}`);
  const areas = (await getAreas()).map((a) => `/areas/${a.slug}`);
  const boroughPaths = Object.values(boroughs).map((b) => `/areas/${b.slug}`);

  const paths = Array.from(
    new Set([...staticPaths, ...filePosts, ...dbPosts, ...areas, ...boroughPaths]),
  );

  return paths.map((path) => ({
    url: `${SITE_URL}${withTrailingSlash(path)}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
