import type { Metadata } from "next";

/** Production/canonical origin. Override per-environment with NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://removalsnationwide.uk"
).replace(/\/$/, "");

export const SITE = {
  name: "Removals Nationwide",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-red.svg`,
  telephone: "+442072052525",
  phones: ["020 7205 2525", "0800 046 7877"],
  address: {
    street: "Unit C1A Purfleet Industrial Park, Kerry Avenue",
    locality: "Purfleet",
    region: "Essex",
    // NAP resolved to RM15 4YA site-wide across code, footer, contact and terms.
    postalCode: "RM15 4YA",
    country: "GB",
  },
  geo: { lat: 51.4815, lng: 0.2361 },
  // Social/citation set, kept byte-identical to the footer links so the
  // entity's sameAs and the visible footer never diverge.
  sameAs: [
    "https://www.facebook.com/removalsnationwide",
    "https://x.com/removalsnationwide",
    "https://www.linkedin.com/company/removals-nationwide",
  ],
};

type MetaEntry = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

/**
 * Per-page SEO copied to match the live WordPress site verbatim (including its
 * original typos, kept intentionally for parity). `path` is our route, used as
 * the self-referential canonical.
 */
export const META: Record<string, MetaEntry> = {
  home: {
    title: "UK Removals Company | House, Man & Van, Office & Storage",
    description:
      "Removals Nationwide is a fully insured UK removal company. House removals, man and van, office moves, packing and storage across the UK. Get a free quote.",
    path: "/",
  },
  about: {
    title: "About Removals Nationwide | UK Moving Company",
    description:
      "Learn about Removals Nationwide, a fully insured UK removal company with over a decade of experience in house, office, man and van and storage moves.",
    path: "/about-us",
  },
  services: {
    title: "Our Services | House, Office, Man & Van & Storage UK",
    description:
      "Full range of UK removals services: house and office removals, man and van, packing, storage, crate hire, rubbish disposal, single-item delivery and cleaning.",
    path: "/services",
  },
  "house-removals": {
    title: "House Removals UK | Nationwide Home Moving",
    description:
      "House removals across the UK, 7 days a week. Fully insured, experienced team. Packing, transport and unloading handled end to end. Get a free quote.",
    path: "/house-removals",
  },
  "office-removals": {
    title: "Office Removals UK | Business & Commercial Moves",
    description:
      "Office removals across the UK with minimal downtime and out-of-hours options. Experienced, insured team. IT and server relocation available. Get a quote.",
    path: "/office-removals",
  },
  "international-removals": {
    title: "International Removals UK | Europe & Worldwide",
    description:
      "International removals from the UK to Europe and worldwide. Weekly road services to Scandinavia, Norway, Germany and the Baltics. Door-to-door and insured.",
    path: "/international-removals",
  },
  "london-storage": {
    title: "Removals Storage UK | Secure & Insured Storage",
    description:
      "Secure, fully insured removals storage across the UK from £10 a week. We collect, load and seal your goods, with no minimum term. Get a quote.",
    path: "/storage",
  },
  "packing-service": {
    title: "Packing Services UK | Full & Partial Packing",
    description:
      "Professional packing services across the UK. Materials and labour included, fully insured. Full or partial packing available with your move. Get a quote.",
    path: "/packing-service",
  },
  "man-and-van": {
    title: "Man and Van UK | Small Moves & Single Items",
    description:
      "Nationwide man and van service from £55 an hour plus VAT, 7 days a week. Experienced, insured movers for single items, small moves and house moves. Free quote.",
    path: "/man-and-van-london",
  },
  "packaging-materials": {
    title: "Packing Materials UK | Removal Boxes & Supplies",
    description:
      "Quality packing materials and removal boxes delivered across the UK. Boxes, bubble wrap, tape, wardrobe and mattress covers at transparent prices.",
    path: "/packaging-materials",
  },
  "crate-hire": {
    title: "Crate Hire UK | Plastic Moving & IT Crates",
    description:
      "Plastic crate hire across the UK. Reusable lidded LC3 and IT crates from £2 a week, delivered and collected. Greener than cardboard. Get a quote.",
    path: "/crate-hire",
  },
  "rubbish-disposal": {
    title: "Rubbish Removal UK | Licensed Clearance",
    description:
      "Licensed rubbish removal and clearance across the UK. Transparent load prices, all loading included and recycling where possible. Combine with your move.",
    path: "/rubbish-disposal",
  },
  "single-item-deliveries": {
    title: "Single Item Delivery UK | Furniture Courier",
    description:
      "Nationwide single-item and marketplace delivery by a real removals company. Own fleet, collection, furniture assembly, proof of delivery and worldwide shipping.",
    path: "/single-item",
  },
  "cleaning-services": {
    title: "End of Tenancy Cleaning UK | Move In & Out Cleaning",
    description:
      "Move-in, move-out and end-of-tenancy cleaning coordinated with your removal. Vetted, trained and fully insured teams. Ask about availability.",
    path: "/cleaning-services",
  },
  "removals-to-norway": {
    title: "Removals to Norway from UK | Weekly Door-to-Door",
    description:
      "Weekly removals to Norway from the UK. Own road-trains, local teams across Norway, Oslo depot, inclusive customs and a personal move coordinator. From single items to a full truck.",
    path: "/removals-services-to-norway",
  },
  "dormitory-move-student-storage": {
    title: "Dormitory & Student Moves UK | Storage & Shipping",
    description:
      "Full-service dormitory move and student storage. Movers pack your room, disassemble furniture, then deliver across the UK, ship worldwide or store securely.",
    path: "/dormitory-move-student-storage",
  },
  prices: {
    title: "Removal Prices UK | Competitive Moving Rates",
    description:
      "Check Removals Nationwide's competitive moving prices. Affordable rates for house removals, man and van, office moves, packing, storage and more.",
    path: "/prices",
  },
  faq: {
    title: "Removals FAQ | House & Office Moving Questions",
    description:
      "Frequently asked questions about house and office moving, answered by Removals Nationwide. Insurance, cancellation, access, pricing and more.",
    path: "/faq",
  },
  "our-fleet": {
    title: "Our Fleet | Modern Removal Vehicles UK",
    description:
      "Removals Nationwide's modern removal vehicles are equipped for every moving situation. Insured, reliable fleet for house, office and man and van moves.",
    path: "/our-fleet",
  },
  photos: {
    title: "Moving Photos | Removals Nationwide",
    description: "Photos of Removals Nationwide teams, vehicles and moves in action.",
    path: "/photos",
    noindex: true,
  },
  contact: {
    title: "Contact Us | Removals Nationwide UK",
    description:
      "Contact Removals Nationwide by email or phone. Call 020 7205 2525 or 0800 046 7877, or send an enquiry for a free no-obligation quote.",
    path: "/contactus",
  },
  "book-a-service": {
    title: "Book a Service | Removals Nationwide",
    description:
      "Book your removal service with Removals Nationwide. Easy booking form with optional services including packing, storage and cleaning.",
    path: "/bookservice",
    noindex: true,
  },
  news: {
    title: "Moving News & Guides | Removals Nationwide",
    description:
      "Moving, packing, storage, office and international removals tips and guides from Removals Nationwide. Be prepared for your next move.",
    path: "/news",
  },
  "current-offers": {
    title: "Current Offers | Removals Nationwide",
    description:
      "Current offers from Removals Nationwide. Fair, transparent pricing every day, with savings when you combine services. Get a free quote.",
    path: "/current-offers",
  },
  terms: {
    title: "Terms and Conditions | Removals Nationwide",
    description:
      "The industry Model Terms and Conditions used by Removals Nationwide Limited. Quotation, responsibilities, liability, cancellation and claims terms.",
    path: "/terms-and-conditions",
    noindex: true,
  },
  privacy: {
    title: "Privacy Policy | Removals Nationwide",
    description:
      "How Removals Nationwide collects, uses and protects your personal data in line with the GDPR. Your rights, cookies and third-party services.",
    path: "/privacy-policy",
    noindex: true,
  },
  areas: {
    title: "Areas We Cover | UK Removals Coverage",
    description:
      "Removals Nationwide provides house, office and international removals and storage across the UK. Find your local service area.",
    path: "/areas",
  },
};

