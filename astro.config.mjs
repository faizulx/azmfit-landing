// @ts-check
import { defineConfig } from "astro/config";

// AzmFit landing site config.
//
// `site` — the canonical origin. Set to the GitHub Pages URL by default;
// flip to the custom domain (e.g. https://azmfit.com) once DNS is wired.
// Astro uses this to build absolute URLs in <head> tags + sitemaps.
//
// `base` — only set when serving from a subpath like
// `username.github.io/azmfit-landing/`. With a custom domain or a
// `<username>.github.io` apex repo, leave it empty.
//
// `i18n` — built-in i18n routing. `prefixDefaultLocale: true` means
// the English landing lives at `/en/` (not `/`); the root `index.astro`
// does a meta-refresh + Accept-Language detection to route the user.
// Arabic gets `/ar/` and the BaseLayout component sets `dir="rtl"` on
// `<html>` for the `ar` locale.

export default defineConfig({
  site: "https://azmfit.github.io",
  // base: "/azmfit-landing", // uncomment when serving from a project repo without a custom domain
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  build: {
    // Cleaner URLs — produces /en/index.html instead of /en.html.
    format: "directory",
  },
});
