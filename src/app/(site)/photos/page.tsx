import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageBanner from "@/components/layout/PageBanner";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import CtaBand from "@/components/home/CtaBand";
import PhotoGallery, { type GalleryImage } from "@/components/gallery/PhotoGallery";
import { REMOVALS_GALLERY } from "@/lib/remote-images";

export const metadata: Metadata = buildMetadata("photos");

const galleryImages: GalleryImage[] = [...REMOVALS_GALLERY];

export default function PhotosPage() {
  return (
    <>
      <StickyMobileBar />
      <PageBanner
        title="Photos"
        subtitle="A Look at Our Work"
        crumbs={[{ label: "Home", href: "/" }, { label: "Photos" }]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <PhotoGallery images={galleryImages} />
        </div>
      </section>

      <CtaBand
        heading="Like What You See? Let's Plan Your Move"
        actions={[
          { label: "Quick Quote", href: "/quick-quote", variant: "navy" },
          { label: "Book a Service", href: "/bookservice", variant: "outline-light" },
        ]}
      />
    </>
  );
}
