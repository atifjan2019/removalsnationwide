import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Top Removals London | Removals & Storage Across London, the UK & Worldwide",
  description:
    "London, national and international removals and storage. House & office removals, man and van, packing and secure storage. Fully insured, BAR & NGRS accredited. Get a quote today.",
  openGraph: {
    title: "Top Removals London | Removals & Storage",
    description:
      "London, national and international removals and storage. Fully insured, BAR & NGRS accredited.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white text-brand-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