/** Canonical URL format is trailing-slash, to match the live WordPress URLs. */
export function withTrailingSlash(path: string): string {
  if (!path.startsWith("/")) return path;
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

/** Build Next.js Metadata for a known page id, with canonical + OpenGraph + robots. */
export function buildMetadata(id: keyof typeof META): Metadata {
  const m = META[id];
  const canonical = withTrailingSlash(m.path);
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical },
    openGraph: {
      title: m.title,
      description: m.description,
      url: canonical,
      siteName: SITE.name,
      type: "website",
    },
    ...(m.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/* ----------------------------- JSON-LD graphs ----------------------------- */

/** All 32 London boroughs + the wider regions the business serves. */
const BUSINESS_AREA_SERVED = [
  { "@type": "AdministrativeArea", name: "Greater London" },
  { "@type": "AdministrativeArea", name: "Surrey" },
  { "@type": "Country", name: "United Kingdom" },
  // All 32 London boroughs
  { "@type": "AdministrativeArea", name: "Barking and Dagenham" },
  { "@type": "AdministrativeArea", name: "Barnet" },
  { "@type": "AdministrativeArea", name: "Bexley" },
  { "@type": "AdministrativeArea", name: "Brent" },
  { "@type": "AdministrativeArea", name: "Bromley" },
  { "@type": "AdministrativeArea", name: "Camden" },
  { "@type": "AdministrativeArea", name: "City of London" },
  { "@type": "AdministrativeArea", name: "Croydon" },
  { "@type": "AdministrativeArea", name: "Ealing" },
  { "@type": "AdministrativeArea", name: "Enfield" },
  { "@type": "AdministrativeArea", name: "Greenwich" },
  { "@type": "AdministrativeArea", name: "Hackney" },
  { "@type": "AdministrativeArea", name: "Hammersmith and Fulham" },
  { "@type": "AdministrativeArea", name: "Haringey" },
  { "@type": "AdministrativeArea", name: "Harrow" },
  { "@type": "AdministrativeArea", name: "Havering" },
  { "@type": "AdministrativeArea", name: "Hillingdon" },
  { "@type": "AdministrativeArea", name: "Hounslow" },
  { "@type": "AdministrativeArea", name: "Islington" },
  { "@type": "AdministrativeArea", name: "Kensington and Chelsea" },
  { "@type": "AdministrativeArea", name: "Kingston upon Thames" },
  { "@type": "AdministrativeArea", name: "Lambeth" },
  { "@type": "AdministrativeArea", name: "Lewisham" },
  { "@type": "AdministrativeArea", name: "Merton" },
  { "@type": "AdministrativeArea", name: "Newham" },
  { "@type": "AdministrativeArea", name: "Redbridge" },
  { "@type": "AdministrativeArea", name: "Richmond upon Thames" },
  { "@type": "AdministrativeArea", name: "Southwark" },
  { "@type": "AdministrativeArea", name: "Sutton" },
  { "@type": "AdministrativeArea", name: "Tower Hamlets" },
  { "@type": "AdministrativeArea", name: "Waltham Forest" },
  { "@type": "AdministrativeArea", name: "Wandsworth" },
  { "@type": "AdministrativeArea", name: "Westminster" },
];

/**
 * The single canonical #organization node, rendered site-wide via siteGraphLd().
 * All other graphs (services, articles) reference it by @id rather than
 * re-declaring it, so there is exactly one org entity per page.
 */
/**
 * Contact fields that the admin Settings page can change. Passed in rather than
 * read from the SITE constant so the structured data cannot drift from what the
 * footer and top bar actually display.
 */
export type LdSettings = {
  phones: { freephone: { label: string }; london: { label: string } };
  email: string;
  addressLine: string;
  urlFacebook: string;
  urlX: string;
  urlLinkedin: string;
  urlTrustpilot: string;
};

/** E.164 for schema.org, which wants a dialable international number. */
function e164(label: string): string {
  const digits = (label ?? "").replace(/[^\d+]/g, "");
  if (!digits) return "";
  if (digits.startsWith("+")) return digits;
  if (digits.startsWith("0")) return `+44${digits.slice(1)}`;
  return digits;
}

export function organizationLd(settings?: LdSettings) {
  const london = settings ? e164(settings.phones.london.label) : SITE.telephone;
  const freephone = settings ? e164(settings.phones.freephone.label) : "+448000467877";
  const sameAs = settings
    ? [settings.urlFacebook, settings.urlX, settings.urlLinkedin].filter(
        (u) => u && u.trim() !== "",
      )
    : SITE.sameAs;

  return {
    // CONFIRM: legal/brand name, reviews and footer suggest "Removals Nationwide Ltd", Company No. 6874216; use the registered name
    "@type": "MovingCompany", // inherits LocalBusiness and Organization; no type array needed
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: "Removals Nationwide Ltd",
    url: `${SITE.url}/`,
    logo: SITE.logo,
    // Founded a decade ago by two friends; exact foundingDate omitted until confirmed.
    founder: [
      { "@type": "Person", name: "Emil Perushanov" },
      { "@type": "Person", name: "Dimitar Dimitrov" },
    ],
    telephone: london,
    priceRange: "££", // CONFIRM this reflects reality
    // CONFIRM: add openingHoursSpecification once trading hours are verified; omit rather than guess
    // AggregateRating is omitted because no verified rating data is currently published.
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: london,
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: freephone,
        contactType: "customer service",
        contactOption: "TollFree",
        areaServed: "GB",
        availableLanguage: "English",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: BUSINESS_AREA_SERVED,
    sameAs,
  };
}

export function websiteLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: `${SITE.url}/`,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function siteGraphLd(settings?: LdSettings) {
  return { "@context": "https://schema.org", "@graph": [organizationLd(settings), websiteLd()] };
}

export type Crumb = { label: string; href?: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE.url}${withTrailingSlash(c.href)}` } : {}),
    })),
  };
}

export function faqLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

/** Short H1 text per service page, aligned with nationwide positioning. */
export const serviceH1: Record<string, string> = {
  "house-removals": "Nationwide House Removals",
  "office-removals": "Nationwide Office Removals",
  "international-removals": "International Removals from the UK",
  "london-storage": "Secure Removals Storage",
  "packing-service": "Nationwide Packing Service",
  "man-and-van": "Nationwide Man and Van",
  "packaging-materials": "Packing Materials and Removal Boxes UK",
  "crate-hire": "Nationwide Crate Hire",
  "rubbish-disposal": "Nationwide Rubbish Removal and Clearance",
  "single-item-deliveries": "Nationwide Single Item and Marketplace Delivery",
  "cleaning-services": "Move In, Move Out and End of Tenancy Cleaning",
  "removals-to-norway": "Removals to Norway from the UK",
  "dormitory-move-student-storage": "Dormitory Move and Student Storage Across the UK",
};

export function serviceLdFor(id: keyof typeof META) {
  const m = META[id];
  return serviceLd({ name: serviceH1[id] ?? m.title, description: m.description, path: m.path });
}

export function serviceLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${SITE.url}${withTrailingSlash(path)}`,
    areaServed: "United Kingdom",
    provider: { "@id": `${SITE.url}/#organization` },
  };
}

