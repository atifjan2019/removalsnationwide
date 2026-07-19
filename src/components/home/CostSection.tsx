import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PricingTable, { type PricingRow } from "@/components/services/PricingTable";

/*
 * CONFIRM: full-move base prices sourced from the removal calculator (last updated 2019).
 * Verify each figure is current for 2026 before publishing — or replace with updated figures
 * and remove this flag.
 *
 * CONFIRM: man-and-van rates sourced from the Prices page (last updated 2022).
 * Verify current for 2026 before publishing.
 *
 * CONFIRM: only keep "in 2026" in the H2 if the client confirms the above figures are
 * current for 2026. Drop the year from the heading if they are not confirmed.
 */

/* ── Full-move starting prices (from removal calculator) ─────────────────── */
const moveColumns = ["Property", "Volume guide", "Starting from"];
const moveRows: PricingRow[] = [
  { label: "1 bedroom", values: ["up to 400 cu ft", "£390"] },
  { label: "2 bedrooms", values: ["up to 700 cu ft", "£534"] },
  { label: "3 bedrooms", values: ["up to 1,200 cu ft", "£756"] },
  { label: "4 bedrooms", values: ["up to 1,900 cu ft", "£1,080"] },
  { label: "5 bedrooms", values: ["up to 2,200 cu ft", "£1,464"] },
  { label: "6 bedrooms", values: ["2,200+ cu ft", "£1,848"] },
];

/* ── Man-and-van rates (from Prices page) ───────────────────────────────── */
const vanColumns = ["Crew", "Per hour (min. 2 hrs)", "Half day (up to 4 hrs)", "Full day (up to 8 hrs)"];
const vanRows: PricingRow[] = [
  { label: "1 man", values: ["£55", "£210", "£420"] },
  { label: "2 men", values: ["from £70", "from £260", "from £500"] },
  { label: "3 men", values: ["from £90", "from £330", "from £620"] },
];

/* ── Cost drivers (from Prices page) ────────────────────────────────────── */
const costDrivers = [
  "Distance between the pickup and delivery postcodes",
  "Access and parking conditions at both addresses",
  "Parking bay suspension permit where required",
  "Stairs or no lift access at either property",
  "Items taken through a window or requiring a hoist",
  "Packing scope and number and type of cartons",
  "Total volume of goods above the base bracket",
  "Furniture dismantling and reassembly",
  "Insurance level and destination type",
];

export default function CostSection() {
  return (
    <section
      id="cost"
      className="bg-brand-sand py-20"
      aria-labelledby="cost-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          eyebrow="Removal Prices 2026"
          title="How Much Do Removals Cost in London in 2026?"
        />

        {/* Snippet-friendly direct answer */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
          A London house move with Removals Nationwide starts from{" "}
          <strong className="text-brand-navy">£390 for a 1-bedroom</strong> and from{" "}
          <strong className="text-brand-navy">£756 for a 3-bedroom</strong>, all prices
          excluding VAT. The final price is set by distance, access, packing and volume, and
          confirmed by the removal calculator or a free survey.
        </p>

        {/* Full-move starting prices table */}
        <div data-reveal className="mt-10">
          <p className="mb-4 text-center text-sm font-bold uppercase tracking-widest text-brand-navy">
            Full-move starting prices by property size
          </p>
          <PricingTable columns={moveColumns} rows={moveRows} className="mx-auto max-w-3xl" />
          <p className="mx-auto mt-3 max-w-3xl text-center text-xs text-brand-charcoal/55">
            Starting prices before distance, access, packing and volume adjustments. All prices
            subject to 20% VAT.
          </p>
        </div>

        {/* Man-and-van rates for smaller moves */}
        <div data-reveal className="mt-12">
          <p className="mb-4 text-center text-sm font-bold uppercase tracking-widest text-brand-navy">
            Man and van rates for smaller moves and single items
          </p>
          <PricingTable columns={vanColumns} rows={vanRows} className="mx-auto max-w-4xl" />
          <p className="mx-auto mt-3 max-w-3xl text-center text-xs text-brand-charcoal/55">
            Man and van rates are per booking. All prices subject to 20% VAT.
          </p>
        </div>

        {/* Cost drivers */}
        <div data-reveal className="mx-auto mt-12 max-w-4xl">
          <p className="mb-5 text-center text-sm font-bold uppercase tracking-widest text-brand-navy">
            What affects the final price
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {costDrivers.map((driver) => (
              <li
                key={driver}
                className="flex items-start gap-2 rounded-xl bg-white px-4 py-3 text-sm leading-relaxed text-brand-charcoal/85 shadow-sm ring-1 ring-black/5"
              >
                <span aria-hidden="true" className="mt-1 shrink-0 font-bold text-brand-red">
                  ·
                </span>
                {driver}
              </li>
            ))}
          </ul>
        </div>

        {/* Honest exact-price statement */}
        <p data-reveal className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-brand-charcoal/70">
          The figures above are starting prices. The exact cost is confirmed by the{" "}
          <Link href="/bookservice" className="text-brand-red underline underline-offset-2">
            removal calculator
          </Link>{" "}
          for an instant estimate, or by a free on-site or video survey for a written fixed price
          that includes all add-ons.
        </p>

        {/* Note on cheap quotes */}
        <div
          data-reveal
          className="mx-auto mt-8 max-w-3xl rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5"
        >
          <p className="text-sm leading-relaxed text-brand-charcoal/85">
            <strong>A note on cheap quotes:</strong> Uninsured or unlicensed operators leave you
            with no financial remedy if items are damaged. Removals Nationwide fixed-price quotes include
            full public liability and goods-in-transit insurance. industry{" "}
            <Link href="/company information" className="text-brand-red underline underline-offset-2">
              service standard
            </Link>{" "}
            means there is an independent complaints and claims process if anything goes wrong.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/bookservice" variant="red" size="lg">
            Removal Calculator
          </Button>
          <Button href="/bookservice#quick-quote" variant="navy" size="lg">
            Get a Free Survey Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
