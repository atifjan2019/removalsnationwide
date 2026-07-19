import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Precompiles content/news/*.md into src/generated/news.json.
 *
 * The site previously read these markdown files with fs at request time. That
 * works under `next start` but not on Cloudflare Workers, which has no
 * filesystem — /news and the sitemap returned 500s in production. Reading the
 * files here, at build time, and importing the result as a plain JSON module
 * keeps the content identical while removing fs from the runtime path.
 *
 * Runs from the `prebuild` script, so it is always fresh before a build.
 */

const NEWS_DIR = path.join(process.cwd(), "content", "news");
const OUT_DIR = path.join(process.cwd(), "src", "generated");
const OUT_FILE = path.join(OUT_DIR, "news.json");

const AUTHOR_BIO =
  "Stephanie is a content marketing specialist for Removals Nationwide for the past several years. She has extensive experience working with moving companies and knows her audience. Stephanie creates engaging and useful content helping the customers of Removals Nationwide with their struggles and providing them with the most accurate insight.";

/** DD/MM/YYYY -> sortable timestamp. Mirrors the ordering the pages relied on. */
function parseDate(d) {
  const [day, month, year] = String(d ?? "").split("/").map(Number);
  return new Date(year, (month ?? 1) - 1, day ?? 1).getTime();
}

const slugs = fs.existsSync(NEWS_DIR)
  ? fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""))
  : [];

const posts = slugs
  .map((slug) => {
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
  })
  .sort((a, b) => parseDate(b.date) - parseDate(a.date));

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(posts, null, 2));

console.log(`build-news: wrote ${posts.length} posts to src/generated/news.json`);
