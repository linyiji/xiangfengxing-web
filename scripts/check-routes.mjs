import fs from 'node:fs'
const app = fs.readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8')
const expected = ['/', '/products/vefin', '/products/voice', '/products/brand-ip', '/developers', '/developers/api', '/developers/mcp', '/work/web3']
for (const route of expected) {
  if (!app.includes(`path=\"${route}\"`)) throw new Error(`Missing route: ${route}`)
}
if (/path=["']\/(?:sign-?in|login|register)/i.test(app)) throw new Error('Account route must not be exposed')
const vercel = JSON.parse(fs.readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'))
if (!vercel.rewrites?.length) throw new Error('Missing Vercel SPA rewrite')
console.log(`route check passed: ${expected.length} routes + Vercel rewrite.`)
