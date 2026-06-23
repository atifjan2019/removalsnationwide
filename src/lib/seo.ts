import type { Metadata } from "next";

/** Production/canonical origin. Override per-environment with NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.top-removals.co.uk"
).replace(/\/$/, "");

export const SITE = {
  name: "Top Removals London",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+442072052525",
  phones: ["020 7205 2525", "0800 046 7877"],
  address: {
    street: "Unit C1A Purfleet Industrial Park, Kerry Avenue",
    locality: "Purfleet",
    region: "Essex",
    // CONFIRM: NAP conflict — footer says RM15 4YA, Trustpilot lists RM15 4YE. Resolve and use one postcode here, in the footer, on Trustpilot and on GMB.
    postalCode: "RM15 4YA",
    country: "GB",
  },
  geo: { lat: 51.4815, lng: 0.2361 },
  sameAs: [
    "https://uk.trustpilot.com/review/www.top-removals.co.uk",
    // CONFIRM: add the resolved canonical Google Maps place URL (resolve share link https://share.google/uDZ9ZSuyBZYCPAZIV → full maps.google.com/... URL)
    // CONFIRM: add only real owned social and Companies House URLs — Facebook, Twitter, LinkedIn unverified and omitted
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
    title: "Removal Company London | House, Office & Storage Moves",
    description:
      "Top Removals is a trusted, fully insured removal company in London. House removals, man and van, office moves, packing and storage. Get a free quote today.",
    path: "/",
  },
  about: {
    title: "Top Removals London - Your Trusted Moving Partner | About Us",
    description:
      "No metter if you need us for house or office moving, we are here for you. It is important to know who will move your belongings so get to know us.",
    path: "/about-us",
  },
  services: {
    title: "Our Services - House, Office & International Removals | Top Removals London",
    description:
      "Explore the full range of Top Removals services: house, office and international removals, man and van, packing, storage, crate hire, rubbish disposal, single-item deliveries and cleaning across London and the UK.",
    path: "/services",
  },
  "house-removals": {
    title: "House Removals London | Fully Insured, Free Quote | Top Removals",
    description:
      "Top Removals provides fully insured, BAR-accredited house removals across London and Surrey, 7 days a week. Free survey, fixed prices, packing and storage available. Get a quote today.",
    path: "/house-removals",
  },
  "office-removals": {
    title: "Office Removals London & Office Relocation by Top Removals",
    description:
      "Relocating your business soon? Top Removals can offer you an employee and office removals throughout London and surrounding areas at competitive prices.",
    path: "/office-removals",
  },
  "international-removals": {
    title: "International Moving Company in London - Top Removals",
    description:
      "Seeking an affordable and reliable international moving company in London? Top Removals has all the resources to handle your long distance move",
    path: "/international-removals",
  },
  "london-storage": {
    title: "Storage Services in London - Convinient, Safe and Secure",
    description:
      "Enjoy a safe and secure storage facility in London with an easy access. We offer a domestic and commercial, short and long-term storage solution.",
    path: "/storage",
  },
  "packing-service": {
    title: "Packing Services in London, Fragile pack, Full Pack, Exports Wrap",
    description:
      "Don't do everything by yourself, Top Removals is here to help you with the professional packing of all of your valuables and belongings. Trust the experts!",
    path: "/packing-service",
  },
  "man-and-van": {
    title: "Man and Van London - The Reliable Man with a Van Services",
    description:
      "Searching for a trusthworty Man and Van Services in London and the surrounding area? Contact Top Removals today to recieve your FREE quote.",
    path: "/man-and-van-london",
  },
  "packaging-materials": {
    title: "Packaging Materials, Removal Boxes and Moving Supplies",
    description:
      "From study boxes, to bubble wrap, Top Removals can offer you all sorts of quality packing materials and moving supplies.Get your deal today!",
    path: "/packaging-materials",
  },
  "crate-hire": {
    title: "Crate Hire, Plastic Lidded Crates, IT Crates, For Hire from Top Removals",
    description:
      "Get the eco-friendly option and hire a plastic lidded crate now. Top Removals has many different options and can offer you a big variety of crates for hire.",
    path: "/crate-hire",
  },
  "rubbish-disposal": {
    title: "Rubbish Disposal and House Clearance Offered by Top Removals",
    description:
      "Daily refuse collection, removal of rubbish and waste, office and house clearances, cleaning up after building work and rubbish disposal 7 days a week",
    path: "/rubbish-disposal",
  },
  "single-item-deliveries": {
    title: "Reputable Single Item / E-bay Deliveries and Courier Service",
    description:
      "Now you can benefit from the single item collection and delivery services of Top Removals throughout the UK. The perfect courier service for eBay sellers.",
    path: "/single-item",
  },
  "cleaning-services": {
    title: "The Move In or Out Cleaning Services in London You Deserve",
    description:
      "Moving soon and frantically searching for a good cleaning company in London? Top Cleaners is the one to call! Our skilled teams can brighten every property.",
    path: "/cleaning-services",
  },
  prices: {
    title: "Check Out the Competitive Prices and Great Rates of Top Removals",
    description:
      "If you are planning to relocate you better check Top Removals' moving prices. We offer affordable rates for a large variety of high-quality services.",
    path: "/prices",
  },
  certificates: {
    title: "Certificates - Top Removals",
    description:
      "Top Removals is always striving to achieve the best quality in everything we do. We attend different trainings and are part of different organizations.",
    path: "/certificates",
  },
  faq: {
    title: "Frequently Asked Questions about London Removals",
    description:
      "Frequently Asked Questions about house or office moving, answered by Top Removals London - insurance, cancellation, required access and more...",
    path: "/faq",
  },
  "our-fleet": {
    title: "Top Removals London Is Proud to Present Its Vehicle Fleet",
    description:
      "Top Removals is pleased to have modern and new moving vehicles, equipped for every type of situation. Your belongings are safe with us.",
    path: "/our-fleet",
  },
  photos: {
    title: "Moving Photos from Top Removals",
    description: "Photos, Removal Men, Removal Photos, Pictures of removal company",
    path: "/photos",
    noindex: true,
  },
  contact: {
    title: "Contact Us | Top Removals",
    description:
      "Contact Top Removals here by email or phone. Get a free no obligation quote for your move on 020 7205 2525",
    path: "/contactus",
    noindex: true,
  },
  "book-a-service": {
    title: "Book a Service | Top Removals London",
    description:
      "Make an instant booking with Top Removals filling this form. Easy to use with ability to add many optional services throughout the process.",
    path: "/bookservice",
    noindex: true,
  },
  news: {
    title: "Moving tips and tricks you need to know | Top Removals London",
    description:
      "Are you about to move your house or office? Read the tips and tricks you may use while your house or office removal. Be prepared.",
    path: "/news",
  },
  terms: {
    title: "Terms and Conditions - Top Removals",
    description:
      "The BAR Model Terms and Conditions in use by Top Removals Limited — our quotation, your responsibilities, liability, cancellation and claims terms.",
    path: "/terms-and-conditions",
    noindex: true,
  },
  privacy: {
    title: "Privacy Policy - Top Removals",
    description:
      "How Top Removals collects, uses and protects your personal data in line with the GDPR — definitions, your rights, cookies and third-party services.",
    path: "/privacy-policy",
    noindex: true,
  },
  areas: {
    title: "Areas We Cover | Top Removals London",
    description:
      "Top Removals provides house, office and international removals and storage across London and the surrounding areas. Find your local service area.",
    path: "/areas",
  },
};

/** Build Next.js Metadata for a known page id, with canonical + OpenGraph + robots. */
export function buildMetadata(id: keyof typeof META): Metadata {
  const m = META[id];
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: m.path },
    openGraph: {
      title: m.title,
      description: m.description,
      url: m.path,
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

/** CONFIRM: verify each accreditation is current before publishing. */
const BUSINESS_CREDENTIALS = [
  "British Association of Removers (BAR)",
  "National Guild of Removers and Storers (NGRS)",
  "Fleet Operator Recognition Scheme (FORS)",
  "International Association of Movers (IAM)",
  "Checkatrade",
  "CTSI Trading Standards Approved Code",
].map((name) => ({
  "@type": "EducationalOccupationalCredential",
  credentialCategory: "certification",
  name,
}));

/**
 * The single canonical #organization node, rendered site-wide via siteGraphLd().
 * All other graphs (services, articles) reference it by @id rather than
 * re-declaring it — so there is exactly one org entity per page.
 */
export function organizationLd() {
  return {
    // CONFIRM: legal/brand name — reviews and footer suggest "Top Removals Ltd", Company No. 6874216; use the registered name
    "@type": "MovingCompany", // inherits LocalBusiness and Organization; no type array needed
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: SITE.logo,
    // CONFIRM: image should be a real photo of crew or van, not the logo — set once confirmed
    // CONFIRM: foundingDate — "Top Removals turns 10" signals founding year; add once confirmed
    telephone: SITE.telephone,
    priceRange: "££", // CONFIRM this reflects reality
    // CONFIRM: add openingHoursSpecification once trading hours are verified; omit rather than guess
    // AggregateRating intentionally omitted: self-serving review markup is not eligible for LocalBusiness.
    // Display reviews via the Trustpilot TrustBox widget instead.
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+442072052525",
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "+448000467877",
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
    sameAs: SITE.sameAs,
    hasCredential: BUSINESS_CREDENTIALS,
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

export function siteGraphLd() {
  return { "@context": "https://schema.org", "@graph": [organizationLd(), websiteLd()] };
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
      ...(c.href ? { item: `${SITE.url}${c.href}` } : {}),
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

/** Short H1 text per service page, matching the live site exactly. */
export const serviceH1: Record<string, string> = {
  "house-removals": "House Removals London",
  "office-removals": "Office Removals",
  "international-removals": "International Removals",
  "london-storage": "London Storage",
  "packing-service": "Packing Service",
  "man-and-van": "Man and Van Services",
  "packaging-materials": "Packaging Materials",
  "crate-hire": "Crate Hire",
  "rubbish-disposal": "Rubbish Disposal",
  "single-item-deliveries": "Single Item / E-bay Deliveries",
  "cleaning-services": "Cleaning Services",
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
    url: `${SITE.url}${path}`,
    areaServed: "London, United Kingdom",
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
    url: `${SITE.url}${path}`,
    ...(image ? { image: image.startsWith("http") ? image : `${SITE.url}${image}` } : {}),
    ...(iso ? { datePublished: iso, dateModified: iso } : {}),
    author: { "@type": "Person", name: author },
    publisher: { "@id": `${SITE.url}/#organization` },
    mainEntityOfPage: `${SITE.url}${path}`,
  };
}

/* ----------------------------- Homepage schema ---------------------------- */

export const HOME_FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "How much should I pay for removals in London?",
    answer:
      "Removal costs in London in 2026 depend on property size, access conditions and move complexity. For a full breakdown of the factors that affect price, see the cost guide on this page, or book a free survey for an exact fixed quote.",
  },
  {
    question: "Is it worth getting a removal company?",
    answer:
      "For full property moves, hiring a professional removal company saves time, reduces the risk of injury and provides insurance cover for your belongings. Van hire is cheaper upfront but places the entire physical and financial risk on you. For smaller single-item moves, a man and van service offers professional-grade cover at a lower cost than a full crew.",
  },
  {
    question: "What is the cheapest way to move in London?",
    answer:
      "The cheapest option by upfront cost is van hire, but it excludes goods-in-transit insurance and requires significant physical effort. For insured moves, a man and van service is the lowest-cost professional option for small volumes. For full property moves, getting multiple fixed quotes from BAR-accredited companies ensures competitive pricing with proper cover.",
  },
  {
    question: "What does a removal company do?",
    answer:
      "A removal company packs your belongings, wraps and protects furniture, loads the vehicle, transports everything to your new address and unloads at the destination. Full-service companies also provide packing materials, dismantle and reassemble furniture, arrange parking suspensions and offer storage between moves.",
  },
  {
    question: "Do you provide man and van services?",
    answer:
      "Yes. Our man and van service is available across all London boroughs for small moves, single-item collections, student relocations and short-distance moves. Hourly and fixed-price options are available. Goods-in-transit insurance is included as standard.",
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
    question: "What London areas do you cover?",
    answer:
      "Our removal crews cover all 32 London boroughs, Greater London and Surrey as standard. Nationwide and international moves are also covered. Find your local area on our areas page.",
  },
  {
    question: "Do you handle parking suspensions and permits?",
    answer:
      "Yes. Parking suspensions are arranged by our operations team as part of move planning. Loading bay bookings, goods lift reservations and School Streets timing restrictions are all managed in advance of move day.",
  },
  {
    question: "How do I get a removal quote?",
    answer:
      "Use the online removal calculator for an instant estimate, or book a free on-site or video survey for a fixed-price quote with no hidden fees. You can also call our team directly.",
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

