import type { Metadata } from "next";
import Link from "next/link";
import { featureGroups } from "@/content/features";
import { screenshots } from "@/content/screenshots";
import { DownloadCta } from "@/components/sections/download-cta";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { ScreenshotFrame } from "@/components/ui/screenshot-frame";

export const metadata: Metadata = {
  title: "Features",
  description:
    "AI editing with Claude and Codex, timeline editing, Telugu titles, captions, free music and sound effects, transitions, effects, screen recording and Go Live.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader eyebrow="Features" title="Everything OpenCineWorks can do">
        <p>From AI editing to live streaming — all in one app on your computer.</p>
      </PageHeader>

      {/* Jump links */}
      <nav aria-label="Feature groups" className="sticky top-16 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
        <Container className="flex gap-2 overflow-x-auto py-3">
          {featureGroups.map((group) => (
            <Link
              key={group.id}
              href={`#${group.id}`}
              className="shrink-0 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200"
            >
              {group.title}
            </Link>
          ))}
        </Container>
      </nav>

      <Container className="space-y-20 py-20">
        {featureGroups.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-32" aria-labelledby={`${group.id}-title`}>
            <div className="max-w-2xl">
              <h2 id={`${group.id}-title`} className="text-3xl font-bold tracking-tight text-ink-900">
                {group.title}
              </h2>
              <p className="mt-2 text-lg text-slate-600">{group.intro}</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-semibold text-ink-900">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </Container>

      {/* Panel gallery */}
      <section className="border-t border-black/5 bg-white py-20" aria-labelledby="gallery-title">
        <Container>
          <h2 id="gallery-title" className="text-center text-3xl font-bold tracking-tight text-ink-900">
            A look at the panels
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              screenshots.textPanel,
              screenshots.transitions,
              screenshots.effects,
              screenshots.captionStyles,
              screenshots.freeMusic,
              screenshots.elements,
            ].map((shot) => (
              <figure key={shot.src}>
                <ScreenshotFrame shot={shot} variant="panel" />
                <figcaption className="mt-3 text-sm text-slate-500">{shot.alt}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-16">
            <ScreenshotFrame shot={screenshots.settings} />
            <p className="mt-3 text-center text-sm text-slate-500">{screenshots.settings.alt}</p>
          </div>
        </Container>
      </section>

      <DownloadCta />
    </>
  );
}
