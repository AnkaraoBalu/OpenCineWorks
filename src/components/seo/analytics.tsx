"use client";

import Script from "next/script";
import { useEffect } from "react";
import { site } from "@/content/site";

type Gtag = (...args: unknown[]) => void;

/**
 * Google Analytics 4 with download tracking. It loads only when a measurement ID is set in
 * src/content/site.ts, so nothing is sent to Google until then.
 *
 * Every click on the installer link is reported as a "file_download" event, which can be marked
 * as a conversion in Google Analytics.
 */
export function Analytics() {
  const id = site.analytics.ga4Id;

  useEffect(() => {
    if (!id) return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href") ?? "";
      if (!href.includes("/releases/") || !href.includes("/download/")) return;
      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      gtag?.("event", "file_download", {
        file_name: site.download.fileName,
        file_extension: "exe",
        link_url: href,
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [id]);

  if (!id) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
