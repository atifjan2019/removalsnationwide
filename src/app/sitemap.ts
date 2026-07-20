import type { MetadataRoute } from "next";
import { SITE_URL, META, withTrailingSlash } from "@/lib/seo";
import { getAllPosts } from "@/lib/news";
import { getDbPosts, getAreas } from "@/lib/cms";
import { boroughs } from "@/lib/boroughs";

// The DB-backed entries below need the D1 binding, which only exists at request
// time inside the Worker. Prerendering this at build time would silently bake in
// a sitemap with no posts or areas.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = Object.values(META)
    .filter((m) => !m.noindex)
    .map((m) => m.path);

  const filePosts = getAllPosts().map((post) => ({
    path: `/news/${post.slug}`,
    lastModified: toIsoDate(post.date),
  }));
  const dbPosts = (await getDbPosts()).map((post) => ({
    path: `/news/${post.slug}`,
    lastModified: toIsoDate(post.date) ?? validDate(post.created_at),
  }));
  const areas = (await getAreas()).map((area) => ({
    path: `/areas/${area.slug}`,
    lastModified: validDate(area.created_at),
  }));
  const boroughPaths = Object.values(boroughs).map((b) => `/areas/${b.slug}`);

  const datedPaths = new Map<string, Date | undefined>();
  staticPaths.forEach((path) => datedPaths.set(path, undefined));
  boroughPaths.forEach((path) => datedPaths.set(path, undefined));
  [...filePosts, ...dbPosts, ...areas].forEach(({ path, lastModified }) => {
    datedPaths.set(path, lastModified);
  });

  return Array.from(datedPaths, ([path, lastModified]) => ({
    url: `${SITE_URL}${withTrailingSlash(path)}`,
    ...(lastModified ? { lastModified } : {}),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

function validDate(value: string): Date | undefined {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function toIsoDate(value: string): Date | undefined {
  const [day, month, year] = value.split("/");
  if (!day || !month || !year) return undefined;
  return validDate(`${year}-${month}-${day}T00:00:00.000Z`);
}
