import { Camera, Crop, MonitorUp, Radio, RefreshCw, Video } from "lucide-react";
import { screenshots } from "@/content/screenshots";
import { Container } from "@/components/ui/container";
import { ScreenshotFrame } from "@/components/ui/screenshot-frame";
import { SectionHeading } from "@/components/ui/section-heading";

const RECORD = [
  { icon: Video, title: "Camera & screen", body: "Record the camera or any screen, with microphone and computer sound." },
  { icon: Crop, title: "Just an area", body: "Drag out a box like the Snipping Tool — only that part is recorded." },
  { icon: Camera, title: "Screenshots", body: "Capture an area or the whole screen straight into your media." },
];

const LIVE = [
  { icon: MonitorUp, title: "Stream your edit", body: "Pick your export as a source; it plays from the start the moment you are live." },
  { icon: Radio, title: "Multistream", body: "YouTube, Twitch, Facebook, Kick or any RTMP server — several at once." },
  { icon: RefreshCw, title: "Reconnects by itself", body: "A dropped connection comes back on its own; your recording keeps saving." },
];

function Cards({ items }: { items: typeof RECORD }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      {items.map(({ icon: Icon, title, body }) => (
        <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <span className="flex size-11 items-center justify-center rounded-xl bg-accent-100 text-accent-700">
            <Icon className="size-5" aria-hidden />
          </span>
          <h3 className="mt-4 font-semibold text-ink-900">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{body}</p>
        </div>
      ))}
    </div>
  );
}

export function RecordAndLive() {
  return (
    <section id="go-live" className="scroll-mt-16 border-y border-black/5 bg-white py-24" aria-labelledby="live-title">
      <Container>
        <SectionHeading eyebrow="Record & go live" title={<span id="live-title">Record your screen. Stream your edit.</span>}>
          Capture and broadcast without another app.
        </SectionHeading>

        <div className="mt-14">
          <ScreenshotFrame shot={screenshots.recordMenu} />
          <Cards items={RECORD} />
        </div>

        <div className="mt-20">
          <ScreenshotFrame shot={screenshots.goLive} />
          <Cards items={LIVE} />
        </div>
      </Container>
    </section>
  );
}
