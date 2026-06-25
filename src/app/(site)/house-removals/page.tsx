import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata, serviceH1, serviceLdFor } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import Accreditations from "@/components/home/Accreditations";
import CheckList, { type CheckItem } from "@/components/services/CheckList";
import PricingTable from "@/components/services/PricingTable";
import HouseRemovalsAnimations from "@/components/services/HouseRemovalsAnimations";
import {
  IcoPhone,
  IcoDocument,
  IcoCalendar,
  IcoBox,
  IcoTruck,
  IcoHome,
} from "@/components/services/ProcessStepIcons";
import CardGrid from "@/components/services/CardGrid";
import Faq, { type FaqItem } from "@/components/services/Faq";
import { CheckIcon } from "@/components/ui/icons";
import StickyMobileBar from "@/components/services/StickyMobileBar";

export const metadata: Metadata = buildMetadata("house-removals");

/* ─────────────── Section 3: What's included ─────────────── */

const standardIncludes: CheckItem[] = [
  {
    lead: "Pre-move survey",
    text: "Free on-site or video survey to assess volume, access and any special requirements before quoting.",
  },
  {
    lead: "Professional packing",
    text: "Full or partial packing using quality materials: boxes, bubble wrap, wardrobe cartons and packing paper.",
  },
  {
    lead: "Furniture dismantling and reassembly",
    text: "Beds, wardrobes and flat-pack furniture taken apart and rebuilt at the new address.",
  },
  {
    lead: "Loading and transport",
    text: "All items loaded, strapped and transported in insured vehicles sized to your property.",
  },
  {
    lead: "Unloading and placement",
    text: "Items delivered to the correct room at your new address. Our crew positions everything as directed.",
  },
  {
    lead: "Appliance disconnection",
    text: "Washing machines, dishwashers and tumble dryers disconnected and reconnected. Gas appliances are referred to a Gas Safe engineer.",
  },
  {
    lead: "Parking suspension",
    text: "Borough parking suspensions and loading-bay permits arranged in advance of move day.",
  },
  {
    lead: "Licensed waste disposal",
    text: "Top Removals is a licensed waste carrier. Items you no longer need can be cleared before or after the move.",
  },
];

const optionalIncludes: CheckItem[] = [
  { lead: "Full unpacking service", text: "Contents placed in cupboards and drawers at the new property." },
  { lead: "Packing materials supply", text: "Boxes, tape, bubble wrap and specialist packaging delivered in advance." },
  { lead: "Short or long-term storage", text: "24/7 CCTV-monitored secure storage for any gap between moving out and moving in." },
  { lead: "Handyman service", text: "Picture hanging, shelf fitting and wall mounting pre-arranged on request." },
];

/* ─────────────── Section 4: Process ─────────────── */

const processSteps = [
  {
    name: "Request a free survey",
    text: "Submit a quote request online or call us. We arrange a free on-site or video survey at a time that suits you. The surveyor assesses volume, access and any floor or parking restrictions.",
  },
  {
    name: "Receive a fixed written quote",
    text: "Within 24 hours of your survey you receive a written fixed-price quote. VAT, fuel, equipment and crew are all included. No hidden fees and nothing added on the day.",
  },
  {
    name: "Confirm your moving date",
    text: "Select your moving date and confirm the booking. We secure any required parking suspension, loading-bay booking or goods-lift reservation for move day.",
  },
  {
    name: "Packing day",
    text: "For full-packing jobs our crew arrives one or two days before the move to pack your belongings. Partial packing and materials delivery are also available on request.",
  },
  {
    name: "Move day",
    text: "Our crew arrives at the agreed time, loads your belongings into a fully insured vehicle and transports everything safely to your new address.",
  },
  {
    name: "Unload, reassemble, unpack",
    text: "At your new property items are unloaded, furniture is reassembled and, if unpacking is booked, contents are placed as directed. The job is complete when you are satisfied.",
  },
];

const processIcons = [IcoPhone, IcoDocument, IcoCalendar, IcoBox, IcoTruck, IcoHome];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Your London House Move Works, Step by Step",
  description:
    "The step-by-step process for booking and completing a house removal with Top Removals in London.",
  step: processSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
};

