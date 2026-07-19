import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/icons";

const services = [
  "Export-standard packing for long-distance transit",
  "European removals by road",
  "Overseas moves by sea freight or air freight",
  "Full-container and groupage options",
  "Customs documentation and clearance",
  "Transit insurance from collection to delivery",
  "Destination delivery and unpacking",
];

export default function InternationalSection() {
  return (
    <section
      id="international-removals"
      className="bg-brand-navy py-20 text-white"
      aria-labelledby="international-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center" data-reveal>
          <div>
            <SectionHeading
              align="left"
              tone="light"
              eyebrow="Europe and Worldwide"
              title="International and European Removals from London"
            />

            {/* Route signature — surfaces the confirmed weekly Scandinavia run */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white">
              <span className="h-2 w-2 rounded-full bg-brand-red" aria-hidden="true" />
              London to Oslo &nbsp;&mdash;&nbsp; regular road freight, weekly
            </div>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-white/80">
              <p>
                International removals from London require export-standard packing, specialist
                shipping logistics, customs documentation and destination delivery. Our
                international removal service covers moves across Europe and to destinations
                worldwide.
              </p>
              <p>
                European removals by road are co-ordinated by our operations team, with clear
                timelines and regular updates throughout transit. Road routes to Scandinavia run
                weekly. Overseas moves by sea freight use full-container and groupage options
                depending on volume.
              </p>
              <p>
                Customs clearance documentation is prepared by our logistics team. Transit
                insurance covers your belongings from collection to delivery at the destination.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/international-removals" variant="red" size="md">
                International Removals
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-lg font-bold uppercase tracking-wide text-white">
              International service includes
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                    <CheckIcon className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-white/85">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
