import Button from "@/components/ui/Button";

/** The repeated hero quote line + Quick Quote / Book a Service buttons. */
export default function QuoteCtaRow() {
  return (
    <section className="bg-white pt-10">
      <div className="mx-auto max-w-[88rem] px-4">
        <p className="text-lg font-bold uppercase tracking-wide text-brand-navy">
          Get a Free Online Quote in Under 2 Minutes!
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Button href="/bookservice#quick-quote" variant="outline" size="lg">
            Quick Quote
          </Button>
          <Button href="/bookservice" variant="red" size="lg">
            Book a Service
          </Button>
        </div>
      </div>
    </section>
  );
}
