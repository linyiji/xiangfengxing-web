import { useLocale } from '../i18n'
import { Reveal } from './Reveal'

export function Principle() {
  const { copy } = useLocale()
  return <section className="principle-section" id="principle"><div className="container principle-inner">
    <Reveal variant="title"><div className="eyebrow">{copy.principle.eyebrow}</div><h2>{copy.principle.title}</h2></Reveal>
    <Reveal variant="detail" delay={80}><div className="principle-copy">{copy.principle.lines.map((line) => <span key={line}>{line}</span>)}</div></Reveal>
    <Reveal variant="detail" delay={150}><div className="principle-thesis"><b>{copy.principle.thesis1}</b><span>{copy.principle.thesis2}</span></div></Reveal>
    <div className="principle-flow">{copy.principle.flow.map((item,i) => <span key={item}><b>{item}</b>{i < copy.principle.flow.length - 1 ? <em>→</em> : null}</span>)}</div>
  </div></section>
}