export function articleLd({
  title,
  description,
  path,
  date,
  author,
  image,
}: {
  title: string;
  description: string;
  path: string;
  date: string;
  author: string;
  image?: string;
}) {
  // date is DD/MM/YYYY
  const [d, mo, y] = date.split("/");
  const iso = y && mo && d ? `${y}-${mo}-${d}` : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${SITE.url}${withTrailingSlash(path)}`,
    ...(image ? { image: image.startsWith("http") ? image : `${SITE.url}${image}` } : {}),
    ...(iso ? { datePublished: iso, dateModified: iso } : {}),
    author: { "@type": "Person", name: author },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}${withTrailingSlash(path)}`,
  };
}

/* ----------------------------- Homepage schema ---------------------------- */

export const HOME_FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "How much should I pay for removals in the UK?",
    answer:
      "Removal costs in the UK depend on property size, access conditions, distance and move complexity. For an exact fixed quote, use the cost guide or book a free survey.",
  },
  {
    question: "Is it worth getting a removal company?",
    answer:
      "For full property moves, hiring a professional removal company saves time, reduces the risk of injury and provides insurance cover for your belongings. Van hire is cheaper upfront but places the entire physical and financial risk on you. For smaller single-item moves, a man and van service offers professional-grade cover at a lower cost than a full crew.",
  },
  {
    question: "What is the cheapest way to move in the UK?",
    answer:
      "The cheapest option by upfront cost is van hire, but it excludes goods-in-transit insurance and requires significant physical effort. For insured moves, a man and van service is the lowest-cost professional option for small volumes. For full property moves, getting multiple fixed quotes from industry-experienced companies ensures competitive pricing with proper cover.",
  },
  {
    question: "What does a removal company do?",
    answer:
      "A removal company packs your belongings, wraps and protects furniture, loads the vehicle, transports everything to your new address and unloads at the destination. Full-service companies also provide packing materials, dismantle and reassemble furniture, arrange parking suspensions and offer storage between moves.",
  },
  {
    question: "Do you provide man and van services?",
    answer:
      "Yes. Our man and van service is available nationwide for small moves, single-item collections, student relocations and short-distance moves. Hourly and fixed-price options are available. Goods-in-transit insurance is included as standard.",
  },
  {
    question: "Do you offer packing and storage?",
    answer:
      "Yes. Full and partial professional packing is available as an add-on to any removal. Secure 24/7 CCTV-monitored storage is available for short-term and long-term needs, with container and household storage options.",
  },
  {
    question: "Are my belongings insured during the move?",
    answer:
      "Yes. Public liability insurance and goods-in-transit insurance are included on every job. If any item is damaged during the move, there is a clear claims process with a financial remedy.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "Our removal crews provide nationwide coverage across the UK, as well as international moves. Find local coverage information on our areas page or ask us about your postcode.",
  },
  {
    question: "Do you handle parking suspensions and permits?",
    answer:
      "Yes. Parking suspensions are arranged by our operations team as part of move planning. Loading bay bookings, goods lift reservations and School Streets timing restrictions are all managed in advance of move day.",
  },
  {
    question: "How do I get a removal quote?",
    answer:
      "Use our online booking form to share your move details, or book a free on-site or video survey for a fixed-price quote with no hidden fees. You can also call our team directly.",
  },
];

export const HOME_HOWTO_STEPS: { name: string; text: string }[] = [
  {
    name: "Book a free survey",
    text: "Choose a free on-site or video survey at a time that suits you. The surveyor assesses your property, measures furniture and notes any access requirements.",
  },
  {
    name: "Receive a fixed quote",
    text: "Within 24 hours of your survey, receive a written fixed-price quote. VAT, fuel and equipment are all included. No hidden fees.",
  },
  {
    name: "Packing and materials",
    text: "Choose full or partial packing. Materials are delivered to your address in advance of move day.",
  },
  {
    name: "Access and parking arranged",
    text: "Our operations team books any required parking suspension, loading bay or goods lift appointment for move day.",
  },
  {
    name: "Move day",
    text: "Our crew arrives and loads your belongings onto a fully insured vehicle. You are not required to be present during loading if you prefer.",
  },
  {
    name: "Unloading and reassembly",
    text: "At your new property, our team unloads, reassembles furniture and positions items as directed.",
  },
  {
    name: "Storage if required",
    text: "Short-term or long-term storage is available for any gap between moving out and moving in.",
  },
];
