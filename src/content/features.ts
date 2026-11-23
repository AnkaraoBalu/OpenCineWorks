import type { LucideIcon } from "lucide-react";
import {
  AudioLines,
  Bot,
  Captions,
  Clapperboard,
  CloudUpload,
  Crop,
  Film,
  History,
  Languages,
  Layers,
  MonitorUp,
  Music,
  Palette,
  Radio,
  RefreshCw,
  Scissors,
  ShieldCheck,
  Shapes,
  Smile,
  Sparkles,
  Type,
  Video,
  Wand2,
  Zap,
} from "lucide-react";
import { screenshots, type Screenshot } from "./screenshots";

/** The headline numbers (every one is a count from the app itself). */
export const stats = [
  { value: "1,009", label: "Free music tracks (CC0)" },
  { value: "929", label: "Free sound effects (CC0)" },
  { value: "115", label: "Title fonts · 22 in Telugu" },
  { value: "1,595", label: "3D emoji stickers" },
  { value: "30", label: "Transitions" },
  { value: "174", label: "Editing tools for AI apps" },
] as const;

/** Alternating "text + screenshot" rows on the home page. */
export interface Highlight {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  screenshot: Screenshot;
}

export const highlights: Highlight[] = [
  {
    eyebrow: "Text & titles",
    title: "Titles in your own language",
    body: "Headings, subtitles and 40 ready-made title templates with 115 fonts — including 22 Telugu fonts. Telugu, Hindi and other Indian scripts export perfectly shaped.",
    points: [
      "YouTube, social, cinematic, lower-third and Telugu templates",
      "Outline, shadow, box and entrance animations",
      "What you see in the preview is what you export",
    ],
    screenshot: screenshots.textPanel,
  },
  {
    eyebrow: "Music & sound",
    title: "Free music and sound effects, built in",
    body: "1,009 music tracks and 929 sound effects — whooshes, pops, clicks, impacts and jingles. All public domain (CC0): use them in any video, no credit needed.",
    points: [
      "Search, preview and add in one click",
      "Music sits under your edit and ducks under speech",
      "Downloads once, then works offline",
    ],
    screenshot: screenshots.freeMusic,
  },
  {
    eyebrow: "Transitions",
    title: "30 transitions, previewed on your clip",
    body: "Wipes, circles, blinds, whips, blur, flash and more — every one renders in the export exactly as it plays in the preview.",
    points: ["Ready-made timings", "Works between any two clips on a track"],
    screenshot: screenshots.transitions,
  },
  {
    eyebrow: "Effects",
    title: "Looks and effect recipes",
    body: "Colour looks like Golden Hour, Noir and Cyberpunk, plus film grain, VHS, glitch and letterbox. Recipes apply a whole look in one step; adjustment layers grade everything below.",
    points: ["22 effects you can stack and tune", "Adjustment layers for the whole edit"],
    screenshot: screenshots.effects,
  },
  {
    eyebrow: "Captions",
    title: "Captions that grab attention",
    body: "Transcribe your video, then style captions with presets like Bold Pop, Karaoke Highlight and Boxed News — or fine-tune every word in the caption editor.",
    points: ["Speech-to-text on your computer", "Translations and subtitle files"],
    screenshot: screenshots.captionStyles,
  },
  {
    eyebrow: "Graphics",
    title: "Motion graphics and stickers",
    body: "Lower thirds, callouts, charts, progress bars and before / after cards — plus icons and 1,595 3D emoji stickers.",
    points: ["Edit the text and numbers right on the timeline", "Recolour icons and shapes"],
    screenshot: screenshots.elements,
  },
];

/** The full catalogue on the Features page, grouped. */
export interface FeatureGroup {
  id: string;
  title: string;
  intro: string;
  items: { icon: LucideIcon; title: string; body: string }[];
}

