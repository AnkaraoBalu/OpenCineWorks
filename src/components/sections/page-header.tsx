import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

/** The dark title band at the top of inner pages. */
export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_70%_at_50%_0%,rgb(91_92_246/0.4),transparent_70%)]"
      />
      <Container className="relative text-center">
        <p className="text-sm font-bold tracking-widest text-accent-500 uppercase">{eyebrow}</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-slate-300">{children}</div>
        )}
      </Container>
    </section>
  );
}
