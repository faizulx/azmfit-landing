# azmfit-landing

Static landing site for **AzmFit** — bilingual (EN/AR, RTL-aware), brand-aligned with the iOS app's bone/ink/cobalt palette. Built with [Astro](https://astro.build) and deployed to GitHub Pages via Actions.

```
src/
├── layouts/BaseLayout.astro      # html shell + lang/dir + meta
├── pages/
│   ├── index.astro               # root — language-aware redirect
│   ├── en/index.astro            # /en/
│   └── ar/index.astro            # /ar/
├── components/
│   ├── Hero.astro
│   ├── Features.astro
│   └── Footer.astro
└── styles/global.css             # bone/ink/cobalt tokens + base
```

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the production build
```

## Brand tokens

`src/styles/global.css` mirrors `lib/theme/themes.ts` from the AzmFit app — same hex values, same light/dark behavior. Edit them in lockstep when the app's palette changes.

| Token         | Light     | Dark      | Used for                  |
| ------------- | --------- | --------- | ------------------------- |
| `--bone`      | `#FBF9F4` | `#211F1C` | Background                |
| `--ink`       | `#262320` | `#F6F4F0` | Body text                 |
| `--muted`     | `#7C7670` | `#94908C` | Secondary text            |
| `--accent`    | `#2858B8` | `#739CE2` | Links + primary CTA       |
| `--hair`      | `#E0DAD0` | `#44403C` | Hairline borders          |

## Deploy

### One-time setup (GitHub repo)

1. Create a new **public** GitHub repo named `azmfit-landing` (must be public for free GitHub Pages).
2. Add the remote and push:

```bash
git init
git branch -M main
git remote add origin git@github.com:<your-username>/azmfit-landing.git
git add .
git commit -m "Initial scaffold"
git push -u origin main
```

3. In the repo on GitHub: **Settings → Pages**
   - Under "Build and deployment", set **Source: GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` runs on every push to `main` and publishes to `https://<your-username>.github.io/azmfit-landing/`.

### Custom domain (e.g. `azmfit.com`)

1. Add a `public/CNAME` file containing just the domain:

```
azmfit.com
```

2. At your DNS provider, create:
   - `A` records on `@` pointing to GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
   - `CNAME` record on `www` pointing to `<your-username>.github.io`
3. In **Settings → Pages**, enter the custom domain and enable "Enforce HTTPS" once the certificate provisions (usually 5-30 min).
4. Update `site:` in `astro.config.mjs` to the custom domain so canonical URLs + Open Graph tags use the right host.

## Adding brand assets

The app's brand assets live in `Azm/assets/brand/`. To use them here, copy the ones you need into `public/`:

```bash
cp ../Azm/assets/brand/azm-logo-light-transparent.png ./public/azm-logo.png
```

Then reference as `/azm-logo.png` from any component.

## TODO (post-scaffold)

- [ ] Replace placeholder hero copy with final marketing copy
- [ ] Add real App Store URL once the listing is live
- [ ] Add screenshots section (3-4 device mockups)
- [ ] Add `/privacy/` and `/terms/` pages
- [ ] Generate and place `og-image.png` (1200×630) for social previews
- [ ] Configure custom domain + flip `site:` in `astro.config.mjs`
