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
  /** The six headline services featured on the homepage grid. */
  featured?: boolean;
};

/**
 * Single source of truth for all services. Consumed by:
 * the homepage grid (featured only), the /services overview page (all),
 * the Header dropdown and the footer — so routes stay consistent.
 */
export const services: ServiceDef[] = [
  {
    title: "International Services",
    href: "/international-removals",
    Icon: GlobeIcon,
    featured: true,
    description:
      "If you need to relocate your home or business outside the UK, Top Removals can assist you in every way. Our professionally trained movers can bring your belongings where there are needed - across the Channel or the other side of the Globe.",
  },
  {
    title: "House Removals",
    href: "/house-removals",
    Icon: HomeIcon,
    featured: true,
    description:
      "Moving to Greater London or Surrey- Top Removals is here to attend to your every need. With professionalism and efficiency, our fully insured moving company is highly qualified to handle all types of domestic relocations.",
  },
  {
    title: "Office Removals",
    href: "/office-removals",
    Icon: BuildingIcon,
    featured: true,
    description:
      'Let us deal with the "How-to"s and "What-if"s that accompanied business relocations. With close to a decade of experience, Top Removals is adequately equipped to organise, pack and move any office and business to its final destination.',
  },
  {
    title: "Storage Services",
    href: "/storage",
    Icon: BoxIcon,
    featured: true,
    description:
      "Top Removals offers affordable storage for all of your belongings. Our facilities have 24/7 security and are fully insured. It is the safest place in London to put your items when moving abroad or domestically.",
  },
  {
    title: "Man and Van Services",
    href: "/man-and-van-london",
    Icon: VanIcon,
    featured: true,
    description:
      "Compatible prices and fast service are just some of the perks of Top Removals' Man and Van. Short-distance or same-day moves, we can do them both. Our motivated crews and renovated fleet are waiting for you.",
  },
  {
    title: "Packing Services",
    href: "/packing-service",
    Icon: PackageIcon,
    featured: true,
    description:
      "Packing and unpacking of all types of items. Regardless of the shape or the size, Top Removals' professionals can wrap your home or office and safely transport it to the new location. We offer different types of packing methods and materials.",
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
      "Durable, stackable plastic crates available for hire - the eco-friendly, secure way to move your home or office without endless cardboard boxes.",
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
      "Need to move just one item or deliver an eBay purchase? We offer affordable single-item and same-day delivery across London and the UK.",
  },
  {
    title: "Cleaning Services",
    href: "/cleaning-services",
    Icon: SprayIcon,
    description:
      "End of tenancy, carpet and upholstery cleaning to help you get your deposit back or prepare your new home - at money-saving rates.",
  },
];

export const featuredServices = services.filter((s) => s.featured);
