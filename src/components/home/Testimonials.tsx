import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { StarIcon } from "@/components/ui/icons";

/**
 * Reviews panel. No on-site review text is fabricated: the real reviews live on
 * the Trustpilot profile and are linked here. When the official Trustpilot
 * TrustBox embed (template id + business unit id) is available, mount it inside
 * the marked container so the live rating and count render automatically.
 */
const themes = [
  "International and Scandinavia moves",
  "Clear communication",
  "Careful handling",
  "Named coordinators and crews",
];

export default function Testimonials() {
  return (
    <section className="bg-brand-grey py-20">
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading eyebrow="What our customers say" title="Verified Reviews on Trustpilot" />

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">
          <div
            className="flex justify-center gap-1 text-brand-orange"
            aria-label="Rated on Trustpilot"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-7 w-7" />
            ))}
          </div>

          {/* TrustBox mount point: replace with the official Trustpilot embed
              once the business unit id is available, so the live rating and
              review count display and update automatically. */}
          <div id="trustpilot-trustbox" />

          <p className="mt-5 text-base leading-relaxed text-brand-charcoal/80">
            Removals Nationwide customers leave verified reviews on Trustpilot. Movers most often praise our
            international and Scandinavia moves, clear communication, careful handling, and the named
            coordinators and crews who manage each job.
          </p>

          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {themes.map((theme) => (
              <li
                key={theme}
                className="inline-flex items-center rounded-full bg-brand-grey px-3 py-1.5 text-xs font-semibold text-brand-navy"
              >
                {theme}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="https://uk.trustpilot.com/review/removalsnationwide.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center rounded-xl bg-brand-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
            >
              Read verified reviews on Trustpilot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
