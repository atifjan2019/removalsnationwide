import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";
import { PhoneIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("contact");

const phones = [
  { label: "020 7205 2525", href: "tel:+442072052525" },
  { label: "0800 046 7877", href: "tel:+448000467877" },
  { label: "0845 017 0822", href: "tel:+448450170822" },
  { label: "07506 503 073", href: "tel:+447506503073" },
];

const address = "Unit C1A Purfleet Industrial Park, Kerry Avenue, Purfleet, RM15 4YA";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in Touch"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          {/* Left — form */}
          <div>
            <SectionHeading align="left" eyebrow="Get in touch" title="Send Us a Message" />
            <p className="mt-4 text-base text-brand-charcoal/80">Contact us via e-mail here</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Right — details */}
          <div>
            <div className="rounded-2xl bg-brand-navy p-8 text-white shadow-lg">
              <h2 className="text-xl font-bold uppercase tracking-wide">Contact Details</h2>

              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand-orange">
                  Address
                </h3>
                <address className="mt-2 not-italic leading-relaxed text-white/85">
                  {address}
                </address>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand-orange">
                  Phones
                </h3>
                <ul className="mt-2 space-y-2.5">
                  {phones.map((phone) => (
                    <li key={phone.href}>
                      <a
                        href={phone.href}
                        className="inline-flex items-center gap-2.5 text-white/85 transition hover:text-brand-orange"
                      >
                        <PhoneIcon className="h-4 w-4 text-brand-orange" />
                        {phone.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-sm leading-relaxed text-white/80">
                  We adhere to the British Association of Removers Alternative Dispute Resolution
                  Scheme which is independently operated by:
                </p>
                <a
                  href="https://www.fhio.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-semibold text-brand-orange transition hover:underline"
                >
                  www.fhio.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mx-auto mt-12 max-w-[88rem] px-4">
          <div className="overflow-hidden rounded-2xl border border-black/10 shadow-sm">
            <iframe
              title="Top Removals location — Purfleet Industrial Park"
              src="https://www.google.com/maps?q=Kerry+Avenue+Purfleet+RM15+4YA&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>

      <Testimonials />
      <Accreditations />
    </>
  );
}
