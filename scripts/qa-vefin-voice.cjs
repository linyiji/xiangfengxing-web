// Use an existing Playwright installation; it is not a website dependency.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs');
const { execFileSync } = require('node:child_process');
const assert = require('node:assert/strict');
const out = process.env.QA_OUT || 'docs/qa/vefin-voice-20261028';
fs.mkdirSync(out, {recursive: true});
const base = process.env.QA_BASE || 'http://127.0.0.1:4178';
const results = {base, capturedAt: new Date().toISOString(), routes: [], interactions: [], links: [], errors: []};
const routes = ['/', '/products/vefin', '/products/voice', '/developers', '/developers/api', '/developers/mcp', '/products/brand-ip', '/work/web3'];
const captures = new Set(['desktop-en-home','mobile-zh-home','desktop-en-vefin','desktop-zh-vefin','mobile-en-vefin','mobile-zh-vefin','desktop-en-voice','desktop-zh-voice','mobile-en-voice','mobile-zh-voice','desktop-en-developers','mobile-zh-developers']);
(async () => {
 const browser = await chromium.launch({...(process.env.CHROME_PATH ? {executablePath:process.env.CHROME_PATH} : {}),headless:true});
 const allLinks = new Set();
 for (const [device, viewport] of Object.entries({desktop:{width:1440,height:1000},mobile:{width:390,height:844}})) {
  for(const locale of ['en','zh']) {
   const context = await browser.newContext({viewport, reducedMotion:'reduce'});
   await context.addInitScript(l => { if (!localStorage.getItem('xiangfengxing-locale')) localStorage.setItem('xiangfengxing-locale', l) }, locale);
   const page = await context.newPage();
   page.on('pageerror', e=>results.errors.push(`${device}/${locale}: ${e.message}`));
   for(const route of routes) {
    const response = await page.goto(base + route);
    await page.waitForSelector('h1');
    await page.reload(); // direct route and refresh both resolve the built SPA
    await page.waitForSelector('h1');
    const data = await page.evaluate(()=>({
     title:document.title,lang:document.documentElement.lang,
     description:document.querySelector('meta[name="description"]')?.content,
     canonical:document.querySelector('link[rel="canonical"]')?.href,
     og:document.querySelector('meta[property="og:title"]')?.content,
     text:document.body.innerText,
     overflow:document.documentElement.scrollWidth > innerWidth,
     links:[...document.querySelectorAll('a[href]')].map(a=>a.href),
    }));
    assert.equal(response.status(),200); assert.equal(data.overflow,false,`${route} ${device} overflow`);
    assert.equal(data.lang,locale==='en'?'en':'zh-CN');assert.equal(data.title,data.og);
    assert.equal(data.canonical,'https://atlasanalyse.com'+route);
    assert.ok(data.description?.length > 20);
    if(['vefin','voice'].some(s=>route==='/products/'+s)) assert.ok(!/Preparing|准备中/.test(data.text));
    assert.ok(!/Cantonese Voice|new Xiangfengxing|XFX_API_KEY/.test(data.text));
    if(route==='/products/voice') {for(const s of ['R8','9/9','2.459','6.266','QUALITY_PENDING','REQUEST_RECORDED_NO_RECEIVER']) assert.ok(data.text.includes(s),s)}
    for(const href of data.links) allLinks.add(href);
    results.routes.push({device,locale,route,status:response.status(),title:data.title,lang:data.lang,canonical:data.canonical,overflow:data.overflow,directRefresh:'PASS'});
    const slug=route==='/'?'home':route.split('/').pop();const name=`${device}-${locale}-${slug}`;
    if(captures.has(name)) { // reveal all sections via real scroll before capturing
     await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=600){scrollTo(0,y);await new Promise(r=>setTimeout(r,12))}scrollTo(0,0)});
     await page.screenshot({path:`${out}/${name}.png`,fullPage:true,animations:'disabled'});
     if (name==='desktop-zh-vefin' || name==='mobile-zh-voice') await page.screenshot({path:`${out}/${name}-viewport.png`,animations:'disabled'});
    }
   }
   // Unknown route stays a 404 view; the static SPA host returns HTTP 200 by design.
   await page.goto(base+'/unknown-qa-route');assert.ok((await page.locator('body').innerText()).includes('404'));
   results.interactions.push(`${device}/${locale}: unknown route view PASS`);
   // Menu navigation and persistence after language toggle.
   await page.goto(base+'/');
   await page.locator('.products-nav summary').click();
   await page.locator('.products-menu a[href="/products/voice"]').click();
   await page.waitForURL('**/products/voice');assert.equal(await page.locator('.products-nav').getAttribute('open'),null);
   await page.locator('.lang-switch').click();await page.waitForFunction(l => document.documentElement.lang === l, locale==='en'?'zh-CN':'en');await page.reload();await page.waitForSelector('h1');
   assert.equal(await page.locator('html').getAttribute('lang'),locale==='en'?'zh-CN':'en');
   assert.equal(await page.locator('.detail-cta').first().getAttribute('href'),'mailto:zeno@atlasanalyse.cn?subject=VeFin%20demonstration');
   assert.ok(await page.locator('.footer a[href="https://atlasanalyse.cn"]').count());
   await page.locator('.detail-actions a[href="/products/vefin"]').click();await page.waitForURL('**/products/vefin');
   await page.locator('.source-links a[href="/developers"]').click();await page.waitForURL('**/developers');
   await page.locator('.detail-jump a[href="/developers/api"]').click();await page.waitForURL('**/developers/api');
   results.interactions.push(`${device}/${locale}: product menu → Voice → toggle/reload → VeFin → Developers → API; mailto/Atlas targets PASS`);
   await context.close();
  }
 }
 // Verify all linked source files against GitHub's actual commit trees, not guesses.
 const gitLinks = [...allLinks].filter(x=>x.includes('github.com/linyiji/verifiable-financial-ai-agent/blob/'));
 const cache = {};
 for(const url of gitLinks) {
  const u=new URL(url);const [,owner,repo,,ref,...path]=u.pathname.split('/');
  if(!cache[ref]) cache[ref]=new Set(JSON.parse(execFileSync('gh',['api',`repos/${owner}/${repo}/git/trees/${ref}?recursive=1`],{encoding:'utf8',maxBuffer:30e6})).tree.map(x=>x.path));
  const found=cache[ref].has(decodeURIComponent(path.join('/')));
  results.links.push({url,existsAtCommit:found});assert.ok(found,`Missing source ${url}`);
 }
 assert.equal(results.errors.length,0);
 await browser.close();
 fs.writeFileSync(out+'/browser-results.json',JSON.stringify(results,null,2));
 console.log(JSON.stringify({routes:results.routes.length,interactions:results.interactions.length,sourceLinks:results.links.length,pageErrors:results.errors.length,screenshots:captures.size,result:'PASS'}));
})().catch(e=>{console.error(e);fs.writeFileSync(out+'/browser-results.json',JSON.stringify({...results,failure:e.message},null,2));process.exit(1)});
