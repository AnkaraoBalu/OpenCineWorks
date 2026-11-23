import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "text-sm font-bold tracking-widest uppercase",
          tone === "dark" ? "text-accent-500" : "text-accent-600",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl",
          tone === "dark" ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {children && (
        <p
          className={cn(
            "mt-5 text-lg text-pretty",
            tone === "dark" ? "text-slate-300" : "text-slate-600",
          )}
        >
          {children}
        </p>
      )}
    </div>
  );
}
