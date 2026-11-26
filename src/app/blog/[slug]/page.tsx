import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { blogBySlug, blogPosts } from "@/content/blog";
import { landingBySlug } from "@/content/landing-pages";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ScreenshotFrame } from "@/components/ui/screenshot-frame";
import { PageHeader } from "@/components/sections/page-header";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBySlug[slug];
  if (!post) return {};
  const path = `/blog/${post.slug}/`;
  return {
    title: post.metaTitle ?? post.title,
    description: post.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: post.title,
      description: post.description,
      publishedTime: post.published,
    },
    twitter: { title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = blogBySlug[slug];
  if (!post) notFound();
  const related = post.related.map((item) => landingBySlug[item]).filter(Boolean);
  const url = `${site.url}/blog/${post.slug}/`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.published,
        dateModified: post.published,
        mainEntityOfPage: url,
        image: `${site.url}${post.screenshot.src}`,
        author: { "@type": "Organization", name: site.name, url: `${site.url}/` },
        publisher: {
          "@type": "Organization",
          name: site.name,
          logo: { "@type": "ImageObject", url: `${site.url}/brand/logo-mark.png` },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.name, item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/blog/` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Static, build-time JSON built from our own content.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <PageHeader eyebrow="Guide" title={post.title}>
        <p>{post.intro}</p>
      </PageHeader>
      <Container className="-mt-10">
        <ScreenshotFrame
          shot={post.screenshot}
          variant={post.screenshot.width < 800 ? "panel" : "window"}
          priority
          className={post.screenshot.width < 800 ? "mx-auto max-w-md" : "relative"}
        />
      </Container>
      <Container className="py-16">
        <article className="mx-auto max-w-3xl space-y-12">
          {post.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold tracking-tight text-ink-900">{section.title}</h2>
              {section.body && (
                <p className="mt-4 text-lg leading-relaxed text-slate-700">{section.body}</p>
              )}
              {section.steps && (
                <ol className="mt-5 space-y-3">
                  {section.steps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-slate-700">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              )}
              {section.points && (
                <ul className="mt-5 space-y-2.5">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3 text-slate-700">
                      <Check className="mt-1 size-5 shrink-0 text-accent-600" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="rounded-2xl bg-ink-950 p-8 text-center text-white">
            <h2 className="text-2xl font-bold">Try it yourself</h2>
            <p className="mt-3 text-slate-300">OpenCineWorks is free for Windows 10 and 11.</p>
            <ButtonLink href="/download/" className="mt-6" size="lg">
              Download for Windows
            </ButtonLink>
          </div>

          {related.length > 0 && (
            <nav aria-labelledby="more-title">
              <h2 id="more-title" className="text-2xl font-bold tracking-tight text-ink-900">
                Related pages
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/${item.slug}/`}
                      className="block rounded-xl bg-white p-4 ring-1 ring-black/5 transition hover:ring-accent-500/50"
                    >
                      <span className="font-semibold text-ink-900">{item.label}</span>
                      <span className="mt-1 block text-sm text-slate-600">{item.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </article>
      </Container>
    </>
  );
}
