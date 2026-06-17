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
];

const nextConfig: NextConfig = {
  async redirects() {
    return redirectPairs.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
