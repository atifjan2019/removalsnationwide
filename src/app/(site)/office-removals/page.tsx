import type { Metadata } from "next";
import { buildMetadata, serviceH1, serviceLdFor } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/home/CtaBand";
import CheckList from "@/components/services/CheckList";
import StepList from "@/components/services/StepList";
import TipList, { type Tip } from "@/components/services/TipList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = buildMetadata("office-removals");

const whatCanWeOffer = [
  "We can easily relocate anything from one-man size office to an over 500 people office anywhere in the UK or around the Globe",
  "Top Removals is a fully licensed British waste carrier and offer all type of disposal and recycling services",
  "Adequate packing and protection of all IT goods during the entire commercial moving process",
  "We can offer full insurance as well as increased limits and policy tailor-made to suit every business' requirements",
  "Moving coordinators are assigned to each job to monitor the procedures and ensure everything goes smooth and uneventful",
  "Top Removals can offer affordable crate hire and all sorts of professional packing materials suitable for the IT and documentation move",
];

const steps = [
  "Contact us and ask for a quote.",
  "Together with you, we will schedule an on-site survey. For smaller businesses, the online option is equally suitable.",
  "We will calculate everything and present you with a final free quote based on your requirements and additional services you might want. Then we will set a moving date.",
  "On the scheduled day our movers will arrive and will work closely with your IT specialist to ensure the safe packing and transporting of your IT goods.",
  "Once at the new place, the crews will unload and unpack everything.",
  "We will collect the packing waste materials and dispose of them following all regulations.",
];

const whyChoosePoints = [
  "We offer full on-site viewings for the bigger commercial moves. The surveyors check the IT, all connections and whether the work stations need to be dismantled. They examine the destination layout and draw a moving plan on how to safely carry out the items. You will be provided with an estimate of the number and type of crates needed for the files, contents and IT.",
  "Your data will be safe in our capable hands. Regardless if we are talking about paper archives or delicate servers. For your peace of mind, Top Removals can offer you flexible insurance plans in addition to the standard liability policy.",
  "We are certified by the UK Environmental Agency and can offer a variety of waste removal options. The IT equipment and electrical devices will be recycled following all WEEE standards.",
  "Top Removals gives great service flexibility to its commercial customers. From crate hire and waste disposal to international transport and storage, we can offer it all. Our company is certified by BAR, the NGRS, the IAM and more. Check our certificates and awards page for further information.",
];

const faqs: FaqItem[] = [
  {
    question: "Is your commercial insurance plan limited to any specific amount?",
    answer:
      "No, tailor-made insurance packages can be designed for any move, regardless of the size of it. Speak with your coordinator for more information on the different options, and additional services Top Removals can offer you.",
  },
  {
    question: "How much does an office relocation cost?",
    answer:
      "No two removal jobs are the same, that is why we often require assessment and take all factors into consideration when moving an office. A full-scale office move with furniture and files can cost an average of about £100 per working station or head. But this is a very generic number. We will be able to provide you with an estimate after the initial survey.",
  },
  {
    question: "What kind of businesses are you able to relocate?",
    answer:
      "If it can be lifted, dismantled and/or carried through the entry points, then it can be moved. This is Top Removals moto when it comes to commercial relocations. We are very careful when handling safes, servers and big copy machines. With the years of experience comes the knowledge of how to deal with all sorts of devices and equipment.",
  },
];

