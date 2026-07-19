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
import CrateHireAnimations from "@/components/services/CrateHireAnimations";
import { CheckIcon, StarIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("crate-hire");

/* ── Service Highlights ────────────────────────────────────────────────── */

const crateServiceStandards = [
  { name: "Fully insured removals" },
  { name: "Vetted moving crews" },
  { name: "International moving experience" },
  { name: "Independent dispute resolution" },
  { name: "Clear written quotations" },
  { name: "Customer-reviewed service" },
];

/* ── S2: Why hire tiles ────────────────────────────────────────────── */

const whyHireTiles = [
  {
    title: "Reusable, Disinfected After Every Use",
    body: "Each crate is properly disinfected after every hire. The same crate is reused many times, with no degradation in structural integrity between jobs.",
  },
  {
    title: "Lidded, Waterproof and Sealable",
    body: "The integral lid keeps contents protected during the move. Security locks seal the crate shut, adding an extra layer of protection for documents and valuables.",
  },
  {
    title: "Greener Than Cardboard",
    body: "No cardboard to break down, recycle or dispose of at the destination. Crates go back to us, leaving your new property clutter-free from day one.",
  },
  {
    title: "Easy to Combine With Your Move",
    body: "Crate hire is combinable with our man-and-van, house removals and office removals services. One booking, one coordinator, one managed transition.",
  },
];

/* ── S4: Crate product data ────────────────────────────────────────── */

const crates = [
  {
    name: "LC3 Standard Lidded Crate",
    litres: "80L",
    dims: "60l x 40w x 35h cm",
    weeklyPrice: "£2.00",
    capacity: "Up to ten lever arch files",
    badge: "Office and home",
    badgeClass: "bg-brand-red",
    use: "Files, documents, folders, books, reports and CDs. The standard choice for office moves and document-heavy relocations. Integral lid, waterproof, sealable with security locks.",
    img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=2400&q=82",
    imgAlt: "LC3 lidded plastic crate for office and home moving, supplied by Removals Nationwide",
  },
  {
    name: "IT Computer Crate",
    litres: "165L",
    dims: "65l x 46w x 59h cm",
    weeklyPrice: "£3.80",
    capacity: "Up to a 21-inch monitor, all PC sizes and peripherals",
    badge: "IT and tech",
    badgeClass: "bg-brand-navy",
    use: "Desktop PCs, laptops, monitors, servers, keyboards, mice and headsets. Tough polypropylene construction provides extra protection in transit and during storage.",
    img: "https://images.unsplash.com/photo-1672552226380-486fe900b322?auto=format&fit=crop&w=2400&q=82",
    imgAlt: "IT plastic crate for moving computer equipment and tech, supplied by Removals Nationwide",
  },
];

/* ── S5: Price tables ──────────────────────────────────────────────── */

const hireColumns = ["Crate type", "Dimensions", "Per week (plus VAT)", "General use"];
const hireRows: PricingRow[] = [
  {
    label: "LC3 Crate, 80 litre",
    values: ["60l x 40w x 35h cm", "£2.00", "Books, files, crockery"],
  },
  {
    label: "IT Crate, 165 litre",
    values: ["65l x 46w x 59h cm", "£3.80", "PCs, technical equipment, servers"],
  },
];

const deliveryColumns = [
  "Number of crates",
  "Inside congestion zone (plus VAT)",
  "Outside congestion zone (plus VAT)",
];
const deliveryRows: PricingRow[] = [
  { label: "40 or more crates", values: ["£41.00", "£30.00"] },
  { label: "Fewer than 40 crates", values: ["£31.00", "£20.00"] },
];

/* ── S9: How-many guide ────────────────────────────────────────────── */

const crateGuide = [
  {
    room: "Home office",
    crates: "3 to 8 LC3 crates",
    note: "Each LC3 holds up to ten lever arch files. Books and hanging files fill crates faster than loose papers.",
  },
  {
    room: "Kitchen",
    crates: "4 to 8 LC3 crates",
    note: "Crockery, glasses, cutlery and pantry items. A lidded crate protects breakables without additional padding.",
  },
  {
    room: "Desktop PC workstation",
    crates: "1 IT crate",
    note: "Holds the tower, monitor (up to 21 inches), keyboard, mouse and headset in one sealed crate.",
  },
  {
    room: "Server room",
    crates: "1 to 3 IT crates per rack",
    note: "Depends on rack depth and equipment size. Your coordinator advises at the survey stage.",
  },
  {
    room: "Bookshelf (per shelf)",
    crates: "1 LC3 crate",
    note: "Standard shelf fills one crate. Heavy books fill it faster, keep each crate liftable.",
  },
  {
    room: "Archive storage",
    crates: "1 LC3 per 10 lever arch files",
    note: "The confirmed capacity. Confirmed count at survey for large archive moves.",
  },
];

/* ── S12: FAQs ─────────────────────────────────────────────────────── */

const faqs: FaqItem[] = [
  {
    question: "Do you offer only LC3 and IT crates?",
    answer:
      "These two crate types cover around 90 percent of office packing requirements. Other sizes are sourced on request. Tell us your specific requirements and we confirm what is available and quote accordingly.",
  },
  {
    question: "Can you hire crates for an international relocation?",
    answer:
      "Yes. Crates are available for international moves. Your coordinator advises on the right type and quantity for the job. Delivery and collection are arranged around the move schedule, with delivery and collection notes to keep the inventory accurate throughout.",
  },
  {
    question: "Can I hire crates if I live outside London?",
    answer:
      "Crate hire is focused on London and the surrounding area. Delivery and collection are priced by the congestion-zone tiers shown on this page. Contact us with your postcode and we confirm whether your address is within our service area and quote the delivery cost.",
  },
  {
    question: "How much does crate hire cost?",
    answer:
      "LC3 crates are £2.00 per week, IT crates are £3.80 per week, all prices plus VAT at 20%. Delivery and collection are charged separately by crate quantity and congestion zone. See the price tables on this page for the full breakdown.",
  },
  {
    question: "How long is the hire period?",
    answer:
      "Crates are delivered a week or two before your scheduled move. Collection is arranged from your new address on move day or up to a week or two after completion. The period is flexible around your move dates. Speak to your coordinator at booking to confirm the exact timeline.",
  },
  {
    question: "How does delivery and collection work?",
    answer:
      "Delivery and collection are charged by the number of crates and whether the address is inside or outside the London congestion zone. You receive a delivery note listing the crates received and a collection note confirming the number returned. Both notes keep the inventory accurate.",
  },
  {
    question: "Are plastic crates better than cardboard boxes for moving?",
    answer:
      "For a local London move, plastic crates are faster to pack, reusable and leave no cardboard waste at the destination. They are lidded, waterproof and sealable. Cardboard boxes suit postal or one-way long-distance moves where return collection is not practical.",
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
  "@id": `${SITE_URL}/#organization`,
};

const crateProductSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "LC3 Plastic Lidded Crate Hire (80 litre)",
      description:
        "Reusable 80-litre lidded plastic LC3 crate for hire in London. Holds up to ten lever arch files. Waterproof, sealable with security locks. Disinfected after every use.",
      brand: { "@type": "Brand", name: "Removals Nationwide" },
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 2.0,
          priceCurrency: "GBP",
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "WEE" },
          valueAddedTaxIncluded: false,
        },
        availability: "https://schema.org/InStock",
        areaServed: { "@type": "AdministrativeArea", name: "Greater London" },
        seller: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "Product",
      name: "IT Computer Crate Hire (165 litre)",
      description:
        "Reusable 165-litre IT plastic crate for hire in London. Holds up to a 21-inch monitor plus PC and peripherals. Tough polypropylene, lidded and sealable.",
      brand: { "@type": "Brand", name: "Removals Nationwide" },
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 3.8,
          priceCurrency: "GBP",
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "WEE" },
          valueAddedTaxIncluded: false,
        },
        availability: "https://schema.org/InStock",
        areaServed: { "@type": "AdministrativeArea", name: "Greater London" },
        seller: { "@id": `${SITE_URL}/#organization` },
      },
    },
  ],
};

