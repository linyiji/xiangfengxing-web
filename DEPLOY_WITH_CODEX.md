# Codex Execution Brief — Xiangfengxing Public Website V1

## Goal

Take this extracted package all the way through **working build → GitHub main updated → Vercel Production publicly accessible**.

Do **not** stop after local build or after creating a Git commit.

Canonical repository:

```text
https://github.com/linyiji/xiangfengxing-web.git
```

The repository may be empty when this task starts. Default branch is `main`.

## Product boundary

This deployment is a public marketing/product-preview website only.

Do not introduce:

- sign in / register UI
- Magic Link / OTP / OAuth
- user database
- workspace / organization / RBAC
- payments / subscriptions / pricing engine
- real API keys
- real MCP connection
- VeFin backend
- dashboard

If any stale account links appear during validation, remove/hide them before deployment.

## Required public routes

```text
/
/products/vefin
/products/voice
/products/brand-ip
/developers
/developers/api
/developers/mcp
/work/web3
```

External product:

```text
https://atlasanalyse.cn
```

Internal routes must support direct refresh on Vercel; `vercel.json` already contains the SPA rewrite.

## Execution sequence

### 1. Inspect package

Confirm these exist:

```text
package.json
src/
public/
vercel.json
vite.config.ts
reference/v12-public-site-preview.html
```

### 2. Install and validate

Use Node 20+.

```bash
npm install
npm run check
npm run build
```

Fix all TypeScript/build errors. Do not bypass TypeScript errors by weakening strictness unless absolutely required and explicitly documented.

### 3. Smoke test locally

Run:

```bash
npm run dev -- --host 0.0.0.0
```

Check at minimum:

- homepage loads
- EN / 中文 toggle changes the whole public site and persists after refresh
- Hero moving ellipse works on pointer devices without moving the typography
- VeFin desktop layout: product identity + stage navigation sticky, center stages scroll vertically, right workspace sticky and synchronized
- mobile/tablet layout removes complex sticky behavior and reads naturally
- AtlasAnalyse opens `https://atlasanalyse.cn`
- every required route renders a Preparing page rather than 404
- direct refresh on route works in production routing setup
- no Sign in entry is visible
- Contact mailto works
- 404 renders for unknown paths
- reduced-motion preference does not break the page

### 4. Initialize/update Git repository

If this directory is not already a clone:

```bash
git init
git branch -M main
git remote add origin https://github.com/linyiji/xiangfengxing-web.git
```

If `origin` already exists, verify it is exactly the canonical repository and correct it if required.

Before pushing, fetch remote state:

```bash
git fetch origin --prune
```

If the remote `main` already contains work, reconcile it instead of force-overwriting it. Preserve newer intentional changes.

Then:

```bash
git add -A
git commit -m "feat: launch Xiangfengxing public website v1"
git push -u origin main
```

Do not use `--force` unless the user explicitly approves it.

### 5. Deploy to Vercel Production

Preferred long-term setup: connect the GitHub repository to a Vercel project named `xiangfengxing-web`, so subsequent pushes to `main` deploy automatically.

If using Vercel CLI:

```bash
npx vercel
```

Link/create the project, then production deploy:

```bash
npx vercel --prod
```

The minimum acceptance criterion is a publicly accessible production `.vercel.app` URL.

Do not stop at a protected Preview URL if the requirement is public access.

### 6. Custom domain

Target:

```text
atlasanalyse.com
```

Preferred:

```text
https://atlasanalyse.com
https://www.atlasanalyse.com -> redirect to https://atlasanalyse.com
```

If Vercel/domain-provider credentials allow it, finish domain association and DNS validation.

If DNS is controlled by an external provider you cannot authenticate to, do not guess records. Return the exact DNS records Vercel requests and identify this as the only remaining external action. The Vercel production URL must still be publicly live before stopping.

Do not modify `atlasanalyse.cn`; it remains the independent AtlasAnalyse product.

## Production acceptance checklist

Do not report completion until all available items are checked:

- [ ] `npm run check` passes
- [ ] `npm run build` passes
- [ ] Git remote is `linyiji/xiangfengxing-web`
- [ ] latest source pushed to `main`
- [ ] GitHub commit SHA reported
- [ ] Vercel production deployment is READY
- [ ] public production URL reported
- [ ] `/products/vefin` works via direct URL
- [ ] `/developers/api` works via direct URL
- [ ] EN / 中文 checked
- [ ] desktop checked
- [ ] mobile responsive checked
- [ ] no account/sign-in entry exposed
- [ ] AtlasAnalyse external link checked
- [ ] domain status for `atlasanalyse.com` reported

## Final report format

Return:

```text
GitHub repo:
Branch:
Commit SHA:

Build:
TypeScript check:

Vercel project:
Production deployment:
Public URL:

atlasanalyse.com:
www.atlasanalyse.com:

Routes tested:
Language tested:
Responsive tested:

Remaining blockers (if any):
```

If there is a blocker, include the exact command/error and what external action is required. Do not describe an unverified deployment as complete.
