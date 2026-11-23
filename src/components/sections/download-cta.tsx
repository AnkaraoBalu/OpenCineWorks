import { Download } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function DownloadCta() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-16 text-center text-white sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_80%_at_50%_100%,rgb(91_92_246/0.45),transparent_70%)]"
          />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Start editing with OpenCineWorks</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
              Download it for Windows, then connect Claude or Codex in Settings → AI engines.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/download/" size="lg">
                <Download className="size-5" aria-hidden />
                Download for Windows
              </ButtonLink>
              <ButtonLink href="/features/" size="lg" variant="ghost-dark">
                Explore features
              </ButtonLink>
            </div>
            <p className="mt-5 text-sm text-slate-400">
              {site.platform} · Version {site.version}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
