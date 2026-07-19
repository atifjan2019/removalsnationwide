import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbLd, faqLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import Button from "@/components/ui/Button";
import Faq, { type FaqItem } from "@/components/services/Faq";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = buildMetadata("faq");

const faqs: FaqItem[] = [
  {
    question: "1. How does an on-site survey work?",
    answer:
      "Our surveyors are very experienced and have the expertise to estimate all required resources and draw a moving plan for the customer. They assess the complexity of the relocation, whether we have to dismantle and reassemble furniture, are there any awkward or difficult to handle items, antiques, pieces of art, etc. The surveyor's job is to estimate the total volume, number and kind of cartons needed, where the vehicle can stay, and if there is access for safe loading/unloading. Also, we look for any parking or vehicle type restrictions, long or stair carry, which floor the property is located on, and whether an external lift is required. Depending on the type of relocation and complexity, they will recommend the number of movers and days needed to complete each project. Our surveyors will advise the customer and often be involved in the risk assessment for the job.",
  },
  {
    question: "2. When do I book my removal?",
    answer:
      "It is advisable to book your removal as early as possible. Bear in mind that during the busy summer season and around holidays, most moving companies are packed. So a month or two prior to your relocation is a good time to request a quote and get a general idea of what is about to happen.",
  },
  {
    question: "3. What is the cancellation period?",
    answer:
      "We only require 24h notice in order to amend or cancel your removal. We will also refund any deposit paid.",
  },
  {
    question: "4. Is insurance included?",
    answer:
      "Removals Nationwide adds in its prices a standard limited liability cover. This means our customers don't have to pay for additional insurance if they don't want to. If there are proven damages, the compensation offered is £40 per item. Removals Nationwide also offers tailor-made plans for the customers that wish to have extra protection. If you are preparing an international removal, we strongly suggest you add open cover insurance to your policy. This way your claims will go directly to the insurance company. It is especially useful if you wish to move valuables, antiques, expensive pieces of art, etc.",
  },
  {
    question: "5. Will you place our furniture at our new home?",
    answer:
      "Our removal staff will position your furniture as directed by you. Insurance will not cover employees to work in lofts or roof-spaces which do not have permanent staircases, lighting, and flooring. Any floor more than one flight up and without a lift adequate to fit all furniture must be agreed in advance, otherwise quote would not be valid. Dismantling and assembly of any household goods need to be agreed in advance, but we include that by default in the quotes we prepare.",
  },
  {
    question: "6. Upon moving in, can you plug in all my appliances?",
    answer:
      "We can connect and disconnect any appliances for you except gas ones. We do not drill walls though and cannot hook your paintings unless this is pre-arranged with us. In such cases, we will arrange a handyman to do this professionally. Removals Nationwide can also assist with arranging a gas safe engineer to connect your gas appliances.",
  },
  {
    question: "7. What access is required for your removal lorry?",
    answer:
      "Our attention should be drawn to any local height, length, and weight restrictions. Please let us know if turning off into a narrow lane is involved to gain access to either address. Parking permits have to be paid and arranged by the customer. However, we are glad to assist with that by submitting an application to the local council.",
  },
  {
    question:
      "8. What happens if a box or package is damaged due to inadequate packing done by the customer?",
    answer:
      "We hold limited liability to owner-packed goods. It is because we do not know how well the goods are packed, what materials are used for cushioning, and what the original condition of the goods before packing was. Said that, if we are liable for damaging owner-packed goods, then our liability is limited to £40 per item. We offer comprehensive insurance packages to cater for all eventualities, and for a small additional fee, the customers can benefit from fully covered moves.",
  },
  {
    question: "9. When do we deliver the packing materials?",
    answer:
      "For owner-packed jobs, we can deliver the needed materials any day in advance. Bear in mind, that packing is not easy and you have to leave yourself plenty of time to do it. Do not request the packing materials for the day before the move to find out you still have a lot of work when the movers arrive. In such cases, it will be more difficult for our crew and will cost extra to pack on the moving day.",
  },
  {
    question: "10. Do we offer same-day moving services? At what price?",
    answer:
      "Most local moves are the same day. Speak to your move coordinator for details and transparent fair pricing.",
  },
  {
    question: "11. What constitutes a long-distance move?",
    answer:
      "A long-distance move can be a removal within the UK and to and from Europe. Usually, we reach as far as Manchester and Leeds within a day. For relocations beyond these points, we would recommend splitting the tasks and add an extra day due to the travel distance. Note that there are restrictions for the chauffeurs to drive more than 9h within every 24h period as well as working-time directives limiting the maximum working day to 15h. Regular breaks must be taken, and the removal vehicles are usually slower and subject to extra regulations than compared to a car. If a customer drives ahead of the movers, it is often a case when they would arrive a few hours before the crew, and this is absolutely normal and to be expected.",
  },
  {
    question:
      "12. Do you have different terms and conditions for the different removal services you offer?",
    answer:
      "The same set of terms and conditions apply for all the jobs we do, regardless of what it is. These are recommended and approved by BAR and checked and updated regularly. It is discriminatory to offer a different set of T&Cs and against our Code of Practice.",
  },
  {
    question: "13. Is there something you can't move?",
    answer: "Yes, we will not remove any of the following things:",
    bullets: [
      "hazardous materials",
      "animals",
      "perishable goods (long distance)",
      "drugs",
      "explosives and firearms",
      "anything illegal",
      "frozen food",
      "jewellery",
      "cash",
      "plants",
      "animal fur (to some destinations)",
    ],
    answerAfter:
      "Please check with your move coordinator for the entire list, based on the destination and distance.",
  },
  {
    question: "14. Are there discounts if I book an additional moving or cleaning service?",
    answer:
      "Customers can benefit from a range of discounts. Currently, we offer a 10% discount for any cleaning booked in addition to the removals. The added benefit is that we can coordinate both the moving and cleaning crews, making it easier to work and schedule tasks. The cleaning is done by a sister company, Top Cleaners, a fully guaranteed and insured service.",
  },
];

