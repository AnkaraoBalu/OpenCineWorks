/** Screenshots of the real app (public/images/screenshots), with their sizes for layout. */
export interface Screenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const shot = (file: string, alt: string, width: number, height: number): Screenshot => ({
  src: `/images/screenshots/${file}`,
  alt,
  width,
  height,
});

export const screenshots = {
  editor: shot(
    "editor-overview.png",
    "The OpenCineWorks editor: media library, program monitor, a timeline with titles over the video, and the clip inspector",
    1903,
    945,
  ),
  aiEdit: shot(
    "ai-edit.png",
    "The AI Edit page: one-click requests, before and after previews, and the timeline the AI changed",
    1891,
    942,
  ),
  goLive: shot(
    "go-live-studio.png",
    "The Go Live studio: scenes, sources with the edited video, the program preview and the audio mixer",
    1917,
    958,
  ),
  recordMenu: shot(
    "record-menu.png",
    "The Record menu: record camera, record screen, screenshot an area or the whole screen",
    1912,
    557,
  ),
  settings: shot(
    "settings-general.png",
    "Settings: theme, language, default project size, auto save and cloud backup",
    1517,
    567,
  ),
  textPanel: shot(
    "text-panel.png",
    "Text panel with headings and default text styles",
    426,
    506,
  ),
  elements: shot(
    "elements-graphics.png",
    "Elements panel with motion graphics: lower thirds, callouts, charts, progress and comparison",
    420,
    522,
  ),
  freeMusic: shot(
    "free-music-library.png",
    "Free music library with 1,009 CC0 tracks, categories and one-click Add",
    432,
    517,
  ),
  transitions: shot(
    "transitions.png",
    "Transitions previewed on your own clip: fade, dissolve, flash, blur and more",
    430,
    506,
  ),
  effects: shot(
    "effects.png",
    "Effects panel with adjustment layers and free effect recipes",
    433,
    517,
  ),
  captionStyles: shot(
    "caption-styles.png",
    "Caption style presets: Bold Pop, Karaoke Highlight, Minimal Cinema, Boxed News",
    402,
    517,
  ),
} satisfies Record<string, Screenshot>;
