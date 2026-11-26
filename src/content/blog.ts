import { screenshots, type Screenshot } from "./screenshots";

/**
 * Guides and tutorials. Each one answers a question people actually search for, with steps that
 * match the app. The "vs CapCut" and "vs Filmora" comparisons live on their own pages
 * (/capcut-alternative/, /filmora-alternative/) so the same text is never published twice.
 */

export interface BlogSection {
  title: string;
  body?: string;
  /** Numbered steps. */
  steps?: string[];
  /** Bullet points. */
  points?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  /** Shorter title for search results, when the headline is long. */
  metaTitle?: string;
  description: string;
  /** ISO date the guide was first published. */
  published: string;
  readMinutes: number;
  screenshot: Screenshot;
  intro: string;
  sections: BlogSection[];
  /** Landing-page slugs to point readers to afterwards. */
  related: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-edit-videos-using-claude-ai",
    title: "How to edit videos using Claude AI",
    description:
      "A practical guide to editing video with Claude: how to start, prompts that work, and how to review and undo what the AI does on your timeline.",
    published: "2026-11-26",
    readMinutes: 5,
    screenshot: screenshots.aiEdit,
    intro:
      "You can describe an edit to Claude and watch it happen on your own timeline. This guide covers how to start small, which requests work well, and how to stay in control.",
    sections: [
      {
        title: "Start with one small job",
        body: "Open a project that already has a clip or two, then ask for one thing, such as “remove the silences”. A small request teaches you how Claude edits and is easy to undo if you do not like it.",
      },
      {
        title: "Requests that work well",
        points: [
          "“Remove the silences and the filler words.”",
          "“Add captions in a bold style and keep them to three words at a time.”",
          "“Find the three strongest moments and cut each into its own sequence.”",
          "“Put calm background music under the speech and lower it while I talk.”",
          "“Reframe this for vertical 9:16 so I stay centered.”",
        ],
      },
      {
        title: "Be specific about the result",
        body: "Say who the video is for, how long it should be and what style you want. “Make a 45-second teaser for YouTube with a hook in the first three seconds” gives Claude much more to work with than “make it better”.",
      },
      {
        title: "Review every change",
        steps: [
          "Watch the edit from the start, with sound on.",
          "Check the cuts: is anything important missing, or is a cut too tight?",
          "Ask Claude to explain what it changed if something looks odd.",
          "Press Ctrl+Z to undo a step, or open version history to return to an earlier save.",
        ],
      },
      {
        title: "Keep control of risky actions",
        body: "Deleting, large cuts and exports wait for your approval inside OpenCineWorks, so Claude cannot remove or render anything without you saying yes.",
      },
    ],
    related: ["edit-video-with-claude", "ai-video-editor", "mcp-video-editor"],
  },
  {
    slug: "how-to-generate-telugu-subtitles-automatically",
    title: "How to generate Telugu subtitles automatically (and get them right)",
    metaTitle: "Generate Telugu Subtitles Automatically",
    description:
      "Get better automatic Telugu subtitles: how to record cleaner audio, proofread the transcript, fix names and export SRT or burned-in captions.",
    published: "2026-11-26",
    readMinutes: 5,
    screenshot: screenshots.captionStyles,
    intro:
      "Automatic transcription of Telugu is a good first draft, not a finished product. The difference between a messy result and a clean one is mostly the audio and a short proofreading pass.",
    sections: [
      {
        title: "Start with clean audio",
        body: "The speech engine works on your computer, so the better the recording, the better the text.",
        points: [
          "Record close to the microphone in a quiet room",
          "Keep music low or add it after transcribing",
          "Speak one person at a time where you can",
        ],
      },
      {
        title: "Generate the first draft",
        steps: [
          "Open the project and go to the Transcript view.",
          "Press Transcribe and wait for the speech model to finish.",
          "Open Captions and press Generate captions to turn the words into timed subtitles.",
        ],
      },
      {
        title: "Proofread, then fix",
        body: "Read the captions as the video plays. Telugu accuracy depends on the speaker and the audio, and names, English words mixed into Telugu and unusual terms are where mistakes cluster. Fix each one in the caption editor.",
      },
      {
        title: "Keep a list of tricky words",
        body: "Write down the names and terms that came out wrong once, and check for them every time. It makes the next video faster.",
      },
      {
        title: "Export",
        body: "Burn the subtitles into the video for a vertical short, or export an SRT file and upload it with the video on YouTube so viewers can switch it on and off.",
      },
    ],
    related: ["telugu-subtitle-generator", "telugu-video-editor", "auto-captions-subtitles"],
  },
  {
    slug: "how-to-remove-silence-from-videos-using-ai",
    title: "How to remove silence from videos using AI",
    description:
      "Cut the dead air from talking videos: use Remove silences on the AI Edit page, then tidy the result so your video keeps a natural rhythm.",
    published: "2026-11-26",
    readMinutes: 4,
    screenshot: screenshots.aiEdit,
    intro:
      "Silences and “umm” pauses make a talking video drag. Removing them by hand means hundreds of cuts. Here is the fast way, and how to keep the result sounding natural.",
    sections: [
      {
        title: "The one-click way",
        steps: [
          "Open your project and choose AI Edit in the left rail.",
          "Pick Remove silences.",
          "Wait while the edit is made, then watch the before and after preview.",
          "Accept it, or press Ctrl+Z to undo.",
        ],
      },
      {
        title: "Also remove filler words",
        body: "Open the Transcript view, press Transcribe, and remove filler words such as “uh” and “um”, or press Remove filler on the AI Edit page. Deleting words in the transcript cuts the matching video.",
      },
      {
        title: "Keep it natural",
        points: [
          "Leave a short pause between sentences; no breathing room sounds robotic",
          "Listen for clipped word endings at each cut",
          "Cover obvious jump cuts with a quick zoom or a cutaway",
        ],
      },
      {
        title: "Ask for exactly what you want",
        body: "If you are working with Claude or Codex, you can be specific: “remove pauses longer than half a second, but keep the pause before each new topic”.",
      },
    ],
    related: ["ai-video-editor", "auto-captions-subtitles", "youtube-shorts-editor"],
  },
  {
    slug: "how-to-edit-youtube-videos-for-free",
    title: "How to edit YouTube videos for free, start to finish",
    description:
      "A complete free workflow for YouTube videos on Windows: import, rough cut, titles, music, captions, colour, export and publish, all in one editor.",
    published: "2026-11-26",
    readMinutes: 6,
    screenshot: screenshots.editor,
    intro:
      "You do not need paid software to make a good YouTube video. Here is a complete workflow, in the order that saves the most time.",
    sections: [
      {
        title: "1. Bring in your footage",
        body: "Create a project and use Upload to import your clips, or Record to capture your screen or camera straight into the project.",
      },
      {
        title: "2. Make the rough cut",
        body: "Put the clips on the timeline and trim the start and end of each. Remove silences and mistakes first, since the shorter the video, the less polishing it needs.",
      },
      {
        title: "3. Add titles and graphics",
        body: "Use the Text panel for headings and templates, and Elements for lower thirds and callouts. Keep titles short and on screen long enough to read twice.",
      },
      {
        title: "4. Music and sound",
        body: "Add a track from the free music library, keep it under the speech, and add a few sound effects on transitions. Normalise loudness so the whole video sounds even.",
      },
      {
        title: "5. Captions",
        body: "Generate captions and pick a style that is easy to read. Many people watch without sound.",
      },
      {
        title: "6. Export and publish",
        steps: [
          "Open Export and pick the YouTube 1080p preset (or YouTube 4K Ultra HD).",
          "Choose a thumbnail frame from your video.",
          "Start the export; it renders in the background so you can keep working.",
          "Connect your Google account and publish from the Publish tab, or upload the file yourself.",
        ],
      },
    ],
    related: ["youtube-video-editor", "free-music-and-sound-effects", "video-editor-without-subscription"],
  },
  {
    slug: "how-to-connect-claude-mcp-to-a-video-editor",
    title: "How to connect Claude (MCP) to a video editor",
    description:
      "What MCP is, how to switch it on in OpenCineWorks, how Claude connects and what to check when it does not.",
    published: "2026-11-26",
    readMinutes: 5,
    screenshot: screenshots.settings,
    intro:
      "MCP, the Model Context Protocol, is how AI apps like Claude use other programs. Connecting it to a video editor is what lets Claude edit your timeline, not just talk about editing.",
    sections: [
      {
        title: "What you are connecting",
        body: "OpenCineWorks runs a small server on your computer that offers editing tools. Claude connects to it, reads your project and calls those tools. Nothing is opened to the internet.",
      },
      {
        title: "Set it up",
        steps: [
          "Install and open OpenCineWorks, and open a project.",
          "Go to Settings → AI engines and switch on “Let AI apps edit”.",
          "Choose Claude Desktop, Claude Code or Codex and follow the short steps shown for it.",
          "Restart the AI app if it asks, then ask it to describe your project to confirm the link works.",
        ],
      },
      {
        title: "If it does not connect",
        points: [
          "OpenCineWorks must be running while you use the AI app",
          "“Let AI apps edit” must be switched on in Settings → AI engines",
          "Restart the AI app after the first setup",
          "Check that you have a project open",
        ],
      },
      {
        title: "Security you should know about",
        body: "Only apps on your computer you have approved can connect. Deleting, large cuts, reading files from disk, downloads and exports wait for your approval, and every edit is in the undo history.",
      },
    ],
    related: ["mcp-video-editor", "edit-video-with-claude", "codex-video-editing"],
  },
  {
    slug: "best-free-video-editing-software-for-windows",
    title: "Best free video editing software for Windows: how to choose",
    metaTitle: "Best Free Video Editing Software for Windows",
    description:
      "An honest guide to choosing free video editing software for Windows: what to look for, and where Clipchamp, DaVinci Resolve, Shotcut, OpenShot and OpenCineWorks fit.",
    published: "2026-11-26",
    readMinutes: 6,
    screenshot: screenshots.editor,
    intro:
      "There is no single best editor, only the best one for your video and your computer. We make OpenCineWorks, so we list it among the options and tell you where others may suit you better. Features and prices change, so check each product's website.",
    sections: [
      {
        title: "Decide what you need first",
        points: [
          "What do you make: YouTube videos, shorts, tutorials, interviews?",
          "How powerful is your PC? Some editors need a strong graphics card.",
          "Do you want AI help, or only a manual editor?",
          "Do you need your language (for example Telugu or Hindi) to render correctly?",
        ],
      },
      {
        title: "Microsoft Clipchamp",
        body: "A simple editor from Microsoft, easy for beginners and well suited to quick videos. Some features and export options depend on the plan, so check what the free tier includes.",
      },
      {
        title: "DaVinci Resolve (free version)",
        body: "A professional editor and colour tool with a free version. It is extremely capable and has a steeper learning curve and heavier hardware needs.",
      },
      {
        title: "Shotcut, OpenShot and Kdenlive",
        body: "Open-source editors that are free to use. They are flexible and good for learning, and their interfaces are more technical than a quick-edit app.",
      },
      {
        title: "OpenCineWorks",
        body: "A free Windows editor with built-in captions, titles in Telugu and other Indian scripts, a free music library, screen recording, live streaming and optional AI editing with Claude or Codex. It is young and Windows-only, with a smaller template collection than long-established products.",
      },
      {
        title: "How to decide in ten minutes",
        steps: [
          "Pick two editors from this list.",
          "Edit the same one-minute clip in both.",
          "Notice which one you could finish faster and which export looks right.",
          "Keep the one that got out of your way.",
        ],
      },
    ],
    related: ["video-editor-for-windows", "video-editor-without-subscription", "capcut-alternative"],
  },
  {
    slug: "how-to-turn-long-videos-into-youtube-shorts",
    title: "How to turn a long video into YouTube Shorts",
    description:
      "Find the best moments in a long video, cut them into vertical clips and export Shorts: a workflow using the transcript, AI and 9:16 export presets.",
    published: "2026-11-26",
    readMinutes: 5,
    screenshot: screenshots.aiEdit,
    intro:
      "One long video can become several Shorts. The hard part is finding the moments worth cutting. Here is how to do it quickly.",
    sections: [
      {
        title: "Find the moments",
        steps: [
          "Transcribe the video in the Transcript view.",
          "Search the transcript for the questions, stories and surprises: the lines you would quote.",
          "Or ask Claude or Codex: “find three moments with a strong hook and cut each into its own sequence”.",
        ],
      },
      {
        title: "Cut each clip tight",
        body: "A Short should start on the strongest line, not a slow introduction. Trim the start until the first second grabs attention, and remove pauses.",
      },
      {
        title: "Go vertical",
        body: "Set a 1080 × 1920 frame or ask the AI to reframe for vertical so the speaker stays centered. Check the framing on every clip.",
      },
      {
        title: "Captions and energy",
        body: "Add bold captions, a few punch-in zooms on key words and light background music.",
      },
      {
        title: "Export each Short",
        body: "Choose Instagram Reels (9:16) or TikTok (9:16) in Export. The same vertical file works for YouTube Shorts too, so one edit serves all three.",
      },
    ],
    related: ["youtube-shorts-editor", "ai-video-editor", "auto-captions-subtitles"],
  },
  {
    slug: "how-to-add-telugu-text-to-videos",
    title: "How to add Telugu text to videos",
    description:
      "Add Telugu titles to a video so every letter and vowel sign shows correctly: choose a Telugu font, style and animate the text, and check it in the preview.",
    published: "2026-11-26",
    readMinutes: 4,
    screenshot: screenshots.textPanel,
    intro:
      "Telugu text often breaks in video editors: vowel signs separate from letters and conjuncts fall apart. Here is how to add Telugu text that exports correctly.",
    sections: [
      {
        title: "Add the text",
        steps: [
          "Open the Text panel in the left rail.",
          "Choose Add a heading, or pick a ready-made style on the Templates tab.",
          "Type or paste your Telugu text onto the title.",
        ],
      },
      {
        title: "Choose a Telugu font",
        body: "Select the title and pick one of the Telugu fonts. There are 22 Telugu font families, downloaded the first time you use one. Fonts that do not include Telugu will show empty boxes, so if you see boxes, change the font.",
      },
      {
        title: "Make it readable",
        points: [
          "Add an outline or a background box so the text stands out on busy footage",
          "Use a larger size than you would for English; Telugu has taller marks",
          "Add a simple entrance animation, such as fade or pop",
        ],
      },
      {
        title: "Check before you export",
        body: "Telugu is shaped by a proper text engine when you export, so the result matches the preview. Play the video once and read every title, looking at vowel signs and conjuncts.",
      },
    ],
    related: ["telugu-video-editor", "telugu-subtitle-generator", "free-music-and-sound-effects"],
  },
];

export const blogBySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post]));
