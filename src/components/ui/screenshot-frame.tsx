import Image from "next/image";
import type { Screenshot } from "@/content/screenshots";
import { cn } from "@/lib/cn";

/**
 * A real app screenshot in a desktop-window frame (wide shots) or a panel card (side panels).
 */
export function ScreenshotFrame({
  shot,
  variant = "window",
  priority = false,
  className,
}: {
  shot: Screenshot;
  variant?: "window" | "panel";
  priority?: boolean;
  className?: string;
}) {
  if (variant === "panel") {
    return (
      <figure
        className={cn(
          "overflow-hidden rounded-2xl bg-white shadow-2xl shadow-ink-900/15 ring-1 ring-black/5",
          className,
        )}
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          priority={priority}
          className="h-auto w-full"
        />
      </figure>
    );
  }
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-2xl bg-white shadow-2xl shadow-ink-900/25 ring-1 ring-black/10",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-black/5 bg-slate-100 px-4 py-3" aria-hidden>
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-medium text-slate-500">OpenCineWorks</span>
      </div>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        priority={priority}
        sizes="(min-width: 1280px) 1200px, 100vw"
        className="h-auto w-full"
      />
    </figure>
  );
}
