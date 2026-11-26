import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPageView } from "@/components/sections/landing-page-view";
import { landingBySlug, landingPages } from "@/content/landing-pages";

// Only the slugs listed in the content file exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = landingBySlug[slug];
  if (!page) return {};
  const path = `/${page.slug}/`;
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: { url: path, title: page.metaTitle, description: page.metaDescription },
    twitter: { title: page.metaTitle, description: page.metaDescription },
  };
}

export default async function LandingPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = landingBySlug[slug];
  if (!page) notFound();
  return <LandingPageView page={page} />;
}
