import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata, serviceH1, SITE_URL, breadcrumbLd, organizationLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import Accreditations from "@/components/home/Accreditations";
import CheckList, { type CheckItem } from "@/components/services/CheckList";
import PricingTable, { type PricingRow } from "@/components/services/PricingTable";
import {
  IcoPhone,
  IcoDocument,
  IcoCheck,
  IcoWrench,
  IcoTruck,
  IcoHome,
} from "@/components/services/ProcessStepIcons";
import Faq, { type FaqItem } from "@/components/services/Faq";
import { CheckIcon } from "@/components/ui/icons";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import ManAndVanAnimations from "@/components/services/ManAndVanAnimations";

export const metadata: Metadata = buildMetadata("man-and-van");

/* ─────────────────────────────────────────────────────────────
   PAGE-LEVEL SCHEMA
   ──────────────────────────────────────────────────────────── */

const manAndVanSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/man-and-van-london#service`,
  name: "Man and Van London",
  serviceType: "Man and Van Moving Service",
  description:
    "Professional man and van service across London from £55 per hour. 7 days a week, same-day and short-notice slots available. Fully insured, BAR-accredited.",
  url: `${SITE_URL}/man-and-van-london`,
  areaServed: { "@type": "AdministrativeArea", name: "Greater London" },
  provider: { "@id": `${SITE_URL}/#organization` },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Man and Van Prices London 2026",
    itemListElement: [
      {
        "@type": "Offer",
        name: "1 Man and Van, Per Hour (min. 2 hours)",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "55",
          priceCurrency: "GBP",
          unitCode: "HUR",
        },
      },
      {
        "@type": "Offer",
        name: "2 Men and Van, Per Hour (min. 2 hours)",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "70",
          priceCurrency: "GBP",
          unitCode: "HUR",
        },
      },
      {
        "@type": "Offer",
        name: "3 Men and Van, Per Hour (min. 2 hours)",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "90",
          priceCurrency: "GBP",
          unitCode: "HUR",
        },
      },
      {
        "@type": "Offer",
        name: "1 Man and Van, Half Day (up to 4 hours)",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "210",
          priceCurrency: "GBP",
        },
      },
      {
        "@type": "Offer",
        name: "1 Man and Van, Full Day (up to 8 hours)",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "420",
          priceCurrency: "GBP",
        },
      },
    ],
  },
};

/* ─────────────── Section 3: Prices ─────────────── */

const pricingColumns = ["", "1 man", "2 men", "3 men"];
const pricingRows: PricingRow[] = [
  { label: "Per hour (min. 2 hours)", values: ["£55", "from £70", "from £90"] },
  { label: "Half day (up to 4 hours)", values: ["£210", "from £260", "from £330"] },
  { label: "Full day (up to 8 hours)", values: ["£420", "from £500", "from £620"] },
];

const priceFactors: CheckItem[] = [
  {
    lead: "Crew size",
    text: "One mover suits light loads and studios. Two movers handle most 1 to 2-bedroom flats. Three movers reduce loading time in staircase buildings or top-floor flats.",
  },
  {
    lead: "Van size",
    text: "Small and medium vans suit single items and studios. A Luton van is needed for 1 to 2-bedroom flats and heavier loads. The right vehicle is confirmed at the survey.",
  },
  {
    lead: "Hours needed",
    text: "The minimum booking is 2 hours. Jobs are charged in full hours thereafter. A free survey or a description of the job size lets us give an accurate time estimate.",
  },
  {
    lead: "Distance between addresses",
    text: "Driving time between the pickup and delivery addresses is included in the hourly rate. Longer drives or cross-London moves take more time.",
  },
  {
    lead: "Floor level and lift access",
    text: "A fourth-floor flat without a lift takes more crew time than a ground-floor property. Lift reservations in managed buildings are arranged in advance.",
  },
  {
    lead: "Parking and access",
    text: "Permit zones and narrow streets affect van placement. Borough parking suspensions are arranged by our operations team where needed.",
  },
];

/* ─────────────── Section 7: Process ─────────────── */

