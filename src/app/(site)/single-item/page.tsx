import type { Metadata } from "next";
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
import Accreditations from "@/components/home/Accreditations";
import Faq, { type FaqItem } from "@/components/services/Faq";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import SingleItemAnimations from "@/components/services/SingleItemAnimations";
import { CheckIcon, StarIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("single-item-deliveries");

/* ── Accreditations ────────────────────────────────────────────────── */

const singleItemAccreditations = [
  { name: "British Association of Removers (BAR)" },
  { name: "National Guild of Removers and Storers (NGRS)" },
  { name: "International Association of Movers (IAM)" },
  { name: "The Furniture Ombudsman" },
  { name: "QSS-DW Approved Mover" },
  { name: "Checkatrade" },
];

/* ── S3: Benefits ──────────────────────────────────────────────────── */

const benefits = [
  {
    title: "Furniture Assembly and Disassembly",
    body: "We assemble and disassemble furniture as part of the service. Wardrobes, bed frames and flat-pack pieces are handled at both the collection and delivery addresses.",
  },
  {
    title: "Fast and Safe Delivery",
    body: "Same or next day in London. Every item is wrapped and protected in transit by a trained two-man team using the right vehicle for the item size.",
  },
  {
    title: "Easy Booking",
    body: "Send us the item type, the collection address and the delivery address. We confirm a price and a date with no unnecessary back-and-forth.",
  },
  {
    title: "Transparent Prices",
    body: "From £60 plus VAT. The price depends on the item size and the distance. Specialist items such as a piano are quoted individually. No hidden fees.",
  },
  {
    title: "Packing and Cushioning Materials",
    body: "We use packing and cushioning materials where the item needs extra protection. Antiques, fragile pieces and large furniture are wrapped before loading.",
  },
  {
    title: "International Single Item Delivery",
    body: "Single items ship worldwide on a part-load basis through our international removal service. Weekly departures to Norway mean faster delivery to Scandinavia.",
  },
];

/* ── S4: Item type grid ────────────────────────────────────────────── */

const itemTypes = [
  {
    title: "Sofas and Armchairs",
    desc: "Full two-man carry, wrapped and protected in transit. From £60 plus VAT.",
    img: "/gallery/move-15.jpg",
    alt: "Top Removals team delivering a sofa in London",
    specialist: false,
  },
  {
    title: "Beds and Mattresses",
    desc: "Bed frames dismantled and reassembled at the destination. Mattresses wrapped.",
    img: "/gallery/move-16.jpg",
    alt: "Top Removals team carrying a bed for single item delivery in London",
    specialist: false,
  },
  {
    title: "Wardrobes and Cabinets",
    desc: "Large wardrobes dismantled if needed, transported safely, reassembled at the new address.",
    img: "/gallery/move-17.jpg",
    alt: "Top Removals moving a large wardrobe in London",
    specialist: false,
  },
  {
    title: "White Goods and Appliances",
    desc: "Washing machines, fridges, dryers and dishwashers. Two-man team, transit protection included.",
    img: "/gallery/move-18.jpg",
    alt: "Top Removals delivering a white goods appliance in London",
    specialist: false,
  },
  {
    title: "Pianos and Specialist Items",
    desc: "Specialist handling required. Contact us with the item details for an accurate quote.",
    img: "/gallery/move-19.jpg",
    alt: "Top Removals handling a specialist item for single item delivery",
    specialist: true,
  },
  {
    title: "Antiques and Fragile Items",
    desc: "Packing and cushioning used throughout. Handled with extra care from collection to delivery.",
    img: "/gallery/move-20.jpg",
    alt: "Top Removals packing a fragile item for single item delivery in London",
    specialist: false,
  },
  {
    title: "IKEA and Flat-Pack Furniture",
    desc: "We collect from any retailer and assemble at the destination. Item must be bought in advance.",
    img: "/gallery/move-21.jpg",
    alt: "Top Removals collecting flat-pack furniture for delivery in London",
    specialist: false,
  },
  {
    title: "eBay and Gumtree Pickup-Only",
    desc: "We collect pickup-only buys across London and deliver same or next day with proof of delivery.",
    img: "/gallery/move-22.jpg",
    alt: "Top Removals collecting an eBay pickup-only item in London",
    specialist: false,
  },
];

/* ── S8: Process steps ─────────────────────────────────────────────── */

const steps = [
  {
    step: "Quote",
    detail:
      "Send us the item, the collection point, and the delivery address. We confirm a price from £60 plus VAT, depending on the item and the distance.",
  },
  {
    step: "Collect",
    detail:
      "Our team collects the item, including eBay and Gumtree pickup-only purchases. We pack or cushion it if needed to protect it in transit.",
  },
  {
    step: "Deliver",
    detail:
      "The item is delivered to the doorstep. Same or next day in London. Longer distances and worldwide deliveries are scheduled and confirmed in advance.",
  },
  {
    step: "Proof",
    detail:
      "Proof of delivery is provided on every job. You and the recipient both have a record of the completed delivery.",
  },
];

/* ── S9: Comparison ────────────────────────────────────────────────── */

const comparison = [
  {
    title: "Single Item Courier",
    subtitle: "Top Removals",
    highlight: true,
    points: [
      "One item or a few bulky or awkward items",
      "Own fleet and own movers, full accountability",
      "Furniture assembly and disassembly available",
      "Doorstep delivery with proof of delivery",
      "eBay and Gumtree pickup-only collection",
      "Worldwide shipping on a part-load basis",
      "From £60 plus VAT",
    ],
    bestWhen:
      "One heavy or awkward item that needs lifting, assembly, or doorstep delivery.",
  },
  {
    title: "Full Removal",
    subtitle: "",
    highlight: false,
    points: [
      "A whole home or office move",
      "Full crew and a larger vehicle",
      "Priced for the whole job",
      "Packing, loading, unloading included",
    ],
    bestWhen: "Moving everything in a property, not a single item.",
  },
  {
    title: "Parcel Carrier",
    subtitle: "",
    highlight: false,
    points: [
      "Small boxed parcels on a network",
      "Low per-parcel cost for small items",
      "No lifting, assembly, or bulky-item handling",
      "Size and weight limits apply",
    ],
    bestWhen: "Small items that fit a standard parcel box. Not suitable for furniture.",
  },
];

/* ── S11: Who we help ──────────────────────────────────────────────── */

const whoWeHelp = [
  {
    title: "Online Shoppers With Pickup-Only Buys",
    desc: "Bought something on eBay or Gumtree marked Pickup Only? We collect it across London and deliver to your door, same or next day.",
  },
  {
    title: "eBay and Marketplace Sellers",
    desc: "Regular eBay collection rounds, secure warehouse storage, and proof of delivery on every job.",
  },
  {
    title: "Students Moving One Item",
    desc: "A wardrobe, a bed, or a desk for a dormitory or campus move. Safer than a hire van and far less expensive than a full crew.",
  },
  {
    title: "Anyone Moving One Bulky Item",
    desc: "A sofa, a piano, a fridge, an antique. Our two-man team collects, wraps, transports, and delivers the item you cannot fit in a car.",
  },
  {
    title: "Customers Sending One Item Abroad",
    desc: "Single items ship worldwide on a part-load basis. Weekly Norway departures mean faster delivery to Scandinavia than most international routes.",
  },
];

/* ── FAQs ──────────────────────────────────────────────────────────── */

const faqs: FaqItem[] = [
  {
    question: "What is the price for a single item delivery?",
    answer:
      "Single item delivery from £60 plus VAT, with the exact price set by the item size and the distance. Specialist items such as a piano need specialist handling and are quoted individually. We offer international single item delivery on a part-load basis, priced per job. Contact us for a confirmed figure.",
  },
  {
    question: "I have bought furniture from IKEA. Can you help me with it?",
    answer:
      "Yes. We work with any retailer. The item must be bought and paid for in advance by you: we are a transport provider and do not purchase items on your behalf. We collect the furniture from the store or your chosen address, assemble it at the destination if needed, and deliver it to your door.",
  },
  {
    question: "Can you deliver something ordered on eBay to another country?",
    answer:
      "Yes, on a part-load basis with a custom quote. International single item delivery is priced per job. We run a weekly service to Norway, so a single item to Norway arrives faster than most other international routes. Contact us for the full process and a price for your destination.",
  },
  {
    question: "Do you collect pickup-only eBay and Gumtree items?",
    answer:
      "Yes, across the whole London area, same or next day as requested. We run regular eBay collection rounds and provide proof of delivery on every job. The item must be bought and paid for before we collect. Tell us the collection and delivery addresses for a confirmed price.",
  },
  {
    question: "Can a courier deliver furniture and assemble it?",
    answer:
      "Yes. We deliver single furniture items and offer assembly and disassembly as part of the service. Packing and cushioning materials are available if the item needs extra protection in transit. Specialist and delicate items such as antiques are handled with care and quoted individually.",
  },
  {
    question: "How much does it cost to deliver one item in London?",
    answer:
      "From £60 plus VAT, with the exact price set by the item size and the distance. Specialist items such as a piano are priced individually. International single item delivery is priced per job on a part-load basis. Get a confirmed figure with a quick quote.",
  },
  {
    question: "Do you offer same-day single item delivery?",
    answer:
      "In London, same or next day delivery is available as requested. Longer-distance UK deliveries and worldwide single item shipments are scheduled and confirmed in advance, not same-day. Contact us with your collection and delivery addresses to confirm what is available for your date and item type.",
  },
  {
    question: "Do you cover the whole of London?",
    answer:
      "Yes, every London postcode for single item delivery, eBay and Gumtree collections, and furniture assembly. Single item deliveries to the rest of the UK are also available. Worldwide single item delivery runs on a part-load basis through our international removal service. Contact us with your address for confirmation.",
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

const serviceOfferSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Single Item Delivery and eBay Courier London",
  serviceType: "Single Item Delivery",
  areaServed: { "@type": "AdministrativeArea", name: "Greater London" },
  provider: { "@id": `${SITE_URL}/#organization` },
  offers: {
    "@type": "Offer",
    name: "Single Item Delivery",
    priceCurrency: "GBP",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: 60,
      priceCurrency: "GBP",
      valueAddedTaxIncluded: false,
    },
    availability: "https://schema.org/InStock",
    areaServed: { "@type": "AdministrativeArea", name: "Greater London" },
  },
};

/* ── Page ───────────────────────────────────────────────────────────── */

export default function SingleItemPage() {
  return (
    <>
      <JsonLd data={serviceLdFor("single-item-deliveries")} />
      <JsonLd data={faqPageSchema} />
      <JsonLd data={orgSchema} />
      <JsonLd data={serviceOfferSchema} />
      <JsonLd
        data={breadcrumbLd([
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Single Item / eBay Deliveries" },
        ])}
      />
      <SingleItemAnimations />
      <StickyMobileBar sentinelId="hero-intro" />

      {/* ── S1: Hero ─────────────────────────────────────────────────── */}
      <PageBanner
        title="Single Item and eBay Delivery in London"
        subtitle="One item moved by a real removals company. Own fleet, pickup-only collection, furniture assembly, proof of delivery."
        h1={serviceH1["single-item-deliveries"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Single Item / eBay Deliveries" },
        ]}
      />

      {/* ── S1 continued: two-column canonical ───────────────────────── */}
      <section id="hero-intro" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">

            {/* Left: value prop + CTAs */}
            <div>
              <p className="hero-anim-sub max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                Top Removals runs a single item and eBay delivery service across London with its
                own fleet and its own movers. In 2026, it remains the only option that combines
                real from-price transparency, pickup-only eBay collection, furniture assembly,
                and worldwide single item delivery under one booking.
              </p>
              <p className="hero-anim-sub mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                One item: a large wardrobe, a sofa, a piano, an antique, or a pickup-only eBay
                buy. Our team collects, wraps, delivers, and assembles if needed. From{" "}
                <strong>£60 plus VAT</strong>.
              </p>

              <div className="hero-anim-ctas mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
                Free quote in under 2 minutes. Own fleet. Fully insured.
              </p>

              <div className="hero-anim-trust mt-5 flex flex-wrap gap-2">
                {[
                  "From £60 plus VAT",
                  "Own fleet and movers",
                  "eBay pickup-only runs",
                  "Worldwide delivery",
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

            {/* Right: image + trusted-by card */}
            <div
              className="overflow-hidden rounded-2xl border border-black/10 shadow-sm"
              data-reveal
              data-delay="1"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/gallery/move-13.jpg"
                  alt="Top Removals single item and eBay delivery in London"
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
                  {singleItemAccreditations.map(({ name }) => (
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

      {/* ── S2: Single Item Delivery in the UK and Worldwide ─────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <SectionHeading
              align="left"
              eyebrow="The service"
              title="Single Item Delivery in the UK and Worldwide"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Sometimes you need help to move one item: a large wardrobe, an antique piano,
                a bulky sofa, a bed, or an appliance. Top Removals runs this service with its
                own fleet and its own team. We come, help with packing if wanted, load the item,
                and transport it where needed.
              </p>
              <p>
                Thanks to our modern fleet and a range of vehicles, we move all types of goods
                within the UK and worldwide. A piano from London to Manchester is a routine job.
                Items also ship internationally on a part-load basis through our{" "}
                <Link
                  href="/international-removals"
                  className="text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                >
                  international removal service
                </Link>
                . Specialist items such as a piano require the right skills and are quoted
                individually, not at the from-price.
              </p>
              <p>
                The service is especially useful for a dormitory or student move where only one
                large item needs transporting: a wardrobe, a bed, or a desk. See our{" "}
                <Link
                  href="/dormitory-move-student-storage"
                  className="text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                >
                  dormitory move and student storage page
                </Link>{" "}
                for the full student service.
              </p>
            </div>
          </div>
          <div data-reveal data-delay="1" className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/gallery/move-14.jpg"
                alt="Top Removals team loading a single item onto a removal van in London"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 -z-10 hidden h-36 w-36 rounded-2xl bg-brand-orange/15 lg:block"
            />
          </div>
        </div>
      </section>

      {/* ── S3: Benefits ─────────────────────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="The benefits" title="Benefits of Our Single Item Delivery" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((tile, i) => (
              <div
                key={tile.title}
                data-reveal
                data-delay={String(i + 1)}
                className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-base font-bold text-brand-navy">{tile.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/85">{tile.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S4: Any Item, Any London Address ─────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Items we move" title="Any Item, Any London Address" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
            Standard items from £60 plus VAT. Specialist items are quoted individually.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {itemTypes.map((item, i) => (
              <div
                key={item.title}
                data-reveal
                data-delay={String((i % 4) + 1)}
                className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  {item.specialist && (
                    <span className="absolute left-3 top-3 rounded-full bg-brand-navy px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      Quoted individually
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-brand-navy">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-brand-charcoal/75">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-brand-charcoal/55">
            Specialist and delicate items are quoted individually. Everything else starts from
            £60 plus VAT.
          </p>
        </div>
      </section>

      {/* ── S5: Single Item Delivery Prices ──────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Transparent pricing" title="Single Item Delivery Prices" />
          <div
            className="mt-10 rounded-2xl border-2 border-brand-orange bg-brand-sand p-8 shadow-md"
            data-reveal
          >
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                Single item delivery from
              </p>
              <p className="mt-2 font-heading text-5xl font-extrabold text-brand-navy">£60</p>
              <p className="mt-1 text-lg font-semibold text-brand-charcoal/70">plus VAT</p>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-charcoal/80">
                The final price is set by the item size and the distance. Send us your item type,
                collection address, and delivery address for a confirmed figure.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-brand-orange/30 bg-white p-5">
                <p className="text-sm font-bold text-brand-navy">Specialist items</p>
                <p className="mt-1 text-sm leading-relaxed text-brand-charcoal/75">
                  Items such as a piano require specialist handling and are priced individually.
                  Contact us with the item details for an accurate quote before booking.
                </p>
              </div>
              <div className="rounded-xl border border-brand-orange/30 bg-white p-5">
                <p className="text-sm font-bold text-brand-navy">Worldwide single item delivery</p>
                <p className="mt-1 text-sm leading-relaxed text-brand-charcoal/75">
                  International single item delivery is priced per job on a part-load basis.
                  Contact us with your destination country for a confirmed price and schedule.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Button href="/bookservice#quick-quote" variant="orange" size="lg">
                Quick Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── S6: eBay and Online Shopping Deliveries ──────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="For online shoppers"
            title="eBay and Online Shopping Deliveries in London"
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div data-reveal className="space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Bought something on eBay or Gumtree marked Pickup Only? Top Removals runs a
                comprehensive, friendly courier service across the London area. We collect your
                item from the seller and deliver it to your doorstep, same day or next day as
                requested.
              </p>
              <p>
                We run regular eBay collection rounds across London and provide proof of delivery
                on every job. Deliveries from different retailers, single large retail items, and
                flexible time slots are all available. The whole London area is covered.
              </p>
              <p>
                For collections outside London or for large retail deliveries requiring assembly,
                our{" "}
                <Link
                  href="/packing-service"
                  className="text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                >
                  packing service
                </Link>{" "}
                and full removal teams are also available. One coordinator handles the full job.
              </p>
            </div>
            <div data-reveal data-delay="1">
              <p className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-navy">
                With Top Removals you get:
              </p>
              <ul className="space-y-3">
                {[
                  "Single and large retail deliveries",
                  "Regular eBay collection runs",
                  "Deliveries from different retailers",
                  "Flexible time schedule",
                  "Proof of delivery on every job",
                  "Whole London area covered",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-brand-charcoal/85">
                    <CheckIcon className="h-5 w-5 shrink-0 text-brand-orange" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── S7: Secure Warehouse for Online Sellers ──────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div data-reveal data-delay="1" className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/gallery/move-23.jpg"
                alt="Top Removals secure warehouse for online sellers in London"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 -z-10 hidden h-36 w-36 rounded-2xl bg-brand-orange/15 lg:block"
            />
          </div>
          <div data-reveal className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="For online sellers"
              title="A Secure Warehouse for Online Sellers"
            />
            <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Online sellers benefit from our secure warehouse location with storage and
                warehouse management in one place. The facility is monitored by 24/7 CCTV with
                live security, and you receive a sealing code to access your unit whenever you
                need it.
              </p>
              <p>
                There is no minimum or maximum renting period. Combine warehouse storage with
                our regular eBay collection runs for a complete seller logistics service. See our{" "}
                <Link
                  href="/storage"
                  className="text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                >
                  storage service page
                </Link>{" "}
                for full details on the facility and pricing.
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "24/7 CCTV monitored, live security",
                "Sealing code for your unit",
                "No minimum or maximum renting period",
                "Warehouse management included",
                "Combine with regular eBay collection runs",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-brand-charcoal/85">
                  <CheckIcon className="h-5 w-5 shrink-0 text-brand-orange" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── S8: How Single Item Delivery Works ───────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal className="text-center">
            <span className="inline-block rounded-full bg-brand-orange/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-orange">
              Step by step
            </span>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
              How Single Item Delivery Works
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ step, detail }, i) => (
              <div
                key={step}
                data-reveal
                data-delay={String(i + 1)}
                className="flex flex-col rounded-2xl bg-white/8 p-6 ring-1 ring-white/10 transition-all duration-200 hover:bg-white/12 motion-reduce:transition-none"
              >
                <span className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Step {i + 1}
                </span>
                <p className="text-sm font-bold leading-snug text-white">{step}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/80">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S9: Courier vs Full Removal vs Parcel Carrier ────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Which service fits?"
            title="Single Item Courier vs Full Removal vs Parcel Carrier"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3" data-reveal>
            {comparison.map((col) => (
              <div
                key={col.title}
                className={`flex flex-col rounded-2xl p-8 ${
                  col.highlight
                    ? "border-2 border-brand-orange bg-white shadow-md"
                    : "border border-black/8 bg-white shadow-sm"
                }`}
              >
                <div
                  className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white ${
                    col.highlight ? "bg-brand-orange" : "bg-brand-charcoal/60"
                  }`}
                >
                  {col.title}
                </div>
                {col.subtitle && (
                  <p className="mb-3 text-xs font-semibold text-brand-orange">{col.subtitle}</p>
                )}
                <ul className="flex-1 space-y-3">
                  {col.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-brand-charcoal/85"
                    >
                      <CheckIcon
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          col.highlight ? "text-brand-orange" : "text-brand-charcoal/30"
                        }`}
                        strokeWidth={2.5}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div
                  className={`mt-6 rounded-lg p-4 ${
                    col.highlight ? "bg-brand-orange/10" : "bg-brand-grey"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-charcoal/60">
                    Best when
                  </p>
                  <p className="mt-1 text-sm font-bold text-brand-navy">{col.bestWhen}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-brand-charcoal/60">
            For one heavy or awkward item that will not fit a parcel and needs lifting or
            assembly, a single item courier is the right fit. We are not a parcel service and
            not a bidding marketplace. For small flat moves with multiple items, our{" "}
            <Link
              href="/man-and-van-london"
              className="font-semibold text-brand-orange hover:text-brand-navy"
            >
              man-and-van service
            </Link>{" "}
            covers jobs between a single item and a full crew.
          </p>
        </div>
      </section>

      {/* ── S10: Worldwide and International Single Item Delivery ─────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Beyond London and the UK"
            title="Worldwide and International Single Item Delivery"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div data-reveal className="space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Single items ship worldwide through our international removal service on a
                part-load basis. Part-load means you pay for the space your item uses, not for
                a full container or dedicated vehicle. The item travels with other consignments
                heading to the same destination region.
              </p>
              <p>
                International single item delivery is priced per job. Contact us with the item
                description, collection address and destination country for a confirmed price
                and schedule.
              </p>
              <p>
                We run a{" "}
                <Link
                  href="/removals-services-to-norway"
                  className="text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                >
                  weekly service to Norway
                </Link>
                , which means a single item to Norway arrives faster than most other
                international routes. For the full international network, see the{" "}
                <Link
                  href="/international-removals"
                  className="text-brand-orange underline underline-offset-2 hover:text-brand-navy"
                >
                  international removals page
                </Link>
                .
              </p>
              <p className="text-sm text-brand-charcoal/70">
                All items must be bought and paid for in advance by the customer. Top Removals is
                a transport provider and does not purchase items on your behalf.
              </p>
            </div>
            <div data-reveal data-delay="1">
              <div className="rounded-2xl border border-brand-orange/30 bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-base font-bold text-brand-navy">
                  International single item delivery: how it works
                </h3>
                <ul className="space-y-5">
                  {[
                    {
                      label: "Part-load basis",
                      desc: "Your item travels with other consignments to the same region. You pay for the space used, not a full vehicle.",
                    },
                    {
                      label: "Custom quote per job",
                      desc: "Each international single item delivery is priced individually. Contact us with the item and destination for a confirmed figure.",
                    },
                    {
                      label: "Weekly Norway service",
                      desc: "Items to Norway benefit from our weekly departure schedule. Faster delivery compared to most international routes.",
                    },
                    {
                      label: "Transport provider only",
                      desc: "All items must be bought and paid for in advance. We collect, transport, and deliver. We do not buy items on your behalf.",
                    },
                  ].map(({ label, desc }) => (
                    <li key={label} className="flex gap-4">
                      <CheckIcon
                        className="mt-1 h-5 w-5 shrink-0 text-brand-orange"
                        strokeWidth={2.5}
                      />
                      <div>
                        <p className="text-sm font-bold text-brand-navy">{label}</p>
                        <p className="mt-0.5 text-sm text-brand-charcoal/75">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── S11: Who We Help ─────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Our customers" title="Who We Help" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {whoWeHelp.map((item, i) => (
              <div
                key={item.title}
                data-delay={String((i % 3) + 1)}
                className="flex flex-col rounded-2xl border border-black/5 bg-brand-grey p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <h3 className="mb-3 border-l-4 border-brand-orange pl-3 text-base font-bold text-brand-navy">
                  {item.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-brand-charcoal/85">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S12: Reviews ─────────────────────────────────────────────── */}
      <section className="bg-brand-grey py-16">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <div
            className="flex justify-center gap-1 text-brand-orange"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-7 w-7" />
            ))}
          </div>
          <p className="mt-3 text-xl font-bold text-brand-navy">Rated Excellent on Trustpilot</p>
          <p className="mt-2 text-base text-brand-charcoal/70">
            Read genuine reviews from customers who have used Top Removals for single item
            deliveries and courier services across London.
          </p>
          <Link
            href="https://uk.trustpilot.com/review/www.top-removals.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[44px] items-center rounded-xl bg-brand-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-orange"
          >
            View Reviews on Trustpilot
          </Link>
        </div>
      </section>

      {/* ── S13: FAQs ────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading eyebrow="Good to know" title="Single Item Delivery FAQs" />
          </div>
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Book Your Single Item Delivery in London Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Own fleet, own movers, eBay and Gumtree pickup-only collection, furniture assembly,
            worldwide delivery. From £60 plus VAT.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
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
              variant="outline-light"
              size="lg"
              className="w-full sm:w-auto"
            >
              Book a Service
            </Button>
          </div>
          <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href="tel:+442072052525"
              className="flex items-center gap-2 text-base font-bold text-white transition hover:text-brand-orange"
            >
              <span aria-hidden="true" className="text-brand-orange">&#9742;</span>
              020 7205 2525
            </a>
            <a
              href="tel:+448000467877"
              className="flex items-center gap-2 text-base font-bold text-white transition hover:text-brand-orange"
            >
              <span aria-hidden="true" className="text-brand-orange">&#9742;</span>
              0800 046 7877 (freephone)
            </a>
          </div>
          <p className="mt-6 text-sm text-white/50">
            BAR and NGRS accredited &nbsp;&middot;&nbsp; Fully insured &nbsp;&middot;&nbsp;
            Registered in England No. 6874216
          </p>
          <p className="mt-2 text-xs text-white/40">
            Unit C1A Purfleet Industrial Park, Kerry Avenue, Purfleet, RM15 4YA
          </p>
        </div>
      </section>

      <Accreditations />
    </>
  );
}
