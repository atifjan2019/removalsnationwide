import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export default function RightChoice() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          align="left"
          eyebrow="Why Removals Nationwide"
          title="Removals Nationwide - The Right Choice For You"
        />

        <p className="mt-8 text-lg font-medium text-brand-navy">
          Packing, transporting, loading and unloading all will be done with care and
          consideration.
        </p>

        <div className="mt-5 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
          <p>
            We know what you are looking for when you search for a moving company. Removals Nationwide
            can handle everything from start to finish, so you don&apos;t have to waste your time.
          </p>
          <p>
            Our movers follow all safety procedures laid out by the WHO in regards to the resent
            COVID-19 crisis.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-brand-navy">Our Clients Come First</h3>
            <p className="mt-3 text-base leading-relaxed text-brand-charcoal/85">
              We put customer satisfaction first. That is precisely why Removals Nationwide offers such a
              variety of moving deals, tailored to our clients&apos; budget and individual
              requirements. With an easy booking process, free on-site surveys and full insurance
              coverage, it comes to no surprise, we are amongst the best moving companies in London
              and the UK. For close to a decade, we have not only succeeded in building an immaculate
              reputation but also possess the necessary tools to back it up.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-brand-navy">On Top of Our Game</h3>
            <p className="mt-3 text-base leading-relaxed text-brand-charcoal/85">
              We constantly try to better our company policies and the way of delivering the
              services. Our movers attend regular operational and customer-service training, and the
              company is a registered Environment Agency waste carrier. We maintain clear written
              quotations, documented working procedures and appropriate insurance for each booking.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Button href="/about-us" variant="red" size="lg">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}
