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
    title: "Nationwide Removal Company | House, Office & Storage Moves",
    description:
      "Removals Nationwide is a trusted, fully insured UK removal company. House removals, man and van, office moves, packing and storage nationwide. Get a free quote today.",
    path: "/",
  },
  about: {
    title: "About Removals Nationwide | Your Trusted Moving Partner",
    description:
      "No matter if you need us for house or office moving, we are here for you. Founded a decade ago, experienced and fully insured, fully insured. Get to know the team behind your move.",
    path: "/about-us",
  },
  services: {
    title: "Our Services - House, Office & International Removals | Removals Nationwide",
    description:
      "Explore the full range of Removals Nationwide services: house, office and international removals, man and van, packing, storage, crate hire, rubbish disposal, single-item deliveries and cleaning across the UK.",
    path: "/services",
  },
  "house-removals": {
    title: "Nationwide House Removals | Insured Movers, 7 Days | Removals Nationwide",
    description:
      "House removals across the UK, 7 days a week. Fully insured, experienced team. Packing, transport and unloading handled end to end. Get a free quote today.",
    path: "/house-removals",
  },
  "office-removals": {
    title: "Nationwide Office Removals | Minimal Downtime, Insured | Removals Nationwide",
    description:
      "Office removals across the UK with minimal downtime and out-of-hours moves. Experienced, insured, with IT and server relocation. From about £100 per workstation plus VAT.",
    path: "/office-removals",
  },
  "international-removals": {
    title: "International Removals UK | Europe & Worldwide | Removals Nationwide",
    description:
      "International removals from anywhere in the UK to Europe and worldwide. Weekly road services to Scandinavia, Norway, Germany and the Baltics. Door-to-door and insured.",
    path: "/international-removals",
  },
  "london-storage": {
    title: "Secure Removals Storage | From £10/Week | Removals Nationwide",
    description:
      "Secure, fully insured removals storage from £10 a week. We collect, load and seal your goods, with no minimum term. Managed storage for homes and businesses across the UK.",
    path: "/storage",
  },
  "packing-service": {
    title: "Nationwide Packing Service | Fully Insured | Removals Nationwide",
    description:
      "Professional packing services across the UK. Materials and labour included, fully insured. Full or partial packing is available with your move.",
    path: "/packing-service",
  },
  "man-and-van": {
    title: "Nationwide Man and Van | From £55/hr | Removals Nationwide",
    description:
      "Nationwide man and van service from £55 an hour plus VAT, 7 days a week. Experienced, insured movers for single items, small moves and house moves. Free quote.",
    path: "/man-and-van-london",
  },
  "packaging-materials": {
    title: "Packing Materials UK | Removal Boxes & Bubble Wrap | Removals Nationwide",
    description:
      "Quality packing materials and removal boxes delivered across the UK. Boxes, bubble wrap, tape, wardrobe and mattress covers with transparent prices.",
    path: "/packaging-materials",
  },
  "crate-hire": {
    title: "Crate Hire UK | Plastic Moving & IT Crates | Removals Nationwide",
    description:
      "Plastic crate hire across the UK. Reusable lidded LC3 and IT crates from £2 a week, delivered and collected. Greener than cardboard and easy to combine with your move.",
    path: "/crate-hire",
  },
  "rubbish-disposal": {
    title: "Nationwide Rubbish Removal | Licensed Clearance | Removals Nationwide",
    description:
      "Licensed rubbish removal and clearance across the UK. Transparent load prices, all loading included and recycling where possible. Combine clearance with your move.",
    path: "/rubbish-disposal",
  },
  "single-item-deliveries": {
    title: "Nationwide Single Item Delivery | Furniture Courier | Removals Nationwide",
    description:
      "Nationwide single-item and marketplace delivery by a real removals company. Own fleet, collection, furniture assembly, proof of delivery and worldwide shipping.",
    path: "/single-item",
  },
  "cleaning-services": {
    title: "Move In, Move Out & End of Tenancy Cleaning UK | Removals Nationwide",
    description:
      "Move-in, move-out and end-of-tenancy cleaning coordinated with your removal. Vetted, trained and fully insured teams. Ask about availability in your area.",
    path: "/cleaning-services",
  },
  "removals-to-norway": {
    title: "Removals to Norway from the UK | Weekly Door-to-Door | Removals Nationwide",
    description:
      "Weekly removals to Norway from the UK. Own road-trains, local teams across Norway, Oslo depot, inclusive customs and a personal move coordinator. From single items to a full truck.",
    path: "/removals-services-to-norway",
  },
  "dormitory-move-student-storage": {
    title: "Dormitory Move and Student Storage | UK & Worldwide | Removals Nationwide",
    description:
      "Full-service dormitory move and student storage. Our movers pack your room, disassemble furniture, then deliver across the UK, ship worldwide, or store securely. You need not be present.",
    path: "/dormitory-move-student-storage",
  },
  prices: {
    title: "Check Out the Competitive Prices and Great Rates of Removals Nationwide",
    description:
      "If you are planning to relocate you better check Removals Nationwide' moving prices. We offer affordable rates for a large variety of high-quality services.",
    path: "/prices",
  },
  faq: {
    title: "Frequently Asked Questions About Nationwide Removals",
    description:
      "Frequently Asked Questions about house or office moving, answered by Removals Nationwide - insurance, cancellation, required access and more...",
    path: "/faq",
  },
  "our-fleet": {
    title: "Removals Nationwide Is Proud to Present Its Vehicle Fleet",
    description:
      "Removals Nationwide is pleased to have modern and new moving vehicles, equipped for every type of situation. Your belongings are safe with us.",
    path: "/our-fleet",
  },
  photos: {
    title: "Moving Photos from Removals Nationwide",
    description: "Photos, Removal Men, Removal Photos, Pictures of removal company",
    path: "/photos",
    noindex: true,
  },
  contact: {
    title: "Contact Us | Removals Nationwide",
    description:
      "Contact Removals Nationwide by email or phone. Call 020 7205 2525 or 0800 046 7877, or send an enquiry for a free no-obligation quote. Purfleet, RM15 4YA.",
    path: "/contactus",
  },
  "book-a-service": {
    title: "Book a Service | Removals Nationwide",
    description:
      "Make an instant booking with Removals Nationwide filling this form. Easy to use with ability to add many optional services throughout the process.",
    path: "/bookservice",
    noindex: true,
  },
  news: {
    title: "Moving tips and tricks you need to know | Removals Nationwide",
    description:
      "Are you about to move your house or office? Read the tips and tricks you may use while your house or office removal. Be prepared.",
    path: "/news",
  },
  "current-offers": {
    title: "Current Offers | Removals Nationwide",
    description:
      "Current offers from Removals Nationwide. We focus on fair, transparent pricing every day, with savings when you combine services. Get a free no-obligation quote.",
    path: "/current-offers",
  },
  terms: {
    title: "Terms and Conditions - Removals Nationwide",
    description:
      "The industry Model Terms and Conditions in use by Removals Nationwide Limited. Our quotation, your responsibilities, liability, cancellation and claims terms.",
    path: "/terms-and-conditions",
    noindex: true,
  },
  privacy: {
    title: "Privacy Policy - Removals Nationwide",
    description:
      "How Removals Nationwide collects, uses and protects your personal data in line with the GDPR. Definitions, your rights, cookies and third-party services.",
    path: "/privacy-policy",
    noindex: true,
  },
  areas: {
    title: "Areas We Cover | Removals Nationwide",
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
