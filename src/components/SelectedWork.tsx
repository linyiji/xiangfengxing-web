import { Link } from 'react-router-dom'
import { useLocale } from '../i18n'
import { Reveal } from './Reveal'

export function SelectedWork() {
  const { copy } = useLocale()
  return <section className="work-section" id="work"><div className="container work-row">
    <Reveal variant="title" className="work-copy"><div className="eyebrow">{copy.work.eyebrow}</div><h2>{copy.work.title}</h2><p>{copy.work.description}</p><span className="work-context">{copy.work.context}</span></Reveal>
    <Reveal variant="ui"><Link className="work-card" to="/work/web3"><div className="web3-grid">{Array.from({length:25}).map((_,i) => <i key={i}/>)}</div><div className="work-note">{copy.work.note}</div><div className="work-go">{copy.work.view} →</div></Link></Reveal>
  </div></section>
}
