import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLocale } from '../i18n'

export function TranslationHero() {
  const { locale, copy } = useLocale()
  const stageRef = useRef<HTMLDivElement>(null)
  const portalRef = useRef<HTMLDivElement>(null)
  const altRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    const portal = portalRef.current
    const alt = altRef.current
    if (!stage || !portal || !alt || !matchMedia('(hover:hover) and (pointer:fine)').matches) return

    let rect = stage.getBoundingClientRect()
    let defaultX = rect.width * .55
    let defaultY = rect.height * .46
    let cx = defaultX, cy = defaultY, tx = defaultX, ty = defaultY
    let raf = 0

    const sizes = () => {
      rect = stage.getBoundingClientRect()
      return { rx: Math.min(250, rect.width * .20), ry: Math.min(205, rect.height * .29) }
    }
    const clamp = (v:number, a:number, b:number) => Math.max(a, Math.min(b, v))
    const render = () => {
      const { rx, ry } = sizes()
      cx += (tx - cx) * .095
      cy += (ty - cy) * .095
      portal.style.left = `${cx}px`
      portal.style.top = `${cy}px`
      portal.style.width = `${rx * 2}px`
      portal.style.height = `${ry * 2}px`
      alt.style.clipPath = `ellipse(${rx}px ${ry}px at ${cx}px ${cy}px)`
      if (Math.abs(tx - cx) > .18 || Math.abs(ty - cy) > .18) raf = requestAnimationFrame(render)
    }
    const move = (x:number, y:number) => {
      const { rx, ry } = sizes()
      tx = clamp(x, rx * 1.02, rect.width - rx * 1.02)
      ty = clamp(y, ry * 1.02, rect.height - ry * 1.02)
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(render)
    }
    const reset = () => {
      rect = stage.getBoundingClientRect()
      defaultX = rect.width * .55
      defaultY = rect.height * .46
      move(defaultX, defaultY)
    }
    const onMove = (event: MouseEvent) => {
      const r = stage.getBoundingClientRect()
      const x = (event.clientX - r.left - r.width * .5) * .74 + r.width * .5
      const y = (event.clientY - r.top - r.height * .46) * .56 + r.height * .46
      move(x, y)
    }
    stage.addEventListener('mousemove', onMove)
    stage.addEventListener('mouseleave', reset)
    window.addEventListener('resize', reset)
    reset()
    return () => {
      cancelAnimationFrame(raf)
      stage.removeEventListener('mousemove', onMove)
      stage.removeEventListener('mouseleave', reset)
      window.removeEventListener('resize', reset)
    }
  }, [])

  return <section className="hero-wrap">
    <div className="hero-frame">
      <div ref={stageRef} className="hero-stage">
        <div className="hero-label">{copy.hero.label}</div>
        <div className="hero-plane hero-base">
          <div className="brand-watermark wm-a">{locale === 'en' ? 'XFX' : '向风行'}</div>
          <div className="brand-watermark wm-b">{locale === 'en' ? 'PRODUCT' : '产品'}</div>
          <HeroCopy title1={copy.hero.title1} title2={copy.hero.title2} sub={copy.hero.sub} />
        </div>
        <div ref={portalRef} className="translation-window" aria-hidden="true" />
        <div ref={altRef} className="hero-plane hero-alt">
          <div className="brand-watermark wm-a">{locale === 'en' ? '向风行' : 'XFX'}</div>
          <div className="brand-watermark wm-b">{locale === 'en' ? '产品' : 'PRODUCT'}</div>
          <HeroCopy title1={copy.hero.altTitle1} title2={copy.hero.altTitle2} sub={copy.hero.altSub} />
        </div>
        <div className="hero-tip">{copy.hero.tip}</div>
      </div>
      <div className="product-peek">
        <Link className="peek peek-main" to="/products/vefin"><span><strong>VeFin</strong><small>{copy.peeks.vefin}</small></span><span>→</span></Link>
        <a className="peek" href="https://atlasanalyse.cn" target="_blank" rel="noreferrer"><span><strong>AtlasAnalyse</strong><small>{copy.peeks.atlas}</small></span><span>↗</span></a>
        <div className="peek-more">
          <Link className="mini" to="/products/voice"><span><strong>Cantonese Voice</strong><small>{copy.peeks.voice}</small></span><span>→</span></Link>
          <Link className="mini" to="/products/brand-ip"><span><strong>Brand / IP</strong><small>{copy.peeks.brand}</small></span><span>→</span></Link>
        </div>
      </div>
    </div>
  </section>
}

function HeroCopy({ title1, title2, sub }: { title1:string; title2:string; sub:string }) {
  return <div className="hero-message"><div className="hero-copy"><h1><span>{title1}</span><span>{title2}</span></h1><p>{sub}</p></div></div>
}
