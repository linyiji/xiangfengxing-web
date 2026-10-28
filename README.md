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
- VeFin Voice module and Brand/IP preview sections
- "Ways to use" Product / API / MCP support layer
- Selected Work proof layer
- Product-not-model principle section
- Bilingual VeFin / VeFin Voice detail pages and real source-documentation developer routes
- Shared pending route system for Brand/IP and Selected Work
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

## VeFin / VeFin Voice update — 2026-10-28

This change is reviewed on a separate feature branch and Preview deployment. Do not follow the historical production-cutover steps in `DEPLOY_WITH_CODEX.md` for this round. Production domain, DNS and `vercel.json` stay unchanged.

- VeFin distinguishes implemented research foundations, transaction-verification PoC targets and future integration.
- VeFin Voice is a module inside VeFin. Its source links are pinned to open source PR #1, commit `20a5eaaf`; they do not assume the module exists on main.
- Developer routes link to real source contracts. There is no invented SDK, hosted public API, MCP connection or public voice trial.
- Page metadata updates in the existing client-rendered SPA; language uses the existing persisted site setting.
- [Scope and verification receipt](docs/VEFIN_VOICE_SHOWCASE.md) includes limitations and screenshot links.
