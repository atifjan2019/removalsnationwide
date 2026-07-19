import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

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

export const metadata: Metadata = buildMetadata("home");

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HomepageHero />
      <HeroTrustBar />

      {/* 2. Get an Instant Removal Quote */}
      <QuoteSection />

      {/* 3. London Removal Services Overview */}
      <ServicesSection />

      {/* 4. House Removals London */}
      <HouseRemovalsSection />

      {/* 5. Man and Van London — highest priority */}
      <ManAndVanSection />

      {/* 6. Office and Commercial Removals — supporting */}
      <OfficeRemovalsSection />

      {/* 7. Removals and Storage — supporting */}
      <StorageSection />

      {/* 8. Packing Services — supporting */}
      <PackingSection />

      {/* 9. International Removals — supporting */}
      <InternationalSection />

      {/* 10. How Much Do Removals Cost — featured snippet */}
      <CostSection />

      {/* 11. Professional Removals vs Van Hire — open lane */}
      <VsVanHireSection />

      {/* 12. Specialist and Fragile Items — open lane */}
      <SpecialistSection />

      {/* 13. Moving in London: Access Intelligence — experience moat */}
      <AccessSection />

      {/* 14. London Areas We Cover — silo hub */}
      <AreasSiloSection />

      {/* 15. Why Choose Removals Nationwide — E-E-A-T */}
      <WhyChooseSection />

      {/* Stats — social proof */}
      <StatsCounter />

      {/* 16. Reviews, Insurance and Accreditations */}
      <ReviewsSection />

      {/* 17. Our Removals Process */}
      <ProcessSection />

      {/* 18. London Removals FAQs */}
      <HomeFaqSection />

      {/* 19. Final Quote CTA */}
      <FinalCtaSection />

      {/* Moving News blog — house/man-and-van content preferred */}
      <NewsSection />

      {/* Homepage-only UX enhancements */}
      <ClientAnimations />
      <StickyQuoteBar />
      <BackToTop />
    </>
  );
}
