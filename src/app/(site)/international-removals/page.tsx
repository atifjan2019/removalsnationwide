import type { Metadata } from "next";
import { getResolvedSettings } from "@/lib/settings";
import Image from "next/image";
import Link from "next/link";
import {
  buildMetadata,
  serviceH1,
  serviceLdFor,
  breadcrumbLd,
  organizationLd,
  SITE_URL,
} from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import CheckList, { type CheckItem } from "@/components/services/CheckList";
import TipList, { type Tip } from "@/components/services/TipList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import InternationalRemovalsAnimations from "@/components/services/InternationalRemovalsAnimations";
import {
  IcoPhone,
  IcoClipboard,
  IcoDocument,
  IcoCalendar,
  IcoTruck,
  IcoCheck,
} from "@/components/services/ProcessStepIcons";
import { CheckIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("international-removals");

/* ── Hero service highlights ───────────────────────────────────────────── */

const internationalServiceStandards = [
  { name: "Fully insured removals" },
  { name: "Vetted moving crews" },
  { name: "International moving experience" },
  { name: "Documented claims process" },
  { name: "Clear written quotations" },
  { name: "Written service terms" },
];

/* ── Data ──────────────────────────────────────────────────────────── */

const trustTiles = [
  {
    title: "Own European Fleet with Tracking",
    body: "Removals Nationwide runs its own fleet of vehicles throughout Europe. Every shipment is trackable from the moment your goods are loaded. No broker handoff.",
  },
  {
    title: "Weekly Scheduled Routes",
    body: "Weekly departures to Scandinavia, Norway, Germany, Switzerland, Benelux and Austria. Bi-weekly to Poland, Lithuania, Latvia and Estonia.",
  },
  {
    title: "International Moving Experience",
    body: "Experienced coordinators manage routes, documentation, packing requirements and destination delivery.",
  },
  {
    title: "Fully Insured, Open Cover Available",
    body: "Basic goods-in-transit insurance is included in every booking. An open cover upgrade is available for extra protection on valuables during international transit.",
  },
];

const routes = [
  {
    freq: "Weekly",
    freqStyle: "bg-brand-red",
    destinations: "Scandinavia, Norway, Germany, Switzerland, Benelux and Austria",
    note: "Dedicated Norway service available.",
  },
  {
    freq: "Bi-weekly",
    freqStyle: "bg-brand-navy",
    destinations: "Poland, Lithuania, Latvia and Estonia",
    note: "Partnered with major Estonian moving companies for local support on the ground.",
  },
  {
    freq: "Via agent, sea or air",
    freqStyle: "bg-brand-charcoal",
    destinations:
      "All other European countries, USA, Canada, Australia, New Zealand, Singapore, China, South Africa and UAE",
    note: null,
  },
];

const shippingMethods = [
  {
    title: "European Road Freight",
    body: "Own-fleet, scheduled road removals from London to European destinations. Every vehicle is tracked from loading to delivery. The fastest and most cost-effective route for European moves.",
    badge: "Own fleet",
    badgeClass: "bg-brand-red",
  },
  {
    title: "Sea Freight",
    body: "Worldwide shipping by sea, handled through our partner network. The most cost-effective method for large volumes over long distances. Suited to the USA, Canada, Australia, New Zealand and South Africa.",
    badge: "Via partners",
    badgeClass: "bg-brand-navy",
  },
  {
    title: "Airfreight",
    body: "The fastest option for international shipping, available worldwide via our partner network. Suited to urgent, smaller or high-value consignments where speed takes priority over cost.",
    badge: "Via partners",
    badgeClass: "bg-brand-navy",
  },
];

const processSteps = [
  {
    name: "Request a survey date",
    text: "Contact us online, by phone or WhatsApp. A coordinator confirms a survey date for the belongings you plan to move.",
    Icon: IcoPhone,
  },
  {
    name: "Survey and packing advice",
    text: "Our specialist surveys your goods, advises on packaging and gives an overall time estimate. Online video surveys are available for smaller loads.",
    Icon: IcoClipboard,
  },
  {
    name: "Free quote",
    text: "We calculate everything and produce a written fixed quote for the full scope before any work begins.",
    Icon: IcoDocument,
  },
  {
    name: "Coordinator assigned",
    text: "A dedicated moving coordinator is assigned to manage your documentation, customs information and the full organisation of the move.",
    Icon: IcoCalendar,
  },
  {
    name: "Moving day",
    text: "Our crew arrives and loads your belongings. From this point everything is our responsibility. You do nothing until you are ready to receive at the other end.",
    Icon: IcoTruck,
  },
  {
    name: "Delivery to destination",
    text: "Your goods are delivered to your new address within the scheduled timeframe. Your coordinator confirms the delivery window at booking.",
    Icon: IcoCheck,
  },
];

const serviceIncludes: CheckItem[] = [
  {
    lead: "International packing and wrapping",
    text: "Packed to the standard required for the distance and transport method. All materials included.",
  },
  {
    lead: "Customs and documentation",
    text: "Your coordinator handles country and customs information, inventory and all required paperwork.",
  },
  {
    lead: "Door to door delivery",
    text: "Collection at your London address. Delivery direct to the front door at your destination.",
  },
  {
    lead: "Shipment tracking",
    text: "Your goods are trackable from loading to delivery on our own European fleet.",
  },
  {
    lead: "Assigned moving coordinator",
    text: "One person manages your documentation, customs, timeline and communication from survey to delivery.",
  },
  {
    lead: "Secure storage",
    text: "24/7 CCTV-monitored storage at our Purfleet compound, available before departure or on arrival at your destination.",
  },
  {
    lead: "Immigration and Visa assistance",
    text: "Your coordinator provides guidance and connects you with the right resources for immigration and Visa requirements.",
  },
  {
    lead: "Open cover insurance",
    text: "Basic cover is standard. An open cover upgrade is available for extra protection on valuables throughout the journey.",
  },
];

const whyChoose: CheckItem[] = [
  {
    lead: "Weekly scheduled European routes",
    text: "Weekly services to Scandinavia, Norway, Germany, Switzerland, Benelux and Austria. No waiting months for delivery.",
  },
  {
    lead: "Own fleet, not a broker",
    text: "Removals Nationwide runs its own European fleet. Your goods do not pass through unknown hands. Every shipment is trackable.",
  },
  {
    lead: "Baltic coverage via Estonian partner",
    text: "Bi-weekly service to Poland, Lithuania, Latvia and Estonia. Partnered with major Estonian movers for local support.",
  },
  {
    lead: "experienced in international moving",
    text: "Experienced with the international moving partners. The international standard for professional moving companies.",
  },
  {
    lead: "Assigned coordinator from day one",
    text: "One person manages your documentation, customs, timeline and communication from survey to delivery.",
  },
  {
    lead: "Fully insured, open cover available",
    text: "Basic cover included. Open cover upgrade for additional protection on valuables during international transit.",
  },
  {
    lead: "Combined removals, packing and storage",
    text: "Book removals, packing and storage as one service. One coordinator, one fixed price, one managed transition.",
  },
  {
    lead: "Door to door, home and business",
    text: "We collect from your London address and deliver to the door at your destination. Household and commercial relocations.",
  },
];

const tips: Tip[] = [
  {
    title: "Know your destination country's regulations",
    body: "Every country restricts certain imports. Plants, live animals, some medicines, firearms, food products and controlled substances are commonly regulated or prohibited. Your coordinator advises on specific rules for your destination before anything is packed. Do not assume that what is permitted in the UK is allowed at the other end.",
  },
  {
    title: "Book professional packing for an international move",
    body: "An international move is not the same as relocating within London. Your belongings travel by road, sea or air over long distances. Items need to be properly wrapped, padded and sealed for the journey. Our crews pack to the same standard used for international shipping contracts.",
  },
  {
    title: "Upgrade to open cover insurance",
    body: "Basic goods-in-transit insurance covers standard transit risk. The open cover upgrade extends protection to your valuables throughout the international journey. Speak to your coordinator about what is and is not covered under each option before you confirm the scope.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How early should I schedule an international move?",
    answer:
      "Allow at least 2 weeks notice for a long-distance move, and more for international. For a dedicated door-to-door service rather than a part-load, allow a month or more. Parking suspensions often require 2 weeks notice from local authorities. Changing your date at short notice risks losing reserved suspension bays and is subject to availability.",
  },
  {
    question: "What is a part-load service?",
    answer:
      "A part load shares container or vehicle space with other consignments travelling the same route, lowering the cost for smaller moves. The trade-off is a wider delivery window rather than a fixed date. A full load gives you a dedicated vehicle or container with confirmed collection and delivery dates. Any move that shares space and is completed within 14 days meets the international part-load standard.",
  },
  {
    question: "How do I ship my belongings to another country?",
    answer:
      "Book a survey, we quote and confirm the scope, then pack and load your goods. Your coordinator handles customs documentation and all required paperwork. We ship by road on our own fleet for European destinations, or by sea or air via our partner network for worldwide moves. Your goods are delivered door to door at your destination.",
  },
  {
    question: "How much do international removals cost?",
    answer:
      "Cost depends on volume, destination and distance, shipping method, part load versus full load, packing scope and insurance. No fixed figure is accurate without a survey. A free survey confirms the exact scope and a written fixed quote is issued before any commitment is made.",
  },
  {
    question: "Which countries do you cover?",
    answer:
      "Weekly road services to Scandinavia, Norway, Germany, Switzerland, Benelux and Austria on our own fleet. Bi-weekly services to Poland, Lithuania, Latvia and Estonia. Wider Europe and worldwide destinations including the USA, Canada, Australia, New Zealand, Singapore, China, South Africa and the UAE via our partner network and sea or air freight.",
  },
  {
    question: "Are my belongings insured during an international move?",
    answer:
      "Yes. Basic goods-in-transit insurance is included in every international booking. An open cover policy upgrade is available for additional protection on high-value items throughout the international journey. Your coordinator explains both options at the survey stage.",
  },
  {
    question: "Do you handle customs and documentation?",
    answer:
      "Yes. Your assigned moving coordinator handles country and customs information, inventory documentation and all required paperwork for your destination. For complex relocations involving immigration or Visa requirements, your coordinator provides guidance and connects you with the appropriate services.",
  },
  {
    question: "What items cannot be shipped internationally?",
    answer:
      "Restricted and prohibited items vary by destination country. Plants, live animals, certain medicines, firearms, ammunition, flammable items, pressurised canisters and food products are commonly restricted. Your coordinator confirms what qualifies for your specific destination before packing begins.",
  },
  {
    question: "How long does an international delivery take?",
    answer:
      "Delivery time depends on destination and shipping method. European road services run on weekly and bi-weekly schedules, which reduces waiting time significantly. Worldwide sea freight typically takes 4 to 12 weeks depending on destination. Airfreight is faster. Your coordinator confirms the expected timeframe at the survey stage.",
  },
];

/* ── Schema ────────────────────────────────────────────────────────── */

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  ...organizationLd(),
  "@id": `${SITE_URL}/#organization`,
};

