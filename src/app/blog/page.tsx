import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "Guides and tutorials",
  description:
    "Step-by-step guides for editing video on Windows: AI editing with Claude, Telugu subtitles and text, removing silence, YouTube and Shorts workflows.",
  alternates: { canonical: "/blog/" },
  openGraph: { url: "/blog/" },
};

const dateText = (iso: string) =>
  new Date(iso).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" });

export default function BlogIndexPage() {
  return (
    <>
      <PageHeader eyebrow="Guides" title="Guides and tutorials">
        <p>Practical, step-by-step help for editing video with OpenCineWorks.</p>
      </PageHeader>
      <Container className="py-16">
        <ul className="mx-auto grid max-w-4xl gap-5">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}/`}
                className="block rounded-2xl bg-white p-6 ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-accent-500/40"
              >
                <h2 className="text-xl font-bold text-ink-900">{post.title}</h2>
                <p className="mt-2 text-slate-600">{post.description}</p>
                <p className="mt-3 text-sm text-slate-500">
                  {dateText(post.published)} · {post.readMinutes} min read
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
