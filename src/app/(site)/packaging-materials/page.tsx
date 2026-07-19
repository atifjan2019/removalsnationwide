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
import TipList, { type Tip } from "@/components/services/TipList";
import PricingTable, { type PricingRow } from "@/components/services/PricingTable";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import PackagingMaterialsAnimations from "@/components/services/PackagingMaterialsAnimations";
import { CheckIcon, StarIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("packaging-materials");

/* ── Service Highlights (hero trusted-by card) ─────────────────────────── */

const packagingServiceStandards = [
  { name: "Fully insured removals" },
  { name: "Vetted moving crews" },
  { name: "International moving experience" },
  { name: "Independent dispute resolution" },
  { name: "Clear written quotations" },
  { name: "Customer-reviewed service" },
];

/* ── S2: Why buy tiles ─────────────────────────────────────────────── */

const whyBuyTiles = [
  {
    title: "industry-Approved Quality",
    body: "All materials are approved and recommended by the moving industry. Double-wall removal boxes, perforated bubble wrap and strong sealing tape, sourced to industry standard.",
  },
  {
    title: "Delivered Across the UK",
    body: "Free delivery on orders over £120. A £20 delivery charge applies below that, and a congestion charge fee applies on certain routes. All prices plus VAT at 20%.",
  },
  {
    title: "Combine and Save",
    body: "Book materials alongside a removal or packing service and get deals and discounts. When our team provides the packing, all materials and labour are included in one fixed price.",
  },
  {
    title: "New, Flat-Packed, Guaranteed",
    body: "Every item arrives new, flat-packed and foiled by the manufacturer. If any item proves defective, we exchange it free of charge.",
  },
];

/* ── S4: Product data ──────────────────────────────────────────────── */

const products = [
  {
    name: "Large Moving Box",
    size: "45x45x52cm / 18x18x20 in",
    price: "£5.00 each",
    use: "Bedding, duvets, pillows and other light bulky items. Large enough for a full duvet set.",
    badge: "Most popular",
    badgeClass: "bg-brand-red",
  },
  {
    name: "Small Moving Box",
    size: "45x33x33cm / 18x13x13 in",
    price: "£5.00 each",
    use: "Kitchenware, cutlery, books, files and smaller, heavier items where a smaller box keeps the weight manageable.",
    badge: null,
    badgeClass: null,
  },
  {
    name: "Wardrobe Box",
    size: "51x45x122cm / 20x18x48 in",
    price: "£14.00 each",
    use: "Hanging clothes transferred directly from the wardrobe rail. A built-in hanging bar keeps garments crease-free.",
    badge: "Hanging bar included",
    badgeClass: "bg-brand-navy",
  },
  {
    name: "Office and File Boxes",
    size: "Various, pre-labelled",
    price: "Price on request",
    use: "Commercial relocations and document moves. Pre-labelled for easy retrieval at the destination.",
    badge: null,
    badgeClass: null,
  },
  {
    name: "Double Mattress Cover",
    size: "Standard size",
    price: "£8.00 each",
    use: "Wraps a double mattress for the duration of the move. Keeps the surface clean and protected against marks and tears.",
    badge: null,
    badgeClass: null,
  },
  {
    name: "Bubble Wrap",
    size: "50cm by 10m, perforated",
    price: "£10.00 each",
    use: "Fragile items, glassware, plates, wine glasses, mirrors and picture frames. Perforated for clean tearing.",
    badge: "Perforated roll",
    badgeClass: "bg-brand-charcoal",
  },
  {
    name: "Packing Tape",
    size: "48mm by 66m per roll",
    price: "£2.00 per roll",
    use: "Sealing box lids and reinforcing box edges and bases. One roll seals around ten boxes.",
    badge: null,
    badgeClass: null,
  },
];

/* ── S5: Price table ───────────────────────────────────────────────── */

const priceColumns = ["Material", "Size", "Price (each, plus VAT)"];
const priceRows: PricingRow[] = [
  { label: "Large box", values: ["45x45x52cm / 18x18x20 in", "£5.00"] },
  { label: "Small box", values: ["45x33x33cm / 18x13x13 in", "£5.00"] },
  { label: "Wardrobe box (hanging bar included)", values: ["51x45x122cm / 20x18x48 in", "£14.00"] },
  { label: "Packing tape", values: ["48mm by 66m", "£2.00 per roll"] },
  { label: "Bubble wrap", values: ["50cm by 10m, perforated", "£10.00"] },
  { label: "Double mattress cover", values: ["Standard size", "£8.00"] },
];

/* ── S6: Room guide ────────────────────────────────────────────────── */

const roomGuide = [
  {
    room: "Kitchen",
    boxes: "10 to 20 small boxes",
    note: "Kitchenware, cutlery and pantry items fill small boxes quickly. Use bubble wrap for plates and glasses.",
  },
  {
    room: "Bedroom",
    boxes: "1 wardrobe box, 2 to 4 large boxes",
    note: "Wardrobe box for hanging clothes. Large boxes for bedding, duvets and pillows.",
  },
  {
    room: "Books and files",
    boxes: "5 to 10 small boxes per shelf",
    note: "Books are heavy. Small boxes keep weight manageable. Use office boxes for labelled documents.",
  },
  {
    room: "Living room",
    boxes: "3 to 6 large boxes",
    note: "Cushions and soft furnishings in large boxes. Bubble wrap for ornaments, frames and electronics.",
  },
  {
    room: "Bathroom",
    boxes: "2 to 4 small boxes",
    note: "Towels, toiletries and smaller items. Bubble wrap for bottles and glass items.",
  },
  {
    room: "Home office",
    boxes: "2 to 5 small or office boxes",
    note: "Files and documents in labelled office boxes. Bubble wrap for monitors and equipment.",
  },
];

/* ── S7: Material guide ────────────────────────────────────────────── */

const materialGuide = [
  {
    material: "Bubble wrap",
    use: "Glassware, plates, wine glasses, picture frames, mirrors, ceramics and electronics.",
    tip: "50cm by 10m per roll, perforated for clean tearing.",
  },
  {
    material: "Small boxes",
    use: "Books, kitchenware, cutlery, bathroom items and any heavy item where a smaller container makes lifting safer.",
    tip: null,
  },
  {
    material: "Large boxes",
    use: "Bedding, duvets, pillows, cushions, soft furnishings and light bulky items.",
    tip: null,
  },
  {
    material: "Wardrobe boxes",
    use: "Hanging clothes, suits, dresses, coats and anything that needs to stay on a hanger.",
    tip: "The built-in bar transfers directly from the wardrobe rail.",
  },
  {
    material: "Office and file boxes",
    use: "Documents, files, archive material and labelled commercial items for easy retrieval.",
    tip: null,
  },
  {
    material: "Packing tape",
    use: "Sealing every box and reinforcing edges and bases. Essential, not optional.",
    tip: "One roll seals around ten boxes.",
  },
];

/* ── S11: Tips ─────────────────────────────────────────────────────── */

const tips: Tip[] = [
  {
    title: "Order in advance",
    body: "Order your packing supplies before moving week, not the day before. The more you own, the earlier you need to start. Our professional packing service includes all materials, which saves both time and last-minute stress.",
  },
  {
    title: "Be careful with secondhand boxes",
    body: "Used boxes look fine on the outside but water damage on the inside is invisible until something breaks. A practical alternative for London moves is crate hire: robust plastic containers, available by the week, at a lower cost per unit.",
  },
  {
    title: "Use household items as padding",
    body: "Old blankets, sheets and towels work well for wrapping cutlery, books and robust items inside boxes. For breakables such as wine glasses, plates and photo frames, use bubble wrap rather than soft fabric.",
  },
];

/* ── S14: FAQs ─────────────────────────────────────────────────────── */

const faqs: FaqItem[] = [
  {
    question: "Do you use biodegradable or recyclable packing materials?",
    answer:
      "All materials are approved and recommended by the moving industry, and most are made from recyclable materials. Removals Nationwide offers free collection of packing waste after your move and recycles everything collected. Ask your coordinator about recycling at the survey stage.",
  },
  {
    question: "I am not sure what I will need. Can you help?",
    answer:
      "Yes. Tell us your property size and what you are moving, and we advise on quantities. For an exact count, book our packing service and the team brings and uses the right materials for your move. A video or on-site survey confirms everything before any materials are ordered.",
  },
  {
    question: "Is there a minimum order quantity?",
    answer:
      "No minimum order. Delivery is free on orders over £120. Below that, a £20 delivery charge applies, and a congestion charge fee applies on certain London routes. All prices are plus VAT at 20%. Contact us to confirm the right quantity for your move.",
  },
  {
    question: "How many boxes do I need for a move?",
    answer:
      "It depends on property size and what you own. As a starting guide, a one-bedroom flat needs roughly 20 to 40 boxes; a 3-bedroom house needs 60 or more. Books and kitchens mean more small boxes; bedrooms mean large and wardrobe boxes. An exact count is confirmed at a free survey.",
  },
  {
    question: "What are the delivery options and cost?",
    answer:
      "Delivery is free on orders over £120. A £20 delivery charge applies to all other orders. A congestion charge fee applies on certain London routes. Flat-packed materials are also available for UK customers outside London who are using our services. All prices are plus VAT at 20%.",
  },
  {
    question: "Do removal companies provide packing boxes?",
    answer:
      "Yes. Removals Nationwide supplies quality removal boxes and packing materials in London with transparent prices. Materials and labour are included in a full packing service booking. Ordering materials separately is available with delivery across London. A discount applies when combining materials with a removal or packing service.",
  },
  {
    question: "Do you deliver packing materials across the UK?",
    answer:
      "Yes. We deliver packing materials across the UK. Delivery is free on qualifying orders over £120, while charges for smaller orders or special routes are confirmed before checkout. All prices are plus VAT.",
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

const pricedProducts = [
  { name: "Large Moving Box", description: "Large removal box, 45x45x52cm, for bedding and light bulky items.", price: "5.00" },
  { name: "Small Moving Box", description: "Small removal box, 45x33x33cm, for kitchenware, books and smaller items.", price: "5.00" },
  { name: "Wardrobe Box with Hanging Bar", description: "Wardrobe box, 51x45x122cm, with hanging bar for crease-free transport of hanging clothes.", price: "14.00" },
  { name: "Packing Tape", description: "Packing tape, 48mm by 66m per roll. Seals around ten boxes.", price: "2.00" },
  { name: "Bubble Wrap Roll", description: "Bubble wrap, 50cm by 10m, perforated, for fragile items and glassware.", price: "10.00" },
  { name: "Double Mattress Cover", description: "Standard double mattress cover for protecting mattresses during a move.", price: "8.00" },
];

const productGraphSchema = {
  "@context": "https://schema.org",
  "@graph": pricedProducts.map((p) => ({
    "@type": "Product",
    name: p.name,
    description: p.description,
    brand: { "@type": "Brand", name: "Removals Nationwide" },
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: parseFloat(p.price),
        priceCurrency: "GBP",
        valueAddedTaxIncluded: false,
      },
      availability: "https://schema.org/InStock",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
  })),
};

/* ── Page ───────────────────────────────────────────────────────────── */

export default async function PackagingMaterialsPage() {
  const { phones } = await getResolvedSettings();
  return (
    <>
      <JsonLd data={serviceLdFor("packaging-materials")} />
      <JsonLd data={faqPageSchema} />
      <JsonLd data={orgSchema} />
      <JsonLd data={productGraphSchema} />
      <JsonLd
        data={breadcrumbLd([
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Packaging Materials" },
        ])}
      />
      <PackagingMaterialsAnimations />
      <StickyMobileBar sentinelId="hero-intro" />

      {/* ── S1: Hero ─────────────────────────────────────────────────── */}
      <PageBanner
        title="Packing Materials and Removal Boxes UK"
        subtitle="Quality removal boxes and packing materials delivered across the UK."
        h1={serviceH1["packaging-materials"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Packaging Materials" },
        ]}
      />

      {/* ── S1 continued: value prop + CTAs (office page pattern) ─────── */}
      <section id="hero-intro" className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-16">

            {/* Left: intro + CTAs */}
            <div>
              <p className="hero-anim-sub max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                Removals Nationwide supplies quality removal boxes, bubble wrap, wardrobe boxes and packing
                tape across the UK with fully transparent prices. More customers buy
                their materials from their removal company, combining delivery, labour and recycling
                into one managed service.
              </p>
              <p className="hero-anim-sub mt-4 max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                All materials are industry-approved, supplied new and flat-packed. Book alongside a
                removal or packing service for deals and discounts. Free delivery on orders over
                £120.
              </p>

              <div className="hero-anim-ctas mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
                  Order Materials
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
                Free delivery over £120. Delivered across the UK. Industry-approved materials.
              </p>

              <div className="hero-anim-trust mt-5 flex flex-wrap gap-2">
                {[
                  "industry-approved",
                  "Transparent prices",
                  "Delivered across the UK",
                  "Combine and save",
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
                  src="https://images.unsplash.com/photo-1730154838368-c37b1fdebcf6?auto=format&fit=crop&w=2400&q=82"
                  alt="Removal boxes and packing materials supplied across the UK"
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
                  {packagingServiceStandards.map(({ name }) => (
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
        heading="Order Packaging Materials and Boxes"
        buttonLabel="Quick Quote"
        buttonHref="/bookservice#quick-quote"
      />

      {/* ── S2: Why Buy From Removals Nationwide ────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="The benefits"
            title="Why Buy Your Packing Materials From Removals Nationwide"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyBuyTiles.map((tile, i) => (
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

      {/* ── S3: What We Supply (intro) ───────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-reveal>
              <SectionHeading
                align="left"
                eyebrow="Removal boxes and packing materials"
                title="Removal Boxes and Packing Materials We Supply"
              />
              <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
                <p>
                  Removals Nationwide supplies the full range of packing materials needed for a London house
                  removal or commercial relocation. All materials meet professional standards and are sourced
                  to the specification used on our own professional removals jobs.
                </p>
                <p>
                  Every item arrives new, flat-packed and foiled by the manufacturer. If any item
                  proves defective, we exchange it free of charge. Orders are delivered to your door
                  across London, with free delivery on orders over £120.
                </p>
                <p>
                  Materials are also available as part of a full{" "}
                  <Link
                    href="/packing-service"
                    className="text-brand-red underline underline-offset-2 hover:text-brand-navy"
                  >
                    professional packing service
                  </Link>
                  , where the crew brings and uses the right materials for your move. The combined
                  booking includes deals and discounts not available when ordering materials alone.
                </p>
              </div>
            </div>
            <div data-reveal data-delay="1" className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?auto=format&fit=crop&w=2400&q=82"
                  alt="Removals Nationwide crew preparing packing materials for a London house move"
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
        </div>
      </section>

      {/* ── S4: What's Available (product cards) ─────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="What's available"
            title="Removal Boxes and Packing Materials Available"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-brand-charcoal/70">
            All boxes are double-wall construction. Sizes, prices and uses are shown below. All
            prices are plus VAT at 20%.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p, i) => (
              <div
                key={p.name}
                data-reveal
                data-delay={String((i % 4) + 1)}
                className="flex flex-col rounded-2xl border border-black/8 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {p.badge && (
                  <span
                    className={`mb-3 self-start rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white ${p.badgeClass}`}
                  >
                    {p.badge}
                  </span>
                )}
                <h3 className="text-base font-bold text-brand-navy">{p.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-charcoal/50">
                  {p.size}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-charcoal/80">
                  {p.use}
                </p>
                <p className="mt-4 text-lg font-bold text-brand-red">{p.price}</p>
                <p className="text-xs text-brand-charcoal/50">plus VAT</p>
              </div>
            ))}
          </div>
          <p
            data-reveal
            className="mx-auto mt-8 max-w-2xl text-center text-xs text-brand-charcoal/55"
          >
            Office and file boxes: available on request, price confirmed at quote. Contact us for
            bulk orders or materials for commercial moves.
          </p>
        </div>
      </section>

      {/* ── S5: Price List ───────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Transparent pricing"
            title="Packing Materials Price List"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-brand-charcoal/70">
            All prices are per item, plus VAT at 20%. Office and file moving boxes are available;
            contact us for a quote.
          </p>
          <div data-reveal className="mt-8">
            <PricingTable columns={priceColumns} rows={priceRows} />
          </div>
          <div className="mt-6 rounded-xl border border-black/8 bg-brand-grey p-5 text-sm leading-relaxed text-brand-charcoal/75">
            <p>
              <strong className="text-brand-navy">Delivery:</strong> Free on orders over £120. A
              £20 delivery charge applies to all other orders. A congestion charge fee applies on
              certain London routes. All prices are plus VAT at 20%.
            </p>
            <p className="mt-2">
              For materials combined with a removal or{" "}
              <Link
                href="/packing-service"
                className="font-semibold text-brand-red underline underline-offset-2 hover:text-brand-navy"
              >
                packing service
              </Link>
              , deals and discounts apply. Ask your coordinator at survey stage.
            </p>
          </div>
        </div>
      </section>

      {/* ── S6: How Many Boxes Do I Need? ────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Decision guide"
            title="How Many Boxes Do I Need to Move?"
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            The number of boxes you need depends on property size, how many books you own, how
            full your kitchen is, and whether you pack everything or only fragile items. Use the
            room guide below as a starting point. An exact count is confirmed at a free pre-move
            survey or through our packing service.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {roomGuide.map((r, i) => (
              <div
                key={r.room}
                data-delay={String((i % 3) + 1)}
                className="rounded-xl border border-black/8 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-bold text-brand-navy">{r.room}</p>
                <p className="mt-1 text-base font-semibold text-brand-red">{r.boxes}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/75">{r.note}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-brand-charcoal/55">
            These are rough starting guides, not hard figures. Heavy book collections, full
            kitchens and large wardrobes add boxes quickly. Our team confirms the exact count at
            survey or through the packing service.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/bookservice#quick-quote" variant="red" size="md">
              Get a Confirmed Box Count
            </Button>
          </div>
        </div>
      </section>

      {/* ── S7: Which Material for Which Item ────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading
            eyebrow="Packing guide"
            title="Which Packing Material for Which Item"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {materialGuide.map((m, i) => (
              <div
                key={m.material}
                data-delay={String((i % 3) + 1)}
                className="flex flex-col rounded-xl border border-black/8 bg-brand-grey p-5 shadow-sm"
              >
                <p className="text-sm font-bold text-brand-navy">{m.material}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-charcoal/80">
                  {m.use}
                </p>
                {m.tip && (
                  <p className="mt-3 border-t border-black/8 pt-3 text-xs text-brand-charcoal/55">
                    {m.tip}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S8: Save by Combining ────────────────────────────────────── */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <span className="inline-block rounded-full bg-brand-red/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-red">
            Better together
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Save by Combining Materials With Your Move
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80">
            When you book a{" "}
            <Link
              href="/packing-service"
              className="font-semibold text-brand-red underline underline-offset-2 hover:text-white"
            >
              professional packing service
            </Link>
            , all materials and labour are included in one fixed price. You do not order boxes
            separately, chase deliveries or guess quantities. Our team arrives with the right
            materials for your specific move and uses all of them.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
            For customers who order materials separately alongside a removal booking, deals and
            discounts apply. Ask your coordinator at the survey stage.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/packing-service" variant="red" size="lg" className="w-full sm:w-auto">
              See the Packing Service
            </Button>
            <Button
              href="/bookservice#quick-quote"
              variant="outline-light"
              size="lg"
              className="w-full sm:w-auto"
            >
              Get a Combined Quote
            </Button>
          </div>
        </div>
      </section>

      {/* ── S9: Crate Hire Alternative ───────────────────────────────── */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              align="left"
              eyebrow="Greener and cheaper for short moves"
              title="Crate Hire: a Cheaper and Greener Alternative"
            />
          </div>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85" data-reveal data-delay="1">
            <p>
              For short London moves or anyone who wants to reduce single-use packaging,{" "}
              <Link
                href="/crate-hire"
                className="text-brand-red underline underline-offset-2 hover:text-brand-navy"
              >
                plastic crate hire
              </Link>{" "}
              is available as a direct alternative to cardboard boxes. Crates are stackable, sturdy
              and reusable, which lowers the cost per use compared to single-use cardboard.
            </p>
            <p>
              Crates are delivered to your address before the move and collected afterwards. No
              cardboard to break down or recycle at the destination. For London moves within a short
              timeframe, crate hire typically costs less than buying an equivalent volume of
              cardboard boxes.
            </p>
          </div>
          <div className="mt-6" data-reveal data-delay="2">
            <Button href="/crate-hire" variant="navy" size="md">
              See Crate Hire Options
            </Button>
          </div>
        </div>
      </section>

      {/* ── S10: Recycling ───────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              align="left"
              eyebrow="Packing waste"
              title="Recycling and Free Packing-Waste Collection"
            />
          </div>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85" data-reveal data-delay="1">
            <p>
              All materials supplied by Removals Nationwide are approved and recommended by the British
              Association of Removers. Most are made from recyclable materials.
            </p>
            <p>
              After your move, we offer free collection of all packing waste, including cardboard
              boxes, bubble wrap and tape. Everything collected is recycled. This is included at no
              extra charge for customers who book their materials through us.
            </p>
            <p>
              If you would prefer to use reusable crates rather than single-use cardboard,{" "}
              <Link
                href="/crate-hire"
                className="text-brand-red underline underline-offset-2 hover:text-brand-navy"
              >
                crate hire
              </Link>{" "}
              is available across London and produces no packing waste at all.
            </p>
          </div>
        </div>
      </section>

      {/* ── S11: Tips ────────────────────────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Helpful advice" title="Tips for Buying Packing Materials" />
          <div data-reveal data-delay="1">
            <TipList tips={tips} numbered className="mt-10" />
          </div>
        </div>
      </section>

      {/* ── S12: Reviews ─────────────────────────────────────────────── */}
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
            Read genuine reviews from customers who have used Removals Nationwide for packing materials
            and removal services across London.
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

      {/* ── S13: Order CTAs ──────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4 text-center" data-reveal>
          <h2 className="font-heading text-3xl font-bold text-brand-navy sm:text-4xl">
            Order Your Packing Materials
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-brand-charcoal/70">
            Order via our free quote form, by phone, or as part of a removal or packing service
            booking. No minimum order. Free delivery on orders over £120.
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
            experienced and fully insured &nbsp;&middot;&nbsp; Fully insured &nbsp;&middot;&nbsp; Registered in England No. 6874216
          </p>
          <p className="mt-2 text-xs text-brand-charcoal/40">
            Unit C1A Purfleet Industrial Park, Kerry Avenue, Purfleet, RM15 4YA
          </p>
        </div>
      </section>

      {/* ── S14: FAQs ────────────────────────────────────────────────── */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div data-reveal>
            <SectionHeading
              eyebrow="Good to know"
              title="Packaging Materials FAQs"
            />
          </div>
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

    </>
  );
}
