import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import BookingForm from "@/components/booking/BookingForm";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = {
  title: "Book a Service | Top Removals London",
  description:
    "Book your house, office or international move with Top Removals. Fill in our quick booking form with your details, pick-up and delivery info and furniture list, and our team will be in touch.",
};

export default function BookAServicePage() {
  return (
    <>
      <PageBanner
        title="Book a Service"
        subtitle="Get Your Move Started"
        crumbs={[{ label: "Home", href: "/" }, { label: "Book a Service" }]}
      />

      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-8 text-base leading-relaxed text-brand-charcoal/85">
            Please fill the form below and a member of our sales team will contact you as soon as
            possible. Fields marked with <span className="font-semibold text-brand-orange">*</span>{" "}
            are required fields.
          </p>

          <BookingForm />
        </div>
      </section>

      <Testimonials />
      <Accreditations />
    </>
  );
}
