import type { Metadata } from "next";
import { getResolvedSettings } from "@/lib/settings";
import { buildMetadata, breadcrumbLd, SITE_URL } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import StickyMobileBar from "@/components/services/StickyMobileBar";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Testimonials from "@/components/home/Testimonials";
import NewsSection from "@/components/home/NewsSection";
import { CheckIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata("about");

const highlights = ["7 Days A Week", "Full Nationwide Coverage", "Affordable Rates"];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about-us#aboutpage`,
  url: `${SITE_URL}/about-us`,
  name: "About Removals Nationwide",
  description:
    "The story, founders, service highlights and people behind Removals Nationwide, an established, experienced and fully insured UK moving company.",
  mainEntity: { "@id": `${SITE_URL}/#organization` },
  about: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const aboutBreadcrumb = breadcrumbLd([
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
]);

export default async function AboutPage() {
  const { phones } = await getResolvedSettings();
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={aboutBreadcrumb} />
      <StickyMobileBar />
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
              title="A Fully Experienced Moving Company"
            />

            <p className="mt-8 text-lg font-medium leading-relaxed text-brand-navy">
              Removals Nationwide is a fully experienced moving company. We provide our customers with
              completely insured moving services that cater for any size removal.
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
              <p>
                Removals Nationwide was created a decade ago by two friends, Emil Perushanov and Dimitar
                Dimitrov. From the start, the goal was to become one of the best and most trusted
                moving companies in the UK. Their hard work has paid off, and the business has grown
                steadily since. Removals Nationwide was featured in The Mover, one of the leading removals
                trade magazines.
              </p>
              <p>
                Today the company follows documented procedures for customer service, insurance,
                safety and quality control. Crews receive regular operational and customer-service
                training for residential and commercial moves.
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
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-white">
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
                src="https://images.unsplash.com/photo-1710749093416-1e9cdde8d080?auto=format&fit=crop&w=2400&q=82"
                alt="A Removals Nationwide mover carefully packing and wrapping items"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Decorative accent */}
            <span
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 -z-10 hidden h-40 w-40 rounded-2xl bg-brand-red/15 lg:block"
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
                  it fast and efficiently. All of the moving services come with insurance that is
                  included in the price. Minimal customer effort for maximum results, this is one of
                  our basic principles.
                </p>
                <p>
                  All of our employees are vetted and have undergone a background check. We are
                  serious about the safety and comfort of our customers, so Removals Nationwide does not hire
                  employees at random.
                </p>
                <p>
                  With a solid network of international partners and storage facilities, Removals Nationwide
                  is a trusted service provider. Our{" "}
                  <Link href="/our-fleet" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                    modern fleet
                  </Link>
                  , reasonable prices and additional services like{" "}
                  <Link href="/packing-service" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                    packing
                  </Link>
                  ,{" "}
                  <Link href="/crate-hire" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                    crate hire
                  </Link>
                  ,{" "}
                  <Link href="/single-item" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                    single item delivery
                  </Link>{" "}
                  and{" "}
                  <Link href="/storage" className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-red">
                    secure storage
                  </Link>{" "}
                  let us handle a relocation from start to finish.
                </p>
                <p>
                  We love to hear back from our customers and give them additional assistance if
                  needed. Customer feedback is reviewed directly by our team. Transparency and
                  problem-solving remain central to the service process.
                </p>
              </div>
            </div>

            {/* Image column */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1698917414969-feade59e3343?auto=format&fit=crop&w=2400&q=82"
                  alt="The Removals Nationwide team in front of the company fleet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute -bottom-5 -right-5 -z-10 hidden h-36 w-36 rounded-2xl bg-brand-red/15 lg:block"
              />
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-brand-red/20 bg-white p-8 text-center shadow-sm">
            <p className="text-lg font-semibold text-brand-navy sm:text-xl">
              Talk to us for friendly, professional advice and a no-obligation quote.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/bookservice#quick-quote" variant="red" size="lg" className="w-full sm:w-auto">
                Quick Quote
              </Button>
              <Button href="/bookservice" variant="navy" size="lg" className="w-full sm:w-auto">
                Book a Service
              </Button>
              <Button href={phones.london.href} variant="outline" size="lg" className="w-full sm:w-auto">
                {phones.london.label}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <NewsSection />
    </>
  );
}
