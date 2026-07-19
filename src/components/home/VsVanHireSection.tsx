import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";

const vanHireSuits = [
  "Moving one or two items between nearby addresses",
  "Strong, available helpers at both ends",
  "No fragile or high-value items",
  "Simple access, easy parking",
  "Short hop where the drive is straightforward",
];

const professionalSuits = [
  "Moving the contents of a full flat or house",
  "Stairs, no lift or restricted vehicle access",
  "Fragile items, antiques, pianos or disassembled furniture",
  "When time is limited and damage risk is unacceptable",
  "International or long-distance relocations",
];

export default function VsVanHireSection() {
  return (
    <section
      id="vs-van-hire"
      className="bg-white py-20"
      aria-labelledby="vs-van-hire-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          eyebrow="Is it Worth Hiring a Removal Company?"
          title="Professional Removal Company or Van Hire? What to Choose"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/80">
          Hiring a removal van yourself costs less upfront. Loading, driving, unloading and
          carrying the damage risk falls entirely on you. Here is an honest comparison.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-brand-grey p-8" data-reveal data-delay="1">
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
              Van hire suits you when:
            </h3>
            <ul className="mt-5 space-y-3">
              {vanHireSuits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red/20 text-brand-red">
                    <CheckIcon className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-brand-charcoal/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-red/20 bg-brand-navy p-8 text-white" data-reveal data-delay="2">
            <h3 className="text-lg font-bold uppercase tracking-wide text-white">
              Professional movers suit you when:
            </h3>
            <ul className="mt-5 space-y-3">
              {professionalSuits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <CheckIcon className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-brand-grey p-7">
            <h3 className="text-base font-bold uppercase tracking-wide text-brand-navy">
              The insurance difference matters
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
              Most van hire agreements exclude goods-in-transit insurance. Any damage to your
              belongings during loading, transit or unloading is your liability. A professional
              removal company includes public liability insurance and goods-in-transit cover in
              the quoted price. When damage occurs, there is a clear claims process with a
              financial remedy.
            </p>
          </div>
          <div className="rounded-xl bg-brand-grey p-7">
            <h3 className="text-base font-bold uppercase tracking-wide text-brand-navy">
              The time cost is real
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
              A full house move that takes a professional crew four to six hours often takes an
              unassisted DIY move twelve or more. Factor in the physical effort, the risk of
              injury from heavy lifting and the cost of any damage before choosing on price alone.
              For small single-item moves,{" "}
              <Link
                href="#man-and-van"
                className="text-brand-red underline underline-offset-2"
              >
                our man and van service
              </Link>{" "}
              is the lowest-cost professional option, with full insurance included.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/bookservice#quick-quote" variant="red" size="lg">
            Get a Quote
          </Button>
          <Button href="#man-and-van" variant="navy" size="lg">
            See Man and Van Prices
          </Button>
        </div>
      </div>
    </section>
  );
}
