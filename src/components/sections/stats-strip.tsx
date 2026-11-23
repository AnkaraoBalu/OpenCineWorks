import { stats } from "@/content/features";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function StatsStrip() {
  return (
    <section className="py-24" aria-labelledby="stats-title">
      <Container>
        <SectionHeading eyebrow="Built in" title={<span id="stats-title">Everything you need is already inside</span>}>
          Music, sound effects, fonts, stickers and effects come with OpenCineWorks — free to use in your
          videos, commercial ones too.
        </SectionHeading>
        <dl className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-black/5"
            >
              <dt className="mt-1 text-sm text-slate-500">{stat.label}</dt>
              <dd className="text-3xl font-extrabold tracking-tight text-ink-900">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
