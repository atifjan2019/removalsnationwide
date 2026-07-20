import type { Metadata } from "next";
import { getResolvedSettings } from "@/lib/settings";
import { SITE, SITE_URL } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

import HomepageHero from "@/components/home/HomepageHero";
import HeroTrustBar from "@/components/home/HeroTrustBar";
import QuoteSection from "@/components/home/QuoteSection";
import ServicesSection from "@/components/home/ServicesSection";
import HouseRemovalsSection from "@/components/home/HouseRemovalsSection";
import ManAndVanSection from "@/components/home/ManAndVanSection";
import OfficeRemovalsSection from "@/components/home/OfficeRemovalsSection";
import StorageSection from "@/components/home/StorageSection";
import PackingSection from "@/components/home/PackingSection";
import InternationalSection from "@/components/home/InternationalSection";
import CostSection from "@/components/home/CostSection";
import VsVanHireSection from "@/components/home/VsVanHireSection";
import SpecialistSection from "@/components/home/SpecialistSection";
import AccessSection from "@/components/home/AccessSection";
import AreasSiloSection from "@/components/home/AreasSiloSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import StatsCounter from "@/components/home/StatsCounter";
import ReviewsSection from "@/components/home/ReviewsSection";
import ProcessSection from "@/components/home/ProcessSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";
import NewsSection from "@/components/home/NewsSection";
import ClientAnimations from "@/components/home/ClientAnimations";
import StickyQuoteBar from "@/components/home/StickyQuoteBar";
import BackToTop from "@/components/home/BackToTop";

export const metadata: Metadata = {
  title: "London Removals Company | Nationwide & International Reach",
  description:
    "London removals company providing house, office, man and van, packing and storage services, with nationwide and international moves arranged from London.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "London Removals Company | Nationwide & International Reach",
    description:
      "London-based removals, packing and storage with nationwide and international reach.",
    url: "/",
    siteName: SITE.name,
    type: "website",
  },
};

export default async function HomePage() {
  // Phone numbers are editable from /admin/settings. Both consumers below are
  // client components, so the values are resolved here and passed down.
  const { phones } = await getResolvedSettings();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_URL}/#homepage`,
          url: `${SITE_URL}/`,
          name: "London Removals Company with Nationwide and International Reach",
          description:
            "London-based removals, packing and storage with nationwide and international reach.",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      {/* 1. Hero */}
      <HomepageHero />
      <HeroTrustBar />

      {/* 2. Get a removal quote */}
      <QuoteSection />

      {/* 3. London Removal Services Overview */}
      <ServicesSection />

      {/* 4. House Removals London */}
      <HouseRemovalsSection />

      {/* 5. Man and van London */}
      <ManAndVanSection />

      {/* 6. Office and commercial removals */}
      <OfficeRemovalsSection />

      {/* 7. Removals and storage */}
      <StorageSection />

      {/* 8. Packing services */}
      <PackingSection />

      {/* 9. International removals */}
      <InternationalSection />

      {/* 10. Removal costs */}
      <CostSection />

      {/* 11. Professional removals compared with van hire */}
      <VsVanHireSection />

      {/* 12. Specialist and fragile items */}
      <SpecialistSection />

      {/* 13. Moving in London: access planning */}
      <AccessSection />

      {/* 14. London areas */}
      <AreasSiloSection />

      {/* 15. Service standards */}
      <WhyChooseSection />

      {/* Company facts */}
      <StatsCounter />

      {/* 16. Reviews, Insurance and Service Highlights */}
      <ReviewsSection />

      {/* 17. Our Removals Process */}
      <ProcessSection />

      {/* 18. London Removals FAQs */}
      <HomeFaqSection />

      {/* 19. Final Quote CTA */}
      <FinalCtaSection phones={phones} />

      {/* Moving News */}
      <NewsSection />

      {/* Homepage-only UX enhancements */}
      <ClientAnimations />
      <StickyQuoteBar phones={phones} />
      <BackToTop />
    </>
  );
}
