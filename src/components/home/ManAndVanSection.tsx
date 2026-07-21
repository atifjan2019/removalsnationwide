import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon, VanIcon, PackageIcon } from "@/components/ui/icons";
import { REMOTE_IMAGES } from "@/lib/remote-images";

const manAndVanSuits = [
  "Moving the contents of a bedsit or one room",
  "Collecting or delivering a single item",
  "Student accommodation moves",
  "Boxes already packed and ready to load",
  "Short local moves within the same town or city",
  "Same-day and short-notice collections",
];

const fullRemovalSuits = [
  "Moving a two-bedroom flat or larger property",
  "When furniture dismantling is required",
  "Properties with multiple floors or no lift",
  "Specialist items: pianos, antiques, fine art",
  "When professional packing is needed",
  "Moves requiring parking suspension or access planning",
];

const pricing = [
  {
    label: "Hourly",
    body: "Billed per hour from collection to drop-off, with a minimum booking period. Ideal for local hops.",
  },
  {
    label: "Fixed Price",
    body: "One agreed price for the job, regardless of how long loading takes. No time pressure.",
  },
  {
    label: "Same Day",
    body: "Short-notice and same-day bookings are accepted in many UK areas, subject to availability.",
  },
];

export default function ManAndVanSection() {
  return (
    <section
      id="man-and-van"
      className="bg-white py-20"
      aria-labelledby="man-van-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        {/* Intro split */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16" data-reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Small Moves, Single Items, Student Moves"
              title="Nationwide Man and Van Services"
            />
            <p className="mt-6 text-base leading-relaxed text-brand-charcoal/80">
              A man and van service combines a driver, one or two movers and a Luton van, billed by
              the hour or at a fixed rate depending on the job. The format suits small moves,
              single-item collections, student accommodation moves, eBay and marketplace deliveries,
              and short-distance local moves where a full removal crew is excessive and
              unnecessary.
            </p>
          </div>

          <div>
            <div className="relative">
              <div
                className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl bg-brand-red sm:block"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl border border-black/10 shadow-lg">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={REMOTE_IMAGES.moversLoading}
                    alt="Man and van crew loading protected furniture into a Removals Nationwide Luton van"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <span
                className="absolute -left-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-lg ring-4 ring-white"
                aria-hidden="true"
              >
                <VanIcon className="h-7 w-7" />
              </span>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          <div
            className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            data-reveal
            data-delay="1"
          >
            <span className="absolute inset-x-0 top-0 h-1.5 bg-brand-red" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red text-white">
                <VanIcon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
                Man and van suits your move when:
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {manAndVanSuits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <CheckIcon className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-brand-charcoal/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="relative overflow-hidden rounded-2xl border border-brand-navy/10 bg-brand-navy p-8 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            data-reveal
            data-delay="2"
          >
            <span className="absolute inset-x-0 top-0 h-1.5 bg-brand-red" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-red">
                <PackageIcon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                Full removal crew suits your move when:
              </h3>
            </div>
            <ul className="mt-6 space-y-3">
              {fullRemovalSuits.map((item) => (
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

        {/* Pricing formats */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {pricing.map((item, i) => (
            <div
              key={item.label}
              className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-7 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              data-reveal
              data-delay={`${i + 1}`}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-brand-red" aria-hidden="true" />
              <p className="text-2xl font-extrabold uppercase tracking-wide text-brand-navy">
                {item.label}
              </p>
              <span className="mx-auto mt-2 block h-0.5 w-8 rounded-full bg-brand-red" aria-hidden="true" />
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-brand-charcoal/70">
          Our man and van crews handle local and long-distance moves across the UK.
          Goods-in-transit insurance is included as standard on every booking.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/man-and-van-london" variant="red" size="lg">
            Nationwide Man and Van
          </Button>
          <Button href="/single-item" variant="navy" size="lg">
            Single Item Delivery
          </Button>
          <Button href="/bookservice#quick-quote" variant="outline" size="lg">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
