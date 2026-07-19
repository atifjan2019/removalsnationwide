import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";

const manAndVanSuits = [
  "Moving the contents of a bedsit or one room",
  "Collecting or delivering a single item",
  "Student accommodation moves",
  "Boxes already packed and ready to load",
  "Short hops within the same London borough",
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

export default function ManAndVanSection() {
  return (
    <section
      id="man-and-van"
      className="bg-white py-20"
      aria-labelledby="man-van-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          eyebrow="Small Moves, Single Items, Student Moves"
          title="Man and Van Services in London"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/80">
          A man and van service combines a driver, one or two movers and a Luton van, billed by
          the hour or at a fixed rate depending on the job. The format suits small moves,
          single-item collections, student accommodation moves, eBay and marketplace deliveries,
          and short-distance hops within London where a full removal crew is excessive and
          unnecessary.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-red/20 bg-brand-grey p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" data-reveal data-delay="1">
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand-navy">
              Man and van suits your move when:
            </h3>
            <ul className="mt-5 space-y-3">
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

          <div className="rounded-2xl border border-brand-navy/10 bg-brand-navy p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" data-reveal data-delay="2">
            <h3 className="text-lg font-bold uppercase tracking-wide text-white">
              Full removal crew suits your move when:
            </h3>
            <ul className="mt-5 space-y-3">
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

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-black/5 bg-brand-grey p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" data-reveal data-delay="1">
            <p className="text-2xl font-extrabold text-brand-red">Hourly</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
              Billed per hour from collection to drop-off, with a minimum booking period.
              Ideal for local hops.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-brand-grey p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" data-reveal data-delay="2">
            <p className="text-2xl font-extrabold text-brand-red">Fixed Price</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
              One agreed price for the job, regardless of how long loading takes. No time pressure.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-brand-grey p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md" data-reveal data-delay="3">
            <p className="text-2xl font-extrabold text-brand-red">Same Day</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
              Short-notice and same-day bookings accepted across all London boroughs, subject to
              availability.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm leading-relaxed text-brand-charcoal/70">
          Our man and van crews cover North London, South London, East London and West London.
          Goods-in-transit insurance is included as standard on every booking.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/man-and-van-london" variant="red" size="lg">
            Man and Van London
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
