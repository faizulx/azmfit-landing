# azmfit-landing — repositioning plan

Repositions the landing from an end-user app page to a **coach-first SaaS**
page, per the product model:

- **Mobile app is free for clients.** It's the companion app a coach's
  clients use; not the thing being sold. (Not yet on the App Store →
  "coming soon".)
- **The product being sold is the Coach Studio web app** (live at
  `app.azmfit.co`) — a SaaS for coaches.
- **Pricing = 3 client-count bundles**: up to 5 (SAR 99/mo) / up to 10
  (SAR 179/mo) / up to 20 (SAR 299/mo), confirmed.

Dark-only (shipped separately). Bilingual EN + AR, full RTL. Astro.

## Phases

- [x] **P0 — Force dark mode** (shipped, commit 128311d). Dropped
  `prefers-color-scheme`; Ink is the only theme.
- [x] **P1 — Header.** Minimal top bar: wordmark · "Pricing" ·
  "Coach login →" (→ app.azmfit.co). Replaces the no-nav layout.
- [x] **P2 — Hero (coach-first).** New headline/tagline selling the
  Studio. Primary CTA "Get started" → app.azmfit.co; secondary
  "See pricing" → #pricing.
- [x] **P3 — ForCoaches section.** The SaaS value: build/assign
  programs, weekly client review, AI weekly digest, "who needs you"
  dashboard. CTA → app.azmfit.co.
- [x] **P4 — ForClients section.** The free companion app, reframed.
  Dead "Fitness Level" card rewritten → Recovery/readiness (Fitness
  Level was removed from the app). Kept the accurate meal-logging +
  weekly-summary cards. "Coming soon to the App Store" chip.
- [x] **P5 — Pricing section.** 3 bundles by client cap (5/10/20) +
  "your clients use the app free" line. Prices in the TIERS config.
- [x] **P6 — Footer.** Added Coach Studio / login link + positioning.
- [x] **P7 — Wire pages.** `en/index.astro` + `ar/index.astro` compose
  the new section order; `Features.astro` retired.
- [x] **P8 — Verify.** Built; EN + AR (RTL) dark screenshots; self-audit
  (anchor offset, color-mix fallback, legal-page color-scheme meta).

## Open follow-ups (not blocking)

- [x] App Store URL → swapped the "coming soon" chip for Apple's
  official white badge (`public/app-store-badge.svg`) linking to the
  live SA listing (`id6762570665`). Apple's badge API has no Arabic
  variant, so both languages use the English badge.
- OG image (1200×630) — `og:image` currently 404s, so social previews
  are broken.
- App screenshots / device mockups for the client section.

## Conventions

- Logical CSS only (`margin-inline`, `padding-inline`,
  `border-inline-start`, `text-align: start`) — RTL flips for free.
- AR copy in natural Saudi register (not MSA). Glossary: coach=مدرب,
  client=متدرب, program=برنامج, routine=روتين, recovery=تعافي.
- Brand tokens from `global.css`; no new colors.
