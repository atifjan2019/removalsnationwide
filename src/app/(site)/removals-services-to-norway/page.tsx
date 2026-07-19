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
} from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import Faq, { type FaqItem } from "@/components/services/Faq";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import RemovalsToNorwayAnimations from "@/components/services/RemovalsToNorwayAnimations";
import { CheckIcon, StarIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("removals-to-norway");

/* ── Service Highlights ────────────────────────────────────────────────── */

const norwayServiceStandards = [
  { name: "Fully insured removals" },
  { name: "Vetted moving crews" },
  { name: "International moving experience" },
  { name: "Independent dispute resolution" },
  { name: "Clear written quotations" },
  { name: "Customer-reviewed service" },
];

/* ── S4: Departure schedule ────────────────────────────────────────── */

const schedule = [
  {
    city: "Oslo",
    freq: "Weekly",
    note: "Most frequent service",
    highlight: true,
  },
  { city: "Stavanger", freq: "Bi-weekly", note: "", highlight: false },
  { city: "Bergen", freq: "Bi-weekly", note: "", highlight: false },
  { city: "Trondheim", freq: "Monthly", note: "", highlight: false },
  { city: "Tromso", freq: "By request", note: "", highlight: false },
];

/* ── S5: What's included ───────────────────────────────────────────── */

const included = [
  {
    title: "Personal Move Coordinator",
    body: "Your coordinator plans the best route, arranges parking, hoist hire, local storage and handyman services. One contact from first call to final delivery.",
  },
  {
    title: "Inclusive Customs Clearance",
    body: "We provide inclusive customs clearance and assist with your documentation where needed, arranged through the coordinator. No separate customs agent required.",
  },
  {
    title: "Free UK-Wide Collection",
    body: "All trucks depart our London depot. Free collections and deliveries are included across the whole of the UK, including Scotland and Wales.",
  },
  {
    title: "Local Teams Across Norway",
    body: "Teams positioned in Oslo, Hamar, Horten, Stavanger, Alesund, Bergen, Trondheim and Tromso for packing and loading at both ends of the move.",
  },
  {
    title: "Road-Trains and Tranship Shuttles",
    body: "Road-trains over 110 cubic metres carry the main load. Tranship shuttle vehicles reach remote and difficult-access addresses in Norway.",
  },
  {
    title: "Insurance Packages",
    body: "From limited to fully comprehensive, insurance is quoted separately depending on the cover required. We confirm the options with your quote.",
  },
  {
    title: "Oslo and London Storage",
    body: "A local storage facility in Oslo and a warehouse in London, available for staged delivery or when road conditions delay onward delivery to a remote address.",
  },
];

/* ── S9: Tips ──────────────────────────────────────────────────────── */

const tips = [
  {
    num: 1,
    title: "Plan around Norway's extended daylight hours",
    body: "Norway experiences very long summer days and very short winter days depending on your destination. If you are moving to northern Norway such as Tromso, be prepared for the midnight sun in summer and polar night in winter. Norway's lighting patterns affect the first weeks settling in, so plan your schedule and blackout blinds well in advance.",
  },
  {
    num: 2,
    title: "Pack warm clothing separately for easy access",
    body: "Norwegian winters are harsh, particularly outside the major cities. Pack warm coats, boots and thermals in a separate bag or accessible box rather than deep in a container. This ensures you have what you need immediately on arrival, even before the bulk of your belongings are unpacked.",
  },
  {
    num: 3,
    title: "Consider winter storage for mountain road closures",
    body: "Some mountain passes and rural roads in Norway close seasonally due to heavy snowfall. If you are moving to a remote or highland area, check the expected road conditions for your destination. Our Oslo storage facility lets you receive goods there first and arrange onward delivery once your road is accessible.",
  },
];

/* ── FAQs ──────────────────────────────────────────────────────────── */

const faqs: FaqItem[] = [
  {
    question: "How long does the transit from London to Norway take?",
    answer:
      "Truck transit from London to Norway takes 3 to 4 days. A full door-to-door move runs roughly 6 to 9 days: 2 to 3 days for packing and loading, 3 to 4 days in transit, and 1 to 2 days for unloading and delivery. A part-load takes up to 2 weeks while loads consolidate.",
  },
  {
    question: "How much does it cost to move to Norway?",
    answer:
      "Single items start from £300 to £350, and a full household truck runs up to £10,000 to £12,000, with the exact price set by the volume of goods. Insurance is quoted separately depending on the cover required. Contact us for a same-day quote tailored to your move.",
  },
  {
    question: "Do you handle customs clearance?",
    answer:
      "Yes. Norway is outside the EU, so customs clearance is required on arrival. We provide inclusive customs clearance and assist with your documentation where needed. Everything is arranged through your move coordinator with no separate customs agent needed on your side.",
  },
  {
    question: "Can you collect from anywhere in the UK?",
    answer:
      "Yes. All trucks depart from our London depot and free collections and deliveries are included across the whole of the UK. England, Scotland and Wales are covered. We schedule a convenient collection date that aligns with your chosen Norway departure.",
  },
  {
    question: "Do you offer storage in Norway?",
    answer:
      "Yes, we have a local storage facility in Oslo and a warehouse in London. Both are useful for staged delivery or when road conditions delay the final leg of your move to a remote address. Your move coordinator arranges storage as part of the booking.",
  },
  {
    question: "Do you do winter removals to Norway?",
    answer:
      "Yes, the service runs year-round. Summer sees weekly departures. The quieter winter period runs every 2 to 3 weeks. We reach any town in Norway year-round, taking the coastal route through tunnels and ferries when some mountain roads close in the colder months.",
  },
  {
    question: "Which Norwegian cities do you cover?",
    answer:
      "Oslo weekly, Stavanger and Bergen bi-weekly, Trondheim monthly, and Tromso by request. Our local teams cover Oslo, Hamar, Horten, Stavanger, Alesund, Bergen, Trondheim and Tromso, with delivery to any town in Norway through our network of tranship shuttle vehicles.",
  },
  {
    question: "Can you move a single item to Norway?",
    answer:
      "Yes. We handle everything from a single item on a part-load basis up to a full household truck. Single items start from £300 to £350. Contact us with the item description and destination for a same-day quote and an available departure date.",
  },
];

/* ── Schema ─────────────────────────────────────────────────────────── */

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
};

const norwayOfferSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Removals to Norway from the UK",
  provider: { "@type": "LocalBusiness", name: "Removals Nationwide" },
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: 300,
      maxPrice: 350,
      priceCurrency: "GBP",
      description:
        "Single item from £300 to £350. Full household truck up to £10,000 to £12,000 per truck. Insurance charged separately. Contact us to confirm VAT treatment.",
    },
  },
};

/* ── Page ────────────────────────────────────────────────────────────── */

export default async function RemovalsToNorwayPage() {
  const { phones } = await getResolvedSettings();
  return (
    <>
      <JsonLd data={serviceLdFor("removals-to-norway")} />
      <JsonLd data={faqPageSchema} />
      <JsonLd data={orgSchema} />
      <JsonLd data={norwayOfferSchema} />
      <JsonLd
        data={breadcrumbLd([
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Removals to Norway from the UK" },
        ])}
      />
      <RemovalsToNorwayAnimations />
      <StickyMobileBar sentinelId="hero-intro" />

      {/* ── S1: Hero ─────────────────────────────────────────────────── */}
      <PageBanner
        title="Removals to Norway from the UK"
        subtitle="Weekly scheduled departures. Own road-trains. Local teams across Norway. Inclusive customs clearance."
        h1={serviceH1["removals-to-norway"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Removals to Norway from the UK" },
        ]}
      />

      {/* ── S1 continued: two-column canonical ───────────────────────── */}
      <section id="hero-intro" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">

            {/* Left: value prop + CTAs */}
            <div>
              <p className="hero-anim-sub max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                Removals Nationwide runs weekly scheduled removals to Norway from the UK, operating on
                this route for nearly a decade. In 2026, the service covers the whole UK with
                free collection from any address, delivering to any town in Norway through a
                network of local teams positioned across the country.
              </p>
              <p className="hero-anim-sub mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                Own road-trains over 110 cubic metres, an Oslo storage depot, inclusive customs
                clearance, and a personal move coordinator from first call to final delivery.
                From a single item to a full household truck.
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
                Same-day quote by phone or email. Own fleet. Fully insured.
              </p>

              <div className="hero-anim-trust mt-5 flex flex-wrap gap-2">
                {[
                  "Weekly departures",
                  "Own road-trains",
                  "Local Norway teams",
                  "Inclusive customs",
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
                  src="/gallery/move-27.jpg"
                  alt="Removals Nationwide road-train for weekly removals to Norway from the UK"
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
                  {norwayServiceStandards.map(({ name }) => (
                    <li key={name} className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 shrink-0 text-brand-red" strokeWidth={3} />
                      <span className="text-sm text-brand-navy/85">{name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4 border-t border-black/10 pt-4">
                  <Link
                    href="https://uk.trustpilot.com/review/removalsnationwide.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand-red underline underline-offset-2 hover:text-brand-navy"
                  >
                    Trustpilot reviews →
                  </Link>
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-brand-charcoal/60 underline underline-offset-2 hover:text-brand-navy"
                  >
                    All services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Get Your Norway Removal Quote"
        buttonLabel="Quick Quote"
        buttonHref="/bookservice#quick-quote"
      />

      {/* ── S2: UK intro two-column ───────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">
            <div data-reveal>
              <SectionHeading
                align="left"
                eyebrow="The service"
                title="Removals from London and Across the UK to Norway"
              />
              <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
                <p>
                  Our service departs from a London depot, with free collections from anywhere
                  in England, Scotland and Wales. Whether you are moving from a city centre flat
                  in Edinburgh, a rural address in Wales, or a house in the suburbs of London,
                  the collection is included in the price.
                </p>
                <p>
                  We operate road-trains carrying over 110 cubic metres, which means a single
                  departure covers your goods efficiently regardless of volume. Tranship shuttle
                  vehicles complete the final leg for addresses that the main trucks cannot
                  reach, including remote and highland locations across Norway.
                </p>
                <p>
                  Most UK removal companies moving domestic and corporate clients to Norway use
                  Removals Nationwide to carry their customers' goods. That trade trust reflects nearly
                  a decade on the route and a team that knows Norway end to end.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/bookservice#quick-quote" variant="red" size="md">
                  Get a Quote
                </Button>
                <Button href="/international-removals" variant="navy" size="md">
                  International Removals
                </Button>
              </div>
            </div>

            <div
              className="overflow-hidden rounded-2xl border border-black/10 shadow-sm"
              data-reveal
              data-delay="1"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/gallery/move-28.jpg"
                  alt="Removals Nationwide team loading a truck for international removal to Norway"
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S3: Trade carrier signal ──────────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div
            data-reveal
            className="rounded-2xl border-2 border-brand-red bg-white px-8 py-10 text-center shadow-sm sm:px-12 sm:py-14"
          >
            <span className="inline-block rounded-full bg-brand-red/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-red">
              Trusted by the trade
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl font-heading text-3xl font-bold text-brand-navy sm:text-4xl">
              Most UK Removal Companies Book Their Norway Moves Through Us
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-charcoal/85">
              When a UK removal company books a client's Norway move, they book through Top
              Removals. We are the road-freight specialist on this route, and our competitors
              trust us to carry their customers' goods to Oslo, Bergen, Stavanger and beyond.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/70">
              When you book directly, you are choosing the same trade carrier without the
              intermediary. Nearly a decade on the route. Own fleet. Local teams at both ends.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href="/bookservice#quick-quote" variant="red" size="md">
                Quick Quote
              </Button>
              <Button href={phones.london.href} variant="navy" size="md">
                {phones.london.label}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── S4: Departure schedule ────────────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="When we go" title="Regular Departures to Norway" />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
              Summer runs on the most frequent schedule. The quieter winter period is every 2 to
              3 weeks. Your coordinator confirms the next available departure at the time of
              booking.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {schedule.map(({ city, freq, note, highlight }) => (
              <div
                key={city}
                data-reveal
                className={`rounded-2xl p-6 text-center shadow-sm transition motion-reduce:transition-none ${
                  highlight
                    ? "border-2 border-brand-red bg-brand-navy text-white"
                    : "border border-black/10 bg-white text-brand-charcoal"
                }`}
              >
                <p
                  className={`font-heading text-2xl font-bold ${
                    highlight ? "text-white" : "text-brand-navy"
                  }`}
                >
                  {city}
                </p>
                <p
                  className={`mt-2 text-sm font-bold uppercase tracking-widest ${
                    highlight ? "text-brand-red" : "text-brand-red"
                  }`}
                >
                  {freq}
                </p>
                {note && (
                  <p className={`mt-1 text-xs ${highlight ? "text-white/70" : "text-brand-charcoal/55"}`}>
                    {note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-brand-charcoal/60" data-reveal>
            Hamar, Horten, Alesund and all towns in Norway covered via tranship shuttle service.
          </p>
        </div>
      </section>

      {/* ── S5: What's included ──────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Included in every move" title="What Your Norway Move Includes" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {included.map(({ title, body }) => (
              <div
                key={title}
                data-reveal
                className="rounded-2xl border border-black/10 bg-brand-grey p-6 transition hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="flex items-start gap-3">
                  <CheckIcon
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-red"
                    strokeWidth={3}
                  />
                  <div>
                    <p className="font-semibold text-brand-navy">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-brand-charcoal/75">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-brand-charcoal/60" data-reveal>
            Need long-term storage in London before or after your Norway move?{" "}
            <Link
              href="/storage"
              className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red"
            >
              See our storage service.
            </Link>
          </p>
        </div>
      </section>

      {/* ── S6: Door-to-door vs Part-load ────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="How it works" title="Door-to-Door or Part-Load?" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">

            {/* Door-to-door */}
            <div
              data-reveal
              className="rounded-2xl border-2 border-brand-red bg-white p-8 shadow-sm"
            >
              <span className="inline-block rounded-full bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-red">
                Dedicated service
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-brand-navy">
                Door-to-Door
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
                Your goods travel on one scheduled truck. Best for a full household, a time-sensitive
                move, or when you need a confirmed delivery window.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Your goods on one scheduled departure",
                  "6 to 9 days door to door",
                  "Packing and loading at the collection address",
                  "Delivery to the door at the Norwegian address",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-charcoal/80">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Part-load */}
            <div
              data-reveal
              data-delay="1"
              className="rounded-2xl border border-black/10 bg-white p-8 shadow-sm"
            >
              <span className="inline-block rounded-full bg-brand-grey px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-charcoal/60">
                Shared space
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-brand-navy">
                Part-Load
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
                Your goods share space on a scheduled truck. Best for single items and smaller
                volumes when the timeline is flexible.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Priced by volume, not by truck",
                  "Up to 2 weeks while loads consolidate",
                  "Single items from £300 to £350",
                  "Good option when costs matter more than speed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-charcoal/80">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-charcoal/40" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-brand-charcoal/60" data-reveal>
            Moving a single item within the UK only?{" "}
            <Link
              href="/single-item"
              className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red"
            >
              See our single item delivery service.
            </Link>
          </p>
        </div>
      </section>

      {/* ── S7: Norway customs ───────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">
            <div data-reveal>
              <SectionHeading
                align="left"
                eyebrow="Customs clearance"
                title="Norway Customs: What You Need to Know"
              />
              <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
                <p>
                  Norway is not a member of the EU, so goods crossing the border require customs
                  clearance. This applies to personal effects, furniture and household goods, as
                  well as commercial shipments.
                </p>
                <p>
                  We provide inclusive customs clearance and assist with your documentation where
                  needed. Your move coordinator handles this as part of the service. You do not
                  need to arrange a separate customs agent.
                </p>
                <p>
                  For personal household goods, documentation is prepared alongside your move
                  coordinator. We do not advise on immigration or residency requirements. For any
                  questions about your personal status or eligibility for duty relief, consult the
                  Norwegian Tax Administration directly.
                </p>
              </div>
            </div>

            <div data-reveal data-delay="1">
              <div className="rounded-2xl border border-black/10 bg-brand-grey p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-navy">
                  What we handle
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Inclusive customs clearance on arrival",
                    "Documentation assistance where required",
                    "Coordination through your move coordinator",
                    "No separate customs agent needed on your side",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-brand-charcoal/80">
                      <CheckIcon
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-red"
                        strokeWidth={3}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-black/10 pt-5">
                  <p className="text-xs text-brand-charcoal/55">
                    Norway customs requirements change. Your move coordinator confirms the current
                    documentation needed at the time of booking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S8: Prices and transit times ─────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Costs and timing" title="Prices and Transit Times" />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-3xl lg:mx-auto">
            <div
              data-reveal
              className="rounded-2xl border-2 border-brand-red bg-white p-8 text-center shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-red">
                Single item
              </p>
              <p className="mt-3 font-heading text-4xl font-extrabold text-brand-navy">
                £300 to £350
              </p>
              <p className="mt-2 text-sm text-brand-charcoal/60">
                Part-load. Insurance separate.
              </p>
              <p className="mt-1 text-xs text-brand-charcoal/45">
                Contact us to confirm VAT treatment.
              </p>
            </div>

            <div
              data-reveal
              data-delay="1"
              className="rounded-2xl border border-black/10 bg-white p-8 text-center shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/55">
                Full household truck
              </p>
              <p className="mt-3 font-heading text-4xl font-extrabold text-brand-navy">
                Up to £12,000
              </p>
              <p className="mt-2 text-sm text-brand-charcoal/60">
                Per truck. Volume-dependent. Insurance separate.
              </p>
              <p className="mt-1 text-xs text-brand-charcoal/45">
                Contact us to confirm VAT treatment.
              </p>
            </div>
          </div>

          <div
            data-reveal
            className="mx-auto mt-8 max-w-3xl rounded-2xl border border-black/10 bg-white p-6"
          >
            <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-brand-navy">
              Transit times
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Truck in transit", value: "3 to 4 days" },
                { label: "Full door-to-door", value: "6 to 9 days" },
                { label: "Part-load", value: "Up to 2 weeks" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="font-heading text-2xl font-bold text-brand-navy">{value}</p>
                  <p className="mt-1 text-xs text-brand-charcoal/60">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-brand-charcoal/60" data-reveal>
            Same-day quote by phone or email.{" "}
            <Link
              href="/bookservice#quick-quote"
              className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red"
            >
              Get your quote here.
            </Link>
          </p>
        </div>
      </section>

      {/* ── S9: Tips ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Helpful advice" title="Tips for Moving to Norway" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tips.map(({ num, title, body }) => (
              <div
                key={num}
                data-reveal
                className="rounded-2xl border border-black/10 bg-brand-grey p-6"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-red font-heading text-sm font-bold text-white">
                  {num}
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────────────────── */}
      <section className="bg-brand-grey py-16">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <div
            className="flex justify-center gap-1 text-brand-red"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-7 w-7" />
            ))}
          </div>
          <p className="mt-3 text-xl font-bold text-brand-navy">Rated Excellent on Trustpilot</p>
          <p className="mt-2 text-base text-brand-charcoal/70">
            Read genuine reviews from customers who have used Removals Nationwide for international
            removals and Norway moves.
          </p>
          <Link
            href="https://uk.trustpilot.com/review/removalsnationwide.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[44px] items-center rounded-xl bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
          >
            View Reviews on Trustpilot
          </Link>
        </div>
      </section>

      {/* ── S10: FAQs ────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Good to know" title="Removals to Norway FAQs" />
          </div>
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Move to Norway? Get a Same-Day Quote
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Weekly departures, own road-trains, local teams across Norway, inclusive customs and a
            personal move coordinator. From a single item to a full household truck.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
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
              variant="outline-light"
              size="lg"
              className="w-full sm:w-auto"
            >
              Book a Service
            </Button>
            <Button
              href={phones.london.href}
              variant="outline-light"
              size="lg"
              className="w-full sm:w-auto"
            >
              {phones.london.label}
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/50">
            Trusted by domestic customers, corporate clients and other UK removal companies.
          </p>
        </div>
      </section>
    </>
  );
}
