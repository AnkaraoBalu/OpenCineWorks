import type { Metadata } from "next";
import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} and this website handle your data: what stays on your computer, which services the app contacts, and what analytics we use.`,
  alternates: { canonical: "/privacy/" },
  openGraph: { url: "/privacy/" },
};

const SECTIONS = [
  {
    title: "The app",
    body: [
      "OpenCineWorks runs on your computer. Your projects, media, recordings and settings are stored on your computer, in your Documents and Videos folders and the app's own data folder. We do not receive them.",
      "Passwords, API keys, stream keys and sign-in tokens you enter are stored encrypted with your operating system's secure storage and are only sent to the service they belong to.",
      "Some features contact other services when you use them: downloading library content (music, sound effects, fonts) from public sources, AI apps you connect, Google when you sign in to upload to YouTube, and the streaming service you choose. Their own privacy policies apply to what they receive.",
      "If you sign in with Google, OpenCineWorks asks only for the access needed to upload your videos to your channel and to read the Drive files you choose. You can disconnect at any time in Settings, and revoke access in your Google account.",
    ],
  },
  {
    title: "This website",
    body: [
      "The website is a set of static pages. It does not ask you to create an account and does not use a contact form.",
      "If analytics is switched on, we use Google Analytics to count visits and downloads. It sets cookies and collects usage information such as the pages viewed and your approximate location. We use it only to understand which pages are useful. You can block it with your browser settings or an extension.",
      "If you call or message the phone number on the site, we see the number you contact us from and what you tell us, and we use it only to answer you.",
      "Downloads are served by GitHub, which has its own privacy policy.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can delete your projects and data by deleting the OpenCineWorks folders on your computer. You can uninstall the app at any time.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Privacy" title="Privacy policy">
        <p>What the app and this website do with your data. Last updated 26 November 2026.</p>
      </PageHeader>
      <Container className="py-16">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold tracking-tight text-ink-900">{section.title}</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-700">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
