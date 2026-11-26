import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { landingPages } from "@/content/landing-pages";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

/** "What do you want to make?" — links to every search landing page from the home page. */
export function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-16 bg-white py-24" aria-labelledby="use-cases-title">
      <Container>
        <SectionHeading eyebrow="What do you want to do?" title={<span id="use-cases-title">Pick your kind of editing</span>}>
          From Telugu titles to AI edits and YouTube uploads, start with the page that matches your video.
        </SectionHeading>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {landingPages.map((page) => (
            <li key={page.slug}>
              <Link
                href={`/${page.slug}/`}
                className="group flex h-full flex-col rounded-2xl bg-slate-50 p-6 ring-1 ring-black/5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:ring-accent-500/40"
              >
                <h3 className="text-lg font-bold text-ink-900">{page.label}</h3>
                <p className="mt-2 flex-1 text-slate-600">{page.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
                  Learn more
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
