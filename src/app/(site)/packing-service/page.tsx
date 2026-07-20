import type { Metadata } from "next";
import { getResolvedSettings } from "@/lib/settings";
import { buildMetadata, serviceH1, SITE_URL, breadcrumbLd, organizationLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import Faq, { type FaqItem } from "@/components/services/Faq";
import PricingTable, { type PricingRow } from "@/components/services/PricingTable";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import PackingServiceAnimations from "@/components/services/PackingServiceAnimations";
import {
  IcoPhone,
  IcoClipboard,
  IcoBox,
  IcoCube,
  IcoTruck,
} from "@/components/services/ProcessStepIcons";
import { CheckIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("packing-service");

/* ── Schema ─────────────────────────────────────────────────────────────── */

const processSteps = [
  {
    name: "Request a free quote",
    text: "Contact us online, by phone, or WhatsApp. A coordinator responds quickly during working hours to confirm scope, date, and access.",
    Icon: IcoPhone,
  },
  {
    name: "Pre-move survey",
    text: "A video or on-site survey confirms room volumes, fragile items, specialist pieces, and the exact materials needed. A fixed quote is issued before any work begins.",
    Icon: IcoClipboard,
  },
  {
    name: "Materials confirmed",
    text: "Box counts, wrapping, crate sizes and any add-ons are finalised. All included materials arrive with the packing team on packing day.",
    Icon: IcoBox,
  },
  {
    name: "Packing day",
    text: "Teams arrive at the agreed time with all materials. Every box is packed, sealed, and labelled with its contents and destination room before loading begins.",
    Icon: IcoCube,
  },
  {
    name: "Delivery and optional unpacking",
    text: "Boxes are placed in the correct rooms at the new address. If you have booked unpacking, contents are unpacked and all waste, including boxes, wrap and paper, is collected and recycled.",
    Icon: IcoTruck,
  },
];

const heroServiceStandards = [
  "Fully insured removals",
  "Vetted moving crews",
  "Documented claims process",
  "Clear written quotations",
  "Written service terms",
  "International moving experience",
];

const packingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/packing-service#service`,
  name: "Nationwide Packing Service",
  serviceType: "Professional Packing Service",
  description:
    "Full, partial and fragile packing services across the UK. All materials included and fully insured.",
  url: `${SITE_URL}/packing-service`,
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  provider: { "@id": `${SITE_URL}/#organization` },
  offers: {
    "@type": "Offer",
    name: "Professional Packing Labour and Materials",
    description:
      "Approximately £6 per carton packed, labour and all materials included. Subject to survey.",
    priceCurrency: "GBP",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "6",
      priceCurrency: "GBP",
      unitText: "per carton",
      description: "Packing labour and materials (boxes, bubble wrap, paper, tape) combined",
    },
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How the Removals Nationwide Packing Service Works",
  description: "A five-step process from free quote to delivery and optional unpacking.",
  step: processSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
};

/* ── Content data ────────────────────────────────────────────────────────── */

const packingOptions = [
  {
    title: "Full Packing Service",
    body: "Our teams pack everything in every room: crockery, glassware, clothes, linen, books, lamps, pictures and furniture. Each box is labelled with its contents and destination room. We arrive with all materials one or two days before your loading date.",
  },
  {
    title: "Partial Packing",
    body: "Choose specific rooms or item types: kitchen fragiles, bedroom wardrobes, home office archives. You pack the rest. Partial packing is priced separately and available as a standalone booking or an add-on to any removal.",
  },
  {
    title: "Fragile-Only Packing",
    body: "China, glassware, artwork and antiques packed to specialist standards: acid-free paper, extra bubble wrap, rigid crates. Ideal when you are confident packing general items yourself but want professionals to protect what matters most.",
  },
  {
    title: "Unpacking with Waste Removal",
    body: "We unpack at the destination, place contents in the correct rooms, and remove all boxes, bubble wrap and paper. Removals Nationwide is a UK Environment Agency registered waste carrier. All materials are recycled, nothing goes to landfill.",
  },
  {
    title: "Materials and Consultation",
    body: "Prefer to pack yourself? We supply the correct box sizes, bubble wrap, paper and tape, and your coordinator advises on quantities and method. A cost-effective option for smaller, lower-value loads.",
  },
];

const packingTypes = [
  {
    title: "Fragile Packing",
    body: "Every fragile item receives an extra layer of bubble wrap and is placed in a rigid crate following a strict procedure. Our crews are trained in fragile packing to the same standard used for international shipping.",
  },
  {
    title: "Antiques and Artwork",
    body: "High-value or irreplaceable pieces are packed with acid-free paper to prevent chemical transfer, specialist padding, and bespoke crating where required. Items are noted at the survey stage so the correct protection is confirmed in advance.",
  },
  {
    title: "Export Packing",
    body: "Crating and wrapping to international shipping standards. Required for all overseas relocations, including our weekly removals to Norway and regular European routes, where goods transit multiple handling points.",
  },
  {
    title: "Blanket Wrap",
    body: "Large furniture that cannot be disassembled is wrapped in thick protective blankets before loading. Protects painted and lacquered surfaces, prevents scuffs in transit, and eliminates the need for boxes on oversized pieces.",
  },
];

const materials = [
  "Moving boxes in small, medium, large and wardrobe sizes",
  "Bubble wrap in standard and heavy-duty roll widths",
  "Wrapping paper",
  "Heavy-duty packing tape and dispensers",
  "Specialist packing crates for fragile and export-grade items",
  "IT and archive crates for office relocations",
];

const materialsAddOns = ["Mattress covers", "Sofa covers"];

const boxColumns = ["Property", "Total boxes (approx.)", "Bubble wrap", "Paper"];
const boxRows: PricingRow[] = [
  { label: "Studio flat", values: ["25 to 35", "2 to 3 rolls", "1 to 2 kg"] },
  { label: "1-bedroom flat", values: ["35 to 50", "3 to 4 rolls", "2 to 3 kg"] },
  { label: "2-bedroom flat", values: ["50 to 75", "4 to 6 rolls", "3 to 5 kg"] },
  { label: "3-bedroom house", values: ["75 to 110", "6 to 8 rolls", "5 to 7 kg"] },
  { label: "4-bedroom house", values: ["110 to 150", "8 to 12 rolls", "7 to 10 kg"] },
];

const timeColumns = ["Property", "2 packers", "3 packers"];
const timeRows: PricingRow[] = [
  { label: "Studio flat", values: ["2 to 3 hours", "1.5 to 2 hours"] },
  { label: "1-bedroom flat", values: ["3 to 5 hours", "2 to 3 hours"] },
  { label: "2-bedroom flat", values: ["5 to 7 hours", "3 to 5 hours"] },
  { label: "3-bedroom house", values: ["Full day", "5 to 6 hours"] },
  { label: "4-bedroom house", values: ["1.5 days", "Full day"] },
];

const costFactors = [
  "Number of rooms and total box count",
  "Full, partial or fragile-only scope",
  "Specialist items: antiques, artwork, pianos, servers",
  "Packing method: standard, export or blanket wrap",
  "Whether unpacking is included",
  "Booking packing with a removal (combined discount available)",
];

const proPoints = [
  "Large or multi-bedroom property with high box counts",
  "Fragile, antique or high-value items requiring specialist wrapping",
  "Tight moving timeline: packers work faster than most households",
  "Insurance policy requires professional packing for full liability cover",
  "You want all materials included and waste removed after unpacking",
];

const diyPoints = [
  "Small load: studio or 1-bed with low-value general items",
  "Flexible timeline: pack over several weeks at your own pace.",
  "Budget is the primary constraint and no fragile items are involved",
  "Our materials-and-consultation option gives you the right boxes and guidance at lower cost",
];

const londonAreas = [
  "Central London",
  "North London",
  "South London",
  "East London",
  "West London",
  "Canary Wharf",
  "Greenwich",
  "Richmond",
  "Wimbledon",
  "Clapham",
  "Islington",
  "Hackney",
  "Hammersmith",
  "Fulham",
  "Wandsworth",
  "Lambeth",
  "Southwark",
  "Tower Hamlets",
  "Barnet",
  "Bromley",
];

const faqs: FaqItem[] = [
  {
    question: "How much does a nationwide packing service cost?",
    answer:
      "Estimate the packing cost by multiplying the number of cartons by £6. A 100-carton job costs approximately £600, covering labour and all packing and wrapping materials: boxes, wrapping paper, bubble wrap, tape. The exact total depends on scope, fragile content and any specialist handling. A free survey produces an accurate fixed quote.",
  },
  {
    question: "What is included in the full packing service?",
    answer:
      "It includes packing all of the crockery, glassware, clothes, linen, lamps, books, pictures and so on into cartons and marking the cartons for positioning them at your new home. If a customer has requested us to do everything, we will come a day or two ahead of the scheduled loading date with all materials and complete the professional packing.",
  },
  {
    question: "Does the packing service come with full insurance?",
    answer:
      "Yes, everything we handle is covered by the insurance we hold. Speak to your moving coordinator about the different insurance options and policies available to you, depending on your destination.",
  },
  {
    question: "Do you supply all packing materials?",
    answer:
      "Yes. All boxes, bubble wrap, wrapping paper and tape are included in the quoted price for a full packing booking. Nothing is charged separately for these materials. Mattress covers and sofa covers are available as paid add-ons. If you prefer to pack yourself, materials are available separately through our packaging materials service.",
  },
  {
    question: "How many boxes do I need for my home?",
    answer:
      "A studio flat typically needs 25 to 35 boxes. A 1-bedroom flat needs around 35 to 50. A 2-bedroom flat requires 50 to 75, and a 3-bedroom house around 75 to 110. The exact quantity is confirmed at the survey, as volume varies significantly depending on how much has accumulated in the property over the years.",
  },
  {
    question: "How long does professional packing take?",
    answer:
      "A studio flat takes 2 to 3 hours for two packers. A 1-bedroom flat takes 3 to 5 hours. A 2-bedroom flat takes 5 to 7 hours. A 3-bedroom house typically takes a full day. Times increase when fragile or specialist items need extra wrapping. Three packers reduce times by roughly a third.",
  },
  {
    question: "Do you pack fragile items and antiques?",
    answer:
      "Yes. Fragile items, antiques, artwork and glassware are packed using acid-free paper, an extra layer of bubble wrap, and a strict crating procedure. Our crews are trained in specialist fragile packing. High-value pieces are noted at the survey stage so the appropriate protection method and crate type is confirmed in advance.",
  },
  {
    question: "Can I choose partial packing for selected rooms only?",
    answer:
      "Yes. Partial packing covers selected rooms, specific item types, or a single category such as kitchen glassware or bedroom wardrobes. You pack everything else yourself. Partial packing is quoted separately and is bookable as a standalone service or as an add-on to any removal.",
  },
  {
    question: "Do you offer an unpacking service?",
    answer:
      "Yes. The unpacking service places contents in the correct rooms, removes all packing waste and disposes of it responsibly. Removals Nationwide is a registered UK Environment Agency waste carrier, so all cardboard, bubble wrap and paper is collected and recycled. Unpacking is quoted as an add-on to any packing booking.",
  },
  {
    question: "Is it worth hiring professional packers?",
    answer:
      "Professional packing saves time and reduces the risk of breakage. It is worth it when you have fragile or high-value items, a large property, a tight moving timeline, or where your insurance policy requires professional packing for full liability cover. For small, low-value loads, a materials and consultation booking is a better fit.",
  },
  {
    question: "Do you recycle packing waste after unpacking?",
    answer:
      "Yes. All packing materials, including cardboard boxes, bubble wrap, paper and tape, are collected after unpacking and recycled under Removals Nationwide' UK Environment Agency waste carrier registration. No landfill. All waste is documented and disposed of responsibly.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const orgSchema = organizationLd();

const packingBreadcrumb = breadcrumbLd([
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Nationwide Packing Service", href: "/packing-service" },
]);

/* ── Page component ──────────────────────────────────────────────────────── */

export default async function PackingServicePage() {
  const { phones } = await getResolvedSettings();
  return (
    <>
      <JsonLd data={packingServiceSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqPageSchema} />
      <JsonLd data={{ ...orgSchema }} />
      <JsonLd data={packingBreadcrumb} />
      <PackingServiceAnimations />
      <StickyMobileBar sentinelId="hero-intro" />

      <PageBanner
        title={serviceH1["packing-service"]}
        subtitle="Cartons x £6 · Materials and Labour Included · Fully Insured · Fragile and Export Packing"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Nationwide Packing Service" },
        ]}
      />

      {/* ── S1: Hero intro ─────────────────────────────────────────────── */}
      <section className="bg-white pt-12 pb-0" id="hero-intro">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:pb-16">
          {/* Left: copy */}
          <div>
            <p className="hero-anim-sub text-sm font-bold uppercase tracking-widest text-brand-red">
              Professional Packing · Nationwide
            </p>
            <p className="hero-anim-sub mt-3 text-lg font-semibold leading-relaxed text-brand-navy">
              Removals Nationwide provides a professional packing service for homes and offices across
              the UK. Every booking includes all materials: boxes, bubble wrap, paper and tape,
              at no extra charge.
            </p>
            <p className="hero-anim-sub mt-4 text-base leading-relaxed text-brand-charcoal/85">
              Fully insured and industry-experienced, our crews are trained in fragile, antique, export and
              blanket-wrap packing to the same standards used for international shipments. A free
              online quote takes under 2 minutes.
            </p>

            <div className="hero-anim-ctas mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/bookservice#quick-quote" variant="red" size="lg">
                Quick Quote
              </Button>
              <Button href="/bookservice" variant="navy" size="lg">
                Book a Service
              </Button>
              <Button href="tel:02072052525" variant="outline" size="lg">
                {phones.london.label}
              </Button>
            </div>

            {/* Trust pills */}
            <p className="hero-anim-trust mt-6 text-sm font-medium text-brand-charcoal/70">
              Fully insured &nbsp;·&nbsp; industry experienced &nbsp;·&nbsp; All materials included
              &nbsp;·&nbsp; EA waste carrier
            </p>
          </div>

          {/* Right: image + trust card */}
          <div data-reveal data-delay="1" className="overflow-hidden rounded-2xl border border-black/10 shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?auto=format&fit=crop&w=2400&q=82"
                alt="Removals Nationwide professional packer carefully wrapping belongings in bubble wrap"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="bg-brand-grey p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-navy">
                Service highlights
              </p>
              <ul className="space-y-2">
                {heroServiceStandards.map((name) => (
                  <li key={name} className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 shrink-0 text-brand-red" strokeWidth={3} />
                    <span className="text-sm text-brand-navy/85">{name}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-4 border-t border-black/10 pt-4">
                <Link
                  href="/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand-red underline underline-offset-2 hover:text-brand-navy"
                >
                  Service standards →
                </Link>
                <Link
                  href="/about-us"
                  className="text-xs font-semibold text-brand-red underline underline-offset-2 hover:text-brand-navy"
                >
                  About us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to Book Your Nationwide Packing Service?"
        buttonLabel="Quick Quote"
        buttonHref="/bookservice#quick-quote"
      />

      {/* ── S2: What is professional packing ───────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal className="mx-auto max-w-3xl">
            <SectionHeading
              align="left"
              eyebrow="Professional packing"
              title="What Does a Professional Packing Service Include?"
            />
            <p className="mt-6 text-base leading-relaxed text-brand-charcoal/85">
              A professional packing service means trained crews arrive at your property with all
              materials, pack every item methodically, label each box for room placement, and leave
              with waste after unpacking. In 2026 a full-service London packing job typically covers
              crockery, glassware, clothes, linen, books, lamps, pictures and furniture, everything
              from the smallest ornament to the largest wardrobe, delivered clearly labelled and ready
              to unpack.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-charcoal/85">
              The difference from DIY is speed, materials quality, and insurance: Removals Nationwide crews
              pack faster because it is their daily trade, use quality boxes and specialist crating,
              and all items they handle are covered under goods-in-transit insurance. For fragile, antique, or high-value items the gap in
              protection is significant.
            </p>
            <p className="mt-4 text-sm text-brand-charcoal/60">
              See also:{" "}
              <Link href="/packaging-materials" className="underline hover:text-brand-red">
                Packaging Materials
              </Link>{" "}
              &middot;{" "}
              <Link href="/crate-hire" className="underline hover:text-brand-red">
                Crate Hire
              </Link>{" "}
              &middot;{" "}
              <Link href="/house-removals" className="underline hover:text-brand-red">
                House Removals
              </Link>{" "}
              &middot;{" "}
              <Link href="/man-and-van-london" className="underline hover:text-brand-red">
                Man and Van
              </Link>{" "}
              &middot;{" "}
              <Link href="/storage" className="underline hover:text-brand-red">
                Storage
              </Link>{" "}
              &middot;{" "}
              <Link href="/areas" className="underline hover:text-brand-red">
                Service Areas
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── S3: Packing options ─────────────────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Choose your service"
            title="Packing Service Options"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/80">
            Full, partial, fragile-only, unpacking, or materials supply. Choose the scope that fits
            your move.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packingOptions.map((opt, i) => (
              <div
                key={opt.title}
                data-reveal
                data-delay={String(i + 1)}
                className="group flex flex-col rounded-2xl border border-black/8 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <h3 className="text-lg font-bold text-brand-navy">{opt.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-brand-charcoal/85">
                  {opt.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S4: Specialist packing types ────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Specialist methods"
            title="Types of Professional Packing"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/80">
            Four specialist techniques for items that need more than a standard cardboard box.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packingTypes.map((type, i) => (
              <div
                key={type.title}
                data-reveal
                data-delay={String(i + 1)}
                className="group flex flex-col rounded-2xl border border-black/8 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <h3 className="text-base font-bold text-brand-navy">{type.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-brand-charcoal/85">
                  {type.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S5: Materials ──────────────────────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="What we bring"
              title="Packing Materials We Supply"
            />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/80">
              All materials are included in the packing quote. No surprises on moving day.
            </p>
          </div>
          <ul
            data-reveal
            className="mx-auto mt-10 grid max-w-4xl list-none grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {materials.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-black/8 bg-white px-5 py-4 shadow-sm"
              >
                <span aria-hidden="true" className="mt-0.5 text-brand-red">&#10003;</span>
                <span className="text-base leading-relaxed text-brand-charcoal/85">{item}</span>
              </li>
            ))}
          </ul>
          <p data-reveal className="mx-auto mt-6 max-w-2xl text-center text-xs text-brand-charcoal/50">
            Available as add-ons: {materialsAddOns.join(", ")}.
          </p>
          <p data-reveal className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-charcoal/60">
            Need materials without a packing crew? Individual prices when ordered separately: boxes
            £5 each, wardrobe box £14, bubble wrap £10 per roll, tape £2, mattress cover £8.{" "}
            <Link href="/packaging-materials" className="underline hover:text-brand-red">
              Order packaging materials separately
            </Link>{" "}
            or{" "}
            <Link href="/crate-hire" className="underline hover:text-brand-red">
              hire specialist crates
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── S6: How many boxes ─────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="Box guide"
              title="How Many Boxes Does My Home Need?"
            />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/80">
              Approximate materials by property size. Your coordinator confirms exact quantities at
              the survey. Actual volumes vary with how much has accumulated in the property.
            </p>
          </div>
          <div data-reveal>
            <PricingTable
              columns={boxColumns}
              rows={boxRows}
              className="mt-10"
            />
          </div>
          <p data-reveal className="mx-auto mt-4 max-w-2xl text-center text-xs text-brand-charcoal/50">
            These figures are a guide. Your coordinator confirms exact quantities at your free survey.
            Add 10 to 15% for homes with extensive kitchens, large book collections, or significant
            accumulated storage.
          </p>
        </div>
      </section>

      {/* ── S7: How long packing takes ─────────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="Time guide"
              title="How Long Does Professional Packing Take?"
            />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/80">
              Packing times by property size. Fragile-heavy or specialist items add time. Your
              coordinator builds this into the schedule.
            </p>
          </div>
          <div data-reveal>
            <PricingTable
              columns={timeColumns}
              rows={timeRows}
              className="mt-10"
            />
          </div>
          <p data-reveal className="mx-auto mt-4 max-w-2xl text-center text-xs text-brand-charcoal/50">
            These figures are a guide. Your coordinator confirms exact times at your free survey.
            Three packers reduce time by roughly a third. Fragile-only bookings typically take 20 to
            30% longer per box due to the additional wrapping layers.
          </p>
        </div>
      </section>

      {/* ── S8: Pricing ────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Transparent pricing"
            title="Packing Service Prices"
          />

          {/* Price mechanic: deliberate reveal */}
          <div
            data-reveal
            data-delay="1"
            className="mx-auto mt-10 max-w-2xl rounded-2xl border border-brand-red/30 bg-brand-red/5 px-8 py-8 text-center shadow-sm"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red">
              The per-carton rule
            </p>
            <p className="mt-4 text-4xl font-extrabold text-brand-navy">
              Cartons x £6
            </p>
            <p className="mt-3 text-base leading-relaxed text-brand-charcoal/80">
              Multiply the number of cartons your home needs by £6 for an accurate estimate.
              A&nbsp;100-carton job costs approximately{" "}
              <strong className="text-brand-navy">£600</strong>, covering labour and all
              packing materials (boxes, bubble wrap, paper, tape). Nothing charged separately.
              Prices are subject to VAT at 20%.
            </p>
            <p className="mt-4 text-sm text-brand-charcoal/60">
              Final price is fixed after a free survey. Packing booked alongside a{" "}
              <Link href="/house-removals" className="underline hover:text-brand-red">
                house removal in London
              </Link>{" "}
              attracts a combined discount.{" "}
              <Link href="/prices" className="underline hover:text-brand-red">
                See full prices
              </Link>
            </p>
          </div>

          {/* Cost factors */}
          <div data-reveal data-delay="2" className="mx-auto mt-10 max-w-2xl">
            <h3 className="text-base font-bold text-brand-navy">What affects the final price?</h3>
            <ul className="mt-4 space-y-2">
              {costFactors.map((f) => (
                <li key={f} className="flex items-start gap-3 text-base leading-relaxed text-brand-charcoal/85">
                  <span aria-hidden="true" className="mt-1 text-brand-red">·</span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center">
              <Button href="/bookservice#quick-quote" variant="red" size="md">
                Quick Quote
              </Button>
            </p>
          </div>
        </div>
      </section>

      {/* ── S9: Professional vs DIY ─────────────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="Is it worth it?"
              title="Professional Packing vs Packing Yourself"
            />
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            <div
              data-reveal
              data-delay="1"
              className="rounded-2xl border border-brand-navy/15 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-bold text-brand-navy">When professional packing is worth it</h3>
              <ul className="mt-4 space-y-3">
                {proPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-base leading-relaxed text-brand-charcoal/85">
                    <span aria-hidden="true" className="mt-1 shrink-0 text-brand-red">&#10003;</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div
              data-reveal
              data-delay="2"
              className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm"
            >
              <h3 className="text-base font-bold text-brand-navy">When DIY or partial packing fits</h3>
              <ul className="mt-4 space-y-3">
                {diyPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-base leading-relaxed text-brand-charcoal/85">
                    <span aria-hidden="true" className="mt-1 shrink-0 text-brand-charcoal/40">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p data-reveal className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-brand-charcoal/60">
            Packing is available with any removal: full house moves, smaller{" "}
            <Link href="/man-and-van-london" className="underline hover:text-brand-red">
              man and van bookings
            </Link>
            {" "}and office relocations. Your coordinator confirms the right scope and price at the free survey.
          </p>
        </div>
      </section>

      {/* ── S10: Process — care timeline ─────────────────────────────── */}
      <section id="process" className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="How it works"
              title="The Packing Process, Step by Step"
            />
          </div>

          <div className="relative mx-auto mt-12 max-w-2xl">
            {/* Vertical rail */}
            <div
              aria-hidden="true"
              className="absolute left-[1.375rem] top-5 bottom-5 w-0.5 bg-brand-navy/10"
            >
              <span
                id="ps-process-fill"
                className="absolute top-0 left-0 w-full bg-brand-red/60 transition-[height] duration-700 ease-out"
                style={{ height: 0 }}
              />
            </div>

            <ol className="space-y-5">
              {processSteps.map((step, i) => {
                const { Icon } = step;
                return (
                  <li
                    key={step.name}
                    data-reveal
                    data-delay={String(i + 1)}
                    data-ps-step={String(i + 1)}
                    className="relative flex items-start gap-4"
                  >
                    {/* Number on the rail */}
                    <span
                      className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-sm ring-2 ${
                        i === 0
                          ? "bg-brand-red text-white ring-brand-red"
                          : "bg-white text-brand-navy ring-brand-navy/20"
                      }`}
                    >
                      {i + 1}
                    </span>

                    {/* Card */}
                    <div className="flex-1 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-base font-bold text-brand-navy">{step.name}</p>
                        <span aria-hidden="true" className="mt-0.5 shrink-0 text-brand-red/70">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
                        {step.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div data-reveal className="mt-10 flex justify-center">
            <Button href="/bookservice#quick-quote" variant="red" size="lg">
              Quick Quote
            </Button>
          </div>
        </div>
      </section>

      {/* ── S11: Insurance, Service Highlights and Recycling ────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal className="mx-auto max-w-3xl text-center">
            <SectionHeading
              tone="light"
              eyebrow="Covered and trained"
              title="Insurance, Service Highlights and Recycling"
            />
            <p className="mt-6 text-base leading-relaxed text-white/80">
              All items handled by Removals Nationwide are covered by goods-in-transit and public liability
              insurance. Speak to your moving coordinator about the insurance options available
              depending on your service type and destination.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div
              data-reveal
              data-delay="1"
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red">
                Service Highlights
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Fully insured removals",
                  "Vetted moving crews",
                  "International moving experience",
                  "Documented claims process",
                  "Clear written quotations",
                  "Written service terms",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-2 text-sm leading-relaxed text-white/80">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-brand-red">&#10003;</span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>

            <div
              data-reveal
              data-delay="2"
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red">
                Licensed Waste Carrier
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Removals Nationwide is registered with the UK Environment Agency as a licensed waste
                carrier, registration CBDL25630. All packing waste collected after unpacking is
                recycled. Nothing goes to landfill.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                We also collect and responsibly dispose of WEEE items (waste electrical and
                electronic equipment) as part of any removal or unpacking booking.
              </p>
            </div>

            <div
              data-reveal
              data-delay="3"
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red">
                Company Details
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Registered in England and Wales, Company No. 6874216.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Unit C1A Purfleet Industrial Park, Kerry Avenue, Purfleet, RM15 4YA.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {phones.london.label} &nbsp;·&nbsp; {phones.freephone.label}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── S12: Areas ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="Where we work"
              title="Packing Service Areas in London"
            />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/80">
              We pack homes and offices across London, Greater London, Surrey, and nationwide.
              Export packing is available for all international routes.
            </p>
          </div>
          <ul
            data-reveal
            className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {londonAreas.map((area) => (
              <li
                key={area}
                className="rounded-lg border border-black/8 bg-brand-grey px-4 py-2.5 text-center text-sm font-medium text-brand-navy"
              >
                {area}
              </li>
            ))}
          </ul>
          <p data-reveal className="mx-auto mt-6 max-w-2xl text-center text-xs text-brand-charcoal/50">
            Coverage shown is indicative. Your coordinator confirms access for your specific address at the survey.
          </p>
          <p data-reveal className="mx-auto mt-3 max-w-2xl text-center text-sm text-brand-charcoal/60">
            Not in this list?{" "}
            <Link href="/bookservice#quick-quote" className="underline hover:text-brand-red">
              Get a quote
            </Link>
            . We cover the full Greater London area and travel nationwide for large jobs.
          </p>
        </div>
      </section>

      {/* ── S13: Reviews ────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading
              tone="light"
              eyebrow="Service standards"
              title="How We Define Our Service"
            />
            <p className="mt-6 text-base leading-relaxed text-white/80">
              Our written quotations and insurance documents set out the agreed service before booking.{" "}
              <a
                href="/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-red underline underline-offset-2 hover:text-white"
              >
                Read our service standards
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── S14: Final CTA ──────────────────────────────────────────────── */}
      <CtaBand
        heading="Ready to Book Your Nationwide Packing Service?"
        buttonLabel="Quick Quote"
        buttonHref="/bookservice#quick-quote"
      />

      {/* ── S15: FAQs ───────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Good to know" title="Packing Service FAQs" />
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>
    </>
  );
}
