import type { MetadataRoute } from "next";
import { landingPages } from "@/content/landing-pages";
import { site } from "@/content/site";

// The site is exported as plain files, so the sitemap is written once at build time.
export const dynamic = "force-static";

const PAGES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/download/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/features/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/donations/", priority: 0.4, changeFrequency: "monthly" },
  { path: "/licenses/", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const landing = landingPages.map((page) => ({
    path: `/${page.slug}/`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));
  return [...PAGES.slice(0, 2), ...landing, ...PAGES.slice(2)].map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path}`,
    lastModified: site.updated,
    changeFrequency,
    priority,
  }));
}
