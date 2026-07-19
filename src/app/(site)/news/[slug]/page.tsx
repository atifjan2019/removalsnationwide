import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageBanner from "@/components/layout/PageBanner";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import ArticleBody from "@/components/news/ArticleBody";
import HtmlContent from "@/components/news/HtmlContent";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { articleLd, breadcrumbLd, withTrailingSlash } from "@/lib/seo";
import Button from "@/components/ui/Button";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";
import { getPostBySlug, getPostSlugs, AUTHOR_BIO } from "@/lib/news";
import { getDbPostBySlug } from "@/lib/cms";

// Statically prerender the file-based seed articles; DB articles render on demand.
export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

type Resolved = {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  authorBio: string;
  coverImage: string;
  markdown?: string;
  html?: string;
};

async function resolvePost(slug: string): Promise<Resolved | null> {
  const file = getPostBySlug(slug);
  if (file) {
    return {
      title: file.title,
      date: file.date,
      excerpt: file.excerpt,
      author: file.author,
      authorBio: file.authorBio,
      coverImage: file.coverImage,
      markdown: file.body,
    };
  }
  const db = await getDbPostBySlug(slug);
  if (db) {
    return {
      title: db.title,
      date: db.date,
      excerpt: db.excerpt,
      author: db.author,
      authorBio: db.author_bio || AUTHOR_BIO,
      coverImage: db.cover_image || "/banner-bg.svg",
      html: db.body_html,
    };
  }
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) return { title: "Article Not Found | Removals Nationwide" };
  const canonical = withTrailingSlash(`/news/${slug}`);
  return {
    title: `${post.title} | Removals Nationwide`,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      type: "article",
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={articleLd({
          title: post.title,
          description: post.excerpt,
          path: `/news/${slug}`,
          date: post.date,
          author: post.author,
          image: post.coverImage,
        })}
      />
      <JsonLd
        data={breadcrumbLd([
          { label: "Home", href: "/" },
          { label: "Moving News", href: "/news" },
          { label: post.title },
        ])}
      />
      <StickyMobileBar />
      <PageBanner
        title={post.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Moving News", href: "/news" },
          { label: post.title },
        ]}
      />

      <article className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          {post.date && (
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
              posted: {post.date}
            </p>
          )}

          {post.coverImage && (
            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl shadow-md">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="mt-8">
            {post.markdown !== undefined ? (
              <ArticleBody markdown={post.markdown} />
            ) : (
              <HtmlContent html={post.html ?? ""} />
            )}
          </div>

          <aside className="mt-12 flex flex-col gap-4 rounded-2xl bg-brand-grey p-7 sm:flex-row sm:items-start">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-navy text-2xl font-bold text-white">
              {post.author.charAt(0)}
            </span>
            <div>
              <h2 className="text-lg font-bold text-brand-navy">{post.author}</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">{post.authorBio}</p>
            </div>
          </aside>

          {/* Related services and quote: keeps every article linked to the core */}
          <div className="mt-10 rounded-2xl border border-brand-orange/20 bg-white p-7 text-center shadow-sm">
            <p className="text-base font-semibold text-brand-navy">
              Planning a move? Talk to Removals Nationwide.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/75">
              Explore{" "}
              <Link href="/house-removals" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange">
                house removals
              </Link>
              ,{" "}
              <Link href="/office-removals" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange">
                office removals
              </Link>
              ,{" "}
              <Link href="/storage" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange">
                storage
              </Link>{" "}
              and{" "}
              <Link href="/packing-service" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange">
                packing
              </Link>
              , or see our{" "}
              <Link href="/prices" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange">
                prices
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/bookservice#quick-quote" variant="orange" size="md" className="w-full sm:w-auto">
                Quick Quote
              </Button>
              <Button href="/bookservice" variant="navy" size="md" className="w-full sm:w-auto">
                Book a Service
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Testimonials />
      <Accreditations />
    </>
  );
}
