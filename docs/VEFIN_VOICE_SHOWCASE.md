# VeFin / VeFin Voice website update

Date: 2026-10-28 (Asia/Shanghai). Website repository: `linyiji/xiangfengxing-web`.

## Scope and provenance

- Website base: `60b0d83aa12af73c339ead1fde7ea30da4ee904d` (`origin/main` at start).
- Branch: `codex/vefin-voice-showcase-20261028`, isolated worktree. Existing uncommitted WAE work in the original website checkout was not moved, reset or included.
- Applicable ancestor/repository `AGENTS.md`: none found. Read `README.md`, `DEPLOYMENT_CHECKLIST.md`, `DEPLOY_WITH_CODEX.md`, actual source, package scripts, CI and `vercel.json`.
- The user's preview-only instruction overrides the historical deployment brief's main/production steps. No production deployment, DNS, project settings or hosting configuration change is authorized in this round.
- Foundation evidence: public financial-agent snapshot `ea2002ca571c869c59936f64067ec0d7c7eaabd1`, especially product status, walkthrough, API contract and architecture.
- Voice evidence: open [source PR #1](https://github.com/linyiji/verifiable-financial-ai-agent/pull/1), commit `20a5eaafdcb7dcfbe9d4c90059628cf5a9279ea5`, especially `docs/modules/voice/README.md`, Chinese counterpart, `PUBLICATION.json` and actual dialogue/response-plan source. All voice file links use that existing commit, not main.
- The public source documents research foundations and a bounded local voice acceptance. Transaction verification is the user-directed business direction and a scoped PoC target here; no newly accepted transaction backend is implied.

## Changes

- Homepage VeFin content distinguishes implemented foundations, transaction-verification PoC targets and future integrations. Its existing scrolling workspace is clearly an illustrative target workflow.
- All relevant speech entrances, navigation and footer use **VeFin Voice**, a module inside VeFin. The conversation illustration is not an active call or R8 recording.
- `/products/vefin` and `/products/voice` are complete bilingual detail pages. The Voice page covers responsibilities, R8 results, failed waveform checks, constraints, source evidence and a demo mailto.
- `/developers`, `/developers/api`, `/developers/mcp` link to real source documents. Removed the invented SDK snippet and public MCP connection illustration. Backend contracts do not imply a public hosted API.
- Mobile product menu exposes both products and developers; mobile hero retains all product entrances. Footer and company/Atlas/Brand/Selected Work content remain.
- Runtime metadata includes title, description, canonical, Open Graph locale/title/description and Twitter title/description. Canonicals remain on `atlasanalyse.com` in the existing client-rendered SPA. Non-JavaScript crawlers still receive the shared SPA HTML; no SSR/prerender conversion was attempted.

## Verification

- `npm ci`: PASS, 31 packages installed; package manifest and lockfile unchanged. npm reported 2 existing high-severity vulnerable packages (`vite`, `source-map-js`). No unrelated upgrade/audit fix performed.
- `npm run check`: PASS (TypeScript, EN/ZH section check, 8 routes and SPA rewrite).
- `npm run build`: PASS (Vite production bundle).
- Browser test uses the built site with `npm run preview -- --host 127.0.0.1 --port 4178 --strictPort` and existing Playwright/Chrome outside website dependencies. See [machine results](qa/vefin-voice-20261028/browser-results.json).
- 8 routes × EN/ZH × desktop 1440×1000 / mobile 390×844: 32 direct-load + reload checks, language, metadata and horizontal-overflow assertions. Product pages have no generic Preparing content. Unknown route renders 404 view (SPA host HTTP fallback is 200).
- Menu → Voice → language toggle/refresh → VeFin → Developers → API interactions, mailto address and Atlas href checked in all 4 device/language contexts. Mail was not sent; native mail-client behavior was not exercised.
- 13 unique linked source files checked against their actual GitHub commit trees. Voice source and PR state were inspected; no nonexistent main-module links.
- Screenshots visually reviewed; product pages keep ruled green/purple layouts and mobile stacks. React review covered stable keys, effect cleanup/dependencies, semantic headings/lists, native keyboard-operable product menu, focus styles and no new third-party/runtime data requests.
- Atlas link remains `https://atlasanalyse.cn`. External availability probe returned **HTTP 503**, so external-site availability is not counted as passed. That independent site's configuration was not modified.
- Real consultations, model/ASR/TTS/RTC/competition calls, microphone access, business writes, private audio/config uploads and production deployment: **NOT EXECUTED**, as required.

Reproduce browser QA with an existing Playwright installation (no package changes required):

```bash
PLAYWRIGHT_MODULE=/absolute/path/to/playwright \
CHROME_PATH='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' \
node scripts/qa-vefin-voice.cjs
```

`QA_BASE` defaults to `http://127.0.0.1:4178`. `QA_OUT` can select another capture directory. GitHub file checks use authenticated `gh` read access. The script does not send mail or invoke financial/voice services.

## Screenshots

| Page | Desktop EN | Desktop 中文 | Mobile EN | Mobile 中文 |
| --- | --- | --- | --- | --- |
| VeFin | [PNG](qa/vefin-voice-20261028/desktop-en-vefin.png) | [PNG](qa/vefin-voice-20261028/desktop-zh-vefin.png) | [PNG](qa/vefin-voice-20261028/mobile-en-vefin.png) | [PNG](qa/vefin-voice-20261028/mobile-zh-vefin.png) |
| VeFin Voice | [PNG](qa/vefin-voice-20261028/desktop-en-voice.png) | [PNG](qa/vefin-voice-20261028/desktop-zh-voice.png) | [PNG](qa/vefin-voice-20261028/mobile-en-voice.png) | [PNG](qa/vefin-voice-20261028/mobile-zh-voice.png) |
| Homepage | [PNG](qa/vefin-voice-20261028/desktop-en-home.png) | — | — | [PNG](qa/vefin-voice-20261028/mobile-zh-home.png) |
| Developers | [PNG](qa/vefin-voice-20261028/desktop-en-developers.png) | — | — | [PNG](qa/vefin-voice-20261028/mobile-zh-developers.png) |

## Preview and remaining work

The existing Vercel Git integration is expected to build the feature branch. Its exact commit, status and URL will be recorded in the PR and delivery receipt after pushing. Production deployment at the beginning of this task is `60b0d83aa12af73c339ead1fde7ea30da4ee904d`.

Vercel connector access to team `team_4bwLyp7igADSBFwfCgfYFMLZ` returned 403 (team grant missing); the CLI has no usable access to that scope. Existing branch previews are Vercel-authentication protected. Hosted browser checks and public accessibility must not be marked passed without access. Local built-site verification is independent of this limitation.

Remaining: review/merge the website PR in a later release, resolve the existing dependency advisories separately, investigate the independent Atlas 503, and obtain preview-team access if hosted verification is blocked. Voice PR merging and transaction/voice integration acceptance are separate work; neither is performed here.
