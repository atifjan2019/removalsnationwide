import SectionHeading from "@/components/ui/SectionHeading";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-brand-sand py-20" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading eyebrow="Documented Cover and Clear Terms" title="Insurance and Service Standards" />

        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/80">
          Every booked move includes public liability and goods-in-transit insurance, subject to
          the policy terms supplied with the quotation. Written scopes and a documented claims
          process provide clear records before work begins.
        </p>

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
