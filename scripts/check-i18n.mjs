import fs from 'node:fs'
const source = fs.readFileSync(new URL('../src/i18n.tsx', import.meta.url), 'utf8')
const required = ['nav:', 'hero:', 'products:', 'vefin:', 'atlas:', 'voice:', 'brand:', 'ways:', 'work:', 'principle:', 'footer:', 'routes:', 'routeVisual:']
const zhStart = source.indexOf('const zh =')
if (zhStart < 0) throw new Error('Chinese locale not found')
const enPart = source.slice(0, zhStart)
const zhPart = source.slice(zhStart)
for (const key of required) {
  if (!enPart.includes(key)) throw new Error(`Missing EN section ${key}`)
  if (!zhPart.includes(key)) throw new Error(`Missing ZH section ${key}`)
}
console.log(`i18n check passed: ${required.length} top-level sections present in EN and ZH.`)
