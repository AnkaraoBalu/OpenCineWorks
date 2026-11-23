/** Third-party software and content shipped with or downloaded by OpenCineWorks. */
export interface LicenceEntry {
  name: string;
  what: string;
  licence: string;
  licenceUrl: string;
  source: string;
}

export const software: LicenceEntry[] = [
  {
    name: "FFmpeg",
    what: "Media decoding, analysis and export. Distributed unmodified as separate programs. FFmpeg is a trademark of Fabrice Bellard.",
    licence: "GNU LGPL v3",
    licenceUrl: "https://www.gnu.org/licenses/lgpl-3.0.html",
    source: "https://ffmpeg.org",
  },
  {
    name: "Lucide icons",
    what: "Interface icons and icon elements.",
    licence: "ISC License",
    licenceUrl: "https://lucide.dev/license",
    source: "https://lucide.dev",
  },
];

export const content: LicenceEntry[] = [
  {
    name: "FreePD.com music",
    what: "1,009 music tracks (Kevin MacLeod and other composers), from FreePD's Internet Archive copy.",
    licence: "CC0 1.0 (public domain)",
    licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://archive.org/details/freepd",
  },
  {
    name: "OpenGameArt sound packs",
    what: "929 sound effects from 30 packs by Kenney, rubberduck, qubodup and others. Each pack's page lists CC0.",
    licence: "CC0 1.0 (public domain)",
    licenceUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://opengameart.org",
  },
  {
    name: "Google Fonts",
    what: "115 title fonts, each by its designers.",
    licence: "SIL Open Font License 1.1 (a few Apache 2.0)",
    licenceUrl: "https://openfontlicense.org",
    source: "https://github.com/google/fonts",
  },
  {
    name: "Fluent Emoji",
    what: "1,595 3D emoji stickers. Copyright © Microsoft Corporation.",
    licence: "MIT License",
    licenceUrl: "https://github.com/microsoft/fluentui-emoji/blob/main/LICENSE",
    source: "https://github.com/microsoft/fluentui-emoji",
  },
];
