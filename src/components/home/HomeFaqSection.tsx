import SectionHeading from "@/components/ui/SectionHeading";
import JsonLd from "@/components/seo/JsonLd";
import { faqLd } from "@/lib/seo";
import { HOMEPAGE_FAQS } from "@/components/home/homepage-content";

export default function HomeFaqSection() {
  return (
    <section
      id="faq"
      className="bg-brand-sand py-20"
      aria-labelledby="faq-heading"
    >
      <JsonLd data={faqLd(HOMEPAGE_FAQS)} />
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          eyebrow="Common Questions Answered"
          title="Nationwide Removals FAQs"
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-4" data-reveal>
          {HOMEPAGE_FAQS.map((item) => (
            <article key={item.question} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <h3 className="text-base font-semibold text-brand-navy">{item.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
