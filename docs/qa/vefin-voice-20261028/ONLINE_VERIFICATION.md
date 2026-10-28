# VeFin / VeFin Voice — hosted verification

2026-10-28, Asia/Shanghai. This receipt supplements the committed local QA in the website PR.

- Repository: https://github.com/linyiji/xiangfengxing-web
- Branch: `codex/vefin-voice-showcase-20261028`
- Commit: `34026a97763e26ce9d77e9a772d87c182bad1f6f`
- PR: https://github.com/linyiji/xiangfengxing-web/pull/1
- Preview: https://xiangfengxing-5yvm4xpj5-linyijis-projects.vercel.app
- Preview deployment: `dpl_3cjCmyNRLuzNBLaJ65kASUCvcWuT`, READY, target Preview, exact commit confirmed by Vercel.
- Browser-tested alias: https://xiangfengxing-web-git-codex-vefin-voic-049ed2-linyijis-projects.vercel.app (confirmed alias of the same deployment).
- CI: https://github.com/linyiji/xiangfengxing-web/actions/runs/40627069459, SUCCESS at the exact commit.
- Production: `dpl_EEraYs7hUMewV8SroAwNRC8sXd4B`, still main `60b0d83aa12af73c339ead1fde7ea30da4ee904d`. No production deployment, promotion, merge, DNS or project-protection changes.

The Vercel connector initially returned team-grant 403. The user completed team authorization and explicitly requested continued hosted verification. The connector then confirmed READY and HTTP 200. A temporary alias-scoped share link was used for browser access and revoked after testing; normal preview login protection remains. No auth cookies, token, private configuration or recordings are saved in these evidence files.

## Results

- Hosted browser: **32/32 route configurations PASS**: 8 routes × EN/ZH × desktop 1440×1000 / mobile 390×844. Each route was directly opened and refreshed.
- Language, title, description, canonical, Open Graph title, no horizontal overflow, full VeFin/Voice content and R8 limitation markers checked.
- In all 4 language/device contexts: product menu → Voice, language toggle + refresh persistence, VeFin → Developers → API, unknown-route 404 view, demo mailto and Atlas link destination checked. Mobile hero Voice entrance stays inside the hero frame.
- Page errors: **0**.
- Deployed JS, CSS and bundled logo: HTTP 200; **SHA-256 identical to local production build**.
- 10 screenshots from hosted pages, including full EN/ZH product views at both sizes and 2 viewport crops. See [hosted machine results](hosted/browser-results.json) and the [hosted screenshot manifest](HOSTED_PROVENANCE.json). These are separate from the earlier [local machine results](browser-results.json).
- Earlier local checks: npm ci, npm run check, npm run build PASS; 32 built-site route configurations PASS; 13 linked source files exist at their pinned public Git commits. Dependencies/lockfile unchanged.

## Remaining limits

- Preview remains Vercel-authentication protected; review with the authorized Vercel account. Anonymous access is not claimed.
- npm audit reports 2 existing high-severity vulnerable packages (Vite/source-map-js); dependency upgrades were outside this content update.
- Independent AtlasAnalyse external probe returned HTTP 503. Original link retained; availability is not passed.
- Native mail-client dispatch and mail delivery were not tested; mailto target was verified without sending mail.
- This is an existing client-rendered SPA; non-JavaScript crawlers receive shared HTML before runtime metadata updates.
- No real consultation, model/ASR/TTS/RTC/competition calls, microphone access, business writes or private file uploads. Transaction PoC integration, source Voice PR merging and later production release remain separate work.

## Publication and evidence boundary

This is a sanitized publication of the 2026-10-28 hosted-verification receipt. The tested application commit is `34026a97763e26ce9d77e9a772d87c182bad1f6f`; the later documentation commit does not represent a new browser test. Application source, dependency constraints and lockfile are unchanged. The original local QA files remain at their existing paths; hosted captures are separately stored under `hosted/` with SHA-256 provenance. No temporary share URL, credential, authentication state, private audio or operator ledger is published.

Earlier 403 and pending-hosted-check notes describe the phase before team authorization on the same day; they are retained as history in the [showcase report](../../VEFIN_VOICE_SHOWCASE.md). Exact earlier-event time was not recorded there and remains UNKNOWN; hosted machine capture was `2026-10-28T03:35:49.978Z` (11:35:49 Asia/Shanghai). Public anonymous preview access is not claimed.
