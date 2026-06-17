import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Testimonials from "@/components/home/Testimonials";
import NewsSection from "@/components/home/NewsSection";
import Accreditations from "@/components/home/Accreditations";
import { CheckIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Top Removals London - Your Trusted Moving Partner | About Us",
  description:
    "Learn about Top Removals London — a fully accredited, BAR and NGRS member moving company founded over a decade ago. Insured, professional removals and storage for any size move.",
};

const highlights = ["7 Days A Week", "Full Nationwide Coverage", "Affordable Rates"];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Main about section */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-start gap-12 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who we are"
              title="A Fully Accredited Moving Company"
            />

            <p className="mt-8 text-lg font-medium leading-relaxed text-brand-navy">
              Top Removals is a fully accredited moving company. We provide our customers with
              completely insured moving services that cater for any size removal.
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Top Removals was created a decade ago by two friends – Emil Perushanov and Dimitar
                Dimitrov. From the start, the goal was to become one of the best and most trusted
                moving companies in London. Their hard work has paid off, and the business began to
                grow. Top Removals was featured on one of the biggest removals magazines The Mover
                and won numerous awards and certificates.
              </p>
              <p>
                Nowadays the company is a proud member of BAR (British Association of Removers) and
                the NGRS (the National Guild of Removers and Storers). Top Removals closely follows
                their policies in regards to the customer service, insurance, safety and quality
                control.
              </p>
              <p>
                We try to better ourselves and the services we provide with each year. There is no
                job too small or too little for us. Every customer is treated with the same level of
                professionalism and respect.
              </p>
            </div>

            {/* Highlight badges */}
            <ul className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-grey px-4 py-2 text-sm font-semibold text-brand-navy"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-white">
                    <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image column */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl lg:aspect-[400/466]">
              <Image
                src="/about/package.webp"
                alt="A Top Removals mover carefully packing and wrapping items"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <span
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 -z-10 hidden h-40 w-40 rounded-2xl bg-brand-orange/15 lg:block"
            />
            <span
              aria-hidden="true"
              className="absolute -right-5 -top-5 -z-10 hidden h-32 w-32 rounded-2xl bg-brand-navy/10 lg:block"
            />
          </div>
        </div>
      </section>

      {/* How do we do it */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading align="left" eyebrow="Our process" title="How Do We Do It?" />

              <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
                <p>
                  We have strict internal rules when it comes to communication with customers and the
                  overall delivery of our services. If there is a problem, we do our best to resolve
                  it fast and efficient. All of the moving services come with insurance that is
                  included in the price. Minimal customer effort, for maximum good results – this is
                  one of our basic principles.
                </p>
                <p>
                  All of our employees are vetted and have undergone a background check. We are
                  extremely serious when it comes to the safety and comfort of our customers. So Top
                  Removals don&apos;t hire employees at random.
                </p>
                <p>
                  With a solid network of international partners and storage facilities, Top Removals
                  is a trusted service provider. Our modern fleet, reasonable prices and additional
                  services like packing, crate hire, single item delivery, house cleaning, etc. allow
                  us to execute the relocation from start to finish.
                </p>
                <p>
                  We love to hear back from our customers and give them additional assistance if
                  needed. You can find us at Trustpilot and write us a review. Transparency and
                  problem-solving are essential to maintain a high level of customer satisfaction.
                </p>
              </div>
            </div>

            {/* Image column */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/about/Top-Removals-Team.webp"
                  alt="The Top Removals team in front of the company fleet"
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

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-brand-orange/20 bg-white p-8 text-center shadow-sm">
            <p className="text-lg font-semibold text-brand-navy sm:text-xl">
              Contact us now for a friendly, professional advice and a no-obligation quote.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/book-a-service" variant="orange" size="lg">
                Book a Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <NewsSection />
      <Accreditations />
    </>
  );
}
