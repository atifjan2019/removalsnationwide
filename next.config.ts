import type { NextConfig } from "next";

/** 301 redirects from our earlier route names to the live-matching slugs. */
const redirectPairs: [string, string][] = [
  ["/services/house-removals", "/house-removals"],
  ["/services/office-removals", "/office-removals"],
  ["/services/international-removals", "/international-removals"],
  ["/services/london-storage", "/storage"],
  ["/services/packing-service", "/packing-service"],
  ["/services/man-and-van", "/man-and-van-london"],
  ["/services/packaging-materials", "/packaging-materials"],
  ["/services/crate-hire", "/crate-hire"],
  ["/services/rubbish-disposal", "/rubbish-disposal"],
  ["/services/single-item-deliveries", "/single-item"],
  ["/services/cleaning-services", "/cleaning-services"],
  ["/about", "/about-us"],
  ["/why-us", "/about-us"],
  ["/contact", "/contactus"],
  ["/book-a-service", "/bookservice"],
  ["/book", "/bookservice"],
  ["/quote", "/bookservice"],
  ["/quick-quote", "/bookservice"],
  ["/terms", "/terms-and-conditions"],
  ["/privacy", "/privacy-policy"],
  ["/fleet", "/our-fleet"],
  ["/gallery", "/photos"],
  // Off-topic blog posts removed to keep the news cluster inside the topical
  // border (property-price and destination-lifestyle were out of scope).
  ["/news/manchester-housing-market-2026", "/news"],
  ["/news/move-to-london-animal-attractions", "/news"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return redirectPairs.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.top-removals.co.uk",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
