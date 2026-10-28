import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { useLocale } from '../i18n'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { demoEmail, productDetails, productSources } from '../content/productDetails'

export function ProductDetailPage({ product }: { product: 'vefin' | 'voice' }) {
  const { locale } = useLocale()
  const data = productDetails[locale][product]
  const voice = product === 'voice'
  useDocumentMeta(`${data.title} — ${data.subtitle} | Xiangfengxing AI`, data.description)
  return <main className={`detail-page ${voice ? 'voice-detail' : ''}`}>
    <section className="container route-hero detail-hero">
      <div className="route-copy">
        <div className="route-kicker">{data.kicker}</div>
        <h1>{data.title}</h1><div className="route-formal">{data.subtitle}</div>
        <p>{data.description}</p>
        <div className="route-meta">{data.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="detail-cta" href={demoEmail}>{data.cta} ↗</a>
      </div>
      <figure className="detail-flow">
        <figcaption className="eyebrow">{data.flowLabel}</figcaption>
        <ol>{data.flow.map((step, i) => <li key={step}><span>0{i + 1}</span><strong>{step}</strong>{i < data.flow.length - 1 && <i aria-hidden="true">↓</i>}</li>)}</ol>
        <p>{data.flowNote}</p>
      </figure>
    </section>
    <nav className="container detail-jump" aria-label={locale === 'en' ? 'On this page' : '本页导航'}>
      {data.sections.map((section, i) => <a key={section.title} href={`#section-${i}`}>{section.title} ↓</a>)}
      <a href="#sources">{data.sourceTitle} ↓</a>
    </nav>
    {data.sections.map((section, i) => <section className="detail-section" id={`section-${i}`} key={section.title}>
      <div className="container detail-grid">
        <div className="detail-section-intro"><div className="eyebrow">0{i + 1} / {data.title}</div><h2>{section.title}</h2><p>{section.body}</p></div>
        <dl className="detail-facts">{section.items.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      </div>
    </section>)}
    <section className="detail-section source-section" id="sources"><div className="container detail-grid">
      <div className="detail-section-intro"><div className="eyebrow">{locale === 'en' ? 'Public evidence / Source' : '公开证据 / 源码'}</div><h2>{data.sourceTitle}</h2><p>{data.sourceNote}</p></div>
      <div className="source-links">{productSources(locale, voice).map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<span aria-hidden="true">↗</span></a>)}<Link to="/developers">{locale === 'en' ? 'Developer documentation' : '开发者文档'} →</Link></div>
    </div></section>
    <section className="detail-contact"><div className="container"><h2>{data.ctaTitle}</h2><p>{data.ctaBody}</p><div className="detail-actions"><a className="detail-cta" href={demoEmail}>{data.cta} ↗</a><Link className="text-link" to={voice ? '/products/vefin' : '/products/voice'}>{data.related} →</Link></div></div></section>
    <Footer />
  </main>
}
