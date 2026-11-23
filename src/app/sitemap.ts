import type { MetadataRoute } from "next";
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
  return PAGES.map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path}`,
    lastModified: site.updated,
    changeFrequency,
    priority,
  }));
}
