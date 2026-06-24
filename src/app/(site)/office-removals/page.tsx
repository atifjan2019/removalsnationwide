import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata, serviceH1, SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import Accreditations from "@/components/home/Accreditations";
import CheckList, { type CheckItem } from "@/components/services/CheckList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import { CheckIcon } from "@/components/ui/icons";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import OfficeRemovalsAnimations from "@/components/services/OfficeRemovalsAnimations";
import {
  IcoPhone,
  IcoBuilding,
  IcoDocument,
  IcoComputer,
  IcoLayout,
  IcoRecycle,
} from "@/components/services/ProcessStepIcons";

export const metadata: Metadata = buildMetadata("office-removals");

/* ─────────────────────────────────────────────────────────────
   PAGE-LEVEL SCHEMA
   ──────────────────────────────────────────────────────────── */

/*
 * BUILD NOTE — PAGE NOT PUBLISH-READY
 * CLAIMS AWAITING SIGN-OFF:
 * 1. Per-workstation cost figure (~£100) — confirm with operations before publishing.
 * 2. Borough list and building-access claims — confirm against actual service practice.
 * 3. Insurance wording and coverage limits — confirm with operations.
 * 4. Accreditation list: BAR, NGRS, CTSI, FORS, Checkatrade, IAM, Ombudsman — confirm each is current.
 * 5. Environmental Agency waste-carrier registration — confirm registration number for public use.
 * 6. "One desk to 500-plus staff" scope claim — confirm upper limit with operations.
 * 7. Reviews: replace the Trustpilot placeholder in S12 with the real TrustBox embed.
 * 8. Case-study line in S11: add a confirmed commercial example before publishing.
 */

const officeRemovalsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/office-removals#service`,
  name: "Office Removals London",
  serviceType: "Commercial Relocation",
  description:
    "Managed office relocation service across London from one desk to 500-plus staff. Fully insured, BAR-accredited, out-of-hours and weekend moves available, IT and server handling, furniture dismantling and reassembly, licensed waste carrier.",
  url: `${SITE_URL}/office-removals`,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Greater London" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  provider: { "@id": `${SITE_URL}/#organization` },
};

/* ─────────────── Section 3: Services ─────────────── */

const serviceItems = [
  {
    title: "Move planning and on-site survey",
    body: "A surveyor visits your current office to assess IT, connections, workstations and access. A written move plan and crate estimate are produced before a single box is packed.",
    link: null,
    linkText: null,
  },
  {
    title: "Packing and crate hire",
    body: "Professional packing of files, IT equipment and furniture, with plastic-lidded IT crates, document crates and archive boxes available to hire. Crate hire reduces cardboard waste and protects contents in transit.",
    link: "/crate-hire",
    linkText: "Crate hire →",
  },
  {
    title: "IT and server relocation",
    body: "IT equipment, servers and comms room hardware are handled by trained crews using anti-static crates and bundled cabling. Equipment is placed first at the new address to minimise reconnection time.",
    link: null,
    linkText: null,
  },
  {
    title: "Furniture dismantling and reassembly",
    body: "Desks, workstations, system furniture and office pods are dismantled, transported and reassembled to the new floor plan. Items are wrapped and padded throughout to prevent damage in transit.",
    link: "/packing-service",
    linkText: "Packing service →",
  },
  {
    title: "Business storage",
    body: "A 24/7 CCTV-monitored London storage facility is available for phased moves, short-notice relocations or any gap between moving out and in. Container and room options are available.",
    link: "/storage",
    linkText: "Storage →",
  },
  {
    title: "Office clearance and WEEE recycling",
    body: "Decommissioned IT, redundant furniture and packing waste are collected and disposed of responsibly. Top Removals is a registered UK Environment Agency waste carrier and recycles electrical equipment to WEEE standards.",
    link: "/rubbish-disposal",
    linkText: "Rubbish disposal →",
  },
];

