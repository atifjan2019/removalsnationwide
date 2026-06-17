import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/home/ServiceCard";
import CtaBand from "@/components/home/CtaBand";
import Testimonials from "@/components/home/Testimonials";
import NewsSection from "@/components/home/NewsSection";
import Accreditations from "@/components/home/Accreditations";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title:
    "Our Services - House, Office & International Removals | Top Removals London",
  description:
    "Explore the full range of Top Removals services: house, office and international removals, man and van, packing, storage, crate hire, rubbish disposal, single-item deliveries and cleaning across London and the UK.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* Intro */}
      <section className="bg-white pt-20 pb-4">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <SectionHeading
            eyebrow="What We Offer"
            title="Full-Service Moving & Storage Solutions"
          />
          <p className="mt-6 text-base leading-relaxed text-brand-charcoal/85">
            From single-item deliveries to full international relocations, Top Removals offers a
            complete range of moving, packing and storage services across London, the UK and
            worldwide. Whatever you need to move, we handle it from start to finish.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white pb-20 pt-10">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Not Sure Which Service You Need?"
        subtext="Get in touch for friendly, professional advice and a no-obligation quote."
        actions={[
          { label: "Get a Quote", href: "/quick-quote", variant: "navy" },
          { label: "Contact Us", href: "/contact", variant: "outline-light" },
        ]}
      />

      <Testimonials />
      <NewsSection />
      <Accreditations />
    </>
  );
}
