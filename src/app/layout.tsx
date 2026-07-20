import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";

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
    "Removals Nationwide | London, UK and International Moves",
  description:
    "London-based house and office removals, man and van, packing and secure storage, with nationwide and international moves arranged from London.",
  openGraph: {
    title: "Removals Nationwide | London, UK and International Moves",
    description:
      "London-based removals and storage with nationwide and international reach.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-white text-brand-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
