import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

/** App icon + the OpenCineWorks name: "Cine" in the brand green, the rest in text colour. */
export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5", className)} aria-label="OpenCineWorks home">
      <Image src="/brand/logo-mark.png" alt="" width={36} height={36} priority className="rounded-lg" />
      <span
        className={cn(
          "text-lg font-extrabold tracking-tight sm:text-xl",
          tone === "dark" ? "text-white" : "text-ink-900",
        )}
      >
        {"Open"}<span className="text-[#2fd100]">{"Cine"}</span>{"Works"}
      </span>
    </Link>
  );
}
