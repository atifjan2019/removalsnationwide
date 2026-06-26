import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbLd, SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import Button from "@/components/ui/Button";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = buildMetadata("certificates");

type Certificate = {
  title: string;
  paras: string[];
  quote?: string;
};

const certificates: Certificate[] = [
  {
    title: "British Association of Removers (BAR)",
    paras: [
      "BAR inspects and investigates all potential members and matches them against criteria for membership that cover premises, vehicles, staff, operational procedures and insurance arrangements. BAR also runs an ongoing inspection programme during membership to maintain standards. Through this programme and the Code of Practice Scheme, BAR works to raise standards in the industry so customers receive an efficient, trouble-free move.",
      "Every deposit and advance payment is fully protected by the BAR Advance Payment Guarantee, for your peace of mind.",
    ],
  },
  {
    title: "National Guild of Removers and Storers (NGRS)",
    paras: [
      "One of the two main associations in the UK. Top Removals customers are assured that the company is audited each year and offers industry-approved methods, materials and operational standards.",
    ],
  },
  {
    title: "International Association of Movers (IAM)",
    paras: [
      "IAM is the largest independent international association for moving companies. Membership shows that the company is approved, vetted and checked both financially and operationally, so customers can be confident when moving abroad. The company also participates in the payment protection program.",
    ],
  },
  {
    title: "The Furniture Ombudsman",
    paras: [
      "Top Removals participates in an independent ombudsman scheme that provides consumer protection and dispute resolution. It gives customers an impartial route to resolve any dispute, so you can book with confidence.",
    ],
  },
  {
    title: "QSS-DW Approved Mover",
    paras: [
      "Top Removals holds QSS-DW Approved Mover status, an independent quality standard for removals companies covering service quality and operational standards across domestic and international moves.",
    ],
  },
  {
    title: "Checkatrade",
    paras: [
      "Checkatrade runs strict background checks on tradespeople before they can become members. Once they join, members agree to have feedback from their customers published online for all to see.",
    ],
  },
  {
    title: "Licensed Waste Carrier (Environment Agency CBDL25630)",
    paras: [
      "Top Removals is a registered waste carrier with the Environment Agency, registration CBDL25630. This lets us offer disposal services while we recycle waste where possible and limit the environmental impact. Waste electrical and electronic equipment (WEEE) is handled in line with the regulations.",
    ],
  },
  {
    title: "Insurance Included",
    paras: [
      "Public liability and goods-in-transit insurance are included in the price of every moving service. Tailored cover and open cover for international moves are available through your move coordinator.",
    ],
  },
];

const certificatesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/certificates#certificates`,
  url: `${SITE_URL}/certificates`,
  name: "Our Certificates and Accreditations",
  about: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const certificatesBreadcrumb = breadcrumbLd([
  { label: "Home", href: "/" },
  { label: "Certificates", href: "/certificates" },
]);

export default function CertificatesPage() {
  return (
    <>
      <JsonLd data={certificatesSchema} />
      <JsonLd data={certificatesBreadcrumb} />
      <StickyMobileBar />
      <PageBanner
        title="Our Certificates and Accreditations"
        subtitle="Accredited, Licensed and Insured"
        crumbs={[{ label: "Home", href: "/" }, { label: "Certificates" }]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <p className="mx-auto max-w-4xl text-center text-base leading-relaxed text-brand-charcoal/85">
            Top Removals is always striving to achieve the best quality in everything we do. In order
            to do so, we attend different trainings and we are part of different organizations. We are
            full BAR members, which is our most valuable membership. Here are some of the certificates
            we are proud of.
          </p>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {certificates.map((cert, i) => (
              <article
                key={cert.title}
                className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h2 className="text-lg font-bold leading-snug text-brand-navy">{cert.title}</h2>
                </div>

                <div className="space-y-3 text-base leading-relaxed text-brand-charcoal/85">
                  {cert.paras.map((para, p) => (
                    <p key={p}>{para}</p>
                  ))}
                </div>

                {cert.quote && (
                  <blockquote className="mt-4 rounded-r-lg border-l-4 border-brand-orange bg-brand-grey p-5 text-base italic leading-relaxed text-brand-charcoal/85">
                    “{cert.quote}”
                  </blockquote>
                )}
              </article>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-brand-charcoal/70">
            Learn more{" "}
            <Link href="/about-us" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange">
              about Top Removals
            </Link>
            , explore our{" "}
            <Link href="/house-removals" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange">
              house
            </Link>
            ,{" "}
            <Link href="/office-removals" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange">
              office
            </Link>{" "}
            and{" "}
            <Link href="/international-removals" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange">
              international
            </Link>{" "}
            removals, or{" "}
            <Link href="/contactus" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-orange">
              get in touch
            </Link>
            .
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/bookservice#quick-quote" variant="orange" size="lg" className="w-full sm:w-auto">
              Quick Quote
            </Button>
            <Button href="/bookservice" variant="navy" size="lg" className="w-full sm:w-auto">
              Book a Service
            </Button>
            <Button href="tel:+442072052525" variant="outline" size="lg" className="w-full sm:w-auto">
              020 7205 2525
            </Button>
          </div>
        </div>
      </section>

      <Testimonials />
      <Accreditations />
    </>
  );
}