const processSteps = [
  {
    name: "Contact us for a quote",
    text: "Call 020 7205 2525 or submit the quick quote form. Describe the pickup and delivery addresses, what needs moving and the preferred date. For same-day requests, calling is faster.",
  },
  {
    name: "Receive a fixed written quote",
    text: "We provide a written fixed-price quote by phone or email. The rate covers the crew, van, fuel and standard loading time. Congestion zone and tunnel charges are confirmed in the quote for your specific route.",
  },
  {
    name: "Confirm your booking",
    text: "Accept the quote and confirm the moving date. For permit-zone addresses, our operations team arranges the borough parking suspension at this stage so it is in place for move day.",
  },
  {
    name: "Prepare for move day",
    text: "Confirm parking access at both addresses. Label fragile boxes. Disassemble flat-pack furniture yourself if preferred, or ask us to do it on the day as part of the booking.",
  },
  {
    name: "Move day: load and transport",
    text: "The crew arrives at the agreed time with the van, removal blankets, heavy-duty straps and a sack trolley. Items are loaded, secured and driven to the delivery address.",
  },
  {
    name: "Unload and complete",
    text: "Items are unloaded and placed where you direct. The job is finished when you are satisfied. Specialist items such as pianos are positioned and confirmed secure before the crew leaves.",
  },
];

const processIcons = [IcoPhone, IcoDocument, IcoCheck, IcoWrench, IcoTruck, IcoHome];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Your Man and Van Move in London Works, Step by Step",
  description:
    "The step-by-step process for booking and completing a man and van move with Removals Nationwide in London.",
  step: processSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
};

/* ─────────────── Section 9: Trust ─────────────── */

const accreditations = [
  {
    name: "British Association of Removers (BAR)",
    signal: "Industry standards body with a formal complaints and arbitration process.",
  },
  {
    name: "National Guild of Removers and Storers (NGRS)",
    signal: "Approved code scheme providing independent dispute resolution.",
  },
  {
    name: "The Furniture Ombudsman",
    signal: "Independent dispute resolution scheme for the furniture and removals sector.",
  },
  {
    name: "QSS-DW Approved Mover",
    signal: "Quality standard independently assessed for removals and storage operations.",
  },
  {
    name: "Checkatrade",
    signal: "Verified trading history and customer review platform.",
  },
  {
    name: "International Association of Movers (IAM)",
    signal: "International moving standards and professional network membership.",
  },
];

/* ─────────────── Section 10: Areas ─────────────── */

const areaGroups = [
  {
    direction: "North London",
    boroughs: [
      { name: "Enfield", href: "/areas/enfield" },
      { name: "Barnet", href: "/areas/barnet" },
      { name: "Camden", href: "/areas/camden" },
      { name: "Islington", href: "/areas/islington" },
      { name: "Hackney", href: "/areas/hackney" },
      { name: "Haringey", href: "/areas/haringey" },
    ],
  },
  {
    direction: "South London",
    boroughs: [
      { name: "Wandsworth", href: "/areas/wandsworth" },
      { name: "Lambeth", href: "/areas/lambeth" },
      { name: "Croydon", href: "/areas/croydon" },
      { name: "Lewisham", href: "/areas/lewisham" },
      { name: "Merton", href: "/areas/merton" },
      { name: "Sutton", href: "/areas/sutton" },
    ],
  },
  {
    direction: "East London",
    boroughs: [
      { name: "Tower Hamlets", href: "/areas/tower-hamlets" },
      { name: "Newham", href: "/areas/newham" },
      { name: "Greenwich", href: "/areas/greenwich" },
      { name: "Waltham Forest", href: "/areas/waltham-forest" },
      { name: "Redbridge", href: "/areas/redbridge" },
      { name: "Barking and Dagenham", href: "/areas/barking-and-dagenham" },
    ],
  },
  {
    direction: "West London",
    boroughs: [
      { name: "Kensington and Chelsea", href: "/areas/kensington-and-chelsea" },
      { name: "Hammersmith and Fulham", href: "/areas/hammersmith-and-fulham" },
      { name: "Ealing", href: "/areas/ealing" },
      { name: "Hounslow", href: "/areas/hounslow" },
      { name: "Richmond upon Thames", href: "/areas/richmond-upon-thames" },
      { name: "Kingston upon Thames", href: "/areas/kingston-upon-thames" },
    ],
  },
];

/* ─────────────── Section 13: FAQs ─────────────── */