/* FAQPage schema: strip the numeric prefix and fold bullets + answerAfter into
   one answer string. Parsing/AEO only, referencing the homepage Organization. */
const faqSchema = faqLd(
  faqs.map((f) => {
    const question = f.question.replace(/^\d+\.\s*/, "");
    const bullets = f.bullets?.length ? ` ${f.bullets.join(", ")}.` : "";
    const after = f.answerAfter ? ` ${f.answerAfter}` : "";
    return { question, answer: `${f.answer}${bullets}${after}` };
  }),
);

const faqBreadcrumb = breadcrumbLd([
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/faq" },
]);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={faqBreadcrumb} />
      <StickyMobileBar />
      <PageBanner
        title="FAQ"
        subtitle="Answers to Your Moving Questions"
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
            We believe the best way to support you is by offering a flexible removals service and
            tailoring each move to suit your needs. Questions will naturally arise and we are happy to
            answer them, and the selection below covers the basics.
          </p>

          <Faq items={faqs} defaultOpen={null} className="mt-12" />

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-brand-charcoal/70">
            For service-specific detail, see{" "}
            <Link href="/prices" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
              our prices
            </Link>
            ,{" "}
            <Link href="/house-removals" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
              house removals
            </Link>
            ,{" "}
            <Link href="/man-and-van-london" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
              man and van
            </Link>
            ,{" "}
            <Link href="/storage" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
              storage
            </Link>{" "}
            and{" "}
            <Link href="/international-removals" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
              international removals
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Still have a question */}
      <section className="bg-brand-navy py-16">
        <div className="mx-auto max-w-[88rem] px-4 text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Still Have a Question?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/70">
            Speak to a move coordinator 7 days a week. Call 020 7205 2525 or 0800 046 7877, or send
            your details for a free no-obligation quote.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/bookservice#quick-quote" variant="red" size="lg" className="w-full sm:w-auto">
              Quick Quote
            </Button>
            <Button href="/bookservice" variant="outline-light" size="lg" className="w-full sm:w-auto">
              Book a Service
            </Button>
            <Button href="tel:+442072052525" variant="outline-light" size="lg" className="w-full sm:w-auto">
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
