import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageBanner from "@/components/layout/PageBanner";
import ArticleBody from "@/components/news/ArticleBody";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";
import { getPostBySlug, getPostSlugs } from "@/lib/news";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found | Top Removals" };
  return {
    title: `${post.title} | Top Removals`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.coverImage],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
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
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-orange">
            posted: {post.date}
          </p>

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

          <div className="mt-8">
            <ArticleBody markdown={post.body} />
          </div>

          {/* Author box */}
          <aside className="mt-12 flex flex-col gap-4 rounded-2xl bg-brand-grey p-7 sm:flex-row sm:items-start">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-navy text-2xl font-bold text-white">
              {post.author.charAt(0)}
            </span>
            <div>
              <h2 className="text-lg font-bold text-brand-navy">{post.author}</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">{post.authorBio}</p>
            </div>
          </aside>
        </div>
      </article>

      <Testimonials />
      <Accreditations />
    </>
  );
}
