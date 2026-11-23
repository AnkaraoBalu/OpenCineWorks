/** Site-wide facts in one place: change the version or download link here only. */
export const site = {
  name: "OpenCineWorks",
  /** The public address, e.g. https://opencineworks.com — set NEXT_PUBLIC_SITE_URL when you publish. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  tagline: "The AI video editor that Claude and Codex can edit with you.",
  description:
    "OpenCineWorks is a video editor for Windows. Ask Claude or Codex for an edit and it lands on your timeline, live — cuts, captions, Telugu titles, music, transitions, screen recording and live streaming.",
  version: "0.1.0",
  platform: "Windows 10 / 11 (64-bit)",
  download: {
    /** The installer, served from `public/downloads/`. */
    href: "/downloads/OpenCineWorks-Setup-0.1.0-x64.exe",
    fileName: "OpenCineWorks-Setup-0.1.0-x64.exe",
  },
} as const;

export const navigation = [
  { label: "Donations", href: "/donations/" },
  { label: "Features", href: "/features/" },
  { label: "AI editing", href: "/#ai-editing" },
  { label: "Go Live", href: "/#go-live" },
  { label: "Download", href: "/download/" },
] as const;
