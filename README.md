# Xiangfengxing AI Website V1

Production-oriented React/TypeScript baseline converted from the validated HTML prototypes.

## Current milestone

This package is intended to complete the **deployable V1 engineering baseline**:

- React + TypeScript + Vite
- Real browser routes (no hash routing)
- Full EN / 中文 site-level language switch
- MiMo-inspired moving bilingual hero, using Xiangfengxing's green visual language
- VeFin sticky product identity + vertically scrolling stages + persistent workspace
- AtlasAnalyse external Mainland China route
- Voice and Brand/IP product preview sections
- "Ways to use" Product / API / MCP support layer
- Selected Work proof layer
- Product-not-model principle section
- Shared pending route system with "Coming next" content
- Vercel SPA rewrite config
- TypeScript and i18n checks

## Run locally

```bash
npm install
npm run dev
```

## Checks

```bash
npm run check
npm run build
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Add `atlasanalyse.com` under Vercel → Project → Domains.
7. Update DNS at the domain provider using the records Vercel provides.

`vercel.json` already rewrites all application paths to `index.html`, so direct visits to `/products/vefin`, `/developers/api`, etc. resolve correctly.

## Before production domain cutover

- Replace placeholder product visuals with approved real screenshots where available.
- Confirm final contact email and legal/footer text.
- Connect the production passwordless authentication backend.
- Add analytics only after deciding the provider and consent requirements.
- Add canonical / OG metadata and final social preview image.
