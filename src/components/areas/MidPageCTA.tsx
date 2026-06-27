import { PhoneIcon } from "@/components/ui/icons";

/**
 * Mid-page conversion band. One of the three bold moments.
 *
 * The band uses the site navy (bg-brand-navy, the hero navy) so the orange
 * button pops. The primary button uses a deep orange (#c2410c) with white text:
 * the standard brand orange (#e8541e) reaches only 3.67:1 with white, below the
 * WCAG AA 4.5:1 threshold, while #c2410c clears it. Hover #9a3412, visible focus
 * outline for keyboard users.
 */
export default function MidPageCTA({ borough }: { borough: string }) {
  return (
    <section
      aria-label={`Get a free removals quote in ${borough}`}
      className="w-full bg-brand-navy px-5 py-14 text-center"
    >
      <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white sm:text-3xl">
        Moving in {borough}? Get your free quote.
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-base text-white/90">
        Accredited, insured, 7 days a week. Same-day moves subject to availability.
      </p>
      <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a
          href="/bookservice#quick-quote"
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#c2410c] px-8 font-semibold text-white transition-colors hover:bg-[#9a3412] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
        >
          Get a Free Quote
        </a>
        <a
          href="tel:+442072052525"
          className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-white/70 px-8 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
        >
          <PhoneIcon className="h-4 w-4" />
          Call 020 7205 2525
        </a>
      </div>
    </section>
  );
}
