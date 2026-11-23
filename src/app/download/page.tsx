import type { Metadata } from "next";
import { Cpu, Download, HardDrive, Monitor, Plug, Wifi } from "lucide-react";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Download",
  description: `Download ${site.name} ${site.version} for ${site.platform}.`,
};

const REQUIREMENTS = [
  { icon: Monitor, title: "Windows", body: site.platform },
  { icon: Cpu, title: "Processor & graphics", body: "A modern 64-bit processor. A graphics card with H.264 encoding makes export faster." },
  { icon: HardDrive, title: "Storage", body: "Space for the app plus your projects; music, fonts and stickers download only when used." },
  { icon: Wifi, title: "Internet", body: "Only for downloading library content and for AI apps — editing works offline." },
];

const STEPS = [
  `Download ${site.download.fileName} below.`,
  "Open it and follow the installer.",
  "Start OpenCineWorks and create your first project.",
  "Optional: Settings → AI engines → turn on “Let AI apps edit” to connect Claude or Codex.",
];

export default function DownloadPage() {
  return (
    <>
      <PageHeader eyebrow="Download" title={`Get ${site.name} for Windows`}>
        <p>
          Version {site.version} · {site.platform}
        </p>
      </PageHeader>

      <Container className="-mt-10 pb-20">
        <div className="relative grid items-center gap-8 rounded-3xl bg-white p-8 shadow-2xl shadow-ink-900/15 ring-1 ring-black/5 sm:p-12 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              {site.name} {site.version} for Windows
            </h2>
            <p className="mt-2 text-slate-600">64-bit installer · {site.download.fileName}</p>
          </div>
          <ButtonLink href={site.download.href} download size="lg">
            <Download className="size-5" aria-hidden />
            Download for Windows
          </ButtonLink>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <section aria-labelledby="install-title">
            <h2 id="install-title" className="text-2xl font-bold tracking-tight text-ink-900">
              Install in four steps
            </h2>
            <ol className="mt-6 space-y-4">
              {STEPS.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex gap-3 rounded-2xl bg-brand-50 p-5 text-sm text-brand-900 ring-1 ring-brand-500/20">
              <Plug className="size-5 shrink-0" aria-hidden />
              <p>
                AI editing uses Claude Desktop, Claude Code or Codex with your own subscription.
                Install one of them, then follow the steps in Settings → AI engines.
              </p>
            </div>
          </section>

          <section aria-labelledby="requirements-title">
            <h2 id="requirements-title" className="text-2xl font-bold tracking-tight text-ink-900">
              System requirements
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {REQUIREMENTS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                  <Icon className="size-5 text-accent-600" aria-hidden />
                  <h3 className="mt-3 font-semibold text-ink-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
