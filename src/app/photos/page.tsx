import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import CtaBand from "@/components/home/CtaBand";
import PhotoGallery, { type GalleryImage } from "@/components/gallery/PhotoGallery";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = {
  title: "Moving Photos from Top Removals",
  description:
    "A photo gallery of Top Removals at work — movers wrapping and protecting furniture, packed and labelled boxes, secure storage and loaded vehicles across London and the UK.",
};

// Placeholder gallery — swap these for the client's real photos in /public/gallery/.
const altText = [
  "Top Removals movers wrapping furniture",
  "Packed and labelled moving boxes",
  "Furniture protected for transport",
  "Movers loading the removal van",
  "Sofa wrapped in protective blankets",
  "Stacked plastic moving crates",
  "Boxes arranged in the storage unit",
  "Team carrying furniture into a property",
  "Mattress in a protective cover",
  "Fragile items packed with bubble wrap",
  "Wardrobe boxes ready for the move",
  "Loaded removal lorry on a London street",
  "Office files packed in IT crates",
  "Movers dismantling a large wardrobe",
  "Secured load inside the moving truck",
  "Kitchenware wrapped and boxed",
  "Pictures and mirrors protected for transport",
  "Crew unloading at the new home",
  "Neatly stacked cartons in storage",
  "Movers using straps and a trolley",
  "Antique furniture carefully wrapped",
  "Boxes labelled by room",
  "Storage facility with stacked crates",
  "Van interior packed for a house move",
  "Two movers carrying a sofa",
  "Packing materials laid out before a move",
  "Protected dining table and chairs",
  "Loading boxes onto the lift",
  "Wrapped appliances ready to move",
  "Completed move with happy customer",
];

const galleryImages: GalleryImage[] = altText.map((alt, i) => ({
  src: `/gallery/move-${String(i + 1).padStart(2, "0")}.jpg`,
  alt,
}));

export default function PhotosPage() {
  return (
    <>
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
          { label: "Book a Service", href: "/book-a-service", variant: "outline-light" },
        ]}
      />

      <Accreditations />
    </>
  );
}
