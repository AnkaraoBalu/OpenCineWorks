import type { Metadata } from "next";
import { content, software, type LicenceEntry } from "@/content/licenses";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Licences & credits",
  alternates: { canonical: "/licenses/" },
  openGraph: { url: "/licenses/" },
  description: "Third-party software and free content in OpenCineWorks, and their licences.",
};

function LicenceTable({ id, title, entries }: { id: string; title: string; entries: LicenceEntry[] }) {
  return (
    <section aria-labelledby={id} className="mt-14">
      <h2 id={id} className="text-2xl font-bold tracking-tight text-ink-900">
        {title}
      </h2>
      <div className="mt-5 overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th scope="col" className="px-5 py-3 font-semibold">Name</th>
              <th scope="col" className="px-5 py-3 font-semibold">Used for</th>
              <th scope="col" className="px-5 py-3 font-semibold">Licence</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/5">
            {entries.map((entry) => (
              <tr key={entry.name} className="align-top">
                <td className="px-5 py-4 font-medium text-ink-900">
                  <a href={entry.source} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
                    {entry.name}
                  </a>
                </td>
                <td className="px-5 py-4 text-slate-600">{entry.what}</td>
                <td className="px-5 py-4">
                  <a
                    href={entry.licenceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-600 underline underline-offset-2"
                  >
                    {entry.licence}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function LicensesPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Licences & credits">
        <p>OpenCineWorks is built with open-source software and free, openly licensed content.</p>
      </PageHeader>
      <Container className="max-w-5xl pb-24">
        <LicenceTable id="software" title="Software" entries={software} />
        <LicenceTable id="content" title="Free content library" entries={content} />
        <p className="mt-10 text-sm leading-relaxed text-slate-500">
          CC0 content is public domain: it can be used in any project, including commercial ones,
          without credit — we credit the creators anyway. Library files are downloaded from their
          original sources the first time they are used and checked against a checksum. The full
          list, with every sound pack and its author, is in the app under Settings → About.
        </p>
      </Container>
    </>
  );
}
