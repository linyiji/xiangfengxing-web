import { Link } from 'react-router-dom'
import { useLocale } from '../i18n'
import { Reveal } from './Reveal'

export function WaysToUse() {
  const { copy } = useLocale()
  const hrefs = ['#products','/developers/api','/developers/mcp']
  return <section className="ways-section">
    <div className="container ways-rail">
      <Reveal variant="title" className="ways-intro"><div className="eyebrow">{copy.ways.eyebrow}</div><h2>{copy.ways.title}</h2><p>{copy.ways.description}</p></Reveal>
      {copy.ways.items.map(([title,body,cta], index) => <Reveal variant="detail" delay={index*70} className="ways-item" key={title}><h3>{title}</h3><p>{body}</p>{index === 0 ? <a className="text-link" href="#products">{cta} →</a> : <Link className="text-link" to={hrefs[index]}>{cta} →</Link>}</Reveal>)}
    </div>
  </section>
}
