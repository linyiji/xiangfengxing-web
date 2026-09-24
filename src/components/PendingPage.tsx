import { Link } from 'react-router-dom'
import type { RouteKey } from '../data'
import { useLocale } from '../i18n'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export function PendingPage({ routeKey }: { routeKey: RouteKey }) {
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

function RouteVisual({ type }: { type: RouteKey }) {
  const { copy } = useLocale()
  const v = copy.routeVisual
  if (type === 'vefin') return <div className="route-visual pv-vefin"><div className="route-note">{v.productPreview}</div><div className="pv-shell"><div className="pv-nav"><b>VeFin</b><span className="active">{copy.vefin.workspace.research}</span><span>{copy.vefin.workspace.evidence}</span><span>{copy.vefin.workspace.review}</span><span>{copy.vefin.workspace.report}</span></div><div className="pv-main"><small>{v.researchWorkspace}</small><h3>{copy.vefin.workspace.intentTitle}</h3>{[[v.question,v.defined],[v.evidenceItems,v.linked],[v.reviewStatus,v.openItem],[v.output,v.professionalReport]].map(([a,b]) => <div className="pv-row" key={a}><span>{a}</span><em>{b}</em></div>)}</div></div></div>
  if (type === 'voice') return <div className="route-visual pv-voice"><div className="route-note">{v.conversationPreview}</div><div className="voice-timeline"><div className="voice-clock"><span>00:04</span><span>00:11</span><span>00:24</span><span>00:38</span></div><div className="timeline-line">{Array.from({length:4}).map((_,i) => <i key={i}/>)}</div><div className="transcript"><div><small>{v.customer}</small>{copy.voice.phrase}</div><div><small>{v.system}</small>{v.systemLine}</div></div></div></div>
  if (type === 'developers') return <div className="route-visual pv-dev"><div className="route-note">{v.developerOverview}</div>{[['API',v.integrate,v.integrateBody],['MCP',v.connectAgents,v.connectBody],['Products',v.stayProduct,v.stayProductBody]].map(([small,title,body]) => <div className="dev-card" key={small}><small>{small}</small><h4>{title}</h4><p>{body}</p></div>)}</div>
  if (type === 'api') return <div className="route-visual pv-code"><div className="route-note">{copy.common.previewOnly}</div><div className="code-shell"><div className="code-top"><span>API preview</span><span>{copy.common.notLive}</span></div><pre>{`const client = new Xiangfengxing({\n  apiKey: process.env.XFX_API_KEY\n})\n\nconst result = await client.vefin.research({\n  query: "Analyze NVIDIA fundamentals"\n})`}</pre></div></div>
  if (type === 'mcp') return <div className="route-visual pv-mcp"><div className="route-note">{v.connectionPreview}</div><div className="mcp-graph"><i className="graph-line gl1"/><i className="graph-line gl2"/><i className="graph-line gl3"/><div className="node agent">{v.compatibleAgent}</div><div className="node core">Xiangfengxing MCP</div><div className="node vefin">VeFin</div><div className="node cap">{v.otherCapabilities}</div></div></div>
  return <div className="route-visual pv-work"><div className="route-note">{v.casePreview}</div><div className="web3-grid">{Array.from({length:25}).map((_,i) => <i key={i}/>)}</div><strong>AI × Web3<br/>{copy.routes.work.formal}</strong></div>
}
