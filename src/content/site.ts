/** Site-wide facts in one place: change the version or download link here only. */
export const site = {
  name: "OpenCineWorks",
  /** The public address, e.g. https://opencineworks.com — set NEXT_PUBLIC_SITE_URL when you publish. */
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://opencineworks.com").replace(/\/$/, ""),
  /** Search keywords for the whole site. */
  keywords: [
    "AI video editor",
    "video editor for Windows",
    "Claude video editing",
    "Codex video editing",
    "Telugu video editor",
    "Telugu titles",
    "automatic captions",
    "screen recorder",
    "live streaming",
    "free video editor",
    "OpenCineWorks",
  ],
  /** When the content last changed (used in the sitemap); update when pages change. */
  updated: "2026-11-26",
  tagline: "The AI video editor that Claude and Codex can edit with you.",
  description:
    "OpenCineWorks is a video editor for Windows. Ask Claude or Codex for an edit and it lands on your timeline, live — cuts, captions, Telugu titles, music, transitions, screen recording and live streaming.",
  /**
   * Public contact details shown on the site. Leave the phone empty to hide every contact section.
   * Use the international format, e.g. "+919876543210".
   */
  contact: {
    phone: "+919949170530" as string,
    phoneDisplay: "+91 99491 70530" as string,
    /** Set to false if this number is not on WhatsApp: the WhatsApp button is then hidden. */
    whatsapp: true as boolean,
  },
  version: "0.1.0",
  platform: "Windows 10 / 11 (64-bit)",
  download: {
    /**
     * The installer is too big for Cloudflare (25 MB per file), so it lives on GitHub Releases.
     * "latest/download" always points at the newest release: upload a new installer with the
     * same file name and this link keeps working.
     */
    href: "https://github.com/AnkaraoBalu/OpenCineWorks/releases/latest/download/OpenCineWorks-Setup-0.1.0-x64.exe",
    fileName: "OpenCineWorks-Setup-0.1.0-x64.exe",
    releases: "https://github.com/AnkaraoBalu/OpenCineWorks/releases",
  },
} as const;

export const navigation = [
  { label: "Donations", href: "/donations/" },
  { label: "Features", href: "/features/" },
  { label: "AI editing", href: "/#ai-editing" },
  { label: "Go Live", href: "/#go-live" },
  { label: "Download", href: "/download/" },
] as const;