/* ─────────────── Section 7: Process ─────────────── */

const processSteps = [
  {
    name: "Contact us for a quote",
    text: "Call 020 7205 2525 or submit the quick quote form. Describe the current office address, the destination, the size of the move and any out-of-hours requirements.",
  },
  {
    name: "Book a free on-site survey",
    text: "A surveyor visits your current office to assess IT, connections, workstations requiring dismantling and the destination layout. A move plan and crate estimate are produced at this stage.",
  },
  {
    name: "Receive a fixed written quote",
    text: "A fixed-price written quote is produced from the survey, covering crew, vehicles, IT handling, furniture, packing and any out-of-hours or storage requirements.",
  },
  {
    name: "Move day: crew and IT work together",
    text: "Movers and your IT lead work in sequence. IT equipment is prioritised, packed in anti-static crates and loaded first. Furniture and workstations are dismantled, wrapped and loaded.",
  },
  {
    name: "Unload, unpack and set to plan",
    text: "At the new office, items are unloaded and placed to your floor plan. Workstations and system furniture are reassembled. IT equipment is positioned first to speed reconnection.",
  },
  {
    name: "Waste collected and recycled",
    text: "Packing materials are removed from both addresses. Decommissioned equipment is collected and recycled to WEEE standards under the company's UK Environment Agency waste carrier registration.",
  },
];

const processIcons = [IcoPhone, IcoBuilding, IcoDocument, IcoComputer, IcoLayout, IcoRecycle];

/* Phase grouping for the project-plan desktop layout */
const phases = [
  { label: "Plan", sub: "Initial enquiry and survey", stepIndices: [0, 1] },
  { label: "Survey and RAMS", sub: "Fixed quote and method statement", stepIndices: [2] },
  { label: "The Move", sub: "Out-of-hours execution", stepIndices: [3] },
  { label: "Setup and sign-off", sub: "Configure and complete", stepIndices: [4, 5] },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Your London Office Move Works, Step by Step",
  description:
    "The step-by-step process for planning and completing an office relocation with Top Removals in London.",
  step: processSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
};

/* ─────────────── Section 8: Costs ─────────────── */

// CONFIRM: verify the per-workstation figure with operations before publishing
const costFactors: CheckItem[] = [
  {
    lead: "Number of desks and staff",
    text: "The single biggest driver of total cost. More workstations mean more crates, more crew hours and a larger vehicle.",
  },
  {
    lead: "IT and server complexity",
    text: "Comms rooms, server racks and managed switches require specialist handling and additional crew time. Simple workstation moves are faster.",
  },
  {
    lead: "Furniture dismantling requirements",
    text: "Desks and system furniture that need to be stripped and rebuilt add crew time. The surveyor confirms what needs dismantling at each address.",
  },
  {
    lead: "Building access and floor level",
    text: "Goods lifts, loading bay bookings and staircase access affect loading speed. Access conditions at both addresses are confirmed at the survey.",
  },
  {
    lead: "Out-of-hours and weekend timing",
    text: "Evening and weekend moves carry a premium over standard Monday-to-Friday daytime rates. The premium is outweighed by reduced business disruption.",
  },
  {
    lead: "Distance and parking arrangements",
    text: "Cross-London moves take more drive time. Permit zones at either address require a council parking suspension, arranged by the operations team.",
  },
  {
    lead: "Packing and crate hire",
    text: "Full packing and crate hire add to the total but reduce the risk of damage and speed up loading and unloading at both ends.",
  },
  {
    lead: "Storage requirements",
    text: "Phased moves that require interim storage between addresses add a storage cost. Weekly and monthly rates apply depending on volume and duration.",
  },
];

/* ─────────────── Section 9: Trust ─────────────── */

// CONFIRM: verify each accreditation is current before publishing
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