export const featureGroups: FeatureGroup[] = [
  {
    id: "ai",
    title: "AI editing",
    intro: "Claude and Codex work in OpenCineWorks through MCP — on your computer, with your subscription.",
    items: [
      { icon: Bot, title: "Claude & Codex", body: "Connect Claude Desktop, Claude Code or Codex once from Settings → AI engines. No API key in OpenCineWorks." },
      { icon: Wand2, title: "AI Edit page", body: "One-click requests — trim silence, add captions, change music, remove filler, auto reframe." },
      { icon: ShieldCheck, title: "You stay in control", body: "Apps must ask to connect; deletes, big cuts and exports wait for your OK; Ctrl+Z undoes any edit." },
      { icon: Sparkles, title: "174 editing tools", body: "The AI apps get the same tools you have: cuts, captions, titles, colour, audio, graphics, export." },
    ],
  },
  {
    id: "editing",
    title: "Editing",
    intro: "A complete timeline editor that stays fast on long projects.",
    items: [
      { icon: Scissors, title: "Timeline", body: "Split, ripple delete, trim, speed and multiple video and audio tracks." },
      { icon: Layers, title: "Adjustment layers", body: "Grade and add effects to every track below, from the playhead on." },
      { icon: Crop, title: "Transform & crop", body: "Position, scale, rotation, opacity, blend modes and crop for every clip." },
      { icon: History, title: "Versions & auto save", body: "Every change is saved within a second; go back to earlier versions any time." },
    ],
  },
  {
    id: "text",
    title: "Text, captions & graphics",
    intro: "Everything that goes on top of your video.",
    items: [
      { icon: Type, title: "115 title fonts", body: "Google Fonts for titles, downloaded on first use — 22 of them Telugu." },
      { icon: Languages, title: "Indian scripts done right", body: "Telugu and Hindi titles export correctly shaped, not broken into pieces." },
      { icon: Captions, title: "Captions & translations", body: "Transcribe on your computer, style with presets, translate and export subtitles." },
      { icon: Shapes, title: "Motion graphics", body: "Lower thirds, callouts, charts, steps and comparison cards you can edit." },
      { icon: Smile, title: "3D emoji & icons", body: "1,595 Fluent 3D emoji and recolourable line icons as stickers." },
    ],
  },
  {
    id: "audio",
    title: "Music & audio",
    intro: "Sound that is ready to use.",
    items: [
      { icon: Music, title: "1,009 music tracks", body: "Public-domain music from FreePD in every mood — upbeat, epic, cinematic, comedy." },
      { icon: AudioLines, title: "929 sound effects", body: "Whooshes, pops, clicks, impacts, jingles and more, all CC0." },
      { icon: Zap, title: "Smart audio", body: "Music ducks under speech; cut to the beat of a track." },
    ],
  },
  {
    id: "look",
    title: "Transitions & effects",
    intro: "Polish that previews and exports the same.",
    items: [
      { icon: Film, title: "30 transitions", body: "Fades, slides, whips, wipes, circles, blinds, blur and flash." },
      { icon: Palette, title: "22 effects & looks", body: "Golden Hour, Noir, Vintage, Cyberpunk, film grain, VHS, glitch, letterbox." },
    ],
  },
  {
    id: "record",
    title: "Record & go live",
    intro: "Capture and stream without another app.",
    items: [
      { icon: Video, title: "Record camera & screen", body: "Record the whole screen or drag out an area, with microphone and computer sound." },
      { icon: Clapperboard, title: "Screenshots", body: "Capture an area or the whole screen straight into your media." },
      { icon: Radio, title: "Go Live", body: "Scenes, sources and an audio mixer; stream to YouTube, Twitch, Facebook or Kick." },
      { icon: MonitorUp, title: "Stream your edit", body: "Pick your exported video as a source — it starts from the top the moment you are live." },
      { icon: RefreshCw, title: "Multistream & reconnect", body: "Several services at once; a dropped connection reconnects by itself." },
    ],
  },
  {
    id: "export",
    title: "Export & projects",
    intro: "Get your video out, keep your work safe.",
    items: [
      { icon: CloudUpload, title: "Cloud folder backup", body: "Back projects up to OneDrive, Google Drive, Dropbox or iCloud folders." },
      { icon: Zap, title: "Hardware export", body: "H.264 export on your graphics card when it supports it, with a background render queue." },
    ],
  },
];
