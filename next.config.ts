import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A fully static site: `npm run build` writes plain HTML/CSS/JS to `out/`,
  // which any static host (Vercel, Netlify, Cloudflare Pages, S3, Nginx) can serve.
  output: "export",
  trailingSlash: true,
  images: {
    // Static hosting has no image server; screenshots are served as they are.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