/* ── Page ──────────────────────────────────────────────────────────── */

export default async function InternationalRemovalsPage() {
  const { phones } = await getResolvedSettings();
  return (
    <>
      <JsonLd data={serviceLdFor("international-removals")} />
      <JsonLd data={faqPageSchema} />
      <JsonLd data={orgSchema} />
      <JsonLd
        data={breadcrumbLd([
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "International Removals" },
        ])}
      />
      <InternationalRemovalsAnimations />
      <StickyMobileBar sentinelId="hero-intro" />

      {/* ── S1: Hero ─────────────────────────────────────────────────── */}
      <PageBanner
        title="International Removals from the UK"
        subtitle="Weekly own-fleet routes across Europe, door to door, plus worldwide by sea and air."
        h1={serviceH1["international-removals"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "International Removals" },
        ]}
      />

      {/* ── S1 continued: value prop + CTAs (mirrors office/storage pages) */}
      <section id="hero-intro" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">

            {/* Left: value prop + CTAs */}
            <div>
              <p className="hero-anim-sub max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                Removals Nationwide provides managed international removals from across the UK with an active
                company fleet across Europe and full shipment tracking from loading to delivery.
                No broker chain. Your goods travel on our own vehicles.
              </p>
              <p className="hero-anim-sub mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                Weekly road routes to Scandinavia, Norway, Germany, Switzerland, the Benelux and
                the Baltics. Worldwide by sea and air via our partner network. experienced in international moving,
                door to door, fully insured.
              </p>

              <div className="hero-anim-ctas mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href="/bookservice#quick-quote"
                  variant="red"
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
                  href={phones.london.href}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {phones.london.label}
                </Button>
              </div>

              <p className="hero-anim-trust mt-3 text-xs font-medium text-brand-charcoal/55">
                Free quote in under 2 minutes. Door to door. Fully insured.
              </p>

              <div className="hero-anim-trust mt-5 flex flex-wrap gap-2">
                {[
                  "Weekly EU routes",
                  "Door to door",
                  "experienced in international moving",
                  "Fully insured",
                ].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-grey px-3 py-1.5 text-xs font-semibold text-brand-navy"
                  >
                    <CheckIcon className="h-3.5 w-3.5 text-brand-red" strokeWidth={3} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: image + trusted-by card */}
            <div
              className="overflow-hidden rounded-2xl border border-black/10 shadow-sm"
              data-reveal
              data-delay="1"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1710749093416-1e9cdde8d080?auto=format&fit=crop&w=2400&q=82"
                  alt="Removals Nationwide international removals fleet serving Europe from the UK"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-brand-grey p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-navy">
                  Service highlights
                </p>
                <ul className="space-y-2">
                  {internationalServiceStandards.map(({ name }) => (
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
        </div>
      </section>

      <CtaBand
        heading="Get Your International Removal Quote"
        buttonLabel="Quick Quote"
        buttonHref="/bookservice#quick-quote"
      />

      {/* ── S2: Why Move Abroad With Removals Nationwide ────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="The right international mover"
            title="Why Move Abroad With Removals Nationwide"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustTiles.map((tile, i) => (
              <div
                key={tile.title}
                data-reveal
                data-delay={String(i + 1)}
                className="flex flex-col rounded-2xl border border-black/5 bg-brand-grey p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-base font-bold text-brand-navy">{tile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/85">{tile.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: International Removals From London ───────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <SectionHeading
              align="left"
              eyebrow="International removals 2026"
              title="International Removals From the UK to Europe and Beyond"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Removals Nationwide has maintained an active fleet of vehicles throughout Europe since the
                company was established. Your goods travel on our own vehicles, not through a broker
                chain, and every shipment is trackable from the moment it leaves your London address.
              </p>
              <p>
                In 2026, more London households and businesses use international removal specialists
                rather than coordinating freight independently. Customs documentation, insurance and
                logistics complexity all carry real risk when managed without professional oversight.
              </p>
              <p>
                Removals Nationwide uses documented procedures, appropriate insurance and trained
                staff for international moves. Our{" "}
                <Link
                  href="/packing-service"
                  className="text-brand-red underline underline-offset-2 hover:text-brand-navy"
                >
                  professional packing service
                </Link>{" "}
                is available as part of every international booking.
              </p>
            </div>
          </div>
          <div data-reveal data-delay="1" className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1781807124729-a6a68d42a6d7?auto=format&fit=crop&w=2400&q=82"
                alt="Removals Nationwide crew managing a London international removal with tracked shipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 -z-10 hidden h-36 w-36 rounded-2xl bg-brand-red/15 lg:block"
            />
          </div>
        </div>
      </section>

      {/* ── S4: Our Weekly European Removal Routes ───────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="The differentiator"
              title="Our Weekly European Removal Routes"
            />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-brand-charcoal/80">
              Scheduled departures from London every week. No waiting months for a consignment to
              fill. Ask your coordinator for the next available slot to your destination.
            </p>
          </div>

          <div className="mt-10" data-reveal data-delay="1">
            <div className="overflow-x-auto rounded-2xl border border-black/8 bg-white shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/8 bg-brand-navy text-white">
                    <th scope="col" className="px-6 py-4 font-bold uppercase tracking-wide">
                      Service frequency
                    </th>
                    <th scope="col" className="px-6 py-4 font-bold uppercase tracking-wide">
                      Destinations
                    </th>
                    <th
                      scope="col"
                      className="hidden px-6 py-4 font-bold uppercase tracking-wide sm:table-cell"
                    >
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  {routes.map((r) => (
                    <tr key={r.freq} className="transition-colors hover:bg-brand-grey/50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${r.freqStyle}`}
                        >
                          {r.freq}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-brand-charcoal/85">{r.destinations}</td>
                      <td className="hidden px-6 py-4 text-brand-charcoal/55 sm:table-cell">
                        {r.note ?? ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p data-reveal className="mx-auto mt-6 max-w-2xl text-center text-sm text-brand-charcoal/60">
            Removals Nationwide runs a dedicated weekly Norway service.{" "}
            <Link
              href="/removals-services-to-norway"
              className="font-semibold text-brand-red underline underline-offset-2 hover:text-brand-navy"
            >
              See the Norway removals page
            </Link>{" "}
            for routes, frequency and pricing.
          </p>
        </div>
      </section>

      {/* ── S5: How We Ship Your Belongings ─────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Shipping methods" title="How We Ship Your Belongings" />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            The right method depends on your destination, volume and timeline. European moves travel
            by road on our own fleet. Worldwide moves use sea or air freight via our partner network.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {shippingMethods.map((m, i) => (
              <div
                key={m.title}
                data-reveal
                data-delay={String(i + 1)}
                className="flex flex-col rounded-2xl border border-black/8 bg-brand-grey p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-brand-navy">{m.title}</h3>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white ${m.badgeClass}`}
                  >
                    {m.badge}
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-brand-charcoal/85">{m.body}</p>
              </div>
            ))}
          </div>

          {/* Part load vs full load */}
          <div className="mt-12" data-reveal>
            <h3 className="mb-6 text-center text-lg font-bold text-brand-navy">
              Part Load or Full Load: Which Fits Your Move?
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border-2 border-brand-navy/10 bg-white p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-brand-navy">
                  Part load (shared)
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Shares space on a vehicle or container with other consignments",
                    "Lower cost for smaller volumes",
                    "Wider collection and delivery window, confirmed with a few days notice",
                    "Suited to boxes, single items and smaller household moves",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-brand-charcoal/85"
                    >
                      <CheckIcon
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-brand-red bg-brand-navy p-6 text-white">
                <p className="text-sm font-bold uppercase tracking-wide text-white">
                  Full load (dedicated)
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Dedicated vehicle or container, your goods only",
                    "Fixed confirmed collection and delivery date",
                    "Faster delivery on European routes",
                    "Suited to full household or office relocations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                      <CheckIcon
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: Worldwide Destinations ───────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Global coverage" title="Worldwide Destinations We Cover" />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
              Non-European destinations are served by overseas shipping, airfreight and our partner
              agent network. These are partner and sea/air services, not own-fleet road runs.
            </p>
          </div>
          <div
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
            data-reveal
            data-delay="1"
          >
            {[
              { region: "North America", places: "USA, Canada" },
              { region: "Australasia", places: "Australia, New Zealand" },
              { region: "Asia", places: "Singapore, China" },
              { region: "Africa", places: "South Africa" },
              { region: "Middle East", places: "UAE" },
            ].map((d) => (
              <div
                key={d.region}
                className="rounded-xl border border-black/8 bg-white p-4 text-center shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-brand-red">
                  {d.region}
                </p>
                <p className="mt-1 text-sm text-brand-charcoal/85">{d.places}</p>
              </div>
            ))}
          </div>
          <p
            data-reveal
            className="mx-auto mt-6 max-w-2xl text-center text-xs text-brand-charcoal/50"
          >
            Contact us for a destination not listed. Your coordinator confirms the partner or freight
            route used before any commitment is made.{" "}
            <Link
              href="/areas"
              className="font-semibold text-brand-red underline underline-offset-2 hover:text-brand-navy"
            >
              See our UK service areas
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── S7: What Is Included ─────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="Full-service international removal"
              title="What Is Included in Our International Service"
            />
          </div>
          <div data-reveal data-delay="1">
            <CheckList items={serviceIncludes} columns={2} className="mx-auto mt-10 max-w-5xl" />
          </div>
          <p data-reveal className="mx-auto mt-8 max-w-2xl text-center text-sm text-brand-charcoal/60">
            Storage is available before and after your move.{" "}
            <Link href="/storage" className="underline hover:text-brand-red">
              Secure storage in London
            </Link>
            . Packing materials and crates supplied separately:{" "}
            <Link href="/crate-hire" className="underline hover:text-brand-red">
              crate hire
            </Link>{" "}
            and{" "}
            <Link href="/packaging-materials" className="underline hover:text-brand-red">
              packaging materials
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── S8: How Your International Move Works ────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal className="text-center">
            <span className="inline-block rounded-full bg-brand-red/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-red">
              Step by step
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
              How Your International Move Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
              Six steps from first contact to delivery at your destination. The same process for
              every international job, home or business.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(({ name, text, Icon }, i) => (
              <div
                key={name}
                data-reveal
                data-delay={String(Math.min(i + 1, 7))}
                className="flex flex-col rounded-2xl bg-white/8 p-6 ring-1 ring-white/10 transition-all duration-200 hover:bg-white/12 motion-reduce:transition-none"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    Step {i + 1}
                  </span>
                </div>
                <p className="text-sm font-bold leading-snug text-white">{name}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/80">{text}</p>
              </div>
            ))}
          </div>
          <div data-reveal className="mt-10 flex justify-center">
            <Button href="/bookservice#quick-quote" variant="red" size="lg">
              Start With a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* ── S9: Customs, Documentation and Relocation Support ─────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              align="left"
              eyebrow="Administrative support"
              title="Customs, Documentation and Relocation Support"
            />
          </div>
          <div
            className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85"
            data-reveal
            data-delay="1"
          >
            <p>
              Every international move involves customs documentation, inventory lists, destination
              country requirements and, in some cases, import duty declarations. Removals Nationwide assigns
              a dedicated moving coordinator to manage all of this on your behalf.
            </p>
            <p>
              Your coordinator handles country and customs information, produces the inventory, manages
              the documentation for your destination and keeps you updated at each stage. For moves
              involving immigration and Visa requirements, your coordinator provides guidance and
              connects you with the appropriate professional resources.
            </p>
            <p>
              This coordination is included in every international booking, not an optional extra.
              It is one of the most significant practical differences between using a professional
              international mover and arranging freight independently.
            </p>
          </div>
        </div>
      </section>

      {/* ── S10: What Affects the Cost ───────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Transparent pricing"
            title="What Affects the Cost of Your International Move"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            International removal costs vary significantly by destination, volume and method. No
            fixed price is accurate without a survey. A free survey confirms your exact scope and a
            written fixed quote is issued before any commitment.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                factor: "Volume of goods",
                detail:
                  "Total volume determines vehicle or container size, and whether a part load or full load is the right option.",
              },
              {
                factor: "Destination and distance",
                detail:
                  "European road freight costs differ from sea freight to Australasia. Route, distance and customs requirements all affect the price.",
              },
              {
                factor: "Shipping method",
                detail:
                  "Road, sea or airfreight each carry different costs. Airfreight is fastest and most expensive. Sea freight is most cost-effective for large volumes.",
              },
              {
                factor: "Part load vs full load",
                detail:
                  "A shared part load costs less but comes with a wider delivery window. A dedicated full load gives fixed dates at a higher cost.",
              },
              {
                factor: "Packing and materials",
                detail:
                  "Professional packing for international moves adds to the total but reduces the risk of damage during the longer transit.",
              },
              {
                factor: "Insurance scope",
                detail:
                  "Basic insurance is included. An open cover upgrade adds to the cost but extends protection to high-value items throughout the journey.",
              },
            ].map((c, i) => (
              <div
                key={c.factor}
                data-reveal
                data-delay={String((i % 3) + 1)}
                className="rounded-xl border border-black/8 bg-brand-grey p-5"
              >
                <p className="text-sm font-bold text-brand-navy">{c.factor}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-charcoal/80">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S11: Insurance and Protecting Your Belongings ────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              align="left"
              eyebrow="Your cover"
              title="Insurance and Protecting Your Belongings"
            />
          </div>
          <div
            className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85"
            data-reveal
            data-delay="1"
          >
            <p>
              Basic goods-in-transit insurance is included in every international booking. This
              covers your belongings against standard transit risk from loading to delivery.
            </p>
            <p>
              For international moves, the open cover policy upgrade is available and recommended
              for any move that includes high-value items, antiques, artwork, electronics or
              irreplaceable pieces. The open cover policy extends protection throughout the
              international journey and provides higher declared values where the standard cover
              limit is insufficient.
            </p>
            <p>
              Ask your coordinator to explain the difference between basic cover and the open cover
              upgrade at the survey stage, before you confirm the scope. Insurance decisions are
              easier to make before packing begins.
            </p>
          </div>
        </div>
      </section>

      {/* ── S12: International Moving Tips ───────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Practical advice" title="International Moving Tips" />
          </div>
          <div data-reveal data-delay="1">
            <TipList tips={tips} numbered className="mt-10" />
          </div>
        </div>
      </section>

      {/* ── S13: Why Choose Removals Nationwide ─────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="The reasons"
              title="Why Choose Removals Nationwide for Your International Move"
            />
          </div>
          <div data-reveal data-delay="1">
            <CheckList items={whyChoose} columns={2} className="mx-auto mt-10 max-w-5xl" />
          </div>
        </div>
      </section>

      {/* ── S14: Reviews ─────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-16">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <div
            className="flex justify-center gap-1 text-brand-red"
            aria-label="Service standards"
          >
            <CheckIcon className="h-8 w-8" aria-hidden="true" />
          </div>
          <p className="mt-3 text-xl font-bold text-white">Fully insured service</p>
          <p className="mt-2 text-base text-white/70">
            Written quotations set out the agreed work, price and insurance terms before booking.
          </p>
          <Link
            href="/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[44px] items-center rounded-xl bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
          >
            View Our Service Standards
          </Link>
        </div>
      </section>

      {/* ── S15: Get Your Free International Removals Quote ──────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <h2 className="font-heading text-3xl font-bold text-brand-navy sm:text-4xl">
            Get Your Free International Removals Quote
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-brand-charcoal/70">
            A free survey confirms your volume, route and scope. A fixed written quote is issued
            before any commitment. No obligation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              href="/bookservice#quick-quote"
              variant="red"
              size="lg"
              className="w-full sm:w-auto"
            >
              Free Online Quote
            </Button>
            <Button
              href="/bookservice"
              variant="navy"
              size="lg"
              className="w-full sm:w-auto"
            >
              Book a Service
            </Button>
          </div>
          <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={phones.london.href}
              className="flex items-center gap-2 text-base font-bold text-brand-navy transition hover:text-brand-red"
            >
              <span aria-hidden="true" className="text-brand-red">&#9742;</span>
              {phones.london.label}
            </a>
            <a
              href={phones.freephone.href}
              className="flex items-center gap-2 text-base font-bold text-brand-navy transition hover:text-brand-red"
            >
              <span aria-hidden="true" className="text-brand-red">&#9742;</span>
              {phones.freephone.label} (freephone)
            </a>
          </div>
          <p className="mt-6 text-sm text-brand-charcoal/50">
            experienced in international moving &nbsp;&middot;&nbsp; Fully insured &nbsp;&middot;&nbsp; No obligation &nbsp;&middot;&nbsp; Registered in England No. 6874216
          </p>
        </div>
      </section>

      {/* ── S16: International Removals FAQs ─────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Good to know" title="International Removals FAQs" />
          </div>
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

    </>
  );
}
