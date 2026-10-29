import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BoroughPage from "@/components/areas/BoroughPage";
import { boroughs } from "@/lib/boroughs";
import { DEFAULT_OG_IMAGE, SITE, withTrailingSlash } from "@/lib/seo";
import { areaToBorough, getAreaBySlug } from "@/lib/cms";
import { getAdminRole } from "@/lib/admin-auth";

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
        locale: "en_GB",
        images: [DEFAULT_OG_IMAGE],
      },
      twitter: { card: "summary_large_image", images: [DEFAULT_OG_IMAGE.url] },
    };
  }

  const area = await getAreaBySlug(slug);
  if (!area) return { title: "Area Not Found | Removals Nationwide" };
  const cmsBorough = areaToBorough(area);
  return {
    // A draft is only reachable by a signed-in admin previewing it.
    ...(area.published ? {} : { robots: { index: false, follow: false } }),
    title: cmsBorough.metaTitle,
    description: cmsBorough.metaDescription,
    alternates: { canonical: withTrailingSlash(`/areas/${slug}`) },
    openGraph: {
      title: cmsBorough.metaTitle,
      description: cmsBorough.metaDescription,
      url: withTrailingSlash(`/areas/${slug}`),
      siteName: SITE.name,
      type: "website",
      locale: "en_GB",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: { card: "summary_large_image", images: [DEFAULT_OG_IMAGE.url] },
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
  if (!area || (!area.published && !(await getAdminRole()))) notFound();
  return <BoroughPage borough={areaToBorough(area)} />;
}
