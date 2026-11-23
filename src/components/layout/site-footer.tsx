import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Donations", href: "/donations/" },
      { label: "Features", href: "/features/" },
      { label: "AI editing", href: "/#ai-editing" },
      { label: "Go Live", href: "/#go-live" },
      { label: "Download", href: "/download/" },
    ],
  },
  {
    title: "Legal",
    links: [{ label: "Licences & credits", href: "/licenses/" }],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink-950 text-slate-400">
      <Container className="grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo tone="dark" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{site.tagline}</p>
          <p className="mt-3 text-sm">
            Version {site.version} · {site.platform}
          </p>
        </div>
        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              {column.title}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-white/5">
        <Container className="py-6 text-xs text-slate-500">
          © {new Date().getFullYear()} OpenCineWorks. All rights reserved. Claude is a trademark of
          Anthropic; Codex is a trademark of OpenAI. OpenCineWorks is not affiliated with either.
        </Container>
      </div>
    </footer>
  );
}
