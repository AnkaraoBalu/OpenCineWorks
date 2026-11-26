import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { landingBySlug, type LandingPage } from "@/content/landing-pages";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ScreenshotFrame } from "@/components/ui/screenshot-frame";
import { DownloadCta } from "@/components/sections/download-cta";
import { PageHeader } from "@/components/sections/page-header";

/** One search landing page: headline, screenshot, sections, optional steps, FAQ and related links. */
export function LandingPageView({ page }: { page: LandingPage }) {
  const related = page.related.map((slug) => landingBySlug[slug]).filter(Boolean);

  return (
    <>
      <BreadcrumbData page={page} />
      <PageHeader eyebrow={page.eyebrow} title={page.h1}>
        <p>{page.intro}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/download/" size="lg">
            Download for Windows
          </ButtonLink>
          <ButtonLink href="/features/" size="lg" variant="ghost-dark">
            All features
          </ButtonLink>
        </div>
      </PageHeader>

      <Container className="-mt-10">
        <ScreenshotFrame
          shot={page.screenshot}
          variant={page.screenshot.width < 800 ? "panel" : "window"}
          priority
          className={page.screenshot.width < 800 ? "mx-auto max-w-md" : "relative"}
        />
      </Container>

      <Container className="py-20">
        {page.steps && (
          <section aria-labelledby="steps-title" className="mx-auto mb-20 max-w-3xl">
            <h2 id="steps-title" className="text-3xl font-bold tracking-tight text-ink-900">
              How to start
            </h2>
            <ol className="mt-8 space-y-5">
              {page.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900">{step.title}</h3>
                    <p className="mt-1 text-slate-600">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        <div className="mx-auto max-w-3xl space-y-14">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">{section.body}</p>
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

          {page.native && (
            <section lang={page.native.lang} className="rounded-2xl bg-brand-50 p-7 ring-1 ring-brand-500/20">
              <h2 className="text-2xl font-bold text-ink-900">{page.native.title}</h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-800">{page.native.body}</p>
            </section>
          )}

          <section aria-labelledby="faq-title">
            <h2 id="faq-title" className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              Questions people ask
            </h2>
            <div className="mt-6 divide-y divide-black/10 rounded-2xl bg-white ring-1 ring-black/5">
              {page.faq.map((item) => (
                <details key={item.q} className="group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900">
                    {item.q}
                    <ChevronDown
                      className="size-5 shrink-0 text-slate-500 transition group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <p className="mt-3 text-slate-700">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {related.length > 0 && (
            <nav aria-labelledby="related-title">
              <h2 id="related-title" className="text-2xl font-bold tracking-tight text-ink-900">
                More you can do
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
        </div>
      </Container>

      <DownloadCta />
    </>
  );
}

/** schema.org breadcrumbs so search results can show Home › this page. */
function BreadcrumbData({ page }: { page: LandingPage }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: site.name, item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: page.label, item: `${site.url}/${page.slug}/` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      // Static, build-time JSON built from our own content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