// CONFIRM: verify each borough and area link resolves before publishing
const areaGroups = [
  {
    direction: "City and East",
    boroughs: [
      { name: "City of London", href: "/areas/city-of-london" },
      { name: "Canary Wharf / Tower Hamlets", href: "/areas/tower-hamlets" },
      { name: "Hackney / Shoreditch", href: "/areas/hackney" },
      { name: "Newham", href: "/areas/newham" },
      { name: "Greenwich", href: "/areas/greenwich" },
    ],
  },
  {
    direction: "West and Central",
    boroughs: [
      { name: "Westminster", href: "/areas/westminster" },
      { name: "Kensington and Chelsea", href: "/areas/kensington-and-chelsea" },
      { name: "Hammersmith and Fulham", href: "/areas/hammersmith-and-fulham" },
      { name: "Ealing", href: "/areas/ealing" },
      { name: "Hounslow", href: "/areas/hounslow" },
    ],
  },
  {
    direction: "North",
    boroughs: [
      { name: "Islington", href: "/areas/islington" },
      { name: "Camden", href: "/areas/camden" },
      { name: "Haringey", href: "/areas/haringey" },
      { name: "Barnet", href: "/areas/barnet" },
      { name: "Enfield", href: "/areas/enfield" },
    ],
  },
  {
    direction: "South",
    boroughs: [
      { name: "Southwark / London Bridge", href: "/areas/southwark" },
      { name: "Lambeth / Vauxhall", href: "/areas/lambeth" },
      { name: "Wandsworth", href: "/areas/wandsworth" },
      { name: "Croydon", href: "/areas/croydon" },
      { name: "Merton", href: "/areas/merton" },
    ],
  },
];

/* ─────────────── Section 14: FAQs ─────────────── */

const faqs: FaqItem[] = [
  {
    question: "How much does an office move cost in London?",
    answer:
      "Office moves in London start from around £100 per workstation for a full-scale move with furniture, files and IT — though this is a generic guide figure. The total depends on crew size, IT complexity, furniture requirements, building access and any out-of-hours booking. A free on-site survey produces an accurate fixed-price quote with no hidden fees.",
  },
  {
    question: "Can you move at the weekend or out of hours?",
    answer:
      "Yes. Out-of-hours and weekend office moves are a core part of the service. Evening and weekend slots allow the move to complete without disrupting business operations or requiring staff downtime during working hours. Confirm availability when you request a quote, or call 020 7205 2525 directly for urgent bookings.",
  },
  {
    question: "How do you keep business downtime low?",
    answer:
      "Through sequencing. IT equipment is prioritised and packed first so systems can come back online at the new address as early as possible. Evening and weekend moves let staff arrive at a functional new office on the next working day. A move coordinator confirms the sequencing plan before move day.",
  },
  {
    question: "Can you move our IT equipment and servers?",
    answer:
      "Yes. IT equipment, servers, comms room hardware and individual workstations are all handled by trained crews. Equipment is disconnected and bundled by your IT lead, packed in anti-static IT crates, transported and placed at the new address ready for reconnection. WEEE-compliant disposal is available for decommissioned hardware.",
    answerAfter: "See the IT and server relocation section for a full breakdown.",
  },
  {
    question: "Do you dismantle and reassemble office furniture?",
    answer:
      "Yes. Desks, workstations, system furniture, storage units and office pods are dismantled at the current address and reassembled to the new floor plan. The surveyor confirms what needs dismantling and documents the destination layout at the on-site survey stage.",
  },
  {
    question: "Are you insured and accredited for office moves?",
    answer:
      "Yes. Full commercial goods-in-transit insurance and public liability cover are included on every booking, with tailored increased limits available for high-value moves. Top Removals is a member of BAR, NGRS, CTSI, FORS, Checkatrade and IAM. Certificates are available to view on the certificates page.",
    answerAfter: "Request copies of any certificate before confirming your booking.",
  },
  {
    question: "Do you recycle old furniture and IT equipment?",
    answer:
      "Yes. Top Removals is a registered UK Environment Agency waste carrier. Decommissioned IT and electrical equipment is recycled to WEEE (Waste Electrical and Electronic Equipment) standards. Office furniture clearance is available as part of the move or as a standalone service.",
    answerAfter: "See the rubbish disposal and office clearance page for more detail.",
  },
  {
    question: "What are red flags when hiring an office mover?",
    answer:
      "Red flags include: no written fixed-price quote, no goods-in-transit insurance confirmed in writing, no BAR or NGRS membership, no on-site survey offered before quoting, and no named move coordinator for your job. Request all policies and accreditation certificates before signing any booking.",
    bullets: [
      "No written fixed-price quote — verbal estimates are not binding",
      "No proof of goods-in-transit insurance",
      "No BAR, NGRS or equivalent accreditation",
      "No on-site survey — quoting blind without seeing the IT or access",
      "No move coordinator named on your booking",
    ],
  },
  {
    question: "Can you handle small offices as well as large?",
    answer:
      "Yes. The same managed process applies from a single-desk move to a 500-plus staff relocation. Small offices receive a dedicated move coordinator and a written fixed-price quote. No move is treated as a drop-in service; every booking is planned and confirmed in writing before move day.",
  },
  {
    question: "Do you provide storage for office moves?",
    answer:
      "Yes. Business storage in a 24/7 CCTV-monitored London facility is available for phased moves, short-notice relocations or any job with a gap between moving out and moving in. Storage can be booked as part of the removal or as a standalone service.",
    answerAfter: "See the storage page for container and room options.",
  },
];

