import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/home/CtaBand";
import QuoteCtaRow from "@/components/services/QuoteCtaRow";
import CheckList from "@/components/services/CheckList";
import TipList, { type Tip } from "@/components/services/TipList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = {
  title: "The Move In or Out Cleaning Services in London You Deserve",
  description:
    "Move in and move out cleaning across London with sister company Top Cleaners. End of tenancy, carpet, upholstery and after builders cleaning — fully insured and coordinated with your move. Free quote in under 2 minutes.",
};

const offerings = [
  "Pre and End of Tenancy Cleaning",
  "Spring and One-off Cleaning",
  "Professional Carpet Steam Cleaning",
  "Upholstery Cleaning",
  "Regular Domestic Cleaning",
  "After Builders Cleaning",
  "Office, Retail and Commercial Cleaning",
];

const faqs: FaqItem[] = [
  {
    question: "Are the cleaning crews coordinated with the movers?",
    answer:
      "Yes, that is one of the biggest benefits for the customers – to use us for every aspect of the relocation process. You will receive a single point of contact in the face of our move coordinator. They are responsible to organise the different teams and avoid any unnecessary penalty charges caused by delays or complications. Furthermore, all customers can benefit from a discounted rate should they book everything with us.",
  },
  {
    question: "How many cleaners will you send to my property?",
    answer:
      "The number of cleaners depends on how big your property is and what services you want us to perform. Top Cleaners can send as many or as little as needed. After you call your coordinator and explain what you want, they will be able to provide you with an estimate.",
  },
  {
    question: "How long will the service take?",
    answer:
      "Each cleaning service has its specifics and depending on the state in which your property is, it can take different amounts of time to finish the job. Once we know what you want and what type of property we were dealing with, we can give you more information in regards of the cleaning methods we are about to use and the overall duration of the cleanup.",
  },
];

const tips: Tip[] = [
  {
    title: "Make sure you have enough time to clean your place",
    body: "You need to take care of both your old and new places when planning a relocation. Organise the cleaning of your future home or office before the moving date. This can be stressful with all the packing and preparations going on, so consider the benefits of hiring a company to do it for you. In addition, Top Cleaners can offer you great deals on end of tenancy cleaning for your old place.",
  },
  {
    title: "Purchase cleaning supplies in advance",
    body: "Once the hustle around the move starts most people forget to check their cleaning supplies or leave everything for the last minute. If you are moving to a small flat or a one-person office you might be able to get away with it, but still why get stressed. Buy everything in advance.",
  },
  {
    title: "Clean your carpets and upholstery before you pack them",
    body: "You need to get your carpeting steam cleaned and germ-free before you move them to your new property. The same goes for your soft furniture. Top Cleaners has extensive experience in rug and upholstery washing. If you don't know how to do it, trust our skilled cleaning technicians to do it for you.",
  },
];

export default function CleaningServicesPage() {
  return (
    <>
      <PageBanner
        title="Move In or Out Cleaning"
        subtitle="All London Covered"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Cleaning Services" },
        ]}
      />

      <QuoteCtaRow />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="Our service" title="Cleaning Services" />
            <p className="mt-8 text-base leading-relaxed text-brand-charcoal/85">
              Top Removals is teaming up with its sister company Top Cleaners to provide their
              customers with a high-quality moving and cleaning experience. Well known in the London
              community we wish to provide our customers with complex solutions to all of their
              queries. Top Cleaners is based in the British capital and offers a large variety of
              cleaning services. All the staff is thoroughly vetted and undergoes regular trainings.
              Our service is fully insured to give you the ultimate peace of mind.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/services/cleaning-services.svg"
                alt="Top Cleaners move in and move out cleaning service"
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

      {/* Top Cleaners can offer */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="What's available" title="Top Cleaners Can Offer You:" />
          <CheckList items={offerings} columns={2} className="mx-auto mt-12 max-w-5xl" />
        </div>
      </section>

      {/* Ways to combine */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            align="left"
            eyebrow="Better together"
            title="Ways to Combine Removal and Cleaning Services"
          />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              If your lease is coming to an end soon, and you are preparing to change your flat, Top
              Removals can offer you efficient and affordable man and van services. Our movers will
              come, pack your things, load them and transport them to your new London address. A great
              way to ensure you will get your deposit back is to combine the relocation with an
              extensive end of tenancy cleaning. Top Cleaners can even do more, and send its crews to
              prep your future home as well. In addition, if you have some furniture you don&apos;t
              want or broken electronics, we can provide you with excellent rubbish disposal services.
            </p>
            <p>
              After builders cleaning is very useful when you are moving into a renovated property.
              Home or office, everything must be properly scraped before you put in your furniture.
              Bear in mind that construction stains are very stubborn and in most cases, you will need
              specialised equipment. Thankfully, with thousands of cleaning jobs under their belt, the
              experts from Top Cleaners can offer you high-quality services.
            </p>
            <p>
              Certified by several organisations, combining their knowledge and trained
              professionals, Top Removals and Top Cleaners can save you time, money and a lot of
              stress. You will get excellent moving services and professional cleaning all in one.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Good to know" title="FAQ" />
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* Cleaning tips */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Helpful advice" title="Cleaning Tips for Home and Office Removals" />
          <TipList tips={tips} numbered className="mt-12" />
        </div>
      </section>

      <CtaBand
        heading="Contact Us Now and Book Your Cleaning Services Today"
        buttonLabel="Book a Service"
        buttonHref="/book-a-service"
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
