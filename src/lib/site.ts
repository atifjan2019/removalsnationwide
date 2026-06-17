/**
 * Central site configuration: contact details, navigation and shared copy.
 * Other page components will be built later — links point to placeholder routes.
 */

import { services } from "@/lib/services";

export const phones = {
  freephone: { label: "0800 046 7877", href: "tel:+448000467877" },
  london: { label: "020 7205 2525", href: "tel:+442072052525" },
};

export const whatsapp = {
  // Placeholder number — swap for the real WhatsApp Business number later.
  href: "https://wa.me/442072052525",
  label: "Chat with us",
};

export const address = {
  line: "Unit C1A Purfleet Industrial Park, Kerry Avenue, Purfleet, RM15 4YA",
};

export const company = {
  name: "Top Removals",
  registration:
    "© All rights reserved. Registered in England and Wales Company No. 6874216",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.title, href: s.href })),
  },
  { label: "Prices", href: "/prices" },
  { label: "Why Us", href: "/about" },
  { label: "Gallery", href: "/photos" },
  { label: "Contact Us", href: "/contact" },
];

export const footerServices = [
  { label: "House Removals", href: "/services/house-removals" },
  { label: "Office Removals", href: "/services/office-removals" },
  { label: "International Removals", href: "/services/international-removals" },
  { label: "London Storage", href: "/services/london-storage" },
  { label: "Packing Service", href: "/services/packing-service" },
  { label: "Packaging Materials", href: "/services/packaging-materials" },
  { label: "Crate Hire", href: "/services/crate-hire" },
  { label: "Man and Van Services", href: "/services/man-and-van" },
  { label: "Rubbish Disposal", href: "/services/rubbish-disposal" },
  { label: "Single Item / E-bay Deliveries", href: "/services/single-item-deliveries" },
  { label: "Cleaning Services", href: "/services/cleaning-services" },
];

export const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Moving News", href: "/news" },
  { label: "FAQ", href: "/faq" },
  { label: "Certificates", href: "/certificates" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Photos", href: "/photos" },
  { label: "Contact Us", href: "/contact" },
  { label: "Prices", href: "/prices" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Book a Service", href: "/book" },
  { label: "Current Offers", href: "/offers" },
];