const tips: Tip[] = [
  {
    title: "Wrap Your IT equipment carefully",
    body: "One of the most important things when organising an office relocation is to ensure the safety of data. So you need to invest in properly preparing your IT department for the move. All devices should be disconnected, and the cables must be bundled together. If you are packing them yourself, the IT equipment should be wrapped with anti-static bubble wrap and placed into an IT crate.",
  },
  {
    title: "Invest time in planning your budget",
    body: "Once you set your goals, spend some time planning how to finance them. Office removals often include additional expenses for cleaning, storage and packing materials. You need to find the best way to optimise your budget without breaking the bank. Discuss this with your moving coordinator. Top Removals can offer you a lot of different services and deals.",
  },
  {
    title: "Make sure everybody is on board with the relocation",
    body: "Before the arrival of the moving crew, you have to address all aspects of the move with your employees and especially with your managers. The two crucial figures for the execution of every commercial relocation are the HR manager and the head of IT. The first will help you divide the tasks and organise everybody. As for the IT experts, on their shoulders lay the hard task of getting your business back online, once the relocation is over. They will also have to closely work with the movers to ensure that the more delicate equipment is handled adequately.",
  },
  {
    title: "Consider hiring a storage unit",
    body: "If you are moving long-distance or on a very short notice, think about renting a storage unit. On one hand, your office inventory will be safely secured and under constant supervision. On the other, you will be able to relocate everything one step at a time. It will be more expensive to keep renting your former office space while preparing your new one than to hire a warehouse unit for a week or two. Top Removals can help you with that as well. We can offer you a 24/7 CCTV monitored storage facility in London, fitting your business' requirements.",
  },
];

export default function OfficeRemovalsPage() {
  return (
    <>
      <JsonLd data={serviceLdFor("office-removals")} />
      <PageBanner
        title="We Do Office Relocation and Crate Hire"
        subtitle="Get a Free Online Quote in Under 2 Minutes!"
        h1={serviceH1["office-removals"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Office Removals" },
        ]}
      />

      {/* Hero CTAs */}
      <section className="bg-white pt-10">
        <div className="mx-auto flex max-w-[88rem] flex-wrap gap-4 px-4">
          <Button href="/bookservice#quick-quote" variant="outline" size="lg">
            Quick Quote
          </Button>
          <Button href="/bookservice" variant="orange" size="lg">
            Book a Service
          </Button>
        </div>
      </section>

      {/* What are office removals */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Office Removals"
              title="What Are Office Removals?"
            />
            <p className="mt-8 text-base leading-relaxed text-brand-charcoal/85">
              It is a specialised service offered to businesses when they need to move their offices
              to a new location. They are different from house removals in terms of organisation,
              time, budget, packing methods and supplies. If your inventory can be dismantled or fit
              in moving crates, there are no restrictions to the size or type of organisations Top
              Removals can relocate.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/services/office-removals.svg"
                alt="Top Removals crew handling an office relocation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 -z-10 hidden h-36 w-36 rounded-2xl bg-brand-orange/15 lg:block"
            />
          </div>
        </div>
      </section>

      {/* What can we offer */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Our commercial service" title="What Can We Offer?" />
          <CheckList items={whatCanWeOffer} columns={2} className="mx-auto mt-12 max-w-5xl" />
        </div>
      </section>

      {/* How to do it */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading align="left" eyebrow="Step by step" title="How to Do It?" />
          <StepList steps={steps} className="mt-10" />
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            align="left"
            eyebrow="The right partner"
            title="Why Choose Top Removals for Your Business Relocation?"
          />
          <p className="mt-6 text-base leading-relaxed text-brand-charcoal/85">
            We are a reliable partner you can trust with your office removals. With thousands of
            commercial moves in London and the UK and numerous satisfied customers behind our back,
            Top Removals has the capacity and know-how to execute complicated relocations while
            saving you time, stress and money.
          </p>
          <ul className="mt-8 space-y-5">
            {whyChoosePoints.map((point, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border-l-4 border-brand-orange bg-white p-6 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed text-brand-charcoal/85">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Good to know" title="FAQ" />
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* Office removal tips — rendered only once the exact copy is supplied */}
      {tips.length > 0 && (
        <section className="bg-brand-grey py-20">
          <div className="mx-auto max-w-[88rem] px-4">
            <SectionHeading eyebrow="Helpful advice" title="Office Removal Tips" />
            <TipList tips={tips} numbered className="mt-12" />
          </div>
        </section>
      )}

      <CtaBand
        heading="Contact Us Now and Book Your Office Removal Today"
        actions={[
          { label: "Book a Service", href: "/bookservice", variant: "navy" },
          { label: "Quick Quote", href: "/quick-quote", variant: "outline-light" },
        ]}
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
