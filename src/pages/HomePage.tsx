import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLocale } from '../i18n'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { TranslationHero } from '../components/TranslationHero'
import { Reveal } from '../components/Reveal'
import { VeFinSection } from '../components/VeFinSection'
import { ProductSections } from '../components/ProductSections'
import { WaysToUse } from '../components/WaysToUse'
import { SelectedWork } from '../components/SelectedWork'
import { Principle } from '../components/Principle'
import { Footer } from '../components/Footer'

export function HomePage() {
  const { copy, locale } = useLocale()
  const location = useLocation()
  useDocumentMeta(locale === 'en' ? 'Xiangfengxing AI — Products for Real-World Work' : '向风行 AI — 面向真实工作的 AI 产品', locale === 'en' ? 'Xiangfengxing AI builds product-first AI systems for real-world work.' : '向风行 AI 构建真正进入真实工作流的 AI 产品。')

  useEffect(() => {
    const id = (location.state as { scrollTo?:string } | null)?.scrollTo
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' }))
  }, [location.state])

  return <main>
    <TranslationHero />
    <section className="products-section" id="products">
      <div className="container section-head"><Reveal variant="title"><div className="eyebrow">{copy.products.eyebrow}</div><h2>{copy.products.title1}<br/>{copy.products.title2}</h2></Reveal><Reveal variant="detail"><p>{copy.products.intro}</p></Reveal></div>
      <VeFinSection />
      <ProductSections />
    </section>
    <WaysToUse />
    <SelectedWork />
    <Principle />
    <Footer />
  </main>
}
