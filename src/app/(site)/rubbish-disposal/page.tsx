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
import Faq, { type FaqItem } from "@/components/services/Faq";
import PricingTable, { type PricingRow } from "@/components/services/PricingTable";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import RubbishDisposalAnimations from "@/components/services/RubbishDisposalAnimations";
import { CheckIcon, StarIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("rubbish-disposal");

/* ── Service Highlights ────────────────────────────────────────────────── */

const rubbishServiceStandards = [
  { name: "Fully insured removals" },
  { name: "Vetted moving crews" },
  { name: "International moving experience" },
  { name: "Independent dispute resolution" },
  { name: "Clear written quotations" },
  { name: "Customer-reviewed service" },
];

/* ── S2: Why choose tiles ──────────────────────────────────────────── */

const whyTiles = [
  {
    title: "Licensed Waste Carrier",
    body: "Removals Nationwide is a licensed waste carrier. Every job includes a waste transfer note and disposal only at registered recycling centres. All government licensing fees are included in the price.",
  },
  {
    title: "CRB-Checked, Uniformed Teams",
    body: "Every crew member is CRB-checked and arrives in uniform with the right equipment. On-site or video surveys are available for large or complicated clearances before any work is priced.",
  },
  {
    title: "Transparent Load-Based Prices",
    body: "Five published tiers from £50 to £250 with cubic yards, max weights and time slots. All add-on charges listed openly. No hidden fees, no vague from-prices.",
  },
  {
    title: "Recycled Where Possible",
    body: "Materials go to registered recycling centres wherever possible. A waste transfer note for every job protects customers from any fly-tipping liability if waste were mishandled after collection.",
  },
];

/* ── S4: Services cleared ──────────────────────────────────────────── */

const servicesCleared = [
  {
    title: "General Household Refuse",
    body: "Black sack collections, general household waste and unwanted items. Sized from a single item up to a full vehicle load. The team does all the loading from inside the property.",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=2400&q=82",
    imgAlt: "Removals Nationwide team collecting household rubbish in London",
  },
  {
    title: "House and Loft Clearances",
    body: "Removals Nationwide handles full property and loft clear-outs: probate clearances, pre-sale clear-outs, end-of-tenancy emptying, and whole-property or single-room jobs. Everything is loaded by the team from inside the property, from attic boxes to basement furniture, with a waste transfer note for the whole job. The strongest single-intent term on this page and the natural future standalone route.",
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=2400&q=82",
    imgAlt: "House and loft clearance by Removals Nationwide in London",
  },
  {
    title: "Office Clearances",
    body: "Office furniture, filing cabinets, equipment and general office waste. Combinable with an office removal booking so clearance and relocation happen in one managed visit.",
    img: "https://images.unsplash.com/photo-1714647211902-bb711d643a17?auto=format&fit=crop&w=2400&q=82",
    imgAlt: "Office clearance service by Removals Nationwide",
  },
  {
    title: "Furniture and Appliance Removal",
    body: "Sofas, wardrobes, white goods, TVs and fridges. Appliances disposed of under WEEE rules, with small handling fees for TVs and fridges as listed in the add-ons table.",
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2400&q=82",
    imgAlt: "Furniture and appliance clearance by Removals Nationwide",
  },
];

/* ── S5: Collection price cards ───────────────────────────────────── */

const collectionPrices = [
  {
    title: "Small Collection",
    allowance: "1 item or up to 5 black sacks",
    manpower: "Two-man team, 15-minute slot",
    weight: "100 kg",
    price: "£50",
    guide: "A single appliance, a few bin bags, or one small item of furniture",
  },
  {
    title: "Quarter Load",
    allowance: "3 cubic yards, a quarter of the vehicle",
    manpower: "Two-man team, 30-minute slot",
    weight: "250 kg",
    price: "£80",
    guide: "A bedroom clear-out, a sofa plus a few boxes",
  },
  {
    title: "Half Load",
    allowance: "6 cubic yards, half the vehicle",
    manpower: "Two-man team, 60-minute slot",
    weight: "500 kg",
    price: "£150",
    guide: "A one-bed flat clear-out, or a few large items of furniture",
  },
  {
    title: "Three Quarters Load",
    allowance: "9 cubic yards, three quarters of the vehicle",
    manpower: "Two-man team, 90-minute slot",
    weight: "750 kg",
    price: "£200",
    guide: "A small house or a heavy single-room clearance",
  },
  {
    title: "Full Load",
    allowance: "12 cubic yards, one full vehicle",
    manpower: "Two-man team, 120-minute slot",
    weight: "1,000 kg",
    price: "£250",
    guide: "A full flat or small house clearance",
  },
];

/* ── S6: Additional charges ────────────────────────────────────────── */

const chargeColumns = ["Charge", "When it applies", "Price"];
const chargeRows: PricingRow[] = [
  { label: "Extra 10 minutes labour", values: ["If loading exceeds the time allowed", "£10"] },
  { label: "TV or monitor", values: ["Due to how it is disposed of", "£20"] },
  { label: "Fridge", values: ["Due to how it is disposed of", "£40"] },
  {
    label: "Extra travel",
    values: ["Collection over 20 miles from E6 6LS", "£2 per mile each way"],
  },
  {
    label: "Out of hours",
    values: ["18:00 to 21:00 Monday to Saturday, 09:00 to 18:00 Sunday", "£50"],
  },
  { label: "Same day call-out", values: ["Same day junk collection", "£100"] },
  { label: "Bank holidays", values: ["Extra operating hours", "£150"] },
];

/* ── S14: FAQs ─────────────────────────────────────────────────────── */

const faqs: FaqItem[] = [
  {
    question: "What types of waste do you not collect?",
    answer:
      "We do not take construction or builders waste, hazardous waste, food waste, or bulk and loose waste. We do clear household and office items, furniture and appliances. If you are unsure whether your waste type is in scope, contact us before booking and we confirm.",
  },
  {
    question: "What if an item is too large to get out of the house?",
    answer:
      "Our two-man team handles removal from inside the property. For awkward or oversized items, we assess access at the survey stage and arrive with the right equipment. If something went into the property, it comes out. Contact us to describe the item and we advise on the correct load tier.",
  },
  {
    question: "What electrical goods do you dispose of?",
    answer:
      "We take household appliances and electricals including fridges and TVs, disposed of responsibly under WEEE rules. A fridge handling fee of £40 and a TV handling fee of £20 apply, both listed in the add-ons table on this page. Contact us if your item is not listed.",
  },
  {
    question: "How much does rubbish removal cost?",
    answer:
      "The load ladder runs from £50 for a small collection (one item or up to five black sacks) to £250 for a full load (12 cubic yards, 1,000 kg). Add-on charges apply for out-of-hours, same-day, bank holidays, extra travel and certain appliances. See the price tables on this page for the full breakdown.",
  },
  {
    question: "Does your team do all the loading?",
    answer:
      "Yes. A two-man team does all the loading within the time slot for that load tier: 15 minutes for a small collection up to 120 minutes for a full load. Extra 10-minute labour increments are available at £10 each if loading runs over the allocated time.",
  },
  {
    question: "Do you cover all of London?",
    answer:
      "Yes, the service covers London and the surrounding areas. An extra travel charge of £2 per mile each way applies for collections more than 20 miles from E6 6LS. Contact us with your postcode and we confirm whether your address is within the standard service area.",
  },
  {
    question: "Is same-day rubbish collection available?",
    answer:
      "Yes, same-day collection is available as a call-out add-on at £100 on top of the load price. Out-of-hours slots run from 18:00 to 21:00 Monday to Saturday and from 09:00 to 18:00 on Sundays at £50 extra. Contact us to check availability before booking.",
  },
  {
    question: "Is the waste disposed of legally?",
    answer:
      "Yes. Removals Nationwide is a licensed waste carrier. All collected materials are taken to registered recycling centres and recycled where possible. A waste transfer note is provided for every job, protecting you from fly-tipping liability. All government licensing fees are included in the quoted price.",
  },
  {
    question: "What is the cheapest way to get rid of rubbish?",
    answer:
      "For one or two items, the council bulky-waste service is cheaper and sometimes free. Reusable furniture is taken free by many charities. For a fast clear-out where you want all loading and licensed disposal handled for you, a fixed-price load slot is the convenient route, from £50 for a small collection.",
  },
  {
    question: "Is rubbish removal better than hiring a skip?",
    answer:
      "For a one-off clear-out, yes: we load everything, no road permit is needed, and you pay only for the space used, with same-day options available. A skip suits ongoing building or garden waste over several days where you load it yourself. We do not hire skips or take builders waste.",
  },
];

/* ── Schemas ────────────────────────────────────────────────────────── */

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

/* ── Page ───────────────────────────────────────────────────────────── */

export default async function RubbishDisposalPage() {
  const { phones } = await getResolvedSettings();
  return (
    <>
      <JsonLd data={serviceLdFor("rubbish-disposal")} />
      <JsonLd data={faqPageSchema} />
      <JsonLd data={orgSchema} />
      <JsonLd
        data={breadcrumbLd([
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Rubbish Disposal" },
        ])}
      />
      <RubbishDisposalAnimations />
      <StickyMobileBar sentinelId="hero-intro" />

      {/* ── S1: Hero ─────────────────────────────────────────────────── */}
      <PageBanner
        title="Rubbish Removal and Clearance in London"
        subtitle="Licensed man-and-van rubbish clearance, transparent load-based prices, 7 days a week."
        h1={serviceH1["rubbish-disposal"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Rubbish Disposal" },
        ]}
      />

      <section id="hero-intro" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">

            <div>
              <p className="hero-anim-sub max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                Removals Nationwide runs a licensed rubbish removal and clearance service across London,
                7 days a week. In 2026, the company publishes its full load-based price ladder
                openly: five tiers from £50 for a small collection to £250 for a full vehicle
                load, with every add-on charge listed alongside.
              </p>
              <p className="hero-anim-sub mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                A two-man team does all the loading. Every job goes to registered recycling
                centres and comes with a waste transfer note. The clearance fee is listed as a
                separate line on the offer when combined with a removal booking.
              </p>

              <div className="hero-anim-ctas mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/bookservice#quick-quote" variant="red" size="lg" className="w-full sm:w-auto">
                  Quick Quote
                </Button>
                <Button href="/bookservice" variant="navy" size="lg" className="w-full sm:w-auto">
                  Book a Service
                </Button>
                <Button href={phones.london.href} variant="outline" size="lg" className="w-full sm:w-auto">
                  {phones.london.label}
                </Button>
              </div>

              <p className="hero-anim-trust mt-3 text-xs font-medium text-brand-charcoal/55">
                Free quote in under 2 minutes. Licensed waste carrier. 7 days a week.
              </p>

              <div className="hero-anim-trust mt-5 flex flex-wrap gap-2">
                {["From £50", "Licensed waste carrier", "We load everything", "7 days a week"].map((label) => (
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

            <div className="overflow-hidden rounded-2xl border border-black/10 shadow-sm" data-reveal data-delay="1">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=2400&q=82"
                  alt="Removals Nationwide licensed rubbish removal and clearance team in London"
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
                  {rubbishServiceStandards.map(({ name }) => (
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
        heading="Get a Rubbish Removal Quote"
        buttonLabel="Quick Quote"
        buttonHref="/bookservice#quick-quote"
      />

      {/* ── S2: Why Choose ───────────────────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="The benefits" title="Why Choose Our Rubbish Removal Service" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyTiles.map((tile, i) => (
              <div
                key={tile.title}
                data-reveal
                data-delay={String(i + 1)}
                className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-base font-bold text-brand-navy">{tile.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-charcoal/85">{tile.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: Licensed clearance intro ─────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <SectionHeading
              align="left"
              eyebrow="Licensed and local"
              title="Licensed Rubbish Clearance Across London"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Removals Nationwide is a licensed waste carrier registered with the Environment Agency.
                Every clearance job is carried out by a CRB-checked two-man team with the right
                equipment for the property type. From a single-item collection to a full vehicle
                load, the team does all the loading from inside the property.
              </p>
              <p>
                All collected materials go to registered recycling centres, recycled where
                possible. Every job comes with a waste transfer note, which is your legal proof
                that the waste was handed to a licensed carrier and disposed of correctly. This
                protects you from any fly-tipping liability.
              </p>
              <p>
                Large or complicated clearances receive an on-site or video survey before the job
                is priced, so the offer reflects the actual work required and not a generic
                estimate. All government licensing fees are included in the quoted price.
              </p>
            </div>
          </div>
          <div data-reveal data-delay="1" className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=2400&q=82"
                alt="Removals Nationwide clearance team at work in London"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <span aria-hidden="true" className="absolute -bottom-5 -right-5 -z-10 hidden h-36 w-36 rounded-2xl bg-brand-red/15 lg:block" />
          </div>
        </div>
      </section>

      {/* ── S4: What We Clear (bold moment #3) ───────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="In scope" title="What We Clear" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
            Four confirmed service types. The team loads everything from inside the property.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {servicesCleared.map((s, i) => (
              <div
                key={s.title}
                data-reveal
                data-delay={String((i % 2) + 1)}
                className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={s.img}
                    alt={s.imgAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-brand-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div data-reveal className="mx-auto mt-10 max-w-3xl rounded-2xl border border-brand-red bg-white p-6">
            <p className="text-sm font-bold text-brand-red">What we do not accept</p>
            <p className="mt-2 text-sm leading-relaxed text-black">
              Construction or builders waste, hazardous waste, food waste, and bulk or loose waste
              are outside the scope of this service. Contact us if you are unsure and we advise
              on the right route.
            </p>
          </div>
        </div>
      </section>

      {/* ── S5: Collection Prices (bold moment #2) ───────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Transparent pricing" title="Our Collection Prices" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
            Five load tiers with confirmed volumes, max weights and time slots. Confirm VAT
            treatment with us before ordering.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" data-reveal>
            {collectionPrices.map((p, i) => (
              <article
                key={p.title}
                data-delay={String(i + 1)}
                className="flex flex-col overflow-hidden rounded-2xl border border-black/8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <h3 className="bg-brand-navy px-5 py-4 text-center text-sm font-bold uppercase tracking-wide text-white">
                  {p.title}
                </h3>
                <dl className="flex-1 space-y-3 p-5 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-brand-charcoal/50">Rubbish allowance</dt>
                    <dd className="mt-0.5 text-brand-charcoal/85">{p.allowance}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-brand-charcoal/50">Team and time</dt>
                    <dd className="mt-0.5 text-brand-charcoal/85">{p.manpower}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-brand-charcoal/50">Max weight</dt>
                    <dd className="mt-0.5 font-semibold text-brand-navy">{p.weight}</dd>
                  </div>
                </dl>
                <div className="border-t border-black/8 px-5 py-4">
                  <p className="text-3xl font-extrabold text-brand-red">{p.price}</p>
                  <p className="mt-1 text-xs text-brand-charcoal/50">confirm VAT with us</p>
                </div>
              </article>
            ))}
          </div>

          {/* Which load size do I need */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-black/8 bg-brand-grey p-7" data-reveal>
            <h3 className="text-base font-bold text-brand-navy">Which Load Size Do I Need?</h3>
            <p className="mt-2 text-sm text-brand-charcoal/70">
              A rough guide based on the confirmed volumes and weights above. Every load is
              confirmed on a quick photo or video survey before work starts, so you are not
              charged for space you do not use.
            </p>
            <ul className="mt-5 space-y-3">
              {collectionPrices.map((p) => (
                <li key={p.title} className="flex items-start gap-4 text-sm">
                  <span className="mt-0.5 shrink-0 rounded-full bg-brand-red px-3 py-1 text-xs font-bold text-white">
                    {p.price}
                  </span>
                  <span className="text-brand-charcoal/85">
                    <strong className="text-brand-navy">{p.title}:</strong> {p.guide}.
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex justify-center">
            <Button href="/bookservice#quick-quote" variant="red" size="md">
              Get a Quote for Your Load
            </Button>
          </div>
        </div>
      </section>

      {/* ── S6: Additional Charges ───────────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Add-ons" title="Additional Charges" />
          <div data-reveal className="mt-10">
            <PricingTable columns={chargeColumns} rows={chargeRows} />
          </div>
          <p className="mt-5 text-sm text-brand-charcoal/60">
            All add-on charges apply on top of the base load price. Confirm VAT treatment on all
            charges before ordering.
          </p>
        </div>
      </section>

      {/* ── S7: Rubbish Removal vs Council vs Skip Hire ──────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Honest comparison"
            title="Rubbish Removal vs Council Collection vs Skip Hire"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
            Three options, three different jobs. Pick the one that fits.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3" data-reveal>

            {/* Council */}
            <div className="rounded-2xl border border-black/10 bg-brand-grey p-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Council bulky-waste
              </div>
              <ul className="space-y-3">
                {[
                  "Cheapest option, sometimes free",
                  "Booked days or weeks in advance",
                  "Limited number of items per collection",
                  "You carry everything to the kerb yourself",
                  "No loading help, no licensed disposal note",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-charcoal/85">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-charcoal/40" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-white px-4 py-3 text-xs font-medium text-brand-charcoal/70">
                Best for: 1 to 2 large items when cost is the priority and you are not in a rush.
              </p>
            </div>

            {/* Skip hire */}
            <div className="rounded-2xl border border-black/10 bg-brand-grey p-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Skip hire
              </div>
              <ul className="space-y-3">
                {[
                  "Suits steady building or garden waste over several days",
                  "Needs a road permit if placed on the street",
                  "Takes driveway or road space for several days",
                  "You load it yourself, at your own pace",
                  "Not suitable for one-off household clearances",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-charcoal/85">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-charcoal/40" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-white px-4 py-3 text-xs font-medium text-brand-charcoal/70">
                Best for: ongoing building or garden waste over multiple days where you self-load.
              </p>
            </div>

            {/* Our service */}
            <div className="rounded-2xl border-2 border-brand-red bg-white p-7 shadow-md">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Our man-and-van clearance
              </div>
              <ul className="space-y-3">
                {[
                  "We do all the loading from inside the property",
                  "No road permit required",
                  "Pay only for the space used, five tiers from £50",
                  "Same-day and out-of-hours options available",
                  "Licensed waste carrier with a waste transfer note",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-charcoal/85">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-brand-grey px-4 py-3 text-xs font-medium text-brand-charcoal/70">
                Best for: a fast clear-out where you want all loading and licensed disposal handled for you.
              </p>
              <div className="mt-5">
                <Button href="/bookservice#quick-quote" variant="red" size="sm">
                  Get a Quote
                </Button>
              </div>
            </div>

          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-brand-charcoal/60">
            For one or two items, the council route is cheaper and sometimes free. Reusable
            furniture is taken free by many charities. We do not hire skips and we do not
            take builders waste. If a skip or council collection is the right route for your
            job, we say so.
          </p>
        </div>
      </section>

      {/* ── S8: What Happens to Your Waste (four-step strip) ─────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal className="text-center">
            <span className="inline-block rounded-full bg-brand-red/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-red">
              Licensed disposal
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
              What Happens to Your Waste
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
              Four steps from your property to confirmed licensed disposal.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "1",
                label: "Collected",
                detail: "The two-man team loads everything from inside the property. You do not need to carry anything to the kerb or a skip.",
              },
              {
                n: "2",
                label: "Sorted",
                detail: "Loads are separated at the disposal stage for recycling rather than sent straight to landfill.",
              },
              {
                n: "3",
                label: "Recycled and disposed",
                detail: "All materials go to registered recycling and disposal centres only. Government licensing fees are included in the price.",
              },
              {
                n: "4",
                label: "Documented",
                detail: "A waste transfer note is issued for every job. This is your legal proof of licensed disposal and protects you from fly-tipping liability.",
              },
            ].map(({ n, label, detail }, i) => (
              <div
                key={label}
                data-reveal
                data-delay={String(i + 1)}
                className="flex flex-col rounded-2xl bg-white/8 p-7 ring-1 ring-white/10"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-red text-base font-extrabold text-white">
                  {n}
                </span>
                <p className="text-base font-bold text-white">{label}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/80">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S9: How It Works ─────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Booking" title="How It Works" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3" data-reveal>
            {[
              {
                step: "1. Request a quote",
                detail: "Contact us with the type and volume of waste. We confirm the right load tier, any applicable add-ons, and the total cost before you commit to anything.",
              },
              {
                step: "2. Survey and booking",
                detail: "For larger or complicated clearances, an on-site or video survey is arranged to assess the job accurately. Once agreed, we set the collection date and send the offer and terms for signature.",
              },
              {
                step: "3. Collection and transfer note",
                detail: "The two-man team arrives and loads everything within the agreed time slot. No further involvement is needed. You receive a waste transfer note confirming legal, licensed disposal.",
              },
            ].map(({ step, detail }, i) => (
              <div
                key={step}
                data-delay={String(i + 1)}
                className="rounded-2xl border border-black/8 bg-brand-grey p-7"
              >
                <p className="text-sm font-bold text-brand-navy">{step}</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S10: Combine With Your Move ──────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16" data-reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Better together"
                title="Combine Rubbish Disposal With Your Move"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
                <p>
                  Rubbish disposal is combinable with any Removals Nationwide removal service. On move day
                  the clearance team collects the items for disposal and the removal crew loads the
                  furniture and boxes. One company, one coordinator, one managed day.
                </p>
                <p>
                  The clearance fee is listed as a separate line on the offer document. You see
                  exactly what the removal costs and what the clearance costs, with no bundled
                  totals and no hidden cross-subsidy.
                </p>
                <p>
                  The service is particularly useful for house moves where items are left behind,
                  end-of-tenancy clear-outs where the property must be emptied, and office
                  relocations where old furniture is replaced rather than moved.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <p className="text-sm font-bold uppercase tracking-wide text-brand-navy/60">Combine with</p>
              {[
                { label: "House removals", href: "/house-removals" },
                { label: "Office removals", href: "/office-removals" },
                { label: "Man and van", href: "/man-and-van-london" },
                { label: "Packing service", href: "/packing-service" },
                { label: "Secure storage", href: "/storage" },
                { label: "Cleaning services", href: "/cleaning-services" },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="flex min-h-[44px] items-center justify-between rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-red hover:text-brand-red"
                >
                  {s.label}
                  <span aria-hidden="true" className="text-brand-red">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── S11: Same-Day and Out-of-Hours ───────────────────────────── */}
      <section className="bg-brand-navy py-16">
        <div className="mx-auto max-w-4xl px-4 text-center" data-reveal>
          <span className="inline-block rounded-full bg-brand-red/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-red">
            Flexible scheduling
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Same-Day and Out-of-Hours Collection
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80">
            Standard collections are booked in advance. Same-day collection is available as a
            call-out add-on at £100. Out-of-hours slots run from 18:00 to 21:00 Monday to
            Saturday and from 09:00 to 18:00 on Sundays at £50 extra. Bank holiday operating
            hours carry a £150 surcharge.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/55">
            These are priced add-ons, not the default service. Contact us to check availability
            on your preferred date before booking.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/bookservice#quick-quote" variant="red" size="lg" className="w-full sm:w-auto">
              Quick Quote
            </Button>
            <Button href={phones.london.href} variant="outline-light" size="lg" className="w-full sm:w-auto">
              {phones.london.label}
            </Button>
          </div>
        </div>
      </section>

      {/* ── S12: Who We Help ─────────────────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Use cases" title="Who We Help" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {[
              {
                title: "House and Loft Clear-Outs",
                body: "Full property and loft clearances, decades of stored items removed in one visit. Probate, pre-sale, and lifestyle clear-outs all handled the same way.",
              },
              {
                title: "End-of-Tenancy Clearance",
                body: "Tenants leaving a furnished property or landlords preparing for new occupants. Left-behind furniture, appliances and general waste removed and disposed of correctly.",
              },
              {
                title: "Office Clear-Outs",
                body: "Old office furniture, filing, equipment and IT waste. Combined with an office removal booking or as a standalone clearance before or after a fit-out.",
              },
              {
                title: "Furniture and Appliance Disposal",
                body: "Sofas, wardrobes, fridges, washing machines and TVs. Collected from inside the property and disposed of under WEEE rules where applicable.",
              },
              {
                title: "Leftover Items After a Move",
                body: "Items not worth moving, items left by the previous occupants, or items replaced at the destination. One collection removes everything in a single visit.",
              },
              {
                title: "Pre-Sale and Probate Clearances",
                body: "Clearing a property before sale or following a bereavement. A sensitive, fully licensed service with a waste transfer note for legal traceability.",
              },
            ].map((u, i) => (
              <div
                key={u.title}
                data-delay={String((i % 3) + 1)}
                className="flex flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <h3 className="mb-3 border-l-4 border-brand-red pl-3 text-base font-bold text-brand-navy">
                  {u.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-brand-charcoal/85">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S13: Reviews ─────────────────────────────────────────────── */}
      <section className="bg-brand-grey py-16">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <div className="flex justify-center gap-1 text-brand-red" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-7 w-7" />
            ))}
          </div>
          <p className="mt-3 text-xl font-bold text-brand-navy">Rated Excellent on Trustpilot</p>
          <p className="mt-2 text-base text-brand-charcoal/70">
            Read genuine reviews from customers who have used Removals Nationwide for rubbish removal,
            house clearances and removal services across London.
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

      {/* ── S14: FAQs ────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Good to know" title="Rubbish Removal FAQs" />
          </div>
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Book Your Rubbish Removal in London Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            From £50 for a small collection to £250 for a full load. Licensed waste carrier.
            7 days a week across London.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/bookservice#quick-quote" variant="red" size="lg" className="w-full sm:w-auto">
              Quick Quote
            </Button>
            <Button href="/bookservice" variant="outline-light" size="lg" className="w-full sm:w-auto">
              Book a Service
            </Button>
          </div>
          <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-8">
            <a href={phones.london.href} className="flex items-center gap-2 text-base font-bold text-white transition hover:text-brand-red">
              <span aria-hidden="true" className="text-brand-red">&#9742;</span>
              {phones.london.label}
            </a>
            <a href={phones.freephone.href} className="flex items-center gap-2 text-base font-bold text-white transition hover:text-brand-red">
              <span aria-hidden="true" className="text-brand-red">&#9742;</span>
              {phones.freephone.label} (freephone)
            </a>
          </div>
          <p className="mt-6 text-sm text-white/50">
            experienced and fully insured &nbsp;&middot;&nbsp; Licensed waste carrier &nbsp;&middot;&nbsp;
            Registered in England No. 6874216
          </p>
          <p className="mt-2 text-xs text-white/40">
            Unit C1A Purfleet Industrial Park, Kerry Avenue, Purfleet, RM15 4YA
          </p>
        </div>
      </section>

    </>
  );
}
