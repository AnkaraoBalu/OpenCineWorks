import { Heart, Download, Monitor } from "lucide-react";
import { screenshots } from "@/content/screenshots";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { ScreenshotFrame } from "@/components/ui/screenshot-frame";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-20 pb-24 text-white sm:pt-28">
      {/* Soft brand glow behind the headline. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgb(48_224_0/0.45),transparent_70%),radial-gradient(35%_35%_at_85%_15%,rgb(34_197_94/0.18),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
      />

      <Container className="relative text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-slate-200 ring-1 ring-white/15">
          <span className="size-2 rounded-full bg-accent-500" aria-hidden />
          Free video editing. Optional community support.
        </p>
        <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Your story. Your timeline.{" "}
          <span className="bg-gradient-to-r from-brand-400 via-[#b6ff8a] to-accent-500 bg-clip-text text-transparent">
            Your free video editor.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-slate-300 sm:text-xl">
          {site.description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/download/" size="lg">
            <Download className="size-5" aria-hidden />
            Download for Windows
          </ButtonLink>
          <ButtonLink href="/donations/" size="lg" variant="ghost-dark">
            Donations
            <Heart className="size-5" aria-hidden />
          </ButtonLink>
        </div>
        <p className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400">
          <Monitor className="size-4" aria-hidden />
          {site.platform} · Version {site.version}
        </p>

        <div className="relative mx-auto mt-16 max-w-6xl">
          <div
            aria-hidden
            className="absolute -inset-x-10 -top-10 -bottom-10 rounded-[40px] bg-brand-500/20 blur-3xl"
          />
          <ScreenshotFrame shot={screenshots.editor} priority className="relative" />
        </div>
      </Container>
    </section>
  );
}
