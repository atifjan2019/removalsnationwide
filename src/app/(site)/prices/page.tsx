import type { Metadata } from "next";
import { getResolvedSettings } from "@/lib/settings";
import Link from "next/link";
import { buildMetadata, breadcrumbLd, SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/home/CtaBand";
import PricingTable, { type PricingRow } from "@/components/services/PricingTable";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = buildMetadata("prices");

const manAndVanColumns = ["Price", "1 Man", "2 Men", "3 Men"];
const manAndVanRows: PricingRow[] = [
  { label: "Per hour (Min 2 hrs)", values: ["£55", "from £70", "from £90"] },
  { label: "Per half day (Up to 4 hrs)", values: ["£210", "from £260", "from £330"] },
  { label: "Per day (Up to 8 hrs)", values: ["£420", "from £500", "from £620"] },
];

const packingColumns = ["Item", "Price"];
const packingRows: PricingRow[] = [
  { label: "Large box (45x45x52 cm / 18x18x20″)", values: ["£5.00 each"] },
  { label: "Small box (45x33x33 cm / 18x13x13″)", values: ["£5.00 each"] },
  { label: "Wardrobe box (hanging bar included) (51x45x122 cm / 20x18x48″)", values: ["£14.00 each"] },
  { label: "Tape (48 mm / 66 mm)", values: ["£2.00 per roll"] },
  { label: "Bubble wrap (50 cm / 10 m roll)", values: ["£10.00 each"] },
  { label: "Double mattress cover", values: ["£8.00 each"] },
];

const crateHireColumns = ["Crate type", "Dimensions", "Unit cost per week", "General Use"];
const crateHireRows: PricingRow[] = [
  { label: "LC3 Crate 80 litre", values: ["60l x 40w x 35h", "£2.00", "Books, files, crockery"] },
  { label: "IT Crate 165 litre", values: ["65l x 46w x 59h", "£3.80", "PCs, technical equipment, servers"] },
];

const crateDeliveryColumns = [
  "No of Crates",
  "Inside Congestion Charge Zone",
  "Outside Congestion Zone Charge",
];
const crateDeliveryRows: PricingRow[] = [
  { label: "40 or More crates", values: ["£41.00", "£30.00"] },
  { label: "Less than 40 crates", values: ["£31.00", "£20.00"] },
];

const householdNeeds = [
  "where from and to a customer is moving,",
  "how is the access to and from the properties, where the vehicle(s) will be parked,",
  "do we need to suspend a parking bay; do we need to take furniture out of a window, use a lifting equipment or going up and down the stairs,",
  "would a customer require packing done by us and if so how many cartons will be needed and what type of cartons and wrapping materials are required.",
];

/* Price schema on the confirmed FIXED figures only (man and van, packing,
   materials, crate). Indicative house/office ranges and the storage from-price
   carry no price schema, per the data lock. VAT is exclusive on these figures. */
const gbp = (price: string, unitText: string) => ({
  "@type": "UnitPriceSpecification",
  price,
  priceCurrency: "GBP",
  unitText,
  valueAddedTaxIncluded: false,
});

const pricesSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${SITE_URL}/prices#pricelist`,
  name: "Removals Nationwide price list",
  provider: { "@id": `${SITE_URL}/#organization` },
  itemListElement: [
    {
      "@type": "Offer",
      name: "Man and van, one man, per hour (minimum 2 hours)",
      priceSpecification: gbp("55", "per hour"),
    },
    {
      "@type": "Offer",
      name: "Professional packing, per carton (materials and labour included)",
      priceSpecification: gbp("6", "per carton"),
    },
    {
      "@type": "Offer",
      name: "LC3 80 litre crate hire",
      priceSpecification: gbp("2.00", "per week"),
    },
    {
      "@type": "Offer",
      name: "IT 165 litre crate hire",
      priceSpecification: gbp("3.80", "per week"),
    },
    {
      "@type": "Offer",
      name: "Large or small removal box",
      priceSpecification: gbp("5.00", "each"),
    },
    {
      "@type": "Offer",
      name: "Wardrobe box with hanging bar",
      priceSpecification: gbp("14.00", "each"),
    },
  ],
};

const pricesBreadcrumb = breadcrumbLd([
  { label: "Home", href: "/" },
  { label: "Prices", href: "/prices" },
]);

