import { Link } from 'react-router-dom'
import type { RouteKey } from '../data'
import { useLocale } from '../i18n'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

type PendingRouteKey = Extract<RouteKey, 'brand' | 'work'>

export function PendingPage({ routeKey }: { routeKey: PendingRouteKey }) {
  const { copy } = useLocale()
  const data = copy.routes[routeKey]
  useDocumentMeta(`${data.title} — Xiangfengxing AI`, data.copy)
  return <main className="route-page">
    <section className="container route-hero">
      <div className="route-copy"><div className="route-kicker">{data.kicker}</div><h1>{data.title}</h1><div className="route-formal">{data.formal}</div><p>{data.copy}</p><div className="route-meta">{data.meta.map((item) => <span key={item}>{item}</span>)}</div></div>
      <RouteVisual type={routeKey} />
    </section>
    <section className="pending-band"><div className="container pending-grid"><div className="pending-status"><i />{copy.common.preparing}</div><div className="pending-copy"><h2>{data.pending}</h2><p>{data.pendingCopy}</p><div className="coming-next"><small>{copy.common.comingNext}</small>{data.features.map((feature) => <span key={feature}>✓ {feature}</span>)}</div><div className="pending-line"/><Link className="text-link" to="/">← {copy.common.back}</Link></div></div></section>
    <div className="container route-footer"><span>{copy.footer.city}</span><span>© 2026 Xiangfengxing AI</span></div>
  </main>
}

function RouteVisual({ type }: { type: PendingRouteKey }) {
  const { copy } = useLocale()
  const v = copy.routeVisual
  if (type === 'brand') return <div className="route-visual pv-brand"><div className="route-note">{v.capabilityPreview}</div><div className="pv-config"><h4>{v.configure}</h4>{[[copy.brand.config[0][0],copy.brand.config[0][1]],[v.tone,v.playful],[v.interaction,v.conversation],[v.delivery,'Use / API']].map(([a,b]) => <div className="pv-config-row" key={a}><b>{a}</b><span>{b}</span></div>)}</div><div className="pv-experience"><span className="shape a"/><span className="shape b"/><span className="shape c"/><strong>{v.identityOutput}</strong></div></div>
  return <div className="route-visual pv-work"><div className="route-note">{v.casePreview}</div><div className="web3-grid">{Array.from({length:25}).map((_,i) => <i key={i}/>)}</div><strong>AI × Web3<br/>{copy.routes.work.formal}</strong></div>
}
