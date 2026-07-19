import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageBanner from "@/components/layout/PageBanner";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import HtmlContent from "@/components/news/HtmlContent";
import CtaBand from "@/components/home/CtaBand";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";
import BoroughPage from "@/components/areas/BoroughPage";
import { boroughs } from "@/lib/boroughs";
import { SITE, withTrailingSlash } from "@/lib/seo";
import { getAreaBySlug } from "@/lib/cms";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Borough guide pages (rich, registry-driven) take precedence over CMS areas.
  const borough = boroughs[slug];
  if (borough) {
    const canonical = withTrailingSlash(`/areas/${borough.slug}`);
    return {
      title: borough.metaTitle,
      description: borough.metaDescription,
      alternates: { canonical },
      openGraph: {
        title: borough.metaTitle,
        description: borough.metaDescription,
        url: canonical,
        siteName: SITE.name,
        type: "website",
      },
    };
  }

  const area = await getAreaBySlug(slug);
  if (!area) return { title: "Area Not Found | Removals Nationwide" };
  return {
    title: `Removals in ${area.name} | Removals Nationwide`,
    description: area.intro || `Removals Nationwide services in ${area.name}.`,
    alternates: { canonical: withTrailingSlash(`/areas/${slug}`) },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const borough = boroughs[slug];
  if (borough) return <BoroughPage borough={borough} />;

  const area = await getAreaBySlug(slug);
  if (!area) notFound();

  return (
    <>
      <StickyMobileBar />
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
