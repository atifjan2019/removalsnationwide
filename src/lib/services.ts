import type { ComponentType, SVGProps } from "react";
import {
  GlobeIcon,
  HomeIcon,
  BuildingIcon,
  BoxIcon,
  VanIcon,
  PackageIcon,
  TapeIcon,
  CrateIcon,
  TrashIcon,
  TagIcon,
  SprayIcon,
} from "@/components/ui/icons";

export type ServiceDef = {
  title: string;
  href: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** The six headline services featured on the homepage grid — ordered by search volume. */
  featured?: boolean;
};

/**
 * Single source of truth for all services. Consumed by:
 * the homepage grid (featured only), the /services overview page (all),
 * the Header dropdown and the footer — so routes stay consistent.
 *
 * Featured order follows keyword volume: House > Man & Van > Office > Packing > Storage > International.
 */
export const services: ServiceDef[] = [
  {
    title: "House Removals",
    href: "/house-removals",
    Icon: HomeIcon,
    featured: true,
    description:
      "Full house removals across London, Greater London and Surrey. Our fully insured crews handle every property type, from studio flats to detached houses, including survey, packing, transport and reassembly.",
  },
  {
    title: "Man and Van Services",
    href: "/man-and-van-london",
    Icon: VanIcon,
    featured: true,
    description:
      "Flexible man and van services across all London boroughs. Ideal for small moves, single-item collections, student relocations and short-distance hops. Hourly and fixed-price options available with goods-in-transit insurance included.",
  },
  {
    title: "Office Removals",
    href: "/office-removals",
    Icon: BuildingIcon,
    featured: true,
    description:
      "Commercial and office relocations across London with minimal downtime. Weekend and out-of-hours moves, crate hire, IT equipment transport and business continuity planning included.",
  },
  {
    title: "Packing Services",
    href: "/packing-service",
    Icon: PackageIcon,
    featured: true,
    description:
      "Full and partial professional packing for all property types. Quality materials delivered in advance: double-walled boxes, bubble wrap, wardrobe boxes and specialist wrapping for fragile and high-value items.",
  },
  {
    title: "Storage Services",
    href: "/storage",
    Icon: BoxIcon,
    featured: true,
    description:
      "24/7 CCTV-monitored, fully insured storage in London for short-term and long-term needs. Combine storage directly with your removal as one managed service.",
  },
  {
    title: "International Services",
    href: "/international-removals",
    Icon: GlobeIcon,
    featured: true,
    description:
      "European and overseas removals from London. Export-standard packing, shipping logistics, customs documentation and destination delivery across Europe and worldwide.",
  },
  {
    title: "Packaging Materials",
    href: "/packaging-materials",
    Icon: TapeIcon,
    description:
      "High-quality boxes, bubble wrap, tape and protective materials for every kind of move. Buy only what you need, delivered when you need it.",
  },
  {
    title: "Crate Hire",
    href: "/crate-hire",
    Icon: CrateIcon,
    description:
      "Durable, stackable plastic crates available for hire, the eco-friendly, secure way to move your home or office without endless cardboard boxes.",
  },
  {
    title: "Rubbish Disposal",
    href: "/rubbish-disposal",
    Icon: TrashIcon,
    description:
      "Fast, responsible removal and disposal of unwanted items and waste, so your old or new property is left clean and clutter-free.",
  },
  {
    title: "Single Item / E-bay Deliveries",
    href: "/single-item",
    Icon: TagIcon,
    description:
      "Need to move just one item or deliver an eBay purchase? Affordable single-item and same-day delivery across London and the UK.",
  },
  {
    title: "Cleaning Services",
    href: "/cleaning-services",
    Icon: SprayIcon,
    description:
      "End of tenancy, carpet and upholstery cleaning to help you get your deposit back or prepare your new home, at money-saving rates.",
  },
  {
    title: "Removals to Norway",
    href: "/removals-services-to-norway",
    Icon: GlobeIcon,
    description:
      "Regular door-to-door removals from London to Norway. Weekly departures to Oslo, bi-weekly to Bergen and Stavanger, with full customs clearance and personal move coordinator.",
  },
  {
    title: "Dormitory Move & Student Storage",
    href: "/dormitory-move-student-storage",
    Icon: BoxIcon,
    description:
      "Professional packing and moving for university dormitories, with secure 24/7 CCTV student storage. UK and international delivery available.",
  },
];

export const featuredServices = services.filter((s) => s.featured);