const faqs: FaqItem[] = [
  {
    question: "How much does a man and van cost in London?",
    answer:
      "A man and van in London starts from £55 per hour (minimum 2 hours) for one mover and a van. Two movers start from £70 per hour and three movers from £90 per hour. Half-day and full-day rates reduce the effective hourly cost. The final price depends on crew size, van size, hours needed, distance and access conditions at both addresses.",
    answerAfter:
      "Request a free survey or call 020 7205 2525 for a confirmed written quote.",
  },
  {
    question: "Is there a minimum booking for a man and van in London?",
    answer:
      "The minimum booking is 2 hours. This covers the journey to you, the loading, the drive and the delivery. For most single-item jobs and short local moves, 2 hours is the right allowance. If you are unsure, describe the job when you request the quote and we will advise the correct time to book.",
  },
  {
    question: "Do man and van prices include fuel and mileage?",
    answer:
      "The hourly rate includes the driver, the van and standard loading time. Fuel and mileage within Greater London are included in the quoted rate. Congestion zone charges and Dartford crossing tolls apply as they arise on the specific route and are always confirmed in writing before the booking date. There are no hidden fees added on the day.",
  },
  {
    question: "What is the cheapest day to book a man and van in London?",
    answer:
      "Tuesday, Wednesday and Thursday are typically the most cost-effective days for a man and van booking. Fridays carry a premium due to high demand, and weekend rates are also higher. End-of-month dates and the summer months from June to August book out early. If your date is flexible, ask when you request a quote and we will advise the best available slot.",
  },
  {
    question: "Is a man and van cheaper than a removal company?",
    answer:
      "For studios, bedsits and 1 to 2-bedroom flats, a man and van is almost always cheaper than a full house removal service. For larger homes or moves that require professional packing, a full removal crew is better value because the crew size, vehicle and planning are matched to the scale of the job. Using a man and van for a job that needs full removals typically costs more in crew hours than the rate difference saves.",
    answerAfter: "See the man and van versus full removals guide further down this page.",
  },
  {
    question: "Are my belongings insured with a man and van service?",
    answer:
      "Yes. Goods-in-transit insurance is included in the quoted rate and covers your belongings from loading to delivery. Public liability insurance covers damage caused to your property during the move. Both policies are active on every booking without exception. If something is damaged, there is a clear claims process rather than an unenforceable verbal assurance.",
  },
  {
    question: "Can you move a single item or a piano?",
    answer:
      "Yes. The man and van service is well suited to single-item moves: a sofa, a bed, a wardrobe, a fridge or a dining table. Pianos and musical instruments are also moved; specialist crews using piano boards and skates handle upright and grand pianos. Piano moves carry a specialist fee, confirmed in the free quote before booking.",
  },
  {
    question: "Can you come the same day?",
    answer:
      "Yes, subject to crew and vehicle availability. Same-day and short-notice slots are kept available each day for urgent bookings. To check same-day availability call 020 7205 2525 directly for the fastest response. The online quick quote form is also available; a callback arrives within the hour for short-notice requests.",
  },
  {
    question: "What van size do I need?",
    answer:
      "A small or medium van covers single items, light loads and studios. A Luton van is the right choice for 1 to 2-bedroom flats and any job with larger furniture or a full property load. If you are unsure, describe the move when you request a quote: we will recommend the correct vehicle after reviewing the volume, access and distance for your specific job.",
    answerAfter: "See the van size and crew guide further up this page for a move-type breakdown.",
  },
  {
    question: "Do you arrange parking permits for a man and van?",
    answer:
      "Yes. If a permit zone or council-managed loading bay prevents the van from parking close to your property, our operations team arranges a borough parking suspension in advance. Council parking suspensions typically require 2 to 5 working days to arrange. Let us know about any access restrictions when you request your quote and we will handle it.",
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

const manVanBreadcrumb = breadcrumbLd([
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Man and Van London", href: "/man-and-van-london" },
]);

/* ═══════════════════════════════════════════════════════════ */

export default function ManAndVanPage() {
  return (
    <>
      <JsonLd data={manAndVanSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={faqPageSchema} />
      <JsonLd data={{ ...orgSchema }} />
      <JsonLd data={manVanBreadcrumb} />

      {/* ── S1: Hero ── */}
      <PageBanner
        title="Man and Van London"
        h1={serviceH1["man-and-van"]}
        subtitle="From £55/hr plus VAT · Same Day · 7 Days a Week · Accredited and Insured"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Man and Van London" },
        ]}
      />

      {/* S1 continued: intro + above-fold CTAs */}
      <section id="hero-intro" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">

            {/* Left: value prop + CTAs */}
            <div>
              {/* hero-anim-sub: fade-slides in once .js is on <html> (see ManAndVanAnimations) */}
              <p className="hero-anim-sub max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                Removals Nationwide provides man and van services across London from{" "}
                <strong>£55 per hour</strong>, 7 days a week, with same-day and short-notice slots
                available. One mover and a van suits a single item or studio flat; two movers handle
                a 1 to 2-bedroom flat comfortably. Every booking is fully insured and fixed-price
                from survey to delivery.
              </p>
              <p className="hero-anim-sub mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                Get a free quote in under 2 minutes, or book a service for a confirmed date.
              </p>

              <div className="hero-anim-sub mt-5 inline-flex items-center gap-3 rounded-xl border border-brand-navy/10 bg-brand-navy/5 px-5 py-3">
                <span className="text-2xl font-black text-brand-orange">From £55/hr</span>
                <span aria-hidden="true" className="h-4 w-px bg-brand-charcoal/20" />
                <span className="text-sm font-medium text-brand-charcoal/70">plus VAT · min. 2 hrs</span>
              </div>

              <div className="hero-anim-ctas mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href="/bookservice#quick-quote"
                  variant="orange"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Quick Quote
                </Button>
                <Button
                  href="/bookservice"
                  variant="navy"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book a Service
                </Button>
                <Button
                  href="tel:+442072052525"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  020 7205 2525
                </Button>
              </div>

              <p className="hero-anim-trust mt-3 text-xs font-medium text-brand-charcoal/55">
                Free quote. Fixed price. No obligation.
              </p>

              <div className="hero-anim-trust mt-5 flex flex-wrap gap-2">
                {[
                  "Fully Insured",
                  "BAR Accredited",
                  "7 Days a Week",
                  "Same Day Available",
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-grey px-3 py-1.5 text-xs font-semibold text-brand-navy"
                  >
                    <CheckIcon className="h-3.5 w-3.5 text-brand-orange" strokeWidth={3} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: trust panel + van photo */}
            <div
              className="overflow-hidden rounded-2xl border border-black/10 shadow-sm"
              data-reveal
              data-delay="1"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="https://www.top-removals.co.uk/wp-content/uploads/2025/05/man-and-van-service-London.jpg"
                  alt="Removals Nationwide professional mover loading a van for a man and van move in London"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-brand-grey p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-navy">
                  Trusted and certified by
                </p>
                <ul className="space-y-2">
                  {accreditations.map(({ name }) => (
                    <li key={name} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 shrink-0 text-brand-orange" strokeWidth={3} />
                      <span className="text-sm text-brand-navy/85">{name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4 border-t border-black/10 pt-4">
                  <Link
                    href="https://uk.trustpilot.com/review/removalsnationwide.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                  >
                    Trustpilot reviews →
                  </Link>
                  <Link
                    href="/certificates"
                    className="text-xs font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                  >
                    View certificates →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to Get Your Man and Van Quote?"
        buttonLabel="Quick Quote"
        buttonHref="/bookservice#quick-quote"
      />

      {/* ── S2: What is a man and van service ── */}
      <section id="what-is" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            align="left"
            eyebrow="Service definition"
            title="What Is a Man and Van Service in London?"
          />
          <div
            className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-brand-charcoal/85"
            data-reveal
          >
            <p>
              A man and van service in London provides a professional driver, a fully equipped van
              and optional loading and unloading help, billed by the hour. Crew size and van size are
              matched to your move: a small or medium van with one mover suits a single item or
              studio flat; a Luton van with two movers covers 1 and 2-bedroom flats comfortably.
            </p>
            <p>
              In 2026, the typical London man and van booking covers furniture collections, student
              moves, single-item deliveries, marketplace collections and part-loads that do not
              justify a full removal crew. For properties of three bedrooms or more, or for moves
              requiring{" "}
              <Link
                href="/packing-service"
                className="text-brand-orange underline underline-offset-2 hover:text-brand-navy"
              >
                professional packing
              </Link>
              , a{" "}
              <Link
                href="/house-removals"
                className="text-brand-orange underline underline-offset-2 hover:text-brand-navy"
              >
                full house removal service
              </Link>{" "}
              is the recommended option.
            </p>
          </div>
        </div>
      </section>

      {/* ── S3: Prices ── */}
      <section id="prices" className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Transparent rates 2026"
            title="Man and Van Prices in London"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            The rate you are quoted is the rate you pay. Each booking includes the driver, van,
            loading and unloading, goods-in-transit insurance, and fuel and mileage within Greater
            London. Congestion zone and tunnel charges are confirmed in writing before the booking
            date, as they depend on the specific route.
          </p>

          {/* data-mv-prices enables page-scoped hover on the mobile stacked cards */}
          <div data-mv-prices data-reveal>
            <PricingTable
              className="mx-auto mt-10 max-w-3xl"
              columns={pricingColumns}
              rows={pricingRows}
            />
          </div>

          <p className="mx-auto mt-4 max-w-3xl text-center text-xs text-brand-charcoal/60">
            Minimum 2 hours on all bookings. Additional hours charged at the hourly rate.
            All prices are subject to VAT at 20%.
          </p>

          <div
            className="mx-auto mt-10 max-w-3xl rounded-2xl bg-brand-grey p-8"
            data-reveal
          >
            <h3 className="text-base font-bold uppercase tracking-wide text-brand-navy">
              What affects your man and van price?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
              Six main factors determine the final cost. Use them to pick the right crew size and the most cost-effective slot.
            </p>
            <CheckList items={priceFactors} className="mt-6" />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/bookservice" variant="orange" size="md">
                Estimate My Move
              </Button>
              <Button href="/prices" variant="navy" size="md">
                Full Prices Page
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── S4: Van size and crew guide ── */}
      <section id="van-guide" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Match your move"
            title="Which Van Size and How Many Movers Do You Need?"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            The right van and crew combination depends on your property size, the volume of items
            and the access conditions at both addresses. Use the guide below to pick a starting
            point.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Single item or light load",
                body: "A single piece of furniture, a few boxes or a studio move with minimal belongings. Same-day and short-notice bookings are easiest to accommodate at this size.",
                van: "Small or medium van",
                crew: "1 mover",
              },
              {
                title: "Studio or bedsit",
                body: "A full studio or bedsit move typically completes in half a day. Floor level and lift access affect crew time and are noted at the survey or on the phone.",
                van: "Medium or Luton van",
                crew: "1 to 2 movers",
              },
              {
                title: "1 to 2-bedroom flat",
                body: "The most common man and van job. A Luton van with two movers handles a 1 or 2-bedroom flat in a full day. Parking suspension is arranged in advance for permit zones.",
                van: "Luton van",
                crew: "2 movers",
              },
              {
                title: "Tight access or complex load",
                body: "Staircase buildings, top-floor flats and narrow-street access benefit from three movers to keep loading time down. A survey confirms whether three crew is needed.",
                van: "Luton van",
                crew: "3 movers",
              },
            ].map(({ title, body, van, crew }, i) => (
              <div
                key={title}
                data-reveal
                data-delay={String(i + 1)}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <h3 className="text-sm font-bold text-brand-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">{body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand-navy px-3 py-1 text-xs font-semibold text-white">
                    {van}
                  </span>
                  <span className="rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold text-white">
                    {crew}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-brand-charcoal/70">
            All Removals Nationwide vans carry heavy-duty straps, removal blankets and a sack trolley as
            standard. The exact vehicle and crew combination is confirmed after a free survey of
            your property.{" "}
            <Link href="/our-fleet" className="text-brand-orange underline underline-offset-2">
              View our fleet →
            </Link>
          </p>
        </div>
      </section>

      {/* ── S5: Moves we cover ── */}
      <section id="moves" className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Every type of London move"
            title="Man and Van Moves We Cover Across London"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            The man and van service covers a wide range of move types. Marketplace collection and
            single-item delivery are two of the most-requested jobs on the service.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "House and flat moves",
                body: "Studios, bedsits and 1 to 2-bedroom flats moved across London. Packing materials and furniture dismantling available as add-ons. For 3-bedroom homes or larger, see full house removals.",
                link: "/house-removals",
                linkText: "House removals →",
              },
              {
                title: "Single item and furniture",
                body: "A sofa, bed, wardrobe, fridge or dining table collected and delivered anywhere in London. No minimum load, no wasted crew on a full removal booking. Pianos quoted separately.",
                link: "/single-item",
                linkText: "Single item deliveries →",
              },
              {
                title: "Student moves",
                body: "Dormitory to flat share, halls to home and every combination in between. Short-notice bookings accepted. Straps and trolleys are on every van for wardrobes and bookshelves.",
                link: null,
                linkText: null,
              },
              {
                title: "Office and business moves",
                body: "Small office relocations, desk-and-box moves and equipment transfers within London. Early morning and weekend arrival slots are available on request.",
                link: "/office-removals",
                linkText: "Office removals →",
              },
              {
                title: "Marketplace collections",
                body: "IKEA flat-pack pickups, Facebook Marketplace collections, Gumtree furniture, eBay deliveries. We collect from the seller or store and deliver to your address or storage unit.",
                link: "/single-item",
                linkText: "Collection and delivery →",
              },
              {
                title: "Storage transfers",
                body: "Moving items between addresses and storage, or clearing a storage unit. Short-term storage is available within the same booking if you need a gap between moving out and in.",
                link: "/storage",
                linkText: "Storage options →",
              },
            ].map(({ title, body, link, linkText }, i) => (
              <div
                key={title}
                data-reveal
                data-delay={String(i + 1)}
                className="flex flex-col rounded-2xl border border-black/5 bg-brand-grey p-6 shadow-sm transition hover:shadow-md motion-reduce:transition-none"
              >
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-charcoal/80">
                  {body}
                </p>
                {link && linkText && (
                  <Link
                    href={link}
                    className="mt-4 text-xs font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                  >
                    {linkText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S6: Same-day and short-notice ── */}
      <section id="same-day" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            align="left"
            eyebrow="Urgent and short-notice"
            title="Same-Day and Short-Notice Man and Van London"
          />
          <div
            className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-brand-charcoal/85"
            data-reveal
          >
            <p>
              Removals Nationwide operates 7 days a week and keeps same-day and short-notice slots
              available for urgent bookings. Same-day capacity covers urgent flat moves, last-minute
              marketplace pickups, emergency storage transfers and time-sensitive furniture
              collections.
            </p>
            <p>
              For the fastest response on a same-day or short-notice request:{" "}
              <a
                href="tel:+442072052525"
                className="font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
              >
                call 020 7205 2525
              </a>{" "}
              directly. The quick quote form is also available for urgent requests and we aim to
              call back within the hour. Planning ahead is ideal, but short-notice slots are held each day for urgent requests.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <Button
              href="/bookservice#quick-quote"
              variant="orange"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get a Free Quote
            </Button>
            <p className="text-xs font-medium text-brand-charcoal/55">
              Free quote. Fixed price. No obligation.
            </p>
          </div>
        </div>
      </section>

      {/* ── S7: How it works — speed cards ── */}
      <section id="process" className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="Six steps from quote to delivery"
              title="How Your Man and Van Move Works"
            />
          </div>
          <p data-reveal className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/85">
            Same process for every booking, from a single sofa to a 2-bed flat. Quote takes under
            2 minutes.
          </p>

          {/* Mobile: vertical stepper */}
          <ol className="relative mx-auto mt-10 max-w-2xl space-y-5 lg:hidden">
            {processSteps.map((step, i) => {
              const Icon = processIcons[i];
              return (
                <li key={step.name} data-reveal data-delay={String(i + 1)} className="relative flex gap-4">
                  {i < processSteps.length - 1 && (
                    <span aria-hidden="true" className="absolute left-[1.3rem] top-10 h-[calc(100%-.5rem)] w-0.5 bg-brand-navy/15" />
                  )}
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white shadow-sm">
                    {i + 1}
                  </span>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2">
                      <p className="text-base font-bold text-brand-navy">{step.name}</p>
                      <span aria-hidden="true" className="text-brand-orange/70"><Icon className="h-4 w-4" /></span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-brand-charcoal/80">{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Desktop: compact arrow-connected cards (lg+) */}
          <div className="mt-10 hidden lg:block">
            {/* Progress baseline */}
            <div aria-hidden="true" className="relative mb-0 h-0.5 bg-brand-navy/10">
              <span
                id="mv-process-fill"
                className="absolute inset-y-0 left-0 bg-brand-orange/55 transition-[width] duration-700 ease-out"
                style={{ width: 0 }}
              />
            </div>

            {/* Cards row */}
            <div className="flex items-stretch gap-0">
              {processSteps.map((step, i) => {
                const Icon = processIcons[i];
                return (
                  <div key={step.name} className="flex flex-1 items-stretch">
                    <div
                      data-reveal
                      data-delay={String(i + 1)}
                      data-mv-step={String(i + 1)}
                      className="flex flex-1 flex-col rounded-none border-t-2 border-brand-navy/10 bg-white px-4 pt-5 pb-4 first:rounded-l-xl last:rounded-r-xl"
                    >
                      {/* Big step number */}
                      <span
                        aria-hidden="true"
                        className="text-5xl font-black leading-none text-brand-navy/[0.07]"
                      >
                        {i + 1}
                      </span>
                      <div className="mt-2 flex items-center gap-1.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange text-white">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-[0.65rem] font-bold uppercase tracking-widest text-brand-navy/40">
                          Step {i + 1}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm font-bold leading-snug text-brand-navy">
                        {step.name}
                      </p>
                      <p className="mt-1.5 flex-1 text-xs leading-relaxed text-brand-charcoal/70">
                        {step.text}
                      </p>
                    </div>

                    {/* Arrow connector */}
                    {i < processSteps.length - 1 && (
                      <div aria-hidden="true" className="flex shrink-0 items-center self-stretch bg-white px-0">
                        <svg
                          viewBox="0 0 16 40"
                          className="h-10 w-4 text-brand-navy/20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M0 20 L10 20 M6 14 L12 20 L6 26" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div data-reveal className="mt-10 flex justify-center">
            <Button href="/bookservice#quick-quote" variant="orange" size="lg">
              Book Your Move
            </Button>
          </div>
        </div>
      </section>

      {/* ── S8: Man and van vs full removals ── */}
      <section id="compare" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Choosing the right service"
            title="Man and Van or Full Removals: Which One Fits Your Move?"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            Both services are fully insured and fixed-price. The difference is in crew size, vehicle
            and the scope of the job. Use the guide below to decide.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Man and van */}
            <div
              className="rounded-2xl border-2 border-brand-navy/10 bg-white p-8 shadow-sm"
              data-reveal
              data-delay="1"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-navy px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Man and Van
              </div>
              <p className="text-sm font-bold uppercase tracking-wide text-brand-navy">
                The right choice when you have:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "A studio, bedsit, 1 or 2-bedroom flat",
                  "A single item, few boxes or a light load",
                  "A student, short-notice or same-day move",
                  "A short to medium distance within London",
                  "Items already packed and ready to load",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-charcoal/85">
                    <CheckIcon
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="/bookservice#quick-quote" variant="orange" size="md">
                  Get a Man and Van Quote
                </Button>
              </div>
            </div>

            {/* Full removals */}
            <div
              className="rounded-2xl border-2 border-brand-orange bg-brand-navy p-8 text-white"
              data-reveal
              data-delay="2"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Full House Removals
              </div>
              <p className="text-sm font-bold uppercase tracking-wide text-white">
                The right choice when you have:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "A 3-bedroom home or larger",
                  "A full house with furniture, appliances and boxes",
                  "Fragile, specialist or high-value items",
                  "Packing requirements: full or partial",
                  "A completion date with tight timing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                    <CheckIcon
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/house-removals"
                  className="text-sm font-semibold text-brand-orange underline underline-offset-2 hover:text-white"
                >
                  House removal service →
                </Link>
              </div>
            </div>
          </div>

          <div
            className="mx-auto mt-8 max-w-3xl rounded-2xl border border-black/10 bg-white p-5"
            data-reveal
          >
            <p className="text-sm font-semibold text-brand-navy">
              Man and van vs self-drive van hire
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/85">
              A man and van includes the professional driver and the lifting. Self-drive van hire
              requires you to drive, load and unload yourself. When the cost of van hire, fuel,
              insurance, a second driver and physical labour is added up, a man and van is often
              cheaper, and removes all physical risk. This is especially true for any job involving
              heavy furniture or stairs.
            </p>
          </div>

          <p className="mt-6 text-center text-xs font-medium text-brand-charcoal/55">
            Both services include a free quote, fixed price and full insurance. No obligation.
          </p>
        </div>
      </section>

      {/* ── Mid-page CTA ── */}
      <CtaBand
        heading="Ready to Get Your Man and Van Quote?"
        subtext="Free quote · fixed price · no hidden fees · 7 days a week"
        actions={[
          { label: "Get a Free Quote", href: "/bookservice#quick-quote", variant: "navy" },
          { label: "Estimate My Move", href: "/bookservice", variant: "outline-light" },
        ]}
      />

      {/* ── S9: Insurance and accreditations ── */}
      <section id="trust" className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            tone="light"
            eyebrow="Verified, insured, accredited"
            title="Insured, Accredited Man and Van Movers in London"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/80">
            Choosing a man and van company means trusting someone with your belongings and your home.
            The accreditations below are independently verified and renewed annually. Each one
            carries a real complaints or claims process, not just a badge.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {accreditations.map(({ name, signal }, i) => (
              <div
                key={name}
                data-reveal
                data-delay={String(i + 1)}
                className="rounded-2xl border border-white/10 bg-white/8 p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                    <CheckIcon className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/60">{signal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 mx-auto max-w-3xl grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-6 text-white">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                Goods-in-transit insurance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Covers your belongings from the moment of loading to delivery. Damage in transit
                triggers a clear financial claims process, not a verbal assurance.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-white">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                Public liability insurance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Covers damage caused to your property (walls, floors, door frames) by our crew
                during the move. Active on every booking without exception.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/certificates" variant="orange" size="md">
              View Certificates
            </Button>
            <Button href="/about-us" variant="outline-light" size="md">
              About Removals Nationwide
            </Button>
          </div>
        </div>
      </section>

      {/* ── S10: London areas and access ── */}
      <section id="areas" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="London-wide coverage"
            title="London Areas We Cover and How We Handle Access"
          />
          <div
            className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-brand-charcoal/85"
            data-reveal
          >
            <p>
              Removals Nationwide man and van crews cover all 32 London boroughs, Greater London and
              surrounding areas including Surrey, Essex and Kent. Nationwide moves are also handled
              with the same fixed-price process.
            </p>
            <p>
              London access is rarely straightforward. Our operations team arranges borough council
              parking suspensions where a permit zone prevents the van from stopping near the
              property. Narrow Victorian streets, managed buildings with goods lifts and top-floor
              flats without a lift are all assessed at the survey stage and factored into the crew
              time estimate. ULEZ and congestion zone charges are flagged in the written quote for
              the specific route.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {areaGroups.map((group) => (
              <div key={group.direction} data-reveal>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-navy">
                  {group.direction}
                </h3>
                <ul className="space-y-2">
                  {group.boroughs.map((b) => (
                    <li key={b.name}>
                      <Link
                        href={b.href}
                        className="text-sm text-brand-charcoal/85 underline-offset-2 hover:text-brand-orange hover:underline"
                      >
                        {b.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/areas" variant="navy" size="md">
              View All Service Areas
            </Button>
          </div>
        </div>
      </section>

      {/* ── S11: Reviews ── */}
      <section id="reviews" className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            tone="light"
            eyebrow="Trustpilot and Google Reviews"
            title="What London Customers Say About Our Man and Van Service"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/80">
            Removals Nationwide customers have left verified reviews across Trustpilot and Google.{" "}
            <Link
              href="https://uk.trustpilot.com/review/removalsnationwide.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-orange underline underline-offset-2"
            >
              Read verified reviews on Trustpilot
            </Link>
            .
          </p>

          <div
            className="mx-auto mt-8 max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm"
            data-reveal
          >
            <p className="text-sm font-semibold text-brand-navy">
              Reviews powered by Trustpilot
            </p>
            <Link
              href="https://uk.trustpilot.com/review/removalsnationwide.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-brand-orange underline underline-offset-2"
            >
              View all reviews on Trustpilot →
            </Link>
          </div>
        </div>
      </section>

      <Accreditations />

      {/* ── S12: Final CTA ── */}
      <CtaBand
        heading="Book Your Man and Van in London Today"
        subtext="Free quote in under 2 minutes · same-day available · 7 days a week"
        actions={[
          { label: "Get a Free Quote", href: "/bookservice#quick-quote", variant: "navy" },
          { label: "Estimate My Move", href: "/bookservice", variant: "outline-light" },
        ]}
      />

      {/* ── S13: FAQs ── */}
      <section id="faq" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Common questions answered"
            title="Man and Van London: Frequently Asked Questions"
          />
          <Faq items={faqs} defaultOpen={null} className="mt-10" />
        </div>
      </section>

      {/* Mobile bottom spacer: prevents sticky bar from covering FAQ content */}
      <div className="h-[72px] sm:hidden" aria-hidden="true" />

      {/* Page-scoped animation driver — adds .js to <html> and wires data-reveal */}
      <ManAndVanAnimations />

      <StickyMobileBar sentinelId="hero-intro" />
    </>
  );
}