/* ─────────────── Section 5: Cost table ─────────────── */

/* Price bands sourced from the removal calculator and confirmed against the live Prices page. */
const costRows = [
  { label: "Studio / bedsit", values: ["Contact us for a guide price", "Transit van, 2 crew"] },
  { label: "1-bedroom flat", values: ["From £390", "Transit or Luton van, 2 crew"] },
  { label: "2-bedroom flat or house", values: ["From £534", "Luton van, 2 to 3 crew"] },
  { label: "3-bedroom house", values: ["From £756", "Luton van, 3 crew"] },
  { label: "4-bedroom house or larger", values: ["From £1,080", "7.5t vehicle or two vans, 3 to 4 crew"] },
];

/* ─────────────── Section 7: Specialist & add-ons ─────────────── */

const addOnCards = [
  {
    title: "Piano and musical instruments",
    body: "Upright and grand pianos moved by trained crews using specialist boards, straps and piano skates. Staircase and hoist access assessed during the pre-move survey.",
  },
  {
    title: "Antiques and fine art",
    body: "High-value and fragile items packed in custom crating or export-grade wrapping. Transit in temperature-controlled vehicles available on request.",
  },
  {
    title: "White goods and appliances",
    body: "Washing machines, dishwashers and tumble dryers disconnected, moved and reconnected. Gas appliances such as cookers are referred to a registered Gas Safe engineer.",
  },
  {
    title: "Packing service",
    body: "Full or partial professional packing using quality boxes, wardrobe cartons, bubble wrap and packing paper. Materials delivered to your address in advance of move day.",
  },
  {
    title: "Storage between moves",
    body: "Short-term or long-term storage available if there is a gap between moving out and moving in. 24/7 CCTV-monitored, individually insured and fully managed.",
  },
  {
    title: "Licensed waste disposal",
    body: "Top Removals holds waste carrier licence CBDL25630. Pre-move decluttering, single-item disposal or end-of-tenancy clearances arranged as part of the removal or separately.",
  },
];

/* ─────────────── Section 8: Property size ─────────────── */

const propertySizeCards = [
  {
    title: "Studio or bedsit",
    body: "A transit van with two crew members typically handles a studio or bedsit move in half a day. Best suited to moves within the same borough or a short London drive. Man and van is also an option for very light loads.",
  },
  {
    title: "1-bedroom flat",
    body: "One transit or Luton van with two crew covers a 1-bedroom flat in around four to six hours. Floor level and lift access affect the loading time. We arrange lift reservations in advance.",
  },
  {
    title: "2-bedroom flat or house",
    body: "A Luton van with two to three crew handles most 2-bedroom moves in a full day. Narrow-street access and parking suspensions are standard for London, and are arranged by our operations team.",
  },
  {
    title: "3 to 4-bedroom house or larger",
    body: "Larger properties typically need a 7.5-tonne vehicle or two vans with three to four crew. A pre-move survey confirms the vehicle and crew requirement. Packing service strongly recommended for homes at this size.",
  },
];

/* ─────────────── Section 9: Price factors ─────────────── */

const priceFactors: CheckItem[] = [
  {
    lead: "Property size and volume",
    text: "The number of rooms and boxes directly determines crew size and vehicle type. A 4-bedroom home costs more than a studio for good reason.",
  },
  {
    lead: "Distance between properties",
    text: "A short move within the same borough is less expensive than a cross-London or Surrey move. Long-distance and nationwide moves are priced separately.",
  },
  {
    lead: "Floor level and lift access",
    text: "A fourth-floor flat without a lift requires significantly more crew time than a ground-floor house. Lift reservations in managed buildings add coordination but reduce physical effort.",
  },
  {
    lead: "Access and parking",
    text: "Narrow streets, restricted zones and permit requirements add cost. Borough parking suspensions typically cost £50–£150 and must be arranged in advance.",
  },
  {
    lead: "Packing requirements",
    text: "Full professional packing adds to the total but reduces the risk of damage and the time you spend preparing. Partial packing (fragile items only) is a middle option.",
  },
  {
    lead: "Day and time of year",
    text: "Weekday moves and off-peak months (January to March) are generally cheaper than weekends and the end of the month. If your move date is flexible, a mid-week completion can reduce your quote.",
  },
  {
    lead: "Add-on services",
    text: "Storage, specialist items, furniture dismantling and handyman services are priced individually and added to the base removal quote.",
  },
];

