import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost-dark";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-accent-600 text-white shadow-lg shadow-accent-600/30 hover:bg-accent-700",
  secondary:
    "bg-white text-ink-900 ring-1 ring-black/10 hover:ring-black/20 hover:bg-white",
  "ghost-dark": "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15",
};

/** A link styled as a button. `download` marks a file download (no client navigation). */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  download,
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  download?: boolean;
  /** tel:, mailto: and https: links open as normal anchors. */
  external?: boolean;
  className?: string;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition hover:-translate-y-0.5",
    size === "sm" && "px-4 py-2 text-sm",
    size === "md" && "px-5 py-3",
    size === "lg" && "px-7 py-4 text-lg",
    VARIANTS[variant],
    className,
  );
  if (external) {
    return (
      <a href={href} className={classes} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}>
        {children}
      </a>
    );
  }
  if (download) {
    return (
      <a href={href} download className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
