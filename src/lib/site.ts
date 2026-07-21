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
  name: "Removals Nationwide",
  registration: "© All rights reserved.",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Moving News", href: "/news" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.title, href: s.href })),
  },
  { label: "Prices", href: "/prices" },
  {
    label: "Why Us",
    href: "/about-us",
    children: [
      { label: "Current Offers", href: "/current-offers" },
      { label: "FAQ", href: "/faq" },
      { label: "Our Fleet", href: "/our-fleet" },
    ],
  },
  { label: "Gallery", href: "/photos" },
  { label: "Areas", href: "/areas" },
  {
    label: "Contact Us",
    href: "/contactus",
    children: [
      { label: "Contact Us", href: "/contactus" },
      { label: "Book a Service", href: "/bookservice" },
    ],
  },
];

export const footerServices = [
  { label: "House Removals", href: "/house-removals" },
  { label: "Office Removals", href: "/office-removals" },
  { label: "International Removals", href: "/international-removals" },
  { label: "Secure Storage", href: "/storage" },
  { label: "Packing Service", href: "/packing-service" },
  { label: "Packaging Materials", href: "/packaging-materials" },
  { label: "Crate Hire", href: "/crate-hire" },
  { label: "Man and Van Services", href: "/man-and-van-london" },
  { label: "Rubbish Disposal", href: "/rubbish-disposal" },
  { label: "Single Item / E-bay Deliveries", href: "/single-item" },
  { label: "Cleaning Services", href: "/cleaning-services" },
  { label: "Removals to Norway", href: "/removals-services-to-norway" },
  { label: "Dormitory Move & Student Storage", href: "/dormitory-move-student-storage" },
];

export const footerCompany = [
  { label: "About Us", href: "/about-us" },
  { label: "Moving News", href: "/news" },
  { label: "FAQ", href: "/faq" },
  { label: "Our Fleet", href: "/our-fleet" },
  { label: "Photos", href: "/photos" },
  { label: "Contact Us", href: "/contactus" },
  { label: "Prices", href: "/prices" },
  { label: "Book a Service", href: "/bookservice" },
  { label: "Current Offers", href: "/current-offers" },
];
