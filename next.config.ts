import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Makes the Cloudflare bindings (D1 `DB`, R2 `MEDIA`) available under `next dev`
// via the wrangler platform proxy, so local dev hits the same code path as the
// deployed Worker instead of silently falling back to "no database".
initOpenNextCloudflareForDev();

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
  // Leave Cloudflare runtime modules untouched during Next's webpack pass.
  // OpenNext resolves them when it bundles the Worker entrypoint.
  serverExternalPackages: ["cloudflare:sockets"],
  webpack(config, { isServer }) {
    if (isServer) {
      config.externals.push(({ request }: { request?: string }, callback: (error?: Error | null, result?: string) => void) => {
        if (request === "cloudflare:sockets") {
          callback(null, "commonjs cloudflare:sockets");
          return;
        }
        callback();
      });
    }
    return config;
  },
  // Match the live WordPress URL format (trailing slash) so every existing
  // ranking URL is preserved at cutover with no mass redirect. Next.js 308s the
  // non-slash form to the slash form, so each page resolves at one URL.
  trailingSlash: true,
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
    // Cloudflare Workers has no Vercel image optimizer, and Cloudflare's own
    // Image Resizing is a paid zone feature. Serving images as-is is the option
    // that works on the current plan. The source assets are already sized and
    // in modern formats, so the practical cost is low. If Image Resizing is
    // enabled on the zone later, drop this and add a custom loader pointing at
    // /cdn-cgi/image/ to get resizing and AVIF/WebP negotiation back.
    unoptimized: true,
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

export default nextConfig;
