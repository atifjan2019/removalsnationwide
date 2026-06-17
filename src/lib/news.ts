import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const NEWS_DIR = path.join(process.cwd(), "content", "news");

/** Shared author bio used on every article (identical across posts). */
export const AUTHOR_BIO =
  "Stephanie is a content marketing specialist for Top Removals for the past several years. She has extensive experience working with moving companies and knows her audience. Stephanie creates engaging and useful content helping the customers of Top Removals with their struggles and providing them with the most accurate insight.";

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
};

/** DD/MM/YYYY -> sortable timestamp. */
function parseDate(d: string): number {
  const [day, month, year] = d.split("/").map(Number);
  return new Date(year, (month ?? 1) - 1, day ?? 1).getTime();
}

function readPost(slug: string): NewsPost {
  const raw = fs.readFileSync(path.join(NEWS_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  return {
    slug: data.slug ?? slug,
    title: data.title ?? "",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    author: data.author ?? "Stephanie Cooper",
    authorBio: data.authorBio ?? AUTHOR_BIO,
    coverImage: data.coverImage ?? `/news/${slug}.jpg`,
    body: content.trim(),
  };
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/** All posts, newest first. */
export function getAllPosts(): NewsPost[] {
  return getPostSlugs()
    .map(readPost)
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

export function getPostBySlug(slug: string): NewsPost | null {
  try {
    return readPost(slug);
  } catch {
    return null;
  }
}
