"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navigation } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center gap-2 md:gap-6">
        <Logo />
        <nav aria-label="Main" className="ml-auto hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const active = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-sm font-medium transition",
                  active ? "bg-slate-100 text-ink-900" : "text-slate-600 hover:text-ink-900",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <ButtonLink href="/download/" size="sm" className="hidden md:inline-flex">
          <Download className="size-4" aria-hidden />
          Download
        </ButtonLink>
        <button
          type="button"
          className="ml-auto shrink-0 rounded-lg p-2 text-ink-900 ring-1 ring-black/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>
      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-black/5 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 font-medium text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
