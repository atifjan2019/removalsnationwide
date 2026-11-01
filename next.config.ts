import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";
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
  // Match the live WordPress URL format (trailing slash) so every existing
  // ranking URL is preserved at cutover with no mass redirect. Next.js 308s the
  // non-slash form to the slash form, so each page resolves at one URL.
  trailingSlash: true,
  // experimental.inlineCss was removed: the stylesheet grew to ~104 KB and was
  // sent twice in every HTML response (once as <style>, once in the RSC
  // payload), which made each server render far heavier. As a hashed file it
  // is cached immutably by the browser after the first page.
  async headers() {
    // A customer's move details page and its API carry the key to their
    // answers and photos in the address: never cached anywhere, never indexed,
    // and never passed on to another site as a referrer.
    const privateHeaders = [
      { key: "Cache-Control", value: "private, no-store" },
      { key: "X-Robots-Tag", value: "noindex, nofollow" },
      { key: "Referrer-Policy", value: "no-referrer" },
    ];
    // Long-lived caching for files whose URL changes when their bytes do.
    // (/_next/static is immutable on Vercel already.) These used to live in
    // public/_headers for Cloudflare's static asset handler.
    const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];
    return [
      { source: "/move-details/:path*", headers: privateHeaders },
      { source: "/api/move-details/:path*", headers: privateHeaders },
      { source: "/images/:path*", headers: immutable },
      { source: "/:file*.svg", headers: [{ key: "Cache-Control", value: "public, max-age=2592000, immutable" }] },
      { source: "/favicon.ico", headers: [{ key: "Cache-Control", value: "public, max-age=2592000" }] },
    ];
  },
  async redirects() {
    // With trailingSlash:true, both ends must carry the slash so each old URL
    // reaches its destination in a single 308 hop, with no slash-normalisation
    // chain (e.g. /about/ -> /about-us/, not /about/ -> /about-us -> /about-us/).
    const slash = (p: string) => (p.endsWith("/") ? p : `${p}/`);
    return redirectPairs.map(([source, destination]) => ({
      source: slash(source),
      destination: slash(destination),
      permanent: true,
    }));
  },
  images: {
    // Vercel's image optimizer resizes and re-encodes on the fly, so a phone
    // gets a ~600px AVIF of the hero instead of the full 1600px WebP from R2.
    // On Cloudflare this was `unoptimized: true`; the mobile LCP was 5.9s.
    formats: ["image/avif", "image/webp"],
    // Source images on the media domain are versioned by filename, so an
    // optimised copy can be kept for a month regardless of upstream headers.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      // R2 media bucket, served over its bound custom domain. Preferred over the
      // pub-*.r2.dev URL, which is rate-limited and not intended for production.
      {
        protocol: "https",
        hostname: "media.removalsnationwide.uk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "removalsnationwide.uk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.removalsnationwide.uk",
        pathname: "/**",
      },
    ],
  },
};

// Wrap with the bundle analyzer. Inert unless ANALYZE=true, so normal builds
// are unaffected; `ANALYZE=true npm run build` emits .next/analyze/*.html
// treemaps used to confirm chunk contents and rule out duplicate modules.
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

export default withBundleAnalyzer(nextConfig);
