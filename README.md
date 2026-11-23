# OpenCineWorks website

The marketing and download site for **OpenCineWorks**, the AI video editor for Windows.
Built with Next.js (App Router), TypeScript and Tailwind CSS, exported as a static site.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to out/
```

## Publish

`npm run build` creates `out/` — plain HTML, CSS, JS and images. Upload that folder to any
static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3 + CloudFront, Nginx).

## The download

The Download button links to `/downloads/OpenCineWorks-Setup-0.1.0-x64.exe`.
Before publishing, put the Windows installer at:

```
public/downloads/OpenCineWorks-Setup-0.1.0-x64.exe
```

For a new release, change `version` and `download` in `src/content/site.ts` (one place) and add
the new installer to `public/downloads/`. To serve the installer from elsewhere (GitHub
Releases, a CDN), set `download.href` to that full URL.

## Structure

```
public/
  brand/                  logo-mark.svg
  downloads/              the Windows installer (added at release time)
  images/screenshots/     real screenshots of the app
src/
  app/                    routes: / (home), /features, /download, /licenses, 404
    globals.css           Tailwind theme: brand colours, fonts
    layout.tsx            fonts, metadata, header and footer
    icon.svg              favicon
  components/
    layout/               site-header, site-footer
    sections/             hero, stats-strip, ai-editing, feature-showcase,
                          record-and-live, download-cta, page-header
    ui/                   button-link, container, logo, screenshot-frame, section-heading
  content/                every word and number on the site
    site.ts               name, version, platform, download link, navigation
    features.ts           headline numbers, highlights, the full feature list
    screenshots.ts        screenshot files, alt text and sizes
    licenses.ts           third-party software and content licences
  lib/                    small helpers
```

To change text, numbers or screenshots, edit `src/content/` — the components only lay it out.
New screenshots go in `public/images/screenshots/` and are listed in `screenshots.ts`.
# Donations

The editor stays free; contributions are optional. The homepage and `/donations/`
share the donation section in `src/components/sections/support-project.tsx`.

Set `NEXT_PUBLIC_DONATION_URL` in `.env.local` to your verified HTTPS hosted
donation page, then run `npm run build`. Set `NEXT_PUBLIC_SITE_URL` to the real
website domain for social previews. Use `.env.example` as a starting point.

Without a valid donation URL the site shows an honest "Contributions will open
soon" message. It does not render a fake payment button. Checkout, available
currencies, payment methods and receipts are handled by the linked provider.
Do not add secret keys or collect card details in this static website.

