import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5", className)} aria-label="OpenCineWorks home">
      <Image src="/brand/logo-mark.svg" alt="" width={34} height={34} priority />
      <span
        className={cn(
          "text-lg sm:text-xl font-bold tracking-tight",
          tone === "dark" ? "text-white" : "text-ink-900",
        )}
      >
        OpenCineWorks
      </span>
    </Link>
  );
}