/* ─────────────── Section 10: Why choose ─────────────── */

const accreditations = [
  "British Association of Removers (BAR)",
  "National Guild of Removers and Storers (NGRS)",
  "The Furniture Ombudsman",
  "QSS-DW Approved Mover",
  "Checkatrade",
  "International Association of Movers (IAM)",
];

/* ─────────────── Section 11: Restricted items ─────────────── */

const restrictedItems: CheckItem[] = [
  {
    lead: "Gas cylinders and flammables",
    text: "Propane, butane, aerosols, petrol, paint and other flammables cannot travel in a removal vehicle.",
  },
  {
    lead: "Chemicals and hazardous substances",
    text: "Bleach, ammonia, pesticides and pool chemicals are classified as hazardous and must be disposed of before the move.",
  },
  {
    lead: "Perishable food and open liquids",
    text: "Fresh or frozen food and open containers should not travel in the removal vehicle. Dispose of or pack sealed items in a cool bag for self-transport.",
  },
  {
    lead: "Plants",
    text: "Houseplants can be moved locally in most cases. Certain plants are restricted across international borders. Check regulations if moving overseas.",
  },
  {
    lead: "Live animals and pets",
    text: "Pets must be transported by their owners. Arrange a pet carrier and move them separately on the day.",
  },
  {
    lead: "Valuables and important documents",
    text: "Jewellery, cash, passports, birth certificates and irreplaceable items should travel with you rather than in the removal vehicle.",
  },
];

/* ─────────────── Section 12: Service areas ─────────────── */

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

/* ─────────────── Section 15: FAQs ─────────────── */

const faqs: FaqItem[] = [
  {
    question: "How much does a house removal cost in London?",
    answer:
      "House removal costs in London depend on property size, distance, access and whether packing is included. A studio or 1-bedroom move typically starts from a lower base than a 3 or 4-bedroom house. The most accurate price comes from a free pre-move survey, which accounts for your exact volume, floor level and any parking requirements.",
    answerAfter:
      "Use the removal calculator for an instant estimate, or book a free survey for a fixed written quote with no hidden fees.",
  },
  {
    question: "What is included in a house removal service?",
    answer:
      "A full house removal service includes a pre-move survey, packing (if selected), furniture dismantling, loading, transport, unloading and reassembly at the new address. Parking suspension, appliance disconnection and reconnection are also handled. Optional add-ons include full unpacking, storage and licensed waste disposal.",
  },
  {
    question: "What is the cheapest day to move house in London?",
    answer:
      "Mid-week moves on Tuesday, Wednesday or Thursday are typically cheaper than Friday or weekend moves, which carry a premium due to higher demand. Moving in January, February or March, outside the peak summer and end-of-month rush, also reduces the quote. If your completion date is flexible, ask for mid-week pricing when you request your survey.",
  },
  {
    question: "Man and van or full house removals: which should I choose?",
    answer:
      "Man and van is suited to studios, single rooms, student moves and small volumes of items. Full house removals are the right choice for 2-bedroom properties and above, for moves involving heavy or fragile items, or when packing is required. If you are unsure, our surveyor will recommend the appropriate service after assessing your property.",
  },
  {
    question: "Are my belongings insured during the house removal?",
    answer:
      "Yes. Public liability insurance and goods-in-transit insurance are included on every job without exception. Public liability covers damage caused to your property during the move. Goods-in-transit insurance covers your belongings from loading to delivery. If anything is damaged, there is a clear claims process with a financial remedy.",
  },
  {
    question: "What items will you not move?",
    answer:
      "We cannot transport gas cylinders, flammables, open chemicals, perishable food or live animals. Valuables such as jewellery, cash and passports should travel with you rather than in the removal vehicle. Gas appliances that need disconnecting or reconnecting are referred to a registered Gas Safe engineer.",
    answerAfter:
      "Your move coordinator will provide a full restricted-items list when you confirm your booking.",
  },
  {
    question: "How far in advance should I book a house removal in London?",
    answer:
      "For most moves, booking two to four weeks in advance is sufficient. Friday moves, end-of-month completions and moves in June, July and August book out earlier. Six to eight weeks ahead is advisable in peak season. For short-notice moves, call us directly; we keep capacity for urgent bookings where availability allows.",
  },
  {
    question: "Do you offer packing and storage alongside the removal?",
    answer:
      "Yes. Professional packing (full or partial) and 24/7 CCTV-monitored storage are available as add-ons to any house removal. Storage is useful if there is a gap between your completion and move-in dates. Both services are quoted at the same time as the removal and included in the fixed written price.",
  },
];

