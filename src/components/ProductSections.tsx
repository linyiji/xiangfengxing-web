import { Link } from 'react-router-dom'
import { useLocale } from '../i18n'
import { Reveal } from './Reveal'
import { StatusBadge } from './StatusBadge'

export function ProductSections() {
  const { copy } = useLocale()
  return <div className="container product-stories">
    <article className="product-story atlas-story" id="atlas">
      <Reveal variant="title" className="product-copy"><StatusBadge status="live" /><h3>{copy.atlas.title}</h3><div className="product-formal">{copy.atlas.formal}</div><p>{copy.atlas.description}</p><a className="text-link" href="https://atlasanalyse.cn" target="_blank" rel="noreferrer">{copy.atlas.visit} ↗</a></Reveal>
      <div className="atlas-art"><Reveal variant="detail" className="asset-chain">{copy.atlas.chain.map(([key,desc]) => <div className="asset" key={key}><b>{key}</b><span>{desc}</span></div>)}</Reveal><Reveal variant="ui" className="atlas-shot"><div className="shot-head"><span>{copy.atlas.run}</span><span>atlasanalyse.cn ↗</span></div><div className="shot-body">{copy.atlas.rows.map(([id,label]) => <div className="test-row" key={id}><b>{id}</b><span>{label}</span><span>{copy.atlas.pass}</span></div>)}</div></Reveal></div>
    </article>

    <article className="product-story voice-story" id="voice">
      <Reveal variant="title" className="product-copy"><StatusBadge status="preview" /><h3>{copy.voice.title}</h3><div className="product-formal">{copy.voice.formal}</div><p>{copy.voice.description}</p><Link className="text-link" to="/products/voice">{copy.voice.explore} →</Link></Reveal>
      <div className="voice-art"><Reveal variant="ui"><div className="voice-device"><div className="voice-top"><span>● {copy.voice.live}</span><span>00:38</span></div><div className="wave">{Array.from({length:5}).map((_,i) => <i key={i} />)}</div><p>{copy.voice.phrase}</p></div></Reveal><div className="voice-points">{copy.voice.points.map(([label,text],i) => <Reveal variant="detail" delay={i*80} key={label}><div className="voice-point"><small>{label}</small><b>{text}</b></div></Reveal>)}</div></div>
    </article>

    <article className="product-story brand-story" id="brandip">
      <Reveal variant="title" className="product-copy"><StatusBadge status="capability" /><h3>{copy.brand.title}</h3><div className="product-formal">{copy.brand.formal}</div><p>{copy.brand.description}</p><Link className="text-link" to="/products/brand-ip">{copy.brand.explore} →</Link></Reveal>
      <div className="brand-art"><Reveal variant="detail" className="brand-config">{copy.brand.capabilities.map((label, index) => <div className="config-row" key={label}><b>0{index + 1}</b><span>{label}</span></div>)}</Reveal><Reveal variant="ui" className="brand-output"><span className="shape a"/><span className="shape b"/><span className="shape c"/><div><small>{copy.brand.outputLabel}</small><strong>{copy.brand.output}</strong></div></Reveal></div>
    </article>
  </div>
}
