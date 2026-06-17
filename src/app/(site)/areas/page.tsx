import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import CtaBand from "@/components/home/CtaBand";
import Accreditations from "@/components/home/Accreditations";
import { ArrowRight } from "@/components/ui/icons";
import { getAreas } from "@/lib/cms";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata("areas");

export default async function AreasPage() {
  const areas = await getAreas();

  return (
    <>
      <PageBanner
        title="Areas We Cover"
        subtitle="Removals Across London & Beyond"
        crumbs={[{ label: "Home", href: "/" }, { label: "Areas We Cover" }]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          {areas.length === 0 ? (
            <p className="text-center text-base text-brand-charcoal/70">
              Our service areas will be listed here soon.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <article
                  key={area.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <Link href={`/areas/${area.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-brand-navy">
                    <Image
                      src={area.cover_image || "/banner-bg.svg"}
                      alt={area.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-bold text-brand-navy">
                      <Link href={`/areas/${area.slug}`} className="transition hover:text-brand-orange">
                        {area.name}
                      </Link>
                    </h2>
                    {area.intro && (
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-charcoal/75">
                        {area.intro}
                      </p>
                    )}
                    <Link
                      href={`/areas/${area.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-brand-orange transition group-hover:gap-2.5"
                    >
                      View Area
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand
        heading="Moving In Your Area? Let's Talk"
        actions={[
          { label: "Quick Quote", href: "/bookservice#quick-quote", variant: "navy" },
          { label: "Book a Service", href: "/bookservice", variant: "outline-light" },
        ]}
      />

      <Accreditations />
    </>
  );
}
