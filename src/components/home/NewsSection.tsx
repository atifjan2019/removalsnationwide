import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "@/components/ui/icons";
import { getAllPosts } from "@/lib/news";

export default function NewsSection() {
  const articles = getAllPosts().slice(0, 3);

  return (
    <section className="bg-brand-sand py-20">
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading eyebrow="From our blog" title="Top Moving News" />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {articles.map((article, i) => {
            const href = `/news/${article.slug}`;
            return (
              <article
                key={article.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                data-reveal
                data-delay={String(i + 1)}
              >
                <Link href={href} className="relative block aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-brand-red px-3 py-1 text-xs font-semibold text-white">
                    {article.date}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug text-brand-navy">
                    <Link href={href} className="transition hover:text-brand-red">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-charcoal/75">
                    {article.excerpt}
                  </p>
                  <Link
                    href={href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-brand-red transition group-hover:gap-2.5"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/news" variant="navy" size="lg">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
