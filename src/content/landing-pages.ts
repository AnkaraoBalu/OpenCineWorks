import { screenshots, type Screenshot } from "./screenshots";

/**
 * Search landing pages: one page per thing people look for when they want to edit a video.
 * Every claim here is a feature of the app today; keep it that way when editing the copy.
 * Each page is rendered at /<slug>/ by src/app/[slug]/page.tsx.
 */

export interface LandingSection {
  title: string;
  body: string;
  points?: string[];
}

export interface LandingPage {
  slug: string;
  /** Short name for links and cards. */
  label: string;
  /** One line for the card on the home page. */
  summary: string;
  /** <title> (the site name is added after it). */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  screenshot: Screenshot;
  sections: LandingSection[];
  steps?: { title: string; body: string }[];
  /** A paragraph in the visitor's own language, for people who search in it. */
  native?: { lang: string; title: string; body: string };
  faq: { q: string; a: string }[];
  /** Slugs of other landing pages to link to. */
  related: string[];
}

export const landingPages: LandingPage[] = [
  {
    slug: "telugu-video-editor",
    label: "Telugu video editor",
    summary: "Telugu titles, 22 Telugu fonts and subtitles that export correctly shaped.",
    metaTitle: "Telugu Video Editor — Titles, Fonts & Subtitles",
    metaDescription:
      "A free Telugu video editor for Windows: 22 Telugu fonts, Telugu title templates and subtitles that export perfectly shaped. Also Hindi and other Indian scripts.",
    eyebrow: "Telugu video editor",
    h1: "A video editor that writes Telugu properly",
    intro:
      "Most editors break Telugu: the vowel signs and conjuncts split apart on export. OpenCineWorks shapes Telugu text the way it looks on a phone, so your titles and subtitles come out right.",
    screenshot: screenshots.textPanel,
    sections: [
      {
        title: "Telugu titles and templates",
        body: "Pick a Telugu font, type your title and add an entrance animation. Ready-made title templates cover YouTube, social, cinematic and lower-third styles, and you can change every colour, size and outline.",
        points: [
          "22 Telugu fonts among 115 title fonts",
          "Outline, shadow and background box on any title",
          "Pop, fade and slide-in animations",
        ],
      },
      {
        title: "What you see is what you export",
        body: "Telugu, Hindi and other Indian scripts are shaped by a proper text engine when you export, so the exported file matches the preview. No broken letters, no missing vowel signs.",
      },
      {
        title: "Subtitles in Telugu",
        body: "Add Telugu subtitles as captions, style them with presets, and import subtitle files (SRT or VTT) you already have. Export them as a separate file or burn them into the video.",
        points: [
          "Caption presets such as Bold Pop and Boxed News",
          "Import and export SRT and VTT",
          "Check and fix every line in the caption editor",
        ],
      },
      {
        title: "Free to use, made for creators",
        body: "OpenCineWorks is free for Windows. Music, sound effects, stickers and fonts are free to use in your videos, with their licences listed on the licences page.",
      },
    ],
    native: {
      lang: "te",
      title: "తెలుగు వీడియో ఎడిటర్",
      body: "OpenCineWorks తో మీ వీడియోలకు తెలుగు టైటిల్స్, సబ్‌టైటిల్స్ సులభంగా జోడించండి. 22 తెలుగు ఫాంట్లు ఉన్నాయి, అక్షరాలు వీడియోలో సరిగ్గా కనిపిస్తాయి. విండోస్ కోసం ఉచిత డౌన్‌లోడ్.",
    },
    faq: [
      {
        q: "Does it show Telugu letters correctly in the exported video?",
        a: "Yes. Telugu text is shaped by a proper text engine during export, so vowel signs and conjuncts stay together and the video matches the preview.",
      },
      {
        q: "Which Telugu fonts are included?",
        a: "22 Telugu font families, downloaded the first time you use them and then available offline. Each font keeps its own open licence.",
      },
      {
        q: "Can I use it for Hindi or other Indian languages?",
        a: "Yes. Hindi and other Indian scripts go through the same text engine, so they export correctly shaped too.",
      },
      {
        q: "Is OpenCineWorks free?",
        a: "Yes, the editor is free to download and use on Windows 10 and 11.",
      },
    ],
    related: ["auto-captions-subtitles", "free-music-and-sound-effects", "youtube-video-editor"],
  },
  {
    slug: "ai-video-editor",
    label: "AI video editor",
    summary: "Ask for an edit and it lands on your timeline: cuts, captions, reframing.",
    metaTitle: "Free AI Video Editor for Windows",
    metaDescription:
      "OpenCineWorks is a free AI video editor for Windows. Ask for cuts, captions, silence removal or a vertical reel and watch it happen on your own timeline.",
    eyebrow: "AI video editor",
    h1: "An AI video editor you stay in control of",
    intro:
      "Describe the edit you want and OpenCineWorks does the slow parts on your timeline, where you can see every change, tweak it, or undo it with Ctrl+Z.",
    screenshot: screenshots.aiEdit,
    sections: [
      {
        title: "Edits you can actually see",
        body: "The AI works on the same timeline you use. Cuts, titles, captions, music and colour appear as normal clips, so nothing is hidden in a black box and you can change any of it by hand.",
        points: [
          "Every AI change is listed and can be undone",
          "Deletes, big cuts and exports wait for your OK",
          "Your project stays on your computer",
        ],
      },
      {
        title: "The boring work, done for you",
        body: "Remove silences and filler words, build captions from the speech, reframe a landscape video for vertical, even out the colour, lay music under the edit and place sound effects.",
      },
      {
        title: "Use the AI you already have",
        body: "OpenCineWorks connects to Claude Desktop, Claude Code and Codex with your own subscription. There is no extra AI bill from OpenCineWorks and no account to create.",
      },
      {
        title: "A full editor underneath",
        body: "When you want to do it yourself, everything is there: multi-track timeline, titles, transitions, effects, colour, audio mixing, screen recording and export.",
      },
    ],
    faq: [
      {
        q: "Is the AI editor free?",
        a: "OpenCineWorks is free. It uses the AI app you already have, such as Claude or Codex, with your own subscription.",
      },
      {
        q: "Does my video get uploaded anywhere?",
        a: "Editing happens on your computer. The AI app you connect sees the timeline, transcript and frames it asks for, the same way it sees anything you share with it.",
      },
      {
        q: "Can I undo what the AI did?",
        a: "Yes. Every change goes into the normal undo history, so Ctrl+Z reverts it, and risky actions like deleting or exporting ask you first.",
      },
    ],
    related: ["edit-video-with-claude", "auto-captions-subtitles", "youtube-video-editor"],
  },
  {
    slug: "edit-video-with-claude",
    label: "Edit video with Claude",
    summary: "Connect Claude or Codex and edit your timeline by chatting.",
    metaTitle: "Edit Video with Claude or Codex",
    metaDescription:
      "Connect Claude Desktop, Claude Code or Codex to OpenCineWorks and edit video by chatting. Cuts, captions, titles and music land on your timeline live.",
    eyebrow: "Claude & Codex",
    h1: "Edit your video by talking to Claude or Codex",
    intro:
      "Turn on one switch in Settings and your AI app can edit the project you have open. You type the request, and the result appears on your timeline.",
    screenshot: screenshots.aiEdit,
    steps: [
      { title: "Download OpenCineWorks", body: "Install it on Windows 10 or 11 and open a project." },
      {
        title: "Turn on AI editing",
        body: "Go to Settings → AI engines and switch on “Let AI apps edit”. Follow the short steps shown for Claude Desktop, Claude Code or Codex.",
      },
      {
        title: "Ask for the edit",
        body: "In your AI app, write what you want: “cut the silences and add captions”, “make a 30-second vertical reel”, “add background music”.",
      },
      {
        title: "Review it in the editor",
        body: "The changes appear live. Keep them, adjust them, or press Ctrl+Z.",
      },
    ],
    sections: [
      {
        title: "How it works",
        body: "OpenCineWorks gives your AI app a set of editing tools over the Model Context Protocol (MCP), the open standard that lets AI apps work with other programs. The AI reads your timeline and edits it step by step, and you see each change.",
      },
      {
        title: "You decide what it may do",
        body: "AI apps must ask to connect, and only apps you allow can. Deleting, large cuts and exports wait for your approval inside OpenCineWorks.",
        points: [
          "Uses your own Claude or Codex subscription",
          "No API key is stored in OpenCineWorks for this",
          "Every change can be undone with Ctrl+Z",
        ],
      },
      {
        title: "More than 170 editing tools",
        body: "The AI gets the same tools you have: cuts, trims, captions, titles, colour, audio, graphics, templates and export. That is why it can do a whole edit, not only suggest one.",
      },
    ],
    faq: [
      {
        q: "Do I need a Claude subscription?",
        a: "Yes, you use your own Claude (or Codex) account. OpenCineWorks does not resell AI access.",
      },
      {
        q: "Which AI apps work?",
        a: "Claude Desktop, Claude Code and Codex, through MCP. Other MCP-capable apps may work too.",
      },
      {
        q: "Is this affiliated with Anthropic or OpenAI?",
        a: "No. OpenCineWorks is an independent project. Claude is a trademark of Anthropic and Codex is a trademark of OpenAI.",
      },
    ],
    related: ["ai-video-editor", "auto-captions-subtitles", "free-music-and-sound-effects"],
  },
  {
    slug: "auto-captions-subtitles",
    label: "Auto captions & subtitles",
    summary: "Speech-to-text on your computer, caption styles, SRT and VTT export.",
    metaTitle: "Auto Captions & Subtitle Maker for Video",
    metaDescription:
      "Make captions and subtitles on your own computer. Speech-to-text, caption styles like karaoke highlight, SRT and VTT export, and burned-in subtitles. Free for Windows.",
    eyebrow: "Captions & subtitles",
    h1: "Captions and subtitles, made on your computer",
    intro:
      "Turn speech into captions without uploading your video. Style them, fix the words, and export them as a file or burn them into the picture.",
    screenshot: screenshots.captionStyles,
    sections: [
      {
        title: "Speech-to-text that stays on your computer",
        body: "Transcription runs locally with whisper.cpp, so your footage is not sent to a transcription service. Accuracy depends on the language and the audio, so review the text before you publish.",
      },
      {
        title: "Caption styles that hold attention",
        body: "Start from presets such as Bold Pop, Karaoke Highlight, Minimal Cinema and Boxed News, then change the font, colour, outline and position. Words can light up as they are spoken.",
        points: [
          "Edit any word in the caption editor",
          "Choose how many words appear at once",
          "Burn captions into the video on export",
        ],
      },
      {
        title: "Subtitle files in and out",
        body: "Import an existing SRT or VTT file, or export your captions as SRT or VTT for YouTube and other platforms. You can translate captions when you connect an AI provider.",
      },
      {
        title: "Cut by the transcript",
        body: "Read the transcript, delete the words you do not want, and the matching video is cut for you. Silences and filler words can be removed in one step.",
      },
    ],
    faq: [
      {
        q: "Does the transcription need internet?",
        a: "The speech model downloads once, then transcription works offline on your computer.",
      },
      {
        q: "Can I export subtitles as SRT?",
        a: "Yes. Export captions as SRT or VTT, or burn them into the video as part of the export.",
      },
      {
        q: "Does it work for my language?",
        a: "Whisper supports many languages, with different accuracy for each. Always check the result, and fix any line in the caption editor.",
      },
    ],
    related: ["telugu-video-editor", "ai-video-editor", "youtube-video-editor"],
  },
  {
    slug: "screen-recorder-and-screenshots",
    label: "Screen recorder & screenshots",
    summary: "Record your screen, an area or your camera and edit it straight away.",
    metaTitle: "Screen Recorder with Built-in Video Editor",
    metaDescription:
      "Record your whole screen, just an area or your camera, take screenshots like the Snipping Tool, and edit it all in the same free Windows video editor.",
    eyebrow: "Record & capture",
    h1: "Record your screen and edit it in the same app",
    intro:
      "Capture a tutorial, a gameplay clip or a meeting, and it lands on your timeline ready to cut. No separate recorder, no file shuffling.",
    screenshot: screenshots.recordMenu,
    sections: [
      {
        title: "Record exactly what you want",
        body: "Record the camera, the entire screen, a window, or drag out just the area you need. OpenCineWorks steps out of the way while you record, so it is not in your video.",
      },
      {
        title: "Screenshots like the Snipping Tool",
        body: "Drag an area or capture the whole screen. The picture is added to your project media straight away, ready to drop on the timeline.",
      },
      {
        title: "Then polish it",
        body: "Trim the mistakes, add titles and callouts, zoom into the important part, add music and captions, and export. Everything is in one editor.",
        points: [
          "Titles, lower thirds and callouts",
          "Zoom and pan on the part that matters",
          "Voiceover and background music",
        ],
      },
    ],
    faq: [
      {
        q: "Is the screen recorder free?",
        a: "Yes, recording and screenshots are part of the free editor.",
      },
      {
        q: "Can I record just part of the screen?",
        a: "Yes. Drag out an area and only that area is recorded.",
      },
      {
        q: "Where do recordings go?",
        a: "They are saved on your computer and added to the project's media, so you can edit them right away.",
      },
    ],
    related: ["youtube-video-editor", "auto-captions-subtitles", "ai-video-editor"],
  },
  {
    slug: "free-music-and-sound-effects",
    label: "Free music & sound effects",
    summary: "1,009 free music tracks and 929 sound effects, no credit needed.",
    metaTitle: "Free Music and Sound Effects for Videos (CC0)",
    metaDescription:
      "Built-in library of 1,009 free music tracks and 929 sound effects, all CC0 public domain. Search, preview and add to your video in one click. Works offline.",
    eyebrow: "Music & sound",
    h1: "Free music and sound effects, already in your editor",
    intro:
      "Search the library, preview a track and add it to your timeline in one click. Everything in it is public domain (CC0), so you can use it in any video with no credit and no copyright claim from the library.",
    screenshot: screenshots.freeMusic,
    sections: [
      {
        title: "1,009 music tracks",
        body: "Browse by mood and category, such as cinematic, upbeat, calm and dramatic. Music sits under your edit and can lower itself while someone is speaking.",
      },
      {
        title: "929 sound effects",
        body: "Whooshes, pops, clicks, impacts and jingles for transitions and emphasis. Add them by hand or let the AI place them for you.",
      },
      {
        title: "Free, with the licences shown",
        body: "The tracks and effects are CC0 public domain. Every source and licence is listed on the licences page, and they download the first time you use them, then work offline.",
        points: ["No attribution needed for CC0", "Works offline after the first download", "Also free fonts, icons and 3D emoji stickers"],
      },
    ],
    faq: [
      {
        q: "Can I use the music in monetised YouTube videos?",
        a: "CC0 means the author gave up their rights, so you can use the tracks in any video, including monetised ones. YouTube's automated matching can occasionally flag any music, so keep the licence page handy.",
      },
      {
        q: "Do I need to credit the artists?",
        a: "Not for CC0 content. The app still shows each source for transparency.",
      },
      {
        q: "Does it need internet?",
        a: "Only to download a track the first time. After that it works offline.",
      },
    ],
    related: ["ai-video-editor", "telugu-video-editor", "youtube-video-editor"],
  },
  {
    slug: "youtube-video-editor",
    label: "YouTube video editor",
    summary: "Edit, export in 1080p or 4K and publish to YouTube from the app.",
    metaTitle: "YouTube Video Editor — Edit, Export & Publish",
    metaDescription:
      "A free video editor for YouTube creators on Windows: titles, captions, music, thumbnails, 1080p and 4K export presets, publishing to YouTube and live streaming.",
    eyebrow: "For YouTube creators",
    h1: "A video editor built around the YouTube workflow",
    intro:
      "Cut the video, add titles, captions and music, pick a thumbnail frame, export in the right size, and publish, without leaving the editor.",
    screenshot: screenshots.editor,
    sections: [
      {
        title: "Edit faster",
        body: "A multi-track timeline with ripple edits, transitions, effects, colour tools and audio mixing. Use the AI to remove silences, add captions and lay in music, then fine-tune by hand.",
      },
      {
        title: "Export presets",
        body: "Presets for YouTube 1080p and 4K, and vertical sizes for Shorts, Reels and TikTok. Exports run in a background queue so you can keep editing.",
        points: [
          "Pick a thumbnail frame from your video",
          "Loudness normalisation for even sound",
          "Hardware-accelerated export when your graphics card supports it",
        ],
      },
      {
        title: "Publish and schedule",
        body: "Connect your Google account and upload to your channel from the Export page, as public, unlisted or private. You can also schedule posts.",
      },
      {
        title: "Go Live",
        body: "Stream to YouTube and other services, or stream a video you just edited. If the connection drops, it reconnects by itself.",
      },
    ],
    faq: [
      {
        q: "Can I upload to YouTube from the editor?",
        a: "Yes. Connect your Google account in Settings, then publish from the Export page.",
      },
      {
        q: "Can it make YouTube Shorts?",
        a: "Yes. Choose a vertical size, or let the AI reframe a landscape video for vertical.",
      },
      {
        q: "Is there a watermark?",
        a: "No. The watermark is off by default and is only there if you switch it on.",
      },
    ],
    related: ["ai-video-editor", "auto-captions-subtitles", "screen-recorder-and-screenshots"],
  },
];

export const landingBySlug = Object.fromEntries(landingPages.map((page) => [page.slug, page]));
