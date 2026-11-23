import { featureGroups } from "@/content/features";
import { site } from "@/content/site";

/**
 * schema.org data for search engines: the website, the organisation and the software itself
 * (free, Windows, with its download link). Rendered once in the root layout.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: `${site.url}/`,
        name: site.name,
        description: site.description,
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: `${site.url}/`,
        logo: `${site.url}/brand/logo-mark.png`,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${site.url}/#software`,
        name: site.name,
        description: site.description,
        url: `${site.url}/`,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Windows 10, Windows 11",
        softwareVersion: site.version,
        downloadUrl: site.download.href,
        image: `${site.url}/images/screenshots/editor-overview.png`,
        featureList: featureGroups.flatMap((group) => group.items.map((item) => item.title)),
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      // Static, build-time JSON built from our own content, so it is safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