export default async function PricesPage() {
  const { phones } = await getResolvedSettings();
  return (
    <>
      <JsonLd data={pricesSchema} />
      <JsonLd data={pricesBreadcrumb} />
      <StickyMobileBar />
      <PageBanner
        title="Prices"
        subtitle="Competitive Rates for Every Move"
        crumbs={[{ label: "Home", href: "/" }, { label: "Prices" }]}
      />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              Every removal is different and no two moves are the same. That is why pricing a removal
              job is a process determined by many factors.
            </p>
            <p>When planning to move the entire household we need to know:</p>
          </div>

          <ul className="mt-4 space-y-3">
            {householdNeeds.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-brand-red"
                />
                <span className="text-base leading-relaxed text-brand-charcoal/85">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              Then the volume needs to be estimated and whether we have to dismantle/reassemble any
              furniture.
            </p>
            <p>
              For the office moves, we also need to estimate the number of crates needed, whether a
              parking suspension will be needed and if any furniture has to be installed, dismantled
              and reassembled.
            </p>
            <p>
              If you are planning on moving everything then we suggest sending one of our trained
              and experienced surveyors for a free no obligation quotation at your property or office
              in a convenient day and time.
            </p>
            <p>
              Alternatively, our customer support staff provide an estimated rate based on similar
              size jobs completed in the past. Smaller jobs are rated as Man and Van service. The
              table below shows our charges for this type of move:
            </p>
          </div>

          {/* Table 1: Man and Van rates */}
          <PricingTable columns={manAndVanColumns} rows={manAndVanRows} className="mt-10" />
          <p className="mt-4 text-sm leading-relaxed text-brand-charcoal/70">
            All rates are subject to VAT at 20%, minimum 2 hours. See the full{" "}
            <Link href="/man-and-van-london" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
              man and van service
            </Link>{" "}
            for details.
          </p>
        </div>
      </section>

      {/* Packing materials */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Supplies" title="Price List for Packing Materials" />
          <PricingTable columns={packingColumns} rows={packingRows} className="mt-12" />
          <p className="mt-4 text-sm leading-relaxed text-brand-charcoal/70">
            All material prices are subject to VAT at 20%. Free delivery on orders over £120,
            otherwise a £20 delivery charge applies. Order through{" "}
            <Link href="/packaging-materials" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
              packaging materials
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Crate hire options */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Crate hire" title="Nationwide Crate Hire Options" />
          <PricingTable columns={crateHireColumns} rows={crateHireRows} className="mt-12" />
        </div>
      </section>

      {/* Crate hire per delivery / collection */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Crate hire" title="Crate Hire Per Delivery or Collection" />
          <PricingTable columns={crateDeliveryColumns} rows={crateDeliveryRows} className="mt-12" />
          <p className="mt-6 text-sm leading-relaxed text-brand-charcoal/70">
            Deliveries for purchases over £120 are free of charge. A £20 delivery charge applies to
            all other deliveries, and a congestion charge applies on certain routes. All prices are
            subject to VAT at 20%. Hire crates through our{" "}
            <Link href="/crate-hire" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
              crate hire service
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Packing, storage and full-move prices */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="More services" title="Packing, Storage and Full Moves" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-brand-grey p-6">
              <h3 className="text-base font-bold text-brand-navy">Professional packing</h3>
              <p className="mt-2 text-2xl font-extrabold text-brand-red">Cartons x £6</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">
                Materials and labour included, nothing charged separately. A 100-carton job is
                approximately £600. Subject to VAT at 20%, fixed after a free survey. A materials
                discount applies when packing is booked with your move.
              </p>
              <Link href="/packing-service" className="mt-3 inline-block text-sm font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                Packing service details
              </Link>
            </div>

            <div className="rounded-2xl border border-black/10 bg-brand-grey p-6">
              <h3 className="text-base font-bold text-brand-navy">Secure storage</h3>
              <p className="mt-2 text-2xl font-extrabold text-brand-red">From £10 / week</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">
                Charged per volume, with no minimum or maximum term. We collect, load and seal your
                goods. The exact price is confirmed by your move coordinator.
              </p>
              <Link href="/storage" className="mt-3 inline-block text-sm font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                Storage details
              </Link>
            </div>

            <div className="rounded-2xl border border-black/10 bg-brand-grey p-6">
              <h3 className="text-base font-bold text-brand-navy">House removals</h3>
              <p className="mt-2 text-2xl font-extrabold text-brand-red">Indicative</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">
                As a guide, house moves range from about £200 plus VAT for the smallest jobs up to
                £2,000 to £3,000 plus VAT for the largest. This is indicative only and confirmed at a
                free survey, not a fixed table.
              </p>
              <Link href="/house-removals" className="mt-3 inline-block text-sm font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                House removals details
              </Link>
            </div>

            <div className="rounded-2xl border border-black/10 bg-brand-grey p-6">
              <h3 className="text-base font-bold text-brand-navy">Office removals</h3>
              <p className="mt-2 text-2xl font-extrabold text-brand-red">From about £100 / desk</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">
                Office moves start from about £100 per workstation, plus VAT. The price is
                survey-based and confirmed after we assess volume, access and timing.
              </p>
              <Link href="/office-removals" className="mt-3 inline-block text-sm font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                Office removals details
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-sm leading-relaxed text-brand-charcoal/60">
            Indicative ranges are confirmed at a free survey. For an exact figure, see our{" "}
            <Link href="/faq" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
              FAQ
            </Link>{" "}
            or request a quote.
          </p>
        </div>
      </section>

      <CtaBand
        heading="Contact Us Now and Get Your Free Quote"
        actions={[
          { label: "Quick Quote", href: "/bookservice#quick-quote", variant: "navy" },
          { label: "Book a Service", href: "/bookservice", variant: "outline-light" },
          { label: phones.london.label, href: phones.london.href, variant: "outline-light" },
        ]}
      />

      <Testimonials />
    </>
  );
}
