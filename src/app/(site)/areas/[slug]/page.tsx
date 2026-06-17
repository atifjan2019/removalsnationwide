import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageBanner from "@/components/layout/PageBanner";
import HtmlContent from "@/components/news/HtmlContent";
import CtaBand from "@/components/home/CtaBand";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";
import { getAreaBySlug } from "@/lib/cms";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = await getAreaBySlug(slug);
  if (!area) return { title: "Area Not Found | Top Removals" };
  return {
    title: `Removals in ${area.name} | Top Removals`,
    description: area.intro || `Top Removals services in ${area.name}.`,
    alternates: { canonical: `/areas/${slug}` },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = await getAreaBySlug(slug);
  if (!area) notFound();

  return (
    <>
      <PageBanner
        title={area.name}
        subtitle="Removals & Storage in Your Area"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Areas We Cover", href: "/areas" },
          { label: area.name },
        ]}
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          {area.cover_image && (
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl shadow-md">
              <Image
                src={area.cover_image}
                alt={area.name}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          )}
          {area.intro && (
            <p className="text-lg font-medium leading-relaxed text-brand-navy">{area.intro}</p>
          )}
          <div className="mt-6">
            <HtmlContent html={area.body_html} />
          </div>
        </div>
      </section>

      <CtaBand
        heading={`Book Your Move in ${area.name} Today`}
        actions={[
          { label: "Book a Service", href: "/bookservice", variant: "navy" },
          { label: "Quick Quote", href: "/bookservice#quick-quote", variant: "outline-light" },
        ]}
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
