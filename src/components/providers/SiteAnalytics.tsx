"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

/**
 * Google Analytics on every page except a customer's move details page. That
 * page's address is the key to their answers and photos, and a page view
 * would send it to Google. The booking form leaves for it with a full page
 * load, so analytics from the form never carries over either.
 *
 * The tag (about 180 KB) loads after the window load event. Loaded any
 * earlier it shares the phone's bandwidth with the hero image and fonts and
 * delays the first paint. Nothing is lost: gtag reads the queued page view
 * when it arrives, and GA4's enhanced measurement records later client-side
 * navigations itself.
 */
export default function SiteAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/move-details/")) return null;
  return (
    <>
      <Script id="ga-init" strategy="lazyOnload">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
      </Script>
      <Script id="ga-tag" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
    </>
  );
}