/* ═══════════════════════════════════════════════════════════ */

export default function HouseRemovalsPage() {
  return (
    <>
      <JsonLd data={serviceLdFor("house-removals")} />
      <JsonLd data={howToSchema} />
      <HouseRemovalsAnimations />

      {/* ── S1: Hero ── */}
      <PageBanner
        title="House Removals London"
        h1={serviceH1["house-removals"]}
        subtitle="Fully Insured · BAR Accredited · 7 Days a Week"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "House Removals London" },
        ]}
      />

      {/* S1 continued: intro + above-fold CTAs */}
      <section id="hero-intro" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">

            {/* Left: value prop + CTAs */}
            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                Top Removals moves homes across London with a{" "}
                <strong>fully insured, BAR-accredited team</strong> operating seven days a week.
                Whether you are moving a studio flat or a five-bedroom house, every job comes with a
                free pre-move survey, a written fixed-price quote and end-to-end management:
                packing, transport and unloading handled by trained professionals.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                Get an instant estimate, or book a free survey for an exact fixed price with no
                hidden fees.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href="/bookservice#quick-quote"
                  variant="orange"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get a Free Quote
                </Button>
                <Button
                  href="/bookservice"
                  variant="navy"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Estimate My Move
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

              <p className="mt-3 text-xs font-medium text-brand-charcoal/55">
                Free survey. Fixed price. No obligation.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["BAR Accredited", "Fully Insured", "7 Days a Week"].map((label) => (
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

            {/* Right: trust panel with team photo */}
            <div className="overflow-hidden rounded-2xl border border-black/10 shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="https://www.top-removals.co.uk/wp-content/uploads/2024/12/home-move-in-London.jpg"
                  alt="house move in London — Top Removals fully insured house removal crew"
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
                  {accreditations.map((name) => (
                    <li key={name} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 shrink-0 text-brand-orange" strokeWidth={3} />
                      <span className="text-sm text-brand-navy/85">{name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4 border-t border-black/10 pt-4">
                  <Link
                    href="https://uk.trustpilot.com/review/www.top-removals.co.uk"
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
        heading="Ready to Get Your Fixed House Removal Quote?"
        buttonLabel="Quick Quote"
        buttonHref="/bookservice#quick-quote"
      />

      {/* ── S2: Why professional ── */}
      <section id="why-professional" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            align="left"
            eyebrow="London moving challenges"
            title="Moving House in London Without the Stress"
          />
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              Moving house in London is not like moving anywhere else. Parking suspensions take days
              to arrange. Narrow Victorian streets leave no room for a large vehicle. A fourth-floor
              flat without a lift adds hours to a move. Tight completion windows mean van hire and
              doing it yourself carries a real risk of running out of time.
            </p>
            <p>
              A trained, insured removal team removes each of those risks. Parking permits are
              arranged in advance by our operations team. Crew size and vehicle type are matched to
              your property after the survey. Fragile and heavy items including antiques, white goods and
              flat-pack furniture are packed, padded and loaded by people who do this every day.
            </p>
            <p>
              Every job is covered by{" "}
              <strong>public liability insurance and goods-in-transit insurance</strong>. If
              something goes wrong, there is a clear claims process with a financial remedy, not an
              unenforceable verbal assurance.
            </p>
            <p>
              The result is a move that runs on time, with your belongings arriving intact and your
              energy spent on the things that matter on moving day.{" "}
              <Link href="#process" className="text-brand-orange underline underline-offset-2">
                See how the process works.
              </Link>
            </p>
            <p className="text-sm text-brand-charcoal/60">
              Moving a business instead?{" "}
              <Link href="/office-removals" className="underline hover:text-brand-orange">
                Office removals London
              </Link>
              . Moving overseas?{" "}
              <Link href="/international-removals" className="underline hover:text-brand-orange">
                International removals
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── S3: What's included ── */}
      <section id="includes" className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            align="left"
            eyebrow="Full-service removals"
            title="What a House Removal Service in London Includes"
          />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-charcoal/85">
            A house removal with Top Removals covers the full move end to end. The services below
            are split into what is standard on every job and what can be added as an optional
            extra.
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-brand-navy">
                Standard on every job
              </h3>
              <CheckList items={standardIncludes} />
            </div>
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-brand-navy">
                Optional add-ons
              </h3>
              <CheckList items={optionalIncludes} />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/packing-service"
                  className="text-sm font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                >
                  Packing service details →
                </Link>
                <Link
                  href="/storage"
                  className="text-sm font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                >
                  Storage options →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <Button href="/bookservice#quick-quote" variant="orange" size="lg" className="w-full sm:w-auto">
              Get a Free Quote
            </Button>
            <p className="text-xs font-medium text-brand-charcoal/55">
              Free survey. Fixed price. No obligation.
            </p>
          </div>
        </div>
      </section>

      {/* ── S4: Process — route timeline ── */}
      <section id="process" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="Six steps from survey to delivery"
              title="How Your London House Move Works, Step by Step"
            />
          </div>
          <p data-reveal className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            The process is the same whether you are moving a flat in Hackney or a house in
            Kingston. The survey is first: 20 minutes on-site or by video produces your fixed price.
          </p>

          {/* Mobile: vertical stepper */}
          <ol className="relative mx-auto mt-10 max-w-2xl space-y-6 lg:hidden">
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
                      <span aria-hidden="true" className="text-brand-orange/70">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-brand-charcoal/80">{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Desktop: horizontal route (lg+) */}
          <div data-reveal className="mt-12 hidden lg:block">
            <div
              className="grid"
              style={{
                gridTemplateColumns: "2.75rem repeat(6, 1fr) 2.75rem",
                gridTemplateRows: "1fr 4.5rem 1fr",
              }}
            >
              {/* Fill line — spans all columns, row 2 */}
              <div
                aria-hidden="true"
                style={{ gridColumn: "1 / -1", gridRow: 2 }}
                className="relative flex items-center"
              >
                <div className="absolute inset-x-0 h-0.5 bg-brand-navy/12">
                  <span
                    id="hr-process-fill"
                    className="absolute inset-y-0 left-0 bg-brand-orange/55 transition-[width] duration-700 ease-out"
                    style={{ width: 0 }}
                  />
                </div>
              </div>

              {/* Origin marker — col 1, row 2 */}
              <div
                aria-hidden="true"
                style={{ gridColumn: 1, gridRow: 2 }}
                className="relative z-10 flex items-center justify-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-white shadow">
                  <IcoHome className="h-4 w-4" />
                </div>
              </div>

              {/* Destination marker — col 8, row 2 */}
              <div
                aria-hidden="true"
                style={{ gridColumn: 8, gridRow: 2 }}
                className="relative z-10 flex items-center justify-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-white shadow">
                  <IcoHome className="h-4 w-4" />
                </div>
              </div>

              {/* Step circles and cards */}
              {processSteps.map((step, i) => {
                const Icon = processIcons[i];
                const isAbove = i % 2 === 0;
                const col = i + 2;
                return (
                  <Fragment key={`step-${i}`}>
                    {/* Circle — row 2 */}
                    <div
                      style={{ gridColumn: col, gridRow: 2 }}
                      className="relative z-10 flex items-center justify-center"
                      data-process-step={String(i + 1)}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-navy/20 bg-white text-xs font-bold text-brand-navy shadow-sm">
                        {i + 1}
                      </div>
                    </div>

                    {/* Card — alternating rows 1 and 3 */}
                    <div
                      style={{ gridColumn: col, gridRow: isAbove ? 1 : 3 }}
                      className={`px-1 ${isAbove ? "self-end pb-2" : "self-start pt-2"}`}
                    >
                      <div className={`mx-auto w-0.5 bg-brand-navy/10 ${isAbove ? "h-3 mb-0" : "h-3 mt-0"}`} aria-hidden="true" />
                      <div className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-black/5">
                        <div className="flex items-start justify-between gap-1">
                          <p className="text-xs font-bold leading-snug text-brand-navy">{step.name}</p>
                          <span aria-hidden="true" className="mt-0.5 shrink-0 text-brand-orange/70">
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                        </div>
                        <p className="mt-1 text-[0.68rem] leading-relaxed text-brand-charcoal/65 line-clamp-3">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>

            <div className="mt-1 flex justify-between text-xs font-semibold">
              <span className="text-brand-navy/40">Your current home</span>
              <span className="text-brand-orange">Your new home</span>
            </div>
          </div>

          <div data-reveal className="mt-10 flex justify-center lg:justify-start">
            <Button href="/bookservice#quick-quote" variant="orange" size="lg">
              Book Your Free Survey
            </Button>
          </div>
        </div>
      </section>

      {/* ── S5: Cost table ── */}
      <section id="cost" className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Removal prices 2026"
            title="How Much House Removals Cost in London"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            House removal costs in London vary by property size, access conditions, packing
            requirements and distance. A studio flat starts from about £200 plus VAT; a
            4 or 5-bedroom house reaches £2,000 to £3,000 plus VAT or more for a complex move.
            Indicative price bands by property size are shown below. Every price is subject to
            a free pre-move survey. No two moves are identical.
          </p>

          <PricingTable
            className="mx-auto mt-10 max-w-3xl"
            columns={["Property size", "Guide price (from)", "Typical crew and vehicle"]}
            rows={costRows}
          />

          <p className="mx-auto mt-5 max-w-3xl text-center text-xs text-brand-charcoal/60">
            Indicative guide prices only. Your exact price is confirmed at a free survey. Add-ons
            (packing, storage, parking suspensions, specialist items) will affect the final figure.
            All prices are subject to VAT at 20%.
          </p>

          <div className="mt-10 mx-auto max-w-3xl rounded-2xl bg-brand-grey p-8">
            <h3 className="text-base font-bold uppercase tracking-wide text-brand-navy">
              What drives the price up or down?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
              The factors that affect a house removal quote most are: total volume of items,
              distance between properties, floor level and lift access, parking permit requirements,
              whether packing is included and the chosen day of the week. A mid-week move in
              January can cost noticeably less than a Friday move at the end of June.{" "}
              <Link
                href="#price-factors"
                className="text-brand-orange underline underline-offset-2"
              >
                Full breakdown of price factors below.
              </Link>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/bookservice" variant="orange" size="md">
                Estimate My Move
              </Button>
              <Button href="/bookservice#quick-quote" variant="navy" size="md">
                Get a Fixed Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: Man and van vs full removals vs DIY van hire ── */}
      <section id="compare" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Choosing the right service"
            title="Man and Van, Full Removals or DIY Van Hire: Which to Choose"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            Each option has a different cost profile, risk level and scope. Use the guide below
            to match your move to the right service.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Man and van card */}
            <div className="rounded-2xl border-2 border-brand-navy/10 bg-white p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-navy px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Man and Van
              </div>
              <p className="text-sm font-bold uppercase tracking-wide text-brand-navy">
                Pick this if you have:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "A studio flat, bedsit or single room",
                  "A small volume of items: few boxes, no large furniture",
                  "A student or short-notice move",
                  "A tight budget and flexibility on timing",
                  "A short move within the same or adjacent borough",
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
                <Link
                  href="/man-and-van-london"
                  className="text-sm font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                >
                  Man and van service →
                </Link>
              </div>
            </div>

            {/* Full removals card */}
            <div className="rounded-2xl border-2 border-brand-orange bg-brand-navy p-8 text-white">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Full House Removals
              </div>
              <p className="text-sm font-bold uppercase tracking-wide text-white">
                Pick this if you have:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "A 2-bedroom property or larger",
                  "A full house with furniture, white goods and boxes",
                  "Fragile, specialist or high-value items",
                  "Packing requirements: full or partial",
                  "A completion date with tight time pressure",
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
                <Button href="/bookservice#quick-quote" variant="orange" size="md">
                  Get a Fixed Quote
                </Button>
              </div>
            </div>

            {/* DIY van hire card */}
            <div className="rounded-2xl border-2 border-brand-navy/10 bg-brand-grey p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                DIY Van Hire
              </div>
              <p className="text-sm font-bold uppercase tracking-wide text-brand-navy">
                This route fits only if:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "You are moving very few, non-fragile items",
                  "You have helpers available for loading and unloading",
                  "You are comfortable driving a 3.5-tonne Luton van",
                  "Budget is the absolute priority with no deadline pressure",
                  "You accept goods-in-transit insurance is not included by default",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-charcoal/85">
                    <CheckIcon
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-charcoal/30"
                      strokeWidth={2.5}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-brand-charcoal/55">
                Rental cost, fuel, parking suspensions and damage excess are all separate
                charges. For most London moves, a man and van costs less overall once time,
                risk and extras are factored in.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-xs font-medium text-brand-charcoal/55">
            Both professional services include a free survey, fixed price and full goods-in-transit insurance. No obligation.
          </p>
        </div>
      </section>

      {/* ── S7: Specialist & add-on services ── */}
      <section id="specialist" className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Extra services"
            title="Specialist Moves and Add-On Services"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            Add any of the following to your house removal. Each is quoted alongside the main job
            and included in the single fixed price.
          </p>
          <CardGrid cards={addOnCards} columns={3} className="mt-10" />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/storage"
              className="text-sm font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
            >
              Storage options →
            </Link>
            <Link
              href="/packing-service"
              className="text-sm font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
            >
              Packing service →
            </Link>
            <Link
              href="/rubbish-disposal"
              className="text-sm font-semibold text-brand-orange underline underline-offset-2 hover:text-brand-navy"
            >
              Rubbish disposal →
            </Link>
          </div>
        </div>
      </section>

      {/* ── S8: Property size use cases ── */}
      <section id="property-size" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Sized for every home"
            title="House Removals for Every Property Size in London"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            Every property size has different requirements. Below is what to expect for each type
            of London home.
          </p>
          <CardGrid cards={propertySizeCards} columns={2} className="mt-10" />
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-brand-charcoal/70">
            All sizes are assessed during the free pre-move survey. Vehicle and crew are confirmed
            once volume and access have been checked.{" "}
            <Link href="#cost" className="text-brand-orange underline underline-offset-2">
              See the cost table.
            </Link>
          </p>
        </div>
      </section>

      {/* ── S9: Price factors ── */}
      <section id="price-factors" className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            align="left"
            eyebrow="Understanding your quote"
            title="What Affects the Cost of Your House Removal"
          />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-charcoal/85">
            A house removal quote is built from several variables. Understanding them helps you
            budget accurately and, where your dates are flexible, reduce the total cost.
          </p>
          <CheckList items={priceFactors} className="mt-8 max-w-3xl" />
          <div className="mt-8 rounded-2xl bg-brand-grey p-6 max-w-3xl">
            <p className="text-sm font-semibold text-brand-navy">
              How to get the cheapest day for your house move
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/85">
              Tuesday, Wednesday and Thursday moves are typically the most cost-effective days.
              Avoid Fridays, which carry a premium, and the last week of any month, when completion
              dates cluster. Moving in January, February or March is often cheaper than June,
              July or August. Ask when you request your quote: if your date is flexible, we will
              tell you the best available slot.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mid-page quote CTA ── */}
      <CtaBand
        heading="Ready to Get Your Fixed House Removal Quote?"
        subtext="Free survey · written fixed price · no hidden fees · 7 days a week"
        actions={[
          { label: "Get a Free Quote", href: "/bookservice#quick-quote", variant: "navy" },
          { label: "Estimate My Move", href: "/bookservice", variant: "outline-light" },
        ]}
      />

      {/* ── S10: Why choose us ── */}
      <section id="why-choose" className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            tone="light"
            eyebrow="Verified, insured, accredited"
            title="Why London Trusts Top Removals"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/80">
            Choosing a removal company means trusting someone with everything you own. The
            accreditations below are independently verified and renewed annually. Each one carries
            a real complaints or claims process.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {accreditations.map((name) => (
              <div
                key={name}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/8 p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                  <CheckIcon className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold text-white">{name}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            <div className="rounded-xl bg-white/10 p-6 text-white">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                Goods-in-transit insurance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Covers your belongings from loading to delivery. Damage in transit triggers a
                clear financial claims process, not a verbal assurance.
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-6 text-white">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                Public liability insurance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Covers damage caused to your property (walls, floors, door frames) by our crew
                during the move. Active on every job without exception.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/certificates" variant="orange" size="md">
              View Certificates
            </Button>
            <Button href="/about-us" variant="outline-light" size="md">
              About Top Removals
            </Button>
          </div>
        </div>
      </section>

      {/* ── S11: What we will not move ── */}
      <section id="restricted" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            align="left"
            eyebrow="Move-day preparation"
            title="Items We Cannot Move"
          />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-charcoal/85">
            The following items cannot travel in a removal vehicle, either for safety reasons or
            because they require specialist handling. Knowing this in advance prevents last-minute
            issues on move day.
          </p>
          <CheckList items={restrictedItems} className="mt-8 max-w-3xl" />
          <div className="mt-6 max-w-3xl rounded-xl border-l-4 border-brand-orange bg-white p-5">
            <p className="text-sm leading-relaxed text-brand-charcoal/85">
              <strong className="text-brand-navy">Gas appliances:</strong> We disconnect and
              reconnect all standard appliances (washing machines, dishwashers, tumble dryers). Gas
              cookers, hobs and boilers must be disconnected and reconnected by a registered Gas
              Safe engineer. We can refer you to one as part of the move planning process.
            </p>
          </div>
        </div>
      </section>

      {/* ── S12: Service areas ── */}
      <section id="areas" className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="London-wide coverage"
            title="House Removals Across London"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            Our removal crews cover all 32 London boroughs, Greater London and Surrey as standard.
            Nationwide and{" "}
            <Link href="/international-removals" className="text-brand-orange underline underline-offset-2 hover:text-brand-navy">
              international moves
            </Link>
            {" "}are also handled with the same fixed-price process.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {areaGroups.map((group) => (
              <div key={group.direction}>
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

      {/* ── S13: Reviews ── */}
      <section id="reviews" className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            tone="light"
            eyebrow="Trustpilot and Google Reviews"
            title="What London Customers Say"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/80">
            Top Removals customers have left verified reviews across Trustpilot and Google.{" "}
            <Link
              href="https://uk.trustpilot.com/review/www.top-removals.co.uk"
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
              href="https://uk.trustpilot.com/review/www.top-removals.co.uk"
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

      {/* ── S14: Quote CTA ── */}
      <CtaBand
        heading="Get Your House Removal Quote Today"
        subtext="Free survey · fixed price · no obligation · call 020 7205 2525"
        actions={[
          { label: "Get a Free Quote", href: "/bookservice#quick-quote", variant: "navy" },
          { label: "Estimate My Move", href: "/bookservice", variant: "outline-light" },
        ]}
      />

      {/* ── S15: FAQs ── */}
      <section id="faq" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Common questions answered"
            title="House Removals London: Frequently Asked Questions"
          />
          <Faq items={faqs} defaultOpen={null} className="mt-10" />
        </div>
      </section>

      {/* Mobile bottom spacer: prevents sticky bar from covering last content line */}
      <div className="h-[72px] sm:hidden" aria-hidden="true" />

      <StickyMobileBar sentinelId="hero-intro" />
    </>
  );
}
