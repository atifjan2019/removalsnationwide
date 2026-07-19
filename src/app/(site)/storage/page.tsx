import type { Metadata } from "next";
import { getResolvedSettings } from "@/lib/settings";
import {
  buildMetadata,
  serviceH1,
  serviceLdFor,
  breadcrumbLd,
  organizationLd,
  SITE_URL,
} from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import CheckList, { type CheckItem } from "@/components/services/CheckList";
import TipList, { type Tip } from "@/components/services/TipList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import StorageAnimations from "@/components/services/StorageAnimations";
import {
  IcoPhone,
  IcoTruck,
  IcoClipboard,
  IcoCube,
  IcoCalendar,
} from "@/components/services/ProcessStepIcons";
import { CheckIcon, StarIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("london-storage");

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const securityTiles = [
  {
    title: "24/7 Staffed Compound with CCTV",
    body: "Our Purfleet facility operates around the clock. Security staff are on site at all times. A modern CCTV system covers the entire compound.",
  },
  {
    title: "Every Unit Locked and Sealed",
    body: "Each unit is locked and sealed before we store it. We provide the seal number for your records and for inspection purposes.",
  },
  {
    title: "Fully Insured While in Our Care",
    body: "Your belongings are fully insured throughout their time in our facility, from the moment we collect through to redelivery at your door.",
  },
  {
    title: "Experienced Storage and Moving Team",
    body: "Trained crews collect, store and redeliver belongings using documented handling and inventory procedures.",
  },
];

const stepsWithIcons = [
  {
    step: "Contact us and request a unit. A survey is only needed for large volumes. We confirm a collection date that suits you.",
    Icon: IcoPhone,
  },
  {
    step: "We collect from your property anywhere in London, or you deliver your goods to our Purfleet facility. We confirm the exact volume once everything is loaded.",
    Icon: IcoTruck,
  },
  {
    step: "Our team checks the condition of your items and records everything on inventory sheets. You keep a copy.",
    Icon: IcoClipboard,
  },
  {
    step: "Your goods are loaded, sealed and stored in your unit at our secure compound. We give you the seal number.",
    Icon: IcoCube,
  },
  {
    step: "Access your items at any time by appointment, with at least 48 hours notice. We return your goods to your door when you need them.",
    Icon: IcoCalendar,
  },
];

const useCases: { title: string; body: string; href?: string }[] = [
  {
    title: "Moving Between Addresses",
    body: "Store between completion dates when there is a gap in your move. Units from £10 per week, no minimum term.",
  },
  {
    title: "Home Renovation",
    body: "Empty rooms while work is done. Keep furniture and contents safe and off-site without arranging multiple services.",
  },
  {
    title: "Decluttering and Downsizing",
    body: "Free up space at home. Store items you want to keep but no longer have room for at your current property.",
  },
  {
    title: "Probate and Bereavement Clearance",
    body: "Hold an estate's contents securely while matters are settled. No pressure on timing, no minimum term.",
  },
  {
    title: "Going Travelling",
    body: "Store your belongings while abroad for weeks or months. Return them to your door when you are ready.",
  },
  {
    title: "Seasonal Items",
    body: "Garden furniture, sports equipment, decorations and bulky clothing stored off-season to free up space at home.",
  },
  {
    title: "Business Stock and Archive",
    body: "Stock, equipment, office furniture and document archive held at our secure compound. Works alongside our office removal service.",
    href: "/office-removals",
  },
  {
    title: "International Move Overlap",
    body: "Store during the gap between your UK departure and overseas arrival. Works alongside our international removal service.",
    href: "/international-removals",
  },
  {
    title: "Student and Dormitory Storage",
    body: "Term-time and summer storage for university accommodation contents. We collect at the end of term and return your belongings when the next term opens.",
    href: "/dormitory-move-student-storage",
  },
];

const whyChoose: CheckItem[] = [
  {
    lead: "We collect and load for you",
    text: "No van hire, no hauling, no heavy lifting. Our crew does the physical work from your door to your unit.",
  },
  {
    lead: "From £10 per week, charged by volume",
    text: "You pay for the space your goods use. No fixed room sizes and no wasted spend.",
  },
  {
    lead: "No minimum or maximum term",
    text: "Store for a week between moves or for years while you are abroad. Your timeline, not ours.",
  },
  {
    lead: "Every unit sealed and fully insured",
    text: "Your unit is locked and sealed. You receive the seal number. Your goods are insured throughout their time in our care.",
  },
  {
    lead: "24/7 staffed compound with CCTV",
    text: "Our Purfleet facility is staffed around the clock with modern CCTV covering the entire compound.",
  },
  {
    lead: "experienced in storage and removals",
    text: "Experienced with the professional moving teams, the moving industry and the international moving partners.",
  },
  {
    lead: "Combine removals and storage in one booking",
    text: "Book storage and removal together for a single managed transition. One coordinator and one point of contact.",
  },
  {
    lead: "Price confirmed before work starts",
    text: "Your rate is agreed at the time of booking, once we know your volume. No surprises on collection day.",
  },
];

const tips: Tip[] = [
  {
    title: "Invest in good packing materials",
    body: "Pack boxes tightly to prevent collapsing under weight and seal each one with strong tape. Plastic crates are sturdier than cardboard, stack flat and protect against moisture during long-term storage. Removals Nationwide offers crate hire and a full range of packaging materials, delivered to your address before collection day.",
  },
  {
    title: "Do not store food, plants or hazardous items",
    body: "Food attracts pests and deteriorates over time, even in sealed containers. Living plants die without light and water. Flammable, corrosive and pressurised items are not permitted in any storage unit. If you are unsure whether an item qualifies, your coordinator confirms before collection.",
  },
  {
    title: "Use storage to solve the gap in your move",
    body: "The period between leaving one property and entering another is the most stressful part of any move. Storage at Removals Nationwide removes that pressure. We collect on your departure date and deliver when your new address is ready. The same approach works for international moves, where the gap between UK departure and overseas arrival runs to weeks, and for students vacating dormitories before their next term accommodation opens.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Can I access my things while in your London storage facility?",
    answer:
      "Yes, by appointment. We are managed storage, not a self-access facility, so we ask for at least 48 hours notice. A member of staff is present to assist you. An access fee applies if staff assistance is required during your visit.",
  },
  {
    question: "Can I add extra items to my storage after my first visit?",
    answer:
      "Yes, at any time. Storage is charged per volume, so any additional volume is quoted in advance. Contact your coordinator to arrange additional collection and we confirm the revised volume and cost before proceeding.",
  },
  {
    question: "Do I need to pay upfront or leave a deposit?",
    answer:
      "In most cases, full payment or a deposit is required before any service is booked. This is standard across reputable companies in the industry.",
  },
  {
    question: "Is my stuff insured while in storage?",
    answer:
      "Yes. Your goods are fully insured throughout the entire period they are in our care, from collection through to redelivery.",
  },
  {
    question: "Is there a minimum storage term?",
    answer:
      "There is no minimum and no maximum storage term. Store for a single week between completion dates or for several years while you are abroad.",
  },
  {
    question: "Do you collect from my home?",
    answer:
      "Yes. We collect from your property anywhere in London and the surrounding areas. Alternatively, you deliver your goods directly to our Purfleet facility. Delivering to the facility costs slightly less than a full collection.",
  },
  {
    question: "How much does storage in London cost?",
    answer:
      "Storage starts at £10 per week. The exact price depends on the volume of goods you store, the length of time and whether we collect from your property or you deliver to the facility. Your coordinator confirms the price before work starts.",
  },
  {
    question: "Is this self-storage?",
    answer:
      "No. Removals Nationwide provides managed, containerised storage. We collect your goods, load and seal your unit, and return your belongings when you need them. Access is by appointment. If you need frequent unaccompanied access, a drive-up self-storage facility will suit you better.",
  },
  {
    question: "What items are not accepted in storage?",
    answer:
      "Food and living plants are not accepted, as they deteriorate and attract pests. Hazardous, flammable, pressurised and perishable items are also excluded. Your coordinator confirms what qualifies before collection if you have any doubt.",
  },
];

const londonBoroughs = [
  "Barking and Dagenham",
  "Barnet",
  "Bexley",
  "Brent",
  "Bromley",
  "Camden",
  "City of London",
  "Croydon",
  "Ealing",
  "Enfield",
  "Greenwich",
  "Hackney",
  "Hammersmith and Fulham",
  "Haringey",
  "Harrow",
  "Havering",
  "Hillingdon",
  "Hounslow",
  "Islington",
  "Kensington and Chelsea",
  "Kingston upon Thames",
  "Lambeth",
  "Lewisham",
  "Merton",
  "Newham",
  "Redbridge",
  "Richmond upon Thames",
  "Southwark",
  "Sutton",
  "Tower Hamlets",
  "Waltham Forest",
  "Wandsworth",
  "Westminster",
];

const storageServiceStandards = [
  { name: "Fully insured removals" },
  { name: "Vetted moving crews" },
  { name: "International moving experience" },
  { name: "Independent dispute resolution" },
  { name: "Clear written quotations" },
  { name: "Customer-reviewed service" },
];

/* ------------------------------------------------------------------ */
/* Schema                                                               */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default async function LondonStoragePage() {
  const { phones } = await getResolvedSettings();
  return (
    <>
      <JsonLd data={serviceLdFor("london-storage")} />
      <JsonLd data={faqPageSchema} />
      <JsonLd
        data={breadcrumbLd([
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Secure Storage" },
        ])}
      />
      <JsonLd data={orgSchema} />
      <StorageAnimations />
      <StickyMobileBar sentinelId="hero-intro" />

      {/* ── S1: Hero ─────────────────────────────────────────────────── */}
      <PageBanner
        title="Secure Storage in London"
        subtitle="From £10/week · Fully Insured · We Collect and Seal · No Minimum Term"
        h1={serviceH1["london-storage"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Secure Storage" },
        ]}
      />

      {/* ── S1 continued: value prop + CTAs (mirrors office page) ─────── */}
      <section id="hero-intro" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">

            {/* Left: value prop + CTAs */}
            <div>
              <p className="hero-anim-sub max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                Removals Nationwide provides managed, containerised storage across London, collected from
                your door and stored at our staffed Purfleet compound. From{" "}
                <strong>£10 per week</strong>, no minimum term, fully insured.
              </p>
              <p className="hero-anim-sub mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                We collect, load and seal your unit. When you need your belongings back, we return
                them to your door. No van hire, no heavy lifting.
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
                Free quote in under 2 minutes. No minimum term. Survey-confirmed pricing.
              </p>

              <div className="hero-anim-trust mt-5 flex flex-wrap gap-2">
                {[
                  "From £10/week",
                  "No minimum term",
                  "Fully insured",
                  "24/7 CCTV",
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
                  src="https://images.unsplash.com/photo-1672552226380-486fe900b322?auto=format&fit=crop&w=2400&q=82"
                  alt="Secure containerised storage facility in London operated by Removals Nationwide"
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
                  {storageServiceStandards.map(({ name }) => (
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
        heading="Get a Secure Storage Quote"
        buttonLabel="Quick Quote"
        buttonHref="/bookservice#quick-quote"
      />

      {/* ── S2: Security ─────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Your goods are safe here"
            title="Why Our London Storage Is Secure"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {securityTiles.map((tile, i) => (
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

      {/* ── S3: London homes and businesses ─────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <SectionHeading
              align="left"
              eyebrow="Why Londoners need storage"
              title="Storage for London Homes and Businesses"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                London properties are compact. Spare rooms fill quickly. Many flats have no loft, no
                basement and no garage. When a move runs over its expected dates, when a renovation
                empties a floor, or when a business is between offices, you need secure storage
                without the hassle of hiring a van, driving to a facility and loading it yourself.
              </p>
              <p>
                Removals Nationwide solves that with a fully managed service. Our team collects from your
                address, loads your goods, seals the unit and stores everything at our staffed
                Purfleet compound. When you need your belongings back, we return them to your door.
                No van hire, no heavy lifting, no access headaches.
              </p>
              <p>
                In 2026, more London customers book managed, collect-and-store storage than ever
                before. The model is a genuine improvement over the traditional drive-up unit because
                you do not arrange transport, navigate a storage park or carry furniture up a ramp.
                We handle the physical work and follow documented procedures to keep your goods in
                qualified hands throughout collection, storage and redelivery.
              </p>
            </div>
          </div>
          <div data-reveal data-delay="1" className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1672552226380-486fe900b322?auto=format&fit=crop&w=2400&q=82"
                alt="Professional removal crew helping a London customer with managed storage and collection service"
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

      {/* ── S4: How it works — signature moment ─────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal className="text-center">
            <span className="inline-block rounded-full bg-brand-red/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-red">
              Step by step
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
              How Our Collect and Store Service Works
            </h2>
          </div>

          <div
            data-reveal
            data-delay="1"
            className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/5 px-8 py-6 text-center"
          >
            <p className="text-xl font-bold text-white">
              No van hire. No hauling. No heavy lifting.
            </p>
            <p className="mt-2 text-base text-white/70">
              We collect from your door, load everything, seal your unit and store it at our staffed
              compound. You do nothing except tell us when to collect.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {stepsWithIcons.map(({ step, Icon }, i) => (
              <li
                key={i}
                data-reveal
                data-delay={String(Math.min(i + 2, 7))}
                className="relative flex flex-col rounded-2xl bg-white/8 p-6 ring-1 ring-white/10 transition-all duration-200 hover:bg-white/12 motion-reduce:transition-none"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                    Step {i + 1}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/85">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── S5: Which unit — signature moment ──────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Your options" title="Which Storage Unit Do You Need?" />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
              Not sure? A free survey confirms your volume before we book anything.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {/* 250 cu ft */}
            <div
              data-reveal
              data-delay="1"
              className="flex flex-col rounded-2xl border-2 border-brand-red bg-white p-8 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0"
            >
              <div className="mb-1 text-5xl font-extrabold leading-none text-brand-red">250</div>
              <div className="text-sm font-bold uppercase tracking-widest text-brand-charcoal/50">
                cubic feet
              </div>
              <h3 className="mt-4 text-xl font-bold text-brand-navy">250 cu ft Unit</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-red">
                Flats, small houses and archives
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-base text-brand-charcoal/85">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" strokeWidth={3} />
                  Custom-made wooden construction
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" strokeWidth={3} />
                  Holds approximately 70 to 80 cartons, or over 100 archive boxes
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" strokeWidth={3} />
                  Best for a one or two-bedroom flat, or document and archive storage
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" strokeWidth={3} />
                  Suitable for short and long-term storage
                </li>
              </ul>
            </div>

            {/* 20ft container */}
            <div
              data-reveal
              data-delay="2"
              className="flex flex-col rounded-2xl border-2 border-brand-navy bg-white p-8 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0"
            >
              <div className="mb-1 text-5xl font-extrabold leading-none text-brand-navy">
                1,000
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-brand-charcoal/50">
                cubic feet
              </div>
              <h3 className="mt-4 text-xl font-bold text-brand-navy">20ft Container</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-red">
                Large homes, full offices and long-term
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-base text-brand-charcoal/85">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-navy" strokeWidth={3} />
                  1,000 cu ft capacity, equal to 4 x 250 cu ft units
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-navy" strokeWidth={3} />
                  Well insulated metal shipping container
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-navy" strokeWidth={3} />
                  Best for full household contents, larger homes or full office contents
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-navy" strokeWidth={3} />
                  Recommended for long-term storage where no access is needed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: What you can store ───────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Common situations" title="What You Can Store With Us" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                data-delay={String(Math.min((i % 3) + 1, 7))}
                className="flex flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <h3 className="mb-3 border-l-4 border-brand-red pl-3 text-base font-bold text-brand-navy">
                  {item.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-brand-charcoal/85">{item.body}</p>
                {item.href && (
                  <Link
                    href={item.href}
                    className="mt-4 text-sm font-semibold text-brand-red transition hover:text-brand-navy"
                  >
                    Learn more &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S7: Personal, business and student ─────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="Who stores with us"
              title="Personal, Business and Student Storage"
            />
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Personal Storage",
                body: "Household furniture, seasonal items and personal effects during a move, renovation or declutter. Units available from £10 per week with no minimum term. Works alongside our house removal service for a complete single booking.",
                link: { label: "House removals", href: "/house-removals" },
              },
              {
                title: "Business Storage",
                body: "Stock, equipment, office contents and document archive stored at our secure Purfleet compound. We collect from your premises and store until you need delivery or collection. Works alongside our office removal service for a single managed transition with one coordinator.",
                link: { label: "Office removals", href: "/office-removals" },
              },
              {
                title: "Student Storage",
                body: "Term-time and summer storage for dormitory and university accommodation contents. We collect at the end of term and return your belongings when the next term opens. No need to arrange transport or be present on collection day.",
                link: { label: "Dormitory move service", href: "/dormitory-move-student-storage" },
              },
            ].map((type, i) => (
              <div
                key={type.title}
                data-reveal
                data-delay={String(i + 1)}
                className="flex flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <h3 className="mb-4 text-xl font-bold text-brand-navy">{type.title}</h3>
                <p className="flex-1 text-base leading-relaxed text-brand-charcoal/85">
                  {type.body}
                </p>
                <Link
                  href={type.link.href}
                  className="mt-6 text-sm font-semibold text-brand-red transition hover:text-brand-navy"
                >
                  {type.link.label} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S8: Storage types explained ──────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="Know the difference"
              title="Storage Types Explained: Containerised, Self-Storage and Mobile"
            />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
              Three different models, each suited to different needs. Here is what they are and which
              one Removals Nationwide offers.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                label: "Self-Storage",
                badge: "Not what we offer",
                badgeColor: "bg-black/8 text-brand-charcoal/60",
                body: "You rent a drive-up room at a storage facility and manage everything yourself. You hire a van, load it, drive to the facility, unload into your room, and lock up. Access is typically unrestricted during facility hours. The major national chains operate this model. It suits people who want frequent, unaccompanied access and are happy to arrange their own transport.",
              },
              {
                label: "Containerised Storage",
                badge: "What Removals Nationwide offers",
                badgeColor: "bg-brand-red text-white",
                body: "A provider collects from your address, loads your goods, locks and seals a dedicated unit, and stores it at a staffed compound. You access your unit by appointment. This is managed storage. Removals Nationwide operates this model. It suits people who want the physical work done for them and do not need to visit their unit frequently. No van hire, no heavy lifting, no access headaches.",
              },
              {
                label: "Mobile Storage",
                badge: "Not what we offer",
                badgeColor: "bg-black/8 text-brand-charcoal/60",
                body: "A storage container or pod is delivered to your property. You fill it yourself at your own pace. The provider then collects the loaded container and stores it at their depot. You access your goods by booking a delivery of the container back to you. Some national providers offer this model under pod or vault branding.",
              },
            ].map((type, i) => (
              <div
                key={type.label}
                data-reveal
                data-delay={String(i + 1)}
                className="flex flex-col rounded-2xl border border-black/5 bg-brand-grey p-8 shadow-sm"
              >
                <span
                  className={`inline-block self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${type.badgeColor}`}
                >
                  {type.badge}
                </span>
                <h3 className="mt-4 text-xl font-bold text-brand-navy">{type.label}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-brand-charcoal/85">
                  {type.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S9: Cost ─────────────────────────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div data-reveal>
            <SectionHeading
              align="left"
              eyebrow="Transparent pricing"
              title="How Much Does Storage Cost in London?"
            />
          </div>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              Storage at Removals Nationwide starts at{" "}
              <strong className="text-brand-navy">£10 per week</strong>. Pricing is based on the
              volume of goods you store, not a fixed room size or square footage. You pay for the
              space your goods actually use.
            </p>
            <p>
              There is no minimum storage term and no maximum. Store for a single week between
              completion dates or for several years while you settle abroad. The rate is confirmed at
              the time of booking, once we know your volume.
            </p>
            <p>
              Three factors affect your price: the volume of goods stored, the length of time you
              store, and whether we collect from your property or you deliver to our Purfleet
              facility. Delivery to the facility costs slightly less than a full collection service.
            </p>
            <p>
              Before storage, it pays to pack well. Plastic crates pack more efficiently than
              cardboard boxes and protect contents against moisture, particularly in long-term
              storage. Better packing reduces the volume you store and lowers your bill. See our{" "}
              <Link
                href="/crate-hire"
                className="font-semibold text-brand-red hover:text-brand-navy"
              >
                crate hire
              </Link>{" "}
              and{" "}
              <Link
                href="/packaging-materials"
                className="font-semibold text-brand-red hover:text-brand-navy"
              >
                packaging materials
              </Link>{" "}
              and{" "}
              <Link
                href="/packing-service"
                className="font-semibold text-brand-red hover:text-brand-navy"
              >
                professional packing service
              </Link>{" "}
              pages for options.
            </p>
          </div>
        </div>
      </section>

      {/* ── S10: Why choose ──────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="The benefits"
              title="Why Choose Removals Nationwide for Storage?"
            />
          </div>
          <div data-reveal data-delay="1">
            <CheckList items={whyChoose} columns={2} className="mx-auto mt-12 max-w-5xl" />
          </div>
        </div>
      </section>

      {/* ── S11: Facility and access ─────────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="The Purfleet compound"
              title="Our London Storage Facility and Access"
            />
          </div>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div data-reveal className="space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Our storage compound is at{" "}
                <strong className="text-brand-navy">
                  Unit C1A Purfleet Industrial Park, Kerry Avenue, Purfleet, RM15 4YA
                </strong>
                , east of London in Essex. We collect from all London boroughs and return goods to
                your door, so most customers never need to visit the facility.
              </p>
              <p>
                Access is by appointment. We require at least{" "}
                <strong className="text-brand-navy">48 hours notice</strong>. An access fee applies
                if staff assistance is needed in the warehouse. This is managed storage, not a
                self-access facility. Goods are held in sealed units and a member of staff is
                present for every access visit.
              </p>
              <p>
                To arrange collection, redelivery or an access visit, contact your coordinator on{" "}
                <strong className="text-brand-navy">020 7205 2525</strong> or{" "}
                <strong className="text-brand-navy">0800 046 7877</strong>.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href="/bookservice" variant="red" size="md">
                  Book Storage
                </Button>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Unit+C1A+Purfleet+Industrial+Park+Kerry+Avenue+Purfleet+RM15+4YA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center rounded-xl border-2 border-brand-navy px-5 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div
              data-reveal
              data-delay="1"
              className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
            >
              <h3 className="mb-6 text-lg font-bold text-brand-navy">Facility Details</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-brand-charcoal/50">
                    Address
                  </dt>
                  <dd className="mt-1 text-brand-charcoal">
                    Unit C1A Purfleet Industrial Park
                    <br />
                    Kerry Avenue, Purfleet
                    <br />
                    RM15 4YA
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-brand-charcoal/50">
                    Security
                  </dt>
                  <dd className="mt-1 text-brand-charcoal">24/7 staffed compound with CCTV</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-brand-charcoal/50">
                    Customer Access
                  </dt>
                  <dd className="mt-1 text-brand-charcoal">
                    By appointment, 48 hours notice required
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-brand-charcoal/50">
                    Phone
                  </dt>
                  <dd className="mt-1 text-brand-charcoal">
                    {phones.london.label} &nbsp;&middot;&nbsp; {phones.freephone.label}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-brand-charcoal/50">
                    Collection Area
                  </dt>
                  <dd className="mt-1 text-brand-charcoal">
                    All London boroughs and surrounding areas
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── S12: Areas we cover ──────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Where we collect" title="Areas We Cover" />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
              We collect from every London borough. See our{" "}
              <Link href="/areas" className="font-semibold text-brand-red hover:text-brand-navy">
                full areas page
              </Link>{" "}
              for detailed coverage information.
            </p>
          </div>
          <ul
            data-reveal
            className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"
          >
            {londonBoroughs.map((borough) => (
              <li
                key={borough}
                className="rounded-lg border border-black/8 bg-brand-grey px-4 py-2.5 text-center text-sm font-medium text-brand-navy"
              >
                {borough}
              </li>
            ))}
          </ul>
          <p data-reveal className="mx-auto mt-6 max-w-2xl text-center text-xs text-brand-charcoal/50">
            Not in this list? We cover the wider Greater London area and collect from surrounding
            counties.{" "}
            <Link
              href="/bookservice#quick-quote"
              className="underline hover:text-brand-red"
            >
              Get a quote
            </Link>{" "}
            to confirm your address.
          </p>
        </div>
      </section>

      {/* ── S13: Tips ────────────────────────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Helpful advice" title="Storage Tips" />
          </div>
          <div data-reveal data-delay="1">
            <TipList tips={tips} numbered className="mt-12" />
          </div>
        </div>
      </section>

      {/* ── S14: Reviews (Trustpilot only, no placeholder reviews) ───── */}
      <section className="bg-brand-navy py-16">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <div
            className="flex justify-center gap-1 text-brand-red"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-7 w-7" />
            ))}
          </div>
          <p className="mt-3 text-xl font-bold text-white">Rated Excellent on Trustpilot</p>
          <p className="mt-2 text-base text-white/70">
            Read genuine reviews from customers who have used our removal and storage service.
          </p>
          <Link
            href="https://uk.trustpilot.com/review/removalsnationwide.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[44px] items-center rounded-xl bg-brand-red px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
          >
            View Reviews on Trustpilot
          </Link>
        </div>
      </section>

      {/* ── S15: FAQ ─────────────────────────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Good to know" title="Storage FAQs" />
          </div>
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* ── S16: Book your storage today ─────────────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Book Your London Storage Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Get a free online quote in under 2 minutes, or speak to a coordinator now.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/bookservice#quick-quote" variant="red" size="lg">
              Free Online Quote
            </Button>
            <Button href="/bookservice" variant="outline-light" size="lg">
              Book a Service
            </Button>
          </div>
          <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={phones.london.href}
              className="flex items-center gap-2 text-base font-bold text-white transition hover:text-brand-red"
            >
              <span aria-hidden="true" className="text-brand-red">&#9742;</span>
              {phones.london.label}
            </a>
            <a
              href={phones.freephone.href}
              className="flex items-center gap-2 text-base font-bold text-white transition hover:text-brand-red"
            >
              <span aria-hidden="true" className="text-brand-red">&#9742;</span>
              {phones.freephone.label} (freephone)
            </a>
          </div>
          <p className="mt-6 text-sm text-white/50">
            professional experienced &nbsp;&middot;&nbsp; Fully insured &nbsp;&middot;&nbsp; No minimum term
            &nbsp;&middot;&nbsp; Company No. 6874216
          </p>
        </div>
      </section>
    </>
  );
}
