import type { Metadata } from "next";
import { buildMetadata, breadcrumbLd, SITE_URL } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";
import { ArrowRight, ChevronLeft, ChevronRight } from "@/components/ui/icons";
import { getAllPosts, POSTS_PER_PAGE } from "@/lib/news";
import { getDbPosts } from "@/lib/cms";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata("news");

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/news#blog`,
  url: `${SITE_URL}/news`,
  name: "Moving News and Guides",
  description:
    "Moving, packing, storage, office and international removals tips and guides from Removals Nationwide.",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const newsBreadcrumb = breadcrumbLd([
  { label: "Home", href: "/" },
  { label: "Moving News", href: "/news" },
]);

type Card = { slug: string; title: string; date: string; excerpt: string; cover: string };

function parseDate(d: string): number {
  const [day, month, year] = d.split("/").map(Number);
  return new Date(year || 0, (month || 1) - 1, day || 1).getTime();
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;

  const fileCards: Card[] = getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    cover: p.coverImage,
  }));
  const dbCards: Card[] = (await getDbPosts()).map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    cover: p.cover_image || "/banner-bg.svg",
  }));

  // Merge, prefer DB on slug clash, sort newest first.
  const bySlug = new Map<string, Card>();
  [...fileCards, ...dbCards].forEach((c) => bySlug.set(c.slug, c));
  const posts = [...bySlug.values()].sort((a, b) => parseDate(b.date) - parseDate(a.date));

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const current = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const startIdx = (current - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={newsBreadcrumb} />
      <StickyMobileBar />
      <PageBanner
        title="Moving News"
        subtitle="Tips, Guides & Industry Insights"
        crumbs={[{ label: "Home", href: "/" }, { label: "Moving News" }]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pagePosts.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <Link href={`/news/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-brand-navy">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {post.date && (
                    <span className="absolute left-4 top-4 rounded-md bg-brand-orange px-3 py-1 text-xs font-semibold text-white">
                      {post.date}
                    </span>
                  )}
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-bold leading-snug text-brand-navy">
                    <Link href={`/news/${post.slug}`} className="transition hover:text-brand-orange">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-charcoal/75">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/news/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-brand-orange transition group-hover:gap-2.5"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <nav aria-label="Pagination" className="mt-14 flex items-center justify-center gap-2">
              <PagerLink page={current - 1} disabled={current === 1} aria="Previous page">
                <ChevronLeft className="h-5 w-5" />
              </PagerLink>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <Link
                  key={n}
                  href={n === 1 ? "/news" : `/news?page=${n}`}
                  aria-current={n === current}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition ${
                    n === current
                      ? "bg-brand-orange text-white"
                      : "bg-brand-grey text-brand-navy hover:bg-brand-navy hover:text-white"
                  }`}
                >
                  {n}
                </Link>
              ))}
              <PagerLink page={current + 1} disabled={current === totalPages} aria="Next page">
                <ChevronRight className="h-5 w-5" />
              </PagerLink>
            </nav>
          )}
        </div>
      </section>

      <Testimonials />
      <Accreditations />
    </>
  );
}

function PagerLink({
  page,
  disabled,
  aria,
  children,
}: {
  page: number;
  disabled: boolean;
  aria: string;
  children: React.ReactNode;
}) {
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        aria-label={aria}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-grey text-brand-charcoal/30"
      >
        {children}
      </span>
    );
  }
  return (
    <Link
      href={page === 1 ? "/news" : `/news?page=${page}`}
      aria-label={aria}
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-grey text-brand-navy transition hover:bg-brand-navy hover:text-white"
    >
      {children}
    </Link>
  );
}
