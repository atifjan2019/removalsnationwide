import type { Metadata } from "next";
import { preconnect, prefetchDNS } from "react-dom";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";

// Hero and inner-page banner imagery is served cross-origin from the R2 media
// CDN. Warming DNS + TLS in the document head means the LCP hero image starts
// downloading without first paying a fresh connection round-trip.
const MEDIA_CDN_ORIGIN = "https://media.removalsnationwide.uk";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Fixed path that redirects to the uploaded icon, or the bundled one when
  // nothing is set. Keeping this constant is what lets this metadata stay
  // static — reading D1 here would make every page dynamic.
  // Trailing slash matters: next.config sets trailingSlash, so "/brand-icon"
  // would 308 to "/brand-icon/" on every single favicon request.
  icons: { icon: "/brand-icon/", shortcut: "/brand-icon/", apple: "/brand-icon/" },
  title:
    "UK Removals Company | House, Man & Van, Office & Storage",
  description:
    "Removals Nationwide is a fully insured UK removal company for house removals, man and van, office moves, packing and storage. Get a free quote.",
  openGraph: {
    title: "UK Removals Company | House, Man & Van, Office & Storage",
    description:
      "Fully insured UK removals company for house, man and van, office, packing and storage moves nationwide. Get a free quote.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Resource hints for the cross-origin R2 media CDN (emitted into <head>).
  prefetchDNS(MEDIA_CDN_ORIGIN);
  preconnect(MEDIA_CDN_ORIGIN);

  return (
    <html lang="en-GB" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-white text-brand-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