/* ═══════════════════════════════════════════════════════════ */

export default function OfficeRemovalsPage() {
  return (
    <>
      <JsonLd data={officeRemovalsSchema} />
      <JsonLd data={howToSchema} />

      {/* ── S1: Hero ── */}
      <PageBanner
        title="Office Removals London"
        h1={serviceH1["office-removals"]}
        subtitle="Minimal Downtime · Fully Insured · BAR Accredited"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Office Removals London" },
        ]}
      />

      {/* S1 continued: value prop + above-fold CTAs */}
      <section id="hero-intro" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">

            {/* Left: value prop + CTAs */}
            <div>
              <p className="hero-anim-sub max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                Top Removals manages London office relocations from <strong>one desk to
                500-plus staff</strong> — with minimal business downtime. Evening and weekend
                moves, IT and server handling, furniture dismantling and WEEE-licensed recycling
                are all part of the same managed service, fully insured and BAR accredited.
              </p>
              <p className="hero-anim-sub mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                Every booking starts with a free on-site survey and a fixed written quote. No
                hidden fees, no surprises on move day.
              </p>

              <div className="hero-anim-ctas mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href="/bookservice#quick-quote"
                  variant="orange"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get a Quote
                </Button>
                <Button
                  href="/bookservice"
                  variant="navy"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book a Free Survey
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
                Free survey. Fixed price. No obligation.
              </p>

              <div className="hero-anim-trust mt-5 flex flex-wrap gap-2">
                {[
                  "BAR Accredited",
                  "Fully Insured",
                  "Licensed Waste Carrier",
                  "1 Desk to 500+ Staff",
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

            {/* Right: image + accreditations */}
            <div
              className="overflow-hidden rounded-2xl border border-black/10 shadow-sm"
              data-reveal
              data-delay="1"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://www.top-removals.co.uk/wp-content/uploads/2026/04/office-move-in-London.jpg"
                  alt="office move in London — managed commercial relocation by Top Removals"
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

      {/* ── S2: What are office removals ── */}
      <section id="what-is" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            align="left"
            eyebrow="Service definition"
            title="What Are Office Removals in London?"
          />
          <div
            className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-brand-charcoal/85"
            data-reveal
          >
            <p>
              An office removal is a managed commercial relocation covering the planning, packing,
              IT and server handling, furniture dismantling, transport and setup of a business at
              its new address. Every job is run by a named move coordinator whose role is to keep
              business downtime low and the move to plan.
            </p>
            <p>
              In 2026, office removals in London increasingly include out-of-hours and weekend
              moves, reflecting how businesses operate hybrid-working schedules. Scale ranges from a
              one-desk move to a 500-plus staff corporate relocation across multiple floors. For
              residential moves, see the{" "}
              <Link
                href="/house-removals"
                className="text-brand-orange underline underline-offset-2 hover:text-brand-navy"
              >
                house removals service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── S3: Our office relocation services ── */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Full service ecosystem"
            title="Our Office Relocation Services in London"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            A managed office move requires more than vans and muscle. The services below cover the
            full relocation ecosystem, from planning through to recycling.{" "}
            <Link
              href="/crate-hire"
              className="text-brand-orange underline underline-offset-2 hover:text-brand-navy"
            >
              Crate hire
            </Link>{" "}
            and{" "}
            <Link
              href="/packing-service"
              className="text-brand-orange underline underline-offset-2 hover:text-brand-navy"
            >
              packing
            </Link>{" "}
            are available as add-ons to any booking.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map(({ title, body, link, linkText }, i) => (
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

      {/* ── S4: Minimal downtime and out-of-hours ── */}
      <section id="downtime" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            align="left"
            eyebrow="Business continuity"
            title="Move With Minimal Downtime: Out-of-Hours and Weekend Office Moves"
          />
          <div
            className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-brand-charcoal/85"
            data-reveal
          >
            <p>
              Lost productivity is the real cost of an office move. A 100-person office idle for
              even half a day represents a significant business cost — one that outweighs any saving
              from a cheaper mover. The way to keep downtime low is through sequencing, timing and
              a coordinator who owns the plan.
            </p>
            <p>
              Top Removals operates out-of-hours and weekend office moves so your team is not
              disrupted during working hours. Evening and weekend crews complete the physical move
              while the office is empty, so staff arrive at a functional new address on the next
              working day. IT equipment is prioritised throughout: it is packed first, loaded first
              and placed first at the new address so reconnection can begin immediately.
            </p>
            <p>
              Phased moves — where departments or floors are relocated in stages over multiple
              evenings or weekends — reduce disruption further for larger organisations. Interim
              storage is available for any items not moving in the first phase. A move coordinator
              is assigned to every job to manage the sequencing plan and act as a single point of
              contact throughout.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <Button
              href="/bookservice#quick-quote"
              variant="orange"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get a Quote
            </Button>
            <Button
              href="/storage"
              variant="navy"
              size="lg"
              className="w-full sm:w-auto"
            >
              Storage for Phased Moves
            </Button>
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA ── */}
      <CtaBand
        heading="Ready to Plan Your Office Relocation?"
        subtext="Free survey · fixed price · no hidden fees · 7 days a week"
        actions={[
          { label: "Get a Quote", href: "/bookservice#quick-quote", variant: "navy" },
          { label: "Book a Free Survey", href: "/bookservice", variant: "outline-light" },
        ]}
      />

      {/* ── S5: IT and server relocation ── */}
      <section id="it-relocation" className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            align="left"
            eyebrow="Specialist handling"
            title="Office IT and Server Relocation in London"
          />
          <div
            className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-brand-charcoal/85"
            data-reveal
          >
            <p>
              IT and server handling is the highest-risk element of any office move. Top Removals
              crews are trained to handle workstations, monitors, servers, UPS units, comms room
              hardware and specialist equipment. All items are moved using anti-static IT crates
              with cable bundles labelled and secured before packing.
            </p>
            <p>
              The process starts with your IT lead. Before packing, your IT team disconnects
              equipment to their own protocol; the crew packs and loads in the sequence your IT
              lead specifies. At the new address, IT equipment is unloaded and positioned first,
              giving your team the maximum window to reconnect and test systems before the
              business day starts.
            </p>
            <p>
              Decommissioned IT equipment — obsolete servers, monitors, printers and electrical
              devices — is collected and recycled to WEEE (Waste Electrical and Electronic
              Equipment) standards. Top Removals is a registered UK Environment Agency waste
              carrier, so disposal is documented and compliant.{" "}
              <Link
                href="/rubbish-disposal"
                className="text-brand-orange underline underline-offset-2 hover:text-brand-navy"
              >
                See the WEEE recycling service →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── S6: Furniture dismantling and reassembly ── */}
      <section id="furniture" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            align="left"
            eyebrow="Fit-out protection"
            title="Office Furniture Dismantling, Moving and Reassembly"
          />
          <div
            className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-brand-charcoal/85"
            data-reveal
          >
            <p>
              Office furniture ranges from standard desks and storage to bespoke system furniture,
              height-adjustable workstations and acoustic office pods. Top Removals crews dismantle,
              wrap and transport all of these, then reassemble to the new floor plan at the
              destination.{" "}
              <Link
                href="/packing-service"
                className="text-brand-orange underline underline-offset-2 hover:text-brand-navy"
              >
                Professional packing
              </Link>{" "}
              is available for any item where wrapping in situ reduces risk.
            </p>
            <p>
              The surveyor documents what requires dismantling during the on-site survey and
              confirms the destination layout. This eliminates the delay caused by discovering
              mid-move that a piece of furniture will not fit through a lift or corridor at the
              new address. Items are padded with protective blankets throughout transit and
              reassembled directly to the agreed floor plan so your fit-out is ready from day one.
            </p>
          </div>
        </div>
      </section>

      {/* ── S7: How it works — project phases ── */}
      <section id="process" className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="From quote to completion"
              title="How Your London Office Move Works, Step by Step"
            />
          </div>
          <p data-reveal className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            Every office move follows the same six-step process, from the first call to waste
            collection at the end of move day.
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
                      <span aria-hidden="true" className="text-brand-orange/70"><Icon className="h-4 w-4" /></span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-brand-charcoal/80">{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Desktop: project phase bands (lg+) */}
          <div className="mt-10 hidden lg:grid lg:grid-cols-4 lg:gap-0">
            {phases.map((phase, pi) => (
              <div
                key={phase.label}
                data-reveal
                data-delay={String(pi + 1)}
                className={`border border-black/8 p-5 first:rounded-l-xl last:rounded-r-xl ${
                  pi === 2
                    ? "bg-brand-navy text-white"
                    : pi === 0
                      ? "bg-brand-grey"
                      : "bg-white"
                }`}
              >
                {/* Phase header */}
                <div className={`pb-4 border-b ${pi === 2 ? "border-white/15" : "border-black/10"}`}>
                  <p className={`text-[0.6rem] font-bold uppercase tracking-widest ${pi === 2 ? "text-brand-orange" : "text-brand-orange"}`}>
                    Phase {pi + 1}
                  </p>
                  <p className={`mt-1 text-sm font-bold leading-snug ${pi === 2 ? "text-white" : "text-brand-navy"}`}>
                    {phase.label}
                  </p>
                  <p className={`mt-0.5 text-xs leading-relaxed ${pi === 2 ? "text-white/60" : "text-brand-charcoal/55"}`}>
                    {phase.sub}
                  </p>
                </div>

                {/* Steps within this phase */}
                <ol className="mt-4 space-y-4">
                  {phase.stepIndices.map((si, idx) => {
                    const step = processSteps[si];
                    const Icon = processIcons[si];
                    return (
                      <li key={step.name} className={`relative flex gap-3 ${idx > 0 ? "mt-4 pt-4 border-t " + (pi === 2 ? "border-white/10" : "border-black/8") : ""}`}>
                        <div className="flex flex-col items-center">
                          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold shadow-sm ${pi === 2 ? "bg-white/15 text-white" : "bg-brand-navy text-white"}`}>
                            {si + 1}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <p className={`text-xs font-bold leading-snug ${pi === 2 ? "text-white" : "text-brand-navy"}`}>
                              {step.name}
                            </p>
                            <span aria-hidden="true" className={pi === 2 ? "text-brand-orange/80" : "text-brand-orange/70"}>
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                          </div>
                          <p className={`mt-1 text-xs leading-relaxed ${pi === 2 ? "text-white/70" : "text-brand-charcoal/65"}`}>
                            {step.text}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-10 flex justify-center">
            <Button href="/bookservice" variant="orange" size="lg">
              Book a Free Survey
            </Button>
          </div>
        </div>
      </section>

      {/* ── S8: Office removal costs ── */}
      <section id="costs" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Transparent pricing"
            title="How Much Do Office Removals Cost in London?"
          />
          <div
            className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-brand-charcoal/85"
            data-reveal
          >
            {/* CONFIRM: verify the per-workstation figure with operations before publishing */}
            <p>
              A full-scale office move in London — covering furniture, files and IT — costs from
              around <strong>£100 per workstation</strong> as a generic guide. This figure varies
              significantly depending on the scope of the job. A one-desk move will cost far less
              than a 50-person relocation with a comms room. The free on-site survey is the most
              accurate way to get a fixed price.
            </p>
          </div>

          <div
            className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
            data-reveal
          >
            <h3 className="text-base font-bold uppercase tracking-wide text-brand-navy">
              What affects the total cost of an office move?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
              Eight factors drive the final price. Understanding them helps you identify where to
              optimise budget and where to invest in protection.
            </p>
            <CheckList items={costFactors} columns={2} className="mt-6" />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/bookservice" variant="orange" size="md">
                Book a Free Survey
              </Button>
              <Button href="/prices" variant="navy" size="md">
                View All Prices
              </Button>
              <Button href="/bookservice#quick-quote" variant="outline" size="md">
                Quick Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── S9: Insurance, accreditations and recycling ── */}
      <section id="trust" className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            tone="light"
            eyebrow="Insured, accredited, licensed"
            title="Insured, Accredited and Fully Licensed Office Movers"
          />
          <p
            className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/80"
            data-reveal
          >
            Commercial buyers require more than a verbal assurance. The accreditations below are
            independently verified and renewed annually. Each one carries a real complaints or
            claims process. Insurance limits can be tailored to the value of the move.
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

          <div className="mt-10 mx-auto max-w-3xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div data-reveal data-delay="1" className="rounded-2xl bg-white/10 p-6 text-white">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                Commercial goods-in-transit insurance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Covers business equipment and furniture from loading to delivery.
                Tailored increased limits are available for high-value IT or specialist equipment.
              </p>
            </div>
            <div data-reveal data-delay="2" className="rounded-2xl bg-white/10 p-6 text-white">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                Public liability insurance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                Covers damage caused to your premises — floors, walls, lifts, door frames — by the
                crew during the move. Active on every booking without exception.
              </p>
            </div>
            <div data-reveal data-delay="3" className="rounded-2xl bg-brand-orange p-6 text-white">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                UK Environment Agency — licensed waste carrier
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                Registered waste carrier (reg. CBDL25630) covering the legal disposal and
                WEEE-compliant recycling of decommissioned IT, electrical equipment and office
                furniture.
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
            <Button href="/rubbish-disposal" variant="outline-light" size="md">
              WEEE Recycling
            </Button>
          </div>
        </div>
      </section>

      {/* ── S10: London boroughs and building access ── */}
      <section id="areas" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="All London boroughs, plus the UK"
            title="London Boroughs We Cover and How We Handle Building Access"
          />

          <div
            className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-brand-charcoal/85"
            data-reveal
          >
            {/* CONFIRM: verify coverage claims against actual service practice before publishing */}
            <p>
              Top Removals office removal crews cover all 32 London boroughs, Greater London and
              the UK. Commercial business districts served include the City of London, Canary Wharf,
              Mayfair, Shoreditch and Tech City, Victoria, Paddington Basin, Vauxhall, London
              Bridge and Hammersmith.
            </p>
            <p>
              Commercial building access in London is rarely straightforward. Managed buildings
              require goods lift bookings, loading bay reservations, and out-of-hours building
              management liaison — all arranged by the operations team in advance. Where the council
              requires a parking suspension for the loading vehicle, this is arranged with the
              relevant borough as part of move planning, typically 2 to 5 working days before
              move day.
            </p>
            <p>
              Where a building management company or freeholder requires a method statement and risk
              assessment (RAMS) before granting access, Top Removals produces these as part of the
              pre-move planning process. Note this requirement at the survey stage and it will be
              included in the quote.
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

      {/* ── S11: Who we move and storage ── */}
      <section id="who-we-move" className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Every business, every scale"
            title="Businesses We Move, From Startups to Corporates"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Business types */}
            <div data-reveal className="space-y-5 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Top Removals moves offices of every scale. Small offices and startups receive the
                same managed care as multi-floor corporate relocations: a named coordinator, a
                written plan and a fixed price. The process does not change because the headcount
                is small.
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Small offices and single-room studios — from one desk, no minimum",
                  "Startups and scale-ups — flexible booking, same-day options available",
                  "SMBs across one or two floors — standard managed relocation with IT and furniture",
                  "Corporate multi-floor moves — phased sequencing, RAMS, building management liaison",
                  "Warehouse and stock transfers — floor-level and heavy-load handling",
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
              {/* CONFIRM: add a confirmed commercial case-study line here before publishing */}
            </div>

            {/* Storage add-on */}
            <div
              data-reveal
              data-delay="1"
              className="rounded-2xl bg-brand-navy p-8 text-white"
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                Business storage for phased moves
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                A 24/7 CCTV-monitored London storage facility is available as part of any office
                move or as a standalone service. Phased relocations use storage to hold items
                between stages. Short-notice relocations use storage when the new address is not
                ready on move day.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "24/7 CCTV-monitored secure facility",
                  "Container and room storage options",
                  "Short-term and long-term availability",
                  "Bookable as part of the removal or standalone",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                    <CheckIcon className="h-4 w-4 shrink-0 text-brand-orange" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/storage"
                  className="text-sm font-semibold text-brand-orange underline underline-offset-2 hover:text-white"
                >
                  Storage options →
                </Link>
                <Link
                  href="/crate-hire"
                  className="text-sm font-semibold text-brand-orange underline underline-offset-2 hover:text-white"
                >
                  Crate hire →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S12: Reviews ── */}
      <section id="reviews" className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            tone="light"
            eyebrow="Trustpilot and Google Reviews"
            title="What London Businesses Say About Our Office Moves"
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
            <p className="text-sm font-semibold text-brand-navy">Reviews powered by Trustpilot</p>
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

      {/* ── S13: Final CTA ── */}
      <CtaBand
        heading="Get Your Office Removals Quote Today"
        subtext="Free survey · fixed price · minimal downtime · 7 days a week"
        actions={[
          { label: "Get a Quote", href: "/bookservice#quick-quote", variant: "navy" },
          { label: "Book a Free Survey", href: "/bookservice", variant: "outline-light" },
        ]}
      />

      {/* ── S14: FAQs ── */}
      <section id="faq" className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Common questions answered"
            title="Office Removals London: Frequently Asked Questions"
          />
          <Faq items={faqs} defaultOpen={null} className="mt-10" />
        </div>
      </section>

      {/* Mobile spacer: prevents sticky bar from covering FAQ content */}
      <div className="h-[72px] sm:hidden" aria-hidden="true" />

      <OfficeRemovalsAnimations />
      <StickyMobileBar sentinelId="hero-intro" />
    </>
  );
}
