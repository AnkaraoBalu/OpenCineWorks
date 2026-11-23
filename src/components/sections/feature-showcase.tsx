import { Check } from "lucide-react";
import { highlights } from "@/content/features";
import { Container } from "@/components/ui/container";
import { ScreenshotFrame } from "@/components/ui/screenshot-frame";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";

/** Alternating rows: what a panel does, next to a screenshot of it. */
export function FeatureShowcase() {
  return (
    <section className="py-24" aria-labelledby="showcase-title">
      <Container>
        <SectionHeading eyebrow="Highlights" title={<span id="showcase-title">A full editor, made for creators</span>}>
          Every panel below is a real screenshot of OpenCineWorks.
        </SectionHeading>

        <div className="mt-20 space-y-24 lg:space-y-32">
          {highlights.map((item, index) => (
            <article
              key={item.title}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
            >
              <div className={cn(index % 2 === 1 && "lg:order-2")}>
                <p className="text-sm font-bold tracking-widest text-accent-600 uppercase">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-5 text-lg text-slate-600">{item.body}</p>
                <ul className="mt-6 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-slate-700">
                      <Check className="mt-0.5 size-5 shrink-0 text-accent-600" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={cn(
                  "relative flex justify-center",
                  index % 2 === 1 && "lg:order-1",
                )}
              >
                <div
                  aria-hidden
                  className={cn(
                    "absolute inset-6 rounded-[40px] blur-3xl",
                    index % 2 === 0 ? "bg-brand-500/15" : "bg-accent-500/15",
                  )}
                />
                <ScreenshotFrame
                  shot={item.screenshot}
                  variant="panel"
                  className="relative w-full max-w-sm"
                />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
