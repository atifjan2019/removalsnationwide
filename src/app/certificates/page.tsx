import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = {
  title: "Certificates - Top Removals",
  description:
    "The accreditations and certificates Top Removals is proud of — full BAR membership, NGRS, FORS, IAM, Checkatrade, the Environmental Agency, BS EN 12522 and more. Proof of our quality and trustworthiness.",
};

type Certificate = {
  title: string;
  paras: string[];
  quote?: string;
};

const certificates: Certificate[] = [
  {
    title: "The British Association of Removers – BAR",
    paras: [
      "BAR inspects and investigates all potential Members and matches them against criteria for membership that cover premises, vehicles, staff, operational procedures and insurance arrangements. BAR also has an ongoing inspection programme during membership to maintain standards. Through this programme and the Code of Practice Scheme, BAR constantly seeks to raise standards in the industry so Customers may receive the most efficient and trouble-free move possible.",
      "Now, every deposit and/or advance payment is fully protected by BAR for your peace of mind. We know how important it is for our customers to feel secure, and this is why we went the extra mile.",
    ],
  },
  {
    title: "Checkatrade",
    paras: [
      "Checkatrade runs strict background checks on tradespeople before they can become members. Once they join, members agree to have feedback from their customers put online for all to see. They've published 4,285,055 to date.",
    ],
  },
  {
    title: "Citation",
    paras: ["Citation provides unrivalled HR and Health & Safety support and expertise."],
  },
  {
    title: "FORS – Fleet Operator Recognition Scheme",
    paras: [
      "The Fleet Operator Recognition Scheme is an accreditation scheme for fleet operators that aims to raise the quality level within fleet operations and demonstrate which operators are achieving exemplary levels of best practice in safety, efficiency, and environmental protection.",
    ],
  },
  {
    title: "Environmental Agency",
    paras: [
      "Allowing Top Removals to offer disposal services while the company endeavours to recycle all waste produced, limiting the environmental impact.",
    ],
  },
  {
    title: "IAM – International Association of Movers",
    paras: [
      "IAM is the largest independent international association for moving companies. The membership shows that the company is approved, vetted, checked both financially and operationally and that the customer can be confident in using the services when moving abroad. The company also participates in the payment protection program.",
    ],
  },
  {
    title: "Masternaut – Top Removals Is A Green Company",
    paras: [
      "We are happy to announce that Top Removals now has a Gold Certificate for reducing CO2 and CO2-equivalent emissions.",
    ],
  },
  {
    title: "National Guild of Removers and Storers",
    paras: [
      "One of the two main associations in the UK. Top Removals customers can be assured that the company is audited each year and it is offering industry-approved methods, materials and operational standards. As part of the membership, Top Removals participated in the Removals Ombudsman Scheme which offer consumer protection and dispute resolution services.",
      "We even won awards for outstanding customer service.",
    ],
  },
  {
    title: "Perfect Record Award",
    paras: [
      "One more award we are very proud of. Received on October 1st 2024. Here is the letter it came with:",
    ],
    quote:
      "A thank you to the directors and staff for their successful efforts to provide a superb removal service. We are delighted to forward you the prestigious Perfect Record Award Certificate. It is awarded by the Removals Ombudsman, presently Tony Kaye, and is only available to Removals Ombudsman Scheme participants with a perfect complaints record for the previous 12 months or more. The Award indicates to potential customers that you are to be trusted to safely transport their treasured possessions.",
  },
  {
    title: "ICO – Information Commissioner's Office",
    paras: [
      "The ICO is the UK's independent authority set up to uphold information rights in the public interest, promote public body openness, and protect individuals' data privacy.",
    ],
  },
  {
    title:
      "BS EN 12522-1 & 2 Furniture Removal Activities – Furniture Removal for Private Individuals",
    paras: [
      "After a rigorous auditing procedure, Top Removals has earned one of the most significant British Standards for Domestic Removals—BS EN 12522. It covers all aspects of the provided services, including the professionalism of the staff, competent customer service, quality packing materials, and adequate documentation.",
    ],
  },
];

export default function CertificatesPage() {
  return (
    <>
      <PageBanner
        title="Certificates"
        subtitle="Accredited & Trusted"
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
        </div>
      </section>

      <Testimonials />
      <Accreditations />
    </>
  );
}
