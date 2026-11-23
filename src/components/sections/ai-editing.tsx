import { Check } from "lucide-react";
import { screenshots } from "@/content/screenshots";
import { Container } from "@/components/ui/container";
import { ScreenshotFrame } from "@/components/ui/screenshot-frame";
import { SectionHeading } from "@/components/ui/section-heading";

const POINTS = [
  "Uses your Claude or Codex subscription — no API key in OpenCineWorks",
  "Runs on your computer; only apps you allow can connect",
  "Deletes, big cuts and exports wait for your OK",
  "Every AI edit is listed and can be undone with Ctrl+Z",
];

const STEPS = [
  { title: "You ask", body: "Type a request in Claude or Codex — or pick one on the AI Edit page." },
  { title: "The AI looks", body: "It reads your timeline, the transcript and a few frames from OpenCineWorks." },
  { title: "OpenCineWorks edits", body: "Cuts, captions, titles, music and colour land on your timeline, live." },
  { title: "You decide", body: "Keep it, tweak it, or press Ctrl+Z." },
];

export function AiEditing() {
  return (
    <section id="ai-editing" className="scroll-mt-16 bg-ink-950 py-24 text-white" aria-labelledby="ai-title">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              align="left"
              tone="dark"
              eyebrow="AI editing"
              title={<span id="ai-title">Claude edits. You watch it happen.</span>}
            >
              Connect Claude Desktop, Claude Code or Codex once. Then just ask — “trim the
              silences”, “add bold captions”, “make three shorts” — and the edit appears on your
              timeline.
            </SectionHeading>
            <ul className="mt-8 space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex gap-3 text-slate-300">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent-500" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <ScreenshotFrame shot={screenshots.aiEdit} />
        </div>

        <ol className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="rounded-2xl bg-ink-800/60 p-6 ring-1 ring-white/10">
              <span className="flex size-9 items-center justify-center rounded-xl bg-brand-500 font-bold">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
