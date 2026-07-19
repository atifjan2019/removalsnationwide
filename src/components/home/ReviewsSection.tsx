import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { StarIcon } from "@/components/ui/icons";

function Stars() {
  return (
    <div className="flex gap-0.5 text-brand-red" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-5 w-5" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-brand-sand py-20" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading eyebrow="Trustpilot, Google Reviews, Insurance" title="Reviews and Insurance" />

        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/80">
          Removals Nationwide customers have left verified reviews across Google and Trustpilot. Public
          liability and goods-in-transit insurance apply to every booked move.
        </p>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5" data-reveal>
          <div className="flex items-center justify-center gap-2">
            <Stars />
            <span className="text-base font-bold text-brand-navy">Excellent</span>
          </div>
          <Link
            href="https://uk.trustpilot.com/review/removalsnationwide.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-brand-red underline underline-offset-2"
          >
            View all reviews on Trustpilot
          </Link>
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2" data-reveal>
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand-navy">Public liability insurance</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
              Covers qualifying property damage caused by the moving crew during the booked service.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand-navy">Goods-in-transit insurance</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
              Covers qualifying loss or damage to belongings between loading and delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
