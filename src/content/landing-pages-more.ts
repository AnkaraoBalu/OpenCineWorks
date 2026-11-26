import type { LandingPage } from "./landing-pages";
import { screenshots } from "./screenshots";

/**
 * More search landing pages. Each one has its own angle and its own text: nothing is repeated
 * across pages with only the keyword swapped. Claims about other products are kept to well-known
 * facts and always point readers to check the current details on the other product's website.
 */

const OTHER_PRODUCTS =
  "OpenCineWorks is an independent project and is not affiliated with or endorsed by the products it is compared with. Product names are trademarks of their owners. Prices and features of other products change, so check their websites for the current details.";

export const moreLandingPages: LandingPage[] = [
  {
    slug: "capcut-alternative",
    label: "CapCut alternative",
    summary: "A free desktop editor with captions and effects, and no account needed.",
    metaTitle: "Free CapCut Alternative for Windows",
    metaDescription:
      "Looking for a free CapCut alternative for Windows? OpenCineWorks has caption styles, transitions, effects and free music, works offline and needs no account.",
    eyebrow: "CapCut alternative",
    h1: "A free CapCut alternative that runs on your own computer",
    intro:
      "If you like quick captions, effects and short-form editing but want an editor with no sign-in that keeps your projects as plain files on your PC, OpenCineWorks is built for that.",
    screenshot: screenshots.captionStyles,
    disclaimer: OTHER_PRODUCTS,
    sections: [
      {
        title: "What CapCut users will recognise",
        body: "The things people open a quick editor for are all here: styled captions, transitions, effects, stickers, free music and a vertical export for Reels and TikTok.",
        points: [
          "Caption presets such as Bold Pop and Karaoke Highlight",
          "30 transitions and 22 effects, previewed on your own clip",
          "Free music, sound effects, icons and 1,595 emoji stickers",
          "Export presets for Instagram Reels (9:16) and TikTok (9:16)",
        ],
      },
      {
        title: "What is different",
        body: "OpenCineWorks does not ask you to sign in, and your projects live in a folder on your computer, not in an online account. It also adds things short-form editors usually skip: a multi-track timeline, loudness normalisation and correctly shaped Telugu and Hindi text.",
        points: [
          "No account, and editing works offline once installed",
          "AI editing through your own Claude or Codex subscription",
          "Titles in 22 Telugu fonts that export correctly",
        ],
      },
      {
        title: "Where CapCut may suit you better",
        body: "CapCut has phone apps and a very large, constantly refreshed library of trending templates and effects. OpenCineWorks is for Windows computers only for now and has a smaller set of ready-made templates. If you edit mainly on your phone, CapCut is the more natural fit.",
      },
      {
        title: "Switching over",
        body: "Projects do not move between editors, but your footage does. Export or keep your original clips, import them into a new OpenCineWorks project, and rebuild the edit with the AI or by hand.",
      },
    ],
    faq: [
      {
        q: "Is OpenCineWorks really free?",
        a: "Yes. The editor, exports and the built-in library are free. Only the optional AI editing needs your own Claude or Codex subscription.",
      },
      {
        q: "Do I need an account?",
        a: "No. There is no sign-up, and the app does not need an internet connection to edit.",
      },
      {
        q: "Can I make vertical videos for Shorts, Reels and TikTok?",
        a: "Yes. Pick a 9:16 export preset, or ask the AI to reframe a landscape video for vertical.",
      },
    ],
    related: ["youtube-shorts-editor", "auto-captions-subtitles", "video-editor-without-subscription"],
  },
  {
    slug: "filmora-alternative",
    label: "Filmora alternative",
    summary: "Titles, effects and elements without a paid plan or a trial limit.",
    metaTitle: "Free Filmora Alternative for Windows",
    metaDescription:
      "A free Filmora alternative: OpenCineWorks gives you 40 title templates, 30 transitions, 22 effects, motion graphics and AI editing, with no paid plan to unlock features.",
    eyebrow: "Filmora alternative",
    h1: "A Filmora alternative with every feature unlocked",
    intro:
      "Filmora is a popular, friendly editor with paid plans. If you would rather have titles, effects and motion graphics without a plan to buy, here is what OpenCineWorks gives you for free.",
    screenshot: screenshots.elements,
    disclaimer: OTHER_PRODUCTS,
    sections: [
      {
        title: "Everything is included",
        body: "There are no locked features and no trial period in OpenCineWorks. Exports have no watermark unless you switch one on yourself.",
        points: [
          "40 ready-made title templates and 115 fonts",
          "Motion graphics: lower thirds, callouts, charts, progress bars and before/after cards",
          "Colour looks such as Golden Hour, Noir and Cyberpunk, plus film grain, VHS and glitch",
          "Adjustment layers that grade everything underneath",
        ],
      },
      {
        title: "AI features, said plainly",
        body: "OpenCineWorks does not sell AI credits. The AI editing uses the Claude or Codex subscription you already have, so you pay that provider, not us, and you can skip AI completely and edit by hand.",
      },
      {
        title: "Built to be checked, not just trusted",
        body: "Every edit the AI makes lands on a normal timeline you can inspect and undo, and previews match the final export, so you see the real result before you render.",
      },
      {
        title: "Where Filmora may suit you better",
        body: "Filmora offers a large store of polished effects and templates, support for Mac as well as Windows, and a lot of beginner tutorials. OpenCineWorks is Windows-only today and is a younger project with a smaller template collection.",
      },
    ],
    faq: [
      {
        q: "Will my exports have a watermark?",
        a: "Not by default. A small watermark exists only if you choose to switch it on.",
      },
      {
        q: "Can I open a Filmora project in OpenCineWorks?",
        a: "No, projects do not transfer between editors. Import your original footage and rebuild the edit.",
      },
      {
        q: "Does it have effects and titles like Filmora?",
        a: "Yes: effects, transitions, title templates, stickers and motion graphics are built in. The collection is smaller than a large paid store.",
      },
    ],
    related: ["capcut-alternative", "premiere-pro-alternative", "video-editor-without-subscription"],
  },
  {
    slug: "premiere-pro-alternative",
    label: "Premiere Pro alternative",
    summary: "A lighter free editor with a real timeline, scopes, audio mixer and EDL export.",
    metaTitle: "Free Premiere Pro Alternative for Creators",
    metaDescription:
      "A lighter, free alternative to Adobe Premiere Pro for creators: multi-track timeline, ripple and trim edits, colour scopes, audio mixer, multicam and EDL export.",
    eyebrow: "Premiere Pro alternative",
    h1: "A lighter alternative to Premiere Pro for everyday video",
    intro:
      "Premiere Pro is a professional tool with a monthly subscription. Plenty of creators only need a solid timeline, good titles and clean export, and that is what OpenCineWorks focuses on.",
    screenshot: screenshots.editor,
    disclaimer: OTHER_PRODUCTS,
    sections: [
      {
        title: "When Premiere is more than you need",
        body: "If your work is YouTube videos, reels, tutorials and interviews, a full broadcast toolkit adds cost and learning time without adding to your finished video. A focused editor gets you to the export sooner.",
      },
      {
        title: "A real editing toolset",
        body: "OpenCineWorks is not a toy timeline. It has the controls editors expect, and you can do all of it by hand.",
        points: [
          "Multi-track timeline with ripple, trim and three-point editing",
          "Colour grading with video scopes and look matching",
          "Audio mixer, loudness normalisation and music ducking",
          "Multicam editing and speed ramps",
          "EDL export, so you can finish a cut in another tool",
        ],
      },
      {
        title: "AI that works on the same timeline",
        body: "Ask Claude or Codex for a rough cut, silence removal or captions and review the result as ordinary clips. You keep the final say on every cut.",
      },
      {
        title: "Where Premiere Pro is the better choice",
        body: "If you rely on After Effects, a large plugin ecosystem, shared team projects or broadcast delivery formats, Premiere Pro is the stronger choice. OpenCineWorks is Windows-only and does not aim to replace a full post-production pipeline.",
      },
    ],
    faq: [
      {
        q: "Is OpenCineWorks suitable for professional work?",
        a: "It covers what most creator and small-business videos need. For high-end broadcast pipelines, a full professional suite is the better fit.",
      },
      {
        q: "Can I take my edit to another editor?",
        a: "You can export an EDL (edit decision list), which many editors can import to rebuild the cut.",
      },
      {
        q: "Is there a subscription?",
        a: "No. OpenCineWorks is free to use.",
      },
    ],
    related: ["video-editor-for-windows", "mcp-video-editor", "filmora-alternative"],
  },
  {
    slug: "video-editor-for-windows",
    label: "Video editor for Windows",
    summary: "Installs in a minute on Windows 10 and 11, with GPU-accelerated export.",
    metaTitle: "Free Video Editor for Windows 10 & 11",
    metaDescription:
      "OpenCineWorks is a free video editor made for Windows 10 and 11: one-click installer, GPU-accelerated H.264 export, MP4, MOV, WebM and WAV support, no account.",
    eyebrow: "Made for Windows",
    h1: "A free video editor made for Windows 10 and 11",
    intro:
      "OpenCineWorks is a Windows desktop app. It installs with one click, uses your graphics card to export faster when it can, and keeps your files in normal Windows folders.",
    screenshot: screenshots.settings,
    steps: [
      { title: "Download the installer", body: "Get the free Windows installer from the download page." },
      {
        title: "Run it",
        body: "Windows may show “Windows protected your PC” for a new app. Choose More info, then Run anyway. The installer finishes in under a minute and adds a desktop shortcut.",
      },
      {
        title: "Open a project",
        body: "Create a project, import your clips with Upload or Record, and start cutting.",
      },
    ],
    sections: [
      {
        title: "Fast export on your graphics card",
        body: "When your PC has a graphics card that can encode H.264, OpenCineWorks uses it to render faster, and exports run in a background queue so you can keep working.",
      },
      {
        title: "The formats you actually use",
        body: "Import MP4, MOV, WebM, WAV and PNG files. Export to MP4, MOV or WebM, as audio, as caption files, or as an EDL for another editor.",
      },
      {
        title: "Normal Windows folders",
        body: "Projects, recordings and exports live in your Documents and Videos folders, and you can pick another export folder. Back up the projects folder the way you back up anything else.",
        points: [
          "Windows voices available for voiceover without any online service",
          "Screen and area recording built in",
          "Windows 10 or 11, 64-bit; no account required",
        ],
      },
      {
        title: "Free to download",
        body: "The editor is free. If it saves you time, an optional donation helps keep it going.",
      },
    ],
    faq: [
      {
        q: "Which versions of Windows are supported?",
        a: "Windows 10 and Windows 11, 64-bit.",
      },
      {
        q: "Do I need a powerful graphics card?",
        a: "No. A modern 64-bit processor is enough. A graphics card with H.264 encoding only makes exports faster.",
      },
      {
        q: "Is there a Mac or Linux version?",
        a: "Not yet. OpenCineWorks is Windows-only for now.",
      },
    ],
    related: ["youtube-video-editor", "screen-recorder-and-screenshots", "video-editor-without-subscription"],
  },
  {
    slug: "codex-video-editing",
    label: "Edit video with Codex",
    summary: "Give Codex a multi-step editing job and review the result on your timeline.",
    metaTitle: "Edit Video with Codex — Prompts & Workflow",
    metaDescription:
      "Use Codex to edit video in OpenCineWorks: example prompts for multi-step jobs like finding hooks, cutting by transcript and checking loudness, with every change undoable.",
    eyebrow: "Codex",
    h1: "Hand Codex a whole editing job, then review it",
    intro:
      "Codex is good at long, multi-step tasks. Connected to OpenCineWorks, it can run a list of edits in order and you review the finished timeline, instead of clicking through every step yourself.",
    screenshot: screenshots.aiEdit,
    disclaimer:
      "Codex is a trademark of OpenAI. OpenCineWorks is an independent project and is not affiliated with OpenAI.",
    sections: [
      {
        title: "Connect it once",
        body: "In OpenCineWorks open Settings → AI engines, switch on “Let AI apps edit”, and follow the Codex steps shown there. After that Codex can read and edit the project you have open.",
      },
      {
        title: "Jobs that suit Codex",
        body: "Write the job as a numbered list and let it work through it. A few that work well:",
        points: [
          "“Transcribe the episode, find three moments with a strong hook, and cut each into its own sequence.”",
          "“Remove the silences and filler words, then add captions in a bold style.”",
          "“Place sound effects on the transitions and lower the music under speech.”",
          "“Check the loudness of the whole edit and fix anything outside the target.”",
        ],
      },
      {
        title: "Ask it to check its own work",
        body: "The same tools the AI uses to edit can also look at the result: it can view frames from the timeline, measure loudness and colour, and verify an export. Ask Codex to finish every job with a review pass and tell you what it found.",
      },
      {
        title: "You stay in charge",
        body: "Deleting, large cuts and exports wait for your approval inside OpenCineWorks, and every change goes into the undo history. Codex works under your OpenAI account; OpenCineWorks adds no AI charges.",
      },
    ],
    faq: [
      {
        q: "Do I need a paid Codex plan?",
        a: "You use your own Codex account under its own terms. OpenCineWorks does not resell or add to it.",
      },
      {
        q: "Can I use Claude and Codex together?",
        a: "You can connect more than one AI app, but only the ones you approve can edit.",
      },
      {
        q: "What if Codex makes a mistake?",
        a: "Press Ctrl+Z, or use the version history to go back to an earlier save.",
      },
    ],
    related: ["edit-video-with-claude", "mcp-video-editor", "ai-video-editor"],
  },
  {
    slug: "mcp-video-editor",
    label: "MCP video editor",
    summary: "A desktop video editor with a local MCP server and 170+ editing tools.",
    metaTitle: "MCP Video Editor — AI Tools for Your Timeline",
    metaDescription:
      "OpenCineWorks is a desktop video editor with a local MCP server: 170+ tools for the timeline, captions, titles, audio, colour and export, with approvals and undo.",
    eyebrow: "Model Context Protocol",
    h1: "A video editor with an MCP server built in",
    intro:
      "The Model Context Protocol (MCP) lets AI apps use other programs through a shared set of tools. OpenCineWorks exposes its editor that way, so any MCP-capable AI app can edit the project you have open.",
    screenshot: screenshots.aiEdit,
    sections: [
      {
        title: "What the tools cover",
        body: "More than 170 tools, grouped the way an editor works, so an AI can do a complete job and not just a single step.",
        points: [
          "Timeline and clips: add, move, trim, split, speed, transform and delete",
          "Transcript and captions: transcribe, cut by text, generate and style captions",
          "Titles and graphics: text, templates, lower thirds, stickers and elements",
          "Audio: music, sound effects, volume, ducking, voice clean-up and loudness",
          "Colour and effects: grades, looks, transitions and masks",
          "Media and projects: import, search, organise, versions and templates",
          "Export: render jobs, history and verification",
        ],
      },
      {
        title: "Workflows, not just buttons",
        body: "Besides raw tools there are skills: step-by-step recipes, such as cutting highlights or making a reel, that an AI can load and follow so results are consistent.",
      },
      {
        title: "Local and permissioned",
        body: "The MCP server runs on your computer and is off until you switch on “Let AI apps edit” in Settings. Apps must ask to connect, and risky actions such as deleting, reading files on disk, downloads and exports wait for your approval.",
      },
      {
        title: "Seeing and measuring",
        body: "The AI can look at frames from your timeline and measure colour and loudness, so it can check an edit against what you asked for, not only apply it.",
      },
    ],
    faq: [
      {
        q: "Which clients can connect?",
        a: "Claude Desktop, Claude Code and Codex are supported, and other MCP-capable apps may work too.",
      },
      {
        q: "Is the MCP server exposed to the internet?",
        a: "No. It runs locally on your computer and only apps on your computer you have approved can use it.",
      },
      {
        q: "Does it work offline?",
        a: "The editor and its MCP server run on your computer. The AI app you connect has its own internet connection and account.",
      },
    ],
    related: ["edit-video-with-claude", "codex-video-editing", "ai-video-editor"],
  },
  {
    slug: "telugu-subtitle-generator",
    label: "Telugu subtitle generator",
    summary: "Make Telugu subtitles: transcribe, import or type them, style and export as SRT.",
    metaTitle: "Telugu Subtitle Generator (SRT & Burned-in)",
    metaDescription:
      "Make Telugu subtitles for your video: transcribe on your computer, import an SRT, or type lines, style them in Telugu fonts and export SRT or burn them in.",
    eyebrow: "Telugu subtitles",
    h1: "Make Telugu subtitles for your video, step by step",
    intro:
      "There are three ways to get Telugu subtitles into a video in OpenCineWorks. Pick the one that matches what you already have.",
    screenshot: screenshots.captionStyles,
    native: {
      lang: "te",
      title: "తెలుగు సబ్‌టైటిల్స్",
      body: "మీ వీడియోకు తెలుగు సబ్‌టైటిల్స్ తయారు చేయండి: ఆటోమేటిక్‌గా రాయించండి, ఉన్న SRT ఫైల్ తీసుకోండి, లేదా మీరే టైప్ చేయండి. తెలుగు ఫాంట్లలో స్టైల్ చేసి SRT గా ఎగుమతి చేయండి.",
    },
    steps: [
      {
        title: "Get the text in",
        body: "Open the Transcript view and press Transcribe, or import an SRT or VTT file you already have, or add caption lines and type the Telugu yourself.",
      },
      {
        title: "Check every line",
        body: "Automatic transcription is a draft, and accuracy for Telugu depends on the audio and the speaker. Read each line in the caption editor and fix mistakes before publishing.",
      },
      {
        title: "Style them",
        body: "Open Captions, choose a preset such as Bold Pop or Boxed News, and pick a Telugu font so every letter and vowel sign appears correctly.",
      },
      {
        title: "Export",
        body: "Burn the subtitles into the video, or export an SRT or VTT file to upload separately to YouTube.",
      },
    ],
    sections: [
      {
        title: "Keep Telugu lines readable",
        body: "Telugu words are often long, so keep each subtitle to one or two short lines and set a small number of words per caption. Test the result on a phone-sized preview.",
      },
      {
        title: "Burned-in or separate file",
        body: "Burned-in subtitles always show and look the same everywhere, which suits short vertical videos. A separate SRT lets viewers switch subtitles on and off on YouTube, which suits longer videos.",
      },
    ],
    faq: [
      {
        q: "Does the transcription understand Telugu?",
        a: "The speech engine supports many languages, but Telugu accuracy varies. Treat the result as a draft and proofread it.",
      },
      {
        q: "Will the Telugu letters render correctly?",
        a: "Yes. Telugu text is shaped by a proper text engine on export, so conjuncts and vowel signs stay together.",
      },
      {
        q: "Can I translate English subtitles into Telugu?",
        a: "You can translate captions when you connect an AI provider, then proofread the Telugu before you publish.",
      },
    ],
    related: ["telugu-video-editor", "auto-captions-subtitles", "youtube-video-editor"],
  },
  {
    slug: "video-editor-without-subscription",
    label: "Video editor without subscription",
    summary: "No monthly plan, no account, no trial limit: and what is still optional.",
    metaTitle: "Video Editor Without Subscription — Free for Windows",
    metaDescription:
      "A video editor with no subscription, no account and no trial: OpenCineWorks is free for Windows. Here is what is free, and what is optional if you add AI.",
    eyebrow: "No subscription",
    h1: "A video editor you do not have to subscribe to",
    intro:
      "No monthly plan, no sign-up and no trial that expires. Here is exactly what is free in OpenCineWorks, and the few things that cost money only if you choose to use them.",
    screenshot: screenshots.settings,
    sections: [
      {
        title: "What is free",
        body: "The editor itself and everything built into it.",
        points: [
          "The full timeline, titles, transitions, effects, colour and audio tools",
          "Export in up to 4K, without a watermark unless you add one",
          "Screen recording, screenshots and Go Live streaming",
          "1,000+ music tracks and 900+ sound effects (CC0), fonts, icons and emoji",
        ],
      },
      {
        title: "What costs money only if you want it",
        body: "Some extras use outside services, and you pay those providers directly with your own accounts.",
        points: [
          "AI editing through your own Claude or Codex subscription",
          "Optional AI voices or stock footage that need a key from that service",
        ],
      },
      {
        title: "Nothing locked to an account",
        body: "Projects are files in your Documents folder. There is no cloud account to lose access to, and you can back the folder up yourself.",
      },
      {
        title: "Keeping it going",
        body: "The project is supported by optional donations. Giving is never required to use any feature.",
      },
    ],
    faq: [
      {
        q: "Is there a free trial that ends?",
        a: "No. The editor has no trial period and no locked features.",
      },
      {
        q: "Do I need to pay for AI to use it?",
        a: "No. The AI is optional. You can edit entirely by hand without it.",
      },
      {
        q: "How can I support the project?",
        a: "Through the optional donations page. It does not unlock anything.",
      },
    ],
    related: ["capcut-alternative", "filmora-alternative", "video-editor-for-windows"],
  },
  {
    slug: "youtube-shorts-editor",
    label: "YouTube Shorts editor",
    summary: "Turn a long video into a vertical Short: reframe, caption, zoom and export 9:16.",
    metaTitle: "Free YouTube Shorts Editor for Windows",
    metaDescription:
      "Make YouTube Shorts on Windows: reframe landscape video to 9:16, add captions, punch-in zooms and music, then export a vertical video. Free, no account.",
    eyebrow: "Shorts, Reels & TikTok",
    h1: "Make YouTube Shorts from your long videos",
    intro:
      "A good Short is a tight clip, framed for a phone, with captions people can read without sound. Here is the quick route in OpenCineWorks.",
    screenshot: screenshots.captionStyles,
    steps: [
      { title: "Pick the moment", body: "Find the strongest 30 to 60 seconds. Cut it on the timeline, or ask the AI to find hook moments in the transcript." },
      { title: "Make it vertical", body: "Choose a 1080 × 1920 frame, or ask the AI to “reframe the edit for vertical 9:16 so the subject stays centered”." },
      { title: "Add captions", body: "Open Captions → Generate captions and choose a bold preset so the words are easy to read on a small screen." },
      { title: "Add energy", body: "Use punch-in zooms on key words, a short music bed under the speech, and a sound effect on the cuts." },
      { title: "Export 9:16", body: "In Export choose Instagram Reels (9:16) or TikTok (9:16), or set 1080 × 1920 yourself, then publish." },
    ],
    sections: [
      {
        title: "Keep it short",
        body: "YouTube allows Shorts up to three minutes at the time of writing, but the shortest version that makes the point usually holds viewers best. Check YouTube's current rules before you publish.",
      },
      {
        title: "Same video, three places",
        body: "The same vertical export works for YouTube Shorts, Instagram Reels and TikTok, so you edit once and post to all three.",
      },
    ],
    faq: [
      {
        q: "Can OpenCineWorks reframe horizontal video automatically?",
        a: "Yes. Ask the AI to reframe the edit for vertical, or use Auto reframe in the video tools.",
      },
      {
        q: "Can I upload Shorts directly?",
        a: "Connect your Google account and publish from the Export page.",
      },
      {
        q: "Are the captions burned in?",
        a: "You choose: burn them into the video or export a separate caption file.",
      },
    ],
    related: ["youtube-video-editor", "auto-captions-subtitles", "capcut-alternative"],
  },
  {
    slug: "live-streaming-software",
    label: "Live streaming software",
    summary: "Go Live with scenes and sources, stream to several services and record at once.",
    metaTitle: "Live Streaming Software with a Built-in Editor",
    metaDescription:
      "Go Live from your video editor: scenes and sources, streaming to YouTube, Twitch, Facebook and Kick, multistream, auto-reconnect and recording. Free for Windows.",
    eyebrow: "Go Live",
    h1: "Live streaming software inside your video editor",
    intro:
      "Go Live is a streaming studio built into OpenCineWorks. Set up scenes, add your camera and screen, and stream while a recording saves to your computer.",
    screenshot: screenshots.goLive,
    sections: [
      {
        title: "Scenes and sources",
        body: "Build scenes from your screen, camera, images, videos, text and colour backgrounds, and switch between them while live. The audio mixer sits next to the preview.",
      },
      {
        title: "Stream to more than one place",
        body: "Stream to YouTube Live, Twitch, Facebook Live, Kick or any custom RTMP server, and send to several at the same time.",
        points: [
          "Automatic reconnect if the connection drops, and a recording keeps saving",
          "Live stats: frame rate, bitrate and dropped frames",
          "Stream keys are stored encrypted and never shown again",
        ],
      },
      {
        title: "Stream the video you just edited",
        body: "Pick an edited video as a source and it plays from the start the moment you go live, which suits premieres and replays.",
      },
      {
        title: "If you already use OBS",
        body: "OBS Studio is free, mature and very flexible, and a strong choice for complex setups and gaming. OpenCineWorks Go Live is for creators who want a simple studio in the same app where they edit.",
      },
    ],
    faq: [
      {
        q: "Which services can I stream to?",
        a: "YouTube Live, Twitch, Facebook Live, Kick and any custom RTMP server.",
      },
      {
        q: "Can I record while streaming?",
        a: "Yes. You can record, stream, or do both at once.",
      },
      {
        q: "Is my stream key safe?",
        a: "Keys are saved encrypted by your operating system's secure store and are never shown in the app again.",
      },
    ],
    related: ["screen-recorder-and-screenshots", "youtube-video-editor", "video-editor-for-windows"],
  },
];
