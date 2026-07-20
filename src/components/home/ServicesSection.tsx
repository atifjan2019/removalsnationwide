import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/home/ServiceCard";
import { featuredServices } from "@/lib/services";
import { ArrowRight } from "@/components/ui/icons";

export default function ServicesSection() {
  return (
    <section className="bg-white py-20" id="services">
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          eyebrow="House Removals, Man and Van, Office and More"
          title="Our Nationwide Removal Services"
        />
        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/80">
          From our London base, we provide the full range of removal services locally and arrange
          nationwide and international moves. Every service includes an insured crew and a written
          quotation following review or a free survey.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, i) => (
            <div key={service.title} data-reveal data-delay={String(i + 1)}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-red transition hover:gap-3"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