/* ── Page ───────────────────────────────────────────────────────────── */

export default async function CrateHirePage() {
  const { phones } = await getResolvedSettings();
  return (
    <>
      <JsonLd data={serviceLdFor("crate-hire")} />
      <JsonLd data={faqPageSchema} />
      <JsonLd data={orgSchema} />
      <JsonLd data={crateProductSchema} />
      <JsonLd
        data={breadcrumbLd([
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Crate Hire" },
        ])}
      />
      <CrateHireAnimations />
      <StickyMobileBar sentinelId="hero-intro" />

      {/* ── S1: Hero ─────────────────────────────────────────────────── */}
      <PageBanner
        title="Crate Hire in London"
        subtitle="Reusable plastic crates delivered and collected across London."
        h1={serviceH1["crate-hire"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Crate Hire" },
        ]}
      />

      {/* ── S1 continued: value prop + CTAs (canonical two-column pattern) */}
      <section id="hero-intro" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">

            {/* Left: value prop + CTAs */}
            <div>
              <p className="hero-anim-sub max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                Removals Nationwide hires reusable plastic LC3 and IT crates across London, delivered to
                your door and collected when you are done. In 2026, more London movers choose
                crates over cardboard for local moves: faster to pack, lidded, sealable and
                collected at no extra fuss.
              </p>
              <p className="hero-anim-sub mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                LC3 crates from <strong>£2.00 per week</strong>, IT crates from{" "}
                <strong>£3.80 per week</strong>, all prices plus VAT. Delivery and collection
                priced by crate quantity and London congestion zone.
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
                Free quote in under 2 minutes. London delivery and collection. Fully insured.
              </p>

              <div className="hero-anim-trust mt-5 flex flex-wrap gap-2">
                {[
                  "From £2 per week",
                  "Delivered and collected",
                  "Reusable and lidded",
                  "Combine with your move",
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
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=2400&q=82"
                  alt="Plastic lidded LC3 and IT moving crates for hire from Removals Nationwide in London"
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
                  {crateServiceStandards.map(({ name }) => (
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
        heading="Get Your Crate Hire Quote"
        buttonLabel="Quick Quote"
        buttonHref="/bookservice#quick-quote"
      />

      {/* ── S2: Why Hire Plastic Crates ──────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="The benefits"
            title="Why Hire Plastic Crates for Your Move"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyHireTiles.map((tile, i) => (
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
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/85">{tile.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: Eco-friendly intro ───────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <SectionHeading
              align="left"
              eyebrow="The eco-friendly way to move"
              title="Crate Hire in London, the Greener Way to Move"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                The best way to reduce the environmental impact of a local move is to avoid
                single-use cardboard altogether. Plastic crates are reused many times. Each one
                is disinfected after every hire, returned to our depot and back in service for
                the next job. No cardboard to break down, no waste to recycle, no clutter at
                the destination.
              </p>
              <p>
                Removals Nationwide hires LC3 and IT crates for London home and office moves,
                delivered to your address before the move and collected from the new address
                when you are ready. The service is available as a standalone hire or combined
                with any of our removal services.
              </p>
              <p>
                For customers who do need cardboard, our{" "}
                <Link
                  href="/packaging-materials"
                  className="text-brand-red underline underline-offset-2 hover:text-brand-navy"
                >
                  packaging materials page
                </Link>{" "}
                lists boxes, bubble wrap and tape with transparent prices.
              </p>
            </div>
          </div>
          <div data-reveal data-delay="1" className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1672552226380-486fe900b322?auto=format&fit=crop&w=2400&q=82"
                alt="Removals Nationwide team preparing crates for a London office move"
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

      {/* ── S4: The Crates We Offer ──────────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Our crates" title="The Crates We Offer" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
            Two crate types covering the full range of home, office and IT moves. All prices plus
            VAT at 20%.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {crates.map((c, i) => (
              <div
                key={c.name}
                data-reveal
                data-delay={String(i + 1)}
                className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={c.img}
                    alt={c.imgAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${c.badgeClass}`}
                  >
                    {c.badge}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-brand-navy">{c.name}</h3>
                    <span className="shrink-0 text-2xl font-extrabold text-brand-red">
                      {c.litres}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-charcoal/50">
                    {c.dims}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-brand-charcoal/80">{c.use}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-black/8 pt-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-charcoal/50">
                        Capacity
                      </p>
                      <p className="text-sm font-bold text-brand-navy">{c.capacity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-charcoal/50">
                        Per week
                      </p>
                      <p className="text-xl font-bold text-brand-red">{c.weeklyPrice}</p>
                      <p className="text-xs text-brand-charcoal/50">plus VAT</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S5: Crate Hire Prices ────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Transparent pricing" title="Crate Hire Prices" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-charcoal/70">
            All prices are plus VAT at 20%. Prices were confirmed on the live site and are subject to
            change. Contact us to confirm the current rate before ordering.
          </p>

          <h3 className="mt-10 text-base font-bold text-brand-navy">Weekly Hire Rate</h3>
          <div data-reveal className="mt-4">
            <PricingTable columns={hireColumns} rows={hireRows} />
          </div>

          <h3 className="mt-10 text-base font-bold text-brand-navy">
            Delivery and Collection Charge
          </h3>
          <div data-reveal data-delay="1" className="mt-4">
            <PricingTable columns={deliveryColumns} rows={deliveryRows} />
          </div>

          <div className="mt-6 rounded-xl border border-black/8 bg-brand-grey p-5 text-sm leading-relaxed text-brand-charcoal/75">
            <p>
              The delivery and collection fee covers one delivery before the move and one
              collection from the new address. Delivery and collection charges are per visit, not
              per crate. All prices plus VAT at 20%.
            </p>
            <p className="mt-2">
              Combining crate hire with a{" "}
              <Link
                href="/man-and-van-london"
                className="font-semibold text-brand-red underline underline-offset-2 hover:text-brand-navy"
              >
                man-and-van
              </Link>{" "}
              or{" "}
              <Link
                href="/office-removals"
                className="font-semibold text-brand-red underline underline-offset-2 hover:text-brand-navy"
              >
                office removal
              </Link>{" "}
              booking consolidates the cost into one quote.
            </p>
          </div>
        </div>
      </section>

      {/* ── S6: Plastic Crates vs Cardboard Boxes ───────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Choosing the right option"
            title="Plastic Crates vs Cardboard Boxes"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            For a local London move, plastic crates outperform cardboard on almost every
            measure. Cardboard still suits certain situations. Use the guide below.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2" data-reveal>
            {/* Plastic crates */}
            <div className="rounded-2xl border-2 border-brand-red bg-white p-8 shadow-md">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Plastic crates (hire)
              </div>
              <ul className="mt-2 space-y-3">
                {[
                  "Faster to pack: stackable and uniform, load the van in fewer trips",
                  "Reusable, returned after the move, no disposal or recycling needed",
                  "Integral lid: waterproof, sealable with security locks",
                  "Disinfected after every use, structurally intact across many hires",
                  "No flat-packing, no assembly, no cardboard pile at the destination",
                  "Greener for a local move: zero single-use waste",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-charcoal/85">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="/bookservice#quick-quote" variant="red" size="md">
                  Hire Crates
                </Button>
              </div>
            </div>

            {/* Cardboard boxes */}
            <div className="rounded-2xl border-2 border-black/10 bg-brand-grey p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                Cardboard boxes (buy)
              </div>
              <ul className="mt-2 space-y-3">
                {[
                  "Better for postal or one-way long-distance moves where crate collection is not practical",
                  "Lower upfront cost if you already own them",
                  "Recyclable at the destination",
                  "Wardrobe boxes for hanging clothes have no crate equivalent",
                  "Available for immediate purchase if a last-minute move leaves no time to arrange hire",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-charcoal/85">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-charcoal/30" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/packaging-materials"
                  className="text-sm font-semibold text-brand-red underline underline-offset-2 hover:text-brand-navy"
                >
                  See packaging materials and prices →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S7: How Crate Hire Works ─────────────────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal className="text-center">
            <span className="inline-block rounded-full bg-brand-red/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-red">
              Step by step
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
              How Crate Hire Works
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "Request a quote",
                detail: "Tell us how many crates you need, your address and your move date. We confirm crate availability, delivery cost and the hire period.",
              },
              {
                step: "Sign the terms",
                detail: "Signed acceptance of the offer and terms is required before any crates are dispatched. Your coordinator sends the paperwork by email.",
              },
              {
                step: "Crates delivered",
                detail: "Crates arrive a week or two before your move date. You receive a delivery note listing the exact number of crates received.",
              },
              {
                step: "Pack and prepare",
                detail: "Pack at your own pace. Crates stack neatly, do not shift in transit and load into the van quickly on move day.",
              },
              {
                step: "Move day",
                detail: "Loaded crates go straight onto the removal vehicle. Combinable with our man-and-van, house removals and office removals services.",
              },
              {
                step: "Crates collected",
                detail: "We collect from your new address on the day or up to a week or two after completion. You receive a collection note confirming crates returned.",
              },
            ].map(({ step, detail }, i) => (
              <div
                key={step}
                data-reveal
                data-delay={String(Math.min(i + 1, 7))}
                className="flex flex-col rounded-2xl bg-white/8 p-6 ring-1 ring-white/10 transition-all duration-200 hover:bg-white/12 motion-reduce:transition-none"
              >
                <span className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-red">
                  Step {i + 1}
                </span>
                <p className="text-sm font-bold leading-snug text-white">{step}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/80">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S8: Use cases ────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="When to use crate hire"
            title="Crate Hire for Home, Office and IT Moves"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {[
              {
                title: "Home Moves",
                body: "LC3 crates handle books, kitchen items, bathroom contents and study files. Faster to pack than boxes and no assembly required. Stack neatly in any room ready for loading.",
                link: { label: "House removals", href: "/house-removals" },
              },
              {
                title: "Office Moves",
                body: "Each LC3 crate holds up to ten lever arch files. Pre-labelled crates keep documents organised by desk or department, making re-stacking at the new office straightforward.",
                link: { label: "Office removals", href: "/office-removals" },
              },
              {
                title: "IT and Tech Moves",
                body: "IT crates hold a desktop tower, a monitor up to 21 inches, a keyboard, mouse and headset in one sealed unit. Tough polypropylene protects equipment in transit and during storage.",
                link: null,
              },
              {
                title: "Small Volume Moves",
                body: "A handful of LC3 crates combined with our man-and-van service covers studio and one-bedroom flat moves, storage drops or single-room clearances across London.",
                link: { label: "Man and van", href: "/man-and-van-london" },
              },
              {
                title: "Between-Home Storage",
                body: "Crates stored at our Purfleet compound stack securely, stay lidded and sealable throughout the storage period, and return to your new address when you are ready.",
                link: { label: "Secure storage", href: "/storage" },
              },
              {
                title: "International Moves",
                body: "Crates are available for door-to-door international moves. Your coordinator advises on the right type and quantity and arranges delivery and collection around the move schedule.",
                link: { label: "International removals", href: "/international-removals" },
              },
            ].map((uc, i) => (
              <div
                key={uc.title}
                data-delay={String((i % 3) + 1)}
                className="flex flex-col rounded-2xl border border-black/5 bg-brand-grey p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <h3 className="mb-3 border-l-4 border-brand-red pl-3 text-base font-bold text-brand-navy">
                  {uc.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-brand-charcoal/85">{uc.body}</p>
                {uc.link && (
                  <Link
                    href={uc.link.href}
                    className="mt-4 text-sm font-semibold text-brand-red transition hover:text-brand-navy"
                  >
                    {uc.link.label} &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S9: How Many Crates? ─────────────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Decision guide"
            title="How Many Crates Do I Need?"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            The number of crates you need depends on property size, how many files and books you
            own, and whether IT equipment is included. Use the room guide below as a starting
            point. An exact count is confirmed at a free pre-move survey or when you speak to
            your coordinator.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {crateGuide.map((r, i) => (
              <div
                key={r.room}
                data-delay={String((i % 3) + 1)}
                className="rounded-xl border border-black/8 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-bold text-brand-navy">{r.room}</p>
                <p className="mt-1 text-base font-semibold text-brand-red">{r.crates}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/75">{r.note}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-brand-charcoal/55">
            These are rough starting guides. Heavy book collections, full kitchens and large
            IT setups add crates quickly. Our team confirms the exact count at survey.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/bookservice#quick-quote" variant="red" size="md">
              Get a Confirmed Crate Count
            </Button>
          </div>
        </div>
      </section>

      {/* ── S10: Combine With Your Move ──────────────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <span className="inline-block rounded-full bg-brand-red/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-red">
            Better together
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Combine Crate Hire With Your Move
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80">
            Crate hire is combinable with every Removals Nationwide service. One coordinator manages
            the full job: crates delivered before, the move handled on the day, crates collected
            after. No separate phone calls, no separate logistics.
          </p>
          <div className="mx-auto mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: "Man and van", href: "/man-and-van-london" },
              { label: "House removals", href: "/house-removals" },
              { label: "Office removals", href: "/office-removals" },
              { label: "Packing service", href: "/packing-service" },
              { label: "Packaging materials", href: "/packaging-materials" },
              { label: "Secure storage", href: "/storage" },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-red hover:text-brand-red"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/bookservice#quick-quote" variant="red" size="lg" className="w-full sm:w-auto">
              Quick Quote
            </Button>
            <Button href="/bookservice" variant="outline-light" size="lg" className="w-full sm:w-auto">
              Book a Service
            </Button>
          </div>
        </div>
      </section>

      {/* ── S11: Reviews (Trustpilot only) ───────────────────────────── */}
      <section className="bg-brand-grey py-16">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <div className="flex justify-center gap-1 text-brand-red" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-7 w-7" />
            ))}
          </div>
          <p className="mt-3 text-xl font-bold text-brand-navy">Rated Excellent on Trustpilot</p>
          <p className="mt-2 text-base text-brand-charcoal/70">
            Read genuine reviews from customers who have used Removals Nationwide for crate hire and
            removal services across London.
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

      {/* ── S12: FAQs ────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Good to know" title="Crate Hire FAQs" />
          </div>
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Book Your Crate Hire in London Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            LC3 crates from £2.00 per week, IT crates from £3.80 per week, all plus VAT.
            Delivered and collected across London.
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
            experienced and fully insured &nbsp;&middot;&nbsp; Fully insured &nbsp;&middot;&nbsp;
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
