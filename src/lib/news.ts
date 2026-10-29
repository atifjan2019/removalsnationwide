import newsData from "@/generated/news.json";

/**
 * File-based Moving News articles.
 *
 * The markdown in content/news/ is precompiled to src/generated/news.json by
 * scripts/build-news.mjs (see the `prebuild` script). Reading it as a bundled
 * JSON module rather than with fs is what lets /news and the sitemap render on
 * Cloudflare Workers, which has no filesystem at request time.
 *
 * To add or edit an article, change the markdown — the JSON regenerates on the
 * next build. Do not edit src/generated/news.json by hand.
 */

/** Shared author bio used on every article (identical across posts). */
export const AUTHOR_BIO =
  "Stephanie is a content marketing specialist for Removals Nationwide for the past several years. She has extensive experience working with moving companies and knows her audience. Stephanie creates engaging and useful content helping the customers of Removals Nationwide with their struggles and providing them with the most accurate insight.";

/** Posts shown per page on the /news listing. */
export const POSTS_PER_PAGE = 9;

export type NewsPost = {
  slug: string;
  title: string;
  date: string; // DD/MM/YYYY
  excerpt: string;
  author: string;
  authorBio: string;
  coverImage: string;
  body: string;
  /** Placeholder awaiting its full article: noindex, kept out of listings. */
  stub: boolean;
};

/** Already sorted newest-first by the generator. */
const posts = newsData as NewsPost[];

export function getPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

/** Finished posts, newest first. Placeholder stubs are left out. */
export function getAllPosts(): NewsPost[] {
  return posts.filter((p) => !p.stub);
}

export function getPostBySlug(slug: string): NewsPost | null {
  return posts.find((p) => p.slug === slug) ?? null;
}
