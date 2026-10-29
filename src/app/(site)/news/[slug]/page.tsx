import type { Metadata } from "next";
import Image from "next/image";
import { DEFAULT_BANNER_IMAGE } from "@/lib/remote-images";
import { notFound } from "next/navigation";
import PageBanner from "@/components/layout/PageBanner";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import ArticleBody from "@/components/news/ArticleBody";
import HtmlContent from "@/components/news/HtmlContent";
import Link from "@/components/ui/AppLink";
import JsonLd from "@/components/seo/JsonLd";
import { articleLd, withTrailingSlash } from "@/lib/seo";
import Button from "@/components/ui/Button";
import Testimonials from "@/components/home/Testimonials";
import { getPostBySlug, getPostSlugs, AUTHOR_BIO } from "@/lib/news";
import { getDbPostBySlug } from "@/lib/cms";
import { getAdminRole } from "@/lib/admin-auth";

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
  /** Placeholder or draft: reachable, but kept out of the index. */
  noindex: boolean;
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
      noindex: file.stub,
    };
  }
  const db = await getDbPostBySlug(slug);
  // A draft is only shown to a signed-in admin previewing it.
  if (db && (db.published || (await getAdminRole()))) {
    return {
      title: db.title,
      date: db.date,
      excerpt: db.excerpt,
      author: db.author,
      authorBio: db.author_bio || AUTHOR_BIO,
      coverImage: db.cover_image || DEFAULT_BANNER_IMAGE,
      html: db.body_html,
      noindex: !db.published,
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
    ...(post.noindex ? { robots: { index: false, follow: true } } : {}),
    // The brand suffix is dropped when it would push the title past ~60 characters.
    title:
      post.title.length <= 38 ? `${post.title} | Removals Nationwide` : { absolute: post.title },
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
      {!post.noindex && (
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
      )}
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
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-red">
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
          <div className="mt-10 rounded-2xl border border-brand-red/20 bg-white p-7 text-center shadow-sm">
            <p className="text-base font-semibold text-brand-navy">
              Planning a move? Talk to Removals Nationwide.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/75">
              Explore{" "}
              <Link href="/house-removals" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                house removals
              </Link>
              ,{" "}
              <Link href="/office-removals" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                office removals
              </Link>
              ,{" "}
              <Link href="/storage" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                storage
              </Link>{" "}
              and{" "}
              <Link href="/packing-service" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                packing
              </Link>
              , or see our{" "}
              <Link href="/prices" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                prices
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/bookservice#quick-quote" variant="red" size="md" className="w-full sm:w-auto">
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
    </>
  );
}
