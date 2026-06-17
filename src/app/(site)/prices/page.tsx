import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/home/CtaBand";
import PricingTable, { type PricingRow } from "@/components/services/PricingTable";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = {
  title: "Check Out the Competitive Prices and Great Rates of Top Removals",
  description:
    "See Top Removals' competitive removal prices and rates — man and van hourly rates, packing materials, and London crate hire. Transparent pricing with no hidden costs. Request a free quote today.",
};

const manAndVanColumns = ["Price", "1 Man", "2 Men", "3 Men"];
const manAndVanRows: PricingRow[] = [
  { label: "Per hour (Min 2 hrs)", values: ["£55", "from £70", "from £90"] },
  { label: "Per half day (Up to 4 hrs)", values: ["£210", "from £260", "from £330"] },
  { label: "Per day (Up to 8 hrs)", values: ["£420", "from £500", "from £620"] },
];

const packingColumns = ["Item", "Price"];
const packingRows: PricingRow[] = [
  { label: "Boxes — Large (45x45x52 cm / 18x18x20″)", values: ["£5.00 each"] },
  { label: "Small (45x33x33 cm / 18x13x13″)", values: ["£5.00 each"] },
  { label: "Wardrobe box (hanging bar included) (51x45x122 cm / 20x18x48″)", values: ["£14.00 each"] },
  { label: "Tape — 48 mm / 66 mm", values: ["£2.00 per roll"] },
  { label: "Bubble Wrap — 50 cm / 10 m roll", values: ["£10.00 each"] },
  { label: "Double Mattress Cover", values: ["£8.00 each"] },
];

const crateHireColumns = ["Crate type", "Dimensions", "Unit cost per week", "General Use"];
const crateHireRows: PricingRow[] = [
  { label: "LC3 Crate 80 litre", values: ["60l x 40w x 35h", "£2.50", "Books, files, crockery"] },
  { label: "IT Crate 165 litre", values: ["65l x 46w x 59h", "£4.50", "PC's, technical equipment, servers"] },
];

const crateDeliveryColumns = [
  "No of Crates",
  "Inside Congestion Charge Zone",
  "Outside Congestion Zone Charge",
];
const crateDeliveryRows: PricingRow[] = [
  { label: "40 or More crates", values: ["£125.00", "£110.00"] },
  { label: "Less than 40 crates", values: ["£95.00", "£80.00"] },
];

const householdNeeds = [
  "where from and to a customer is moving,",
  "how is the access to and from the properties, where the vehicle(s) will be parked,",
  "do we need to suspend a parking bay; do we need to take furniture out of a window, use a lifting equipment or going up and down the stairs,",
  "would a customer require packing done by us and if so how many cartons will be needed and what type of cartons and wrapping materials are required.",
];

export default function PricesPage() {
  return (
    <>
      <PageBanner
        title="Prices"
        subtitle="Competitive Rates for Every Move"
        crumbs={[{ label: "Home", href: "/" }, { label: "Prices" }]}
      />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
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
                  className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-brand-orange"
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
              If you are planning on moving everything then we suggest sending one of our certified
              and experienced surveyors for a free no obligation quotation at your property or office
              in a convenient day and time.
            </p>
            <p>
              Alternatively, our customer support staff can only provide you with an estimated rate
              based on similar size jobs completed in the past. Smaller jobs are rated as Man and Van
              service. In the below table you can see what our charges are for this type of moves:
            </p>
          </div>

          {/* Table 1 — Man and Van rates */}
          <PricingTable columns={manAndVanColumns} rows={manAndVanRows} className="mt-10" />
        </div>
      </section>

      {/* Packing materials */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Supplies" title="Price List for Packing Materials" />
          <PricingTable columns={packingColumns} rows={packingRows} className="mt-12" />
        </div>
      </section>

      {/* Crate hire options */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Crate hire" title="London Crate Hire Options" />
          <PricingTable columns={crateHireColumns} rows={crateHireRows} className="mt-12" />
        </div>
      </section>

      {/* Crate hire per delivery / collection */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Crate hire" title="London Crate Hire Per Delivery or Collection" />
          <PricingTable columns={crateDeliveryColumns} rows={crateDeliveryRows} className="mt-12" />
          <p className="mt-6 text-sm leading-relaxed text-brand-charcoal/70">
            Deliveries for purchases over £120 are free of charge. £20 delivery charge applies to all
            other deliveries. Congestion charge fee may apply. All prices are subject to VAT at 20%
          </p>
        </div>
      </section>

      <CtaBand
        heading="Contact Us Now and Get Your Free Quote"
        actions={[
          { label: "Quick Quote", href: "/quick-quote", variant: "navy" },
          { label: "Book a Service", href: "/book-a-service", variant: "outline-light" },
        ]}
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
