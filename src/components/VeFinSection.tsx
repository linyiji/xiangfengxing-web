import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocale } from '../i18n'
import { Reveal } from './Reveal'
import { StatusBadge } from './StatusBadge'

type Stage = 'research' | 'evidence' | 'review' | 'report'
const stageKeys: Stage[] = ['research','evidence','review','report']

export function VeFinSection() {
  const { copy } = useLocale()
  const [active, setActive] = useState<Stage>('research')
  const stepRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const nodes = stepRefs.current.filter(Boolean) as HTMLDivElement[]
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (!visible) return
      const stage = visible.target.getAttribute('data-stage') as Stage | null
      if (stage) setActive(stage)
    }, { threshold: [.25,.45,.65], rootMargin: '-20% 0px -42% 0px' })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const activeIndex = stageKeys.indexOf(active)
  const steps = useMemo(() => copy.vefin.steps, [copy])

  return <div className="container vefin-story" id="vefin">
    <div className="vefin-left">
      <div className="vefin-identity">
        <StatusBadge status="featured" />
        <h3>VeFin</h3>
        <div className="vefin-formal">{copy.vefin.formal}</div>
        <p>{copy.vefin.description}</p>
        <div className="vefin-progress"><span>{activeIndex + 1} / 4</span><div className="progress-track"><i style={{ width: `${(activeIndex + 1) * 25}%` }} /></div></div>
        <div className="vefin-mini-nav">{steps.map((step, i) => <button key={step.short} className={i === activeIndex ? 'active' : ''} onClick={() => stepRefs.current[i]?.scrollIntoView({ behavior:'smooth', block:'center' })}><span>0{i+1}</span>{step.short}</button>)}</div>
        <Link className="text-link" to="/products/vefin">{copy.vefin.explore} →</Link>
      </div>
      <div className="vefin-step-track">
        {steps.map((step, index) => <div ref={(node: HTMLDivElement | null) => { stepRefs.current[index] = node }} key={step.short} data-stage={stageKeys[index]} className={`vefin-step ${index === activeIndex ? 'active' : ''}`}>
          <span className="step-index">0{index+1}</span><h4>{step.title}</h4><p>{step.body}</p>
        </div>)}
      </div>
    </div>
    <Reveal variant="ui" className="vefin-visual-wrap"><VeFinWorkspace active={active} /></Reveal>
  </div>
}

function VeFinWorkspace({ active }: { active: Stage }) {
  const { copy } = useLocale()
  const w = copy.vefin.workspace
  return <div className="vefin-visual"><div className="workspace">
    <aside className="workspace-nav"><div className="workspace-brand">VeFin</div>{stageKeys.map((key) => <div key={key} className={`ws-nav-item ${active === key ? 'active' : ''}`}>{w[key]}<i /></div>)}</aside>
    <div className="workspace-main">
      <WorkspaceStage visible={active === 'research'}><div className="ws-label">{w.intentLabel}</div><div className="ws-big">{w.intentTitle}</div><div className="ws-list">{w.intentRows.map((row, i) => <div className="ws-row" key={row}><span>{row}</span><span>{i === w.intentRows.length - 1 ? w.selected : w.focus}</span></div>)}</div></WorkspaceStage>
      <WorkspaceStage visible={active === 'evidence'}><div className="ws-label">{w.evidenceLabel}</div><div className="ws-big">{w.evidenceTitle}</div><BoxGrid rows={w.evidenceBoxes} /></WorkspaceStage>
      <WorkspaceStage visible={active === 'review'}><div className="ws-label">{w.reviewLabel}</div><div className="ws-big">{w.reviewTitle}</div><BoxGrid rows={w.reviewBoxes} /></WorkspaceStage>
      <WorkspaceStage visible={active === 'report'}><div className="ws-label">{w.reportLabel}</div><div className="ws-big">{w.reportTitle}</div><div className="ws-report"><h5>{w.viewTitle}</h5><p>{w.viewBody}</p><h5>{w.traceTitle}</h5><p>{w.traceBody}</p></div></WorkspaceStage>
    </div>
  </div></div>
}

function WorkspaceStage({ visible, children }: { visible:boolean; children:React.ReactNode }) {
  return <section className={`workspace-stage ${visible ? 'active' : ''}`}>{children}</section>
}
function BoxGrid({ rows }: { rows: readonly (readonly string[])[] }) {
  return <div className="ws-box-grid">{rows.map(([label, text]) => <div className="ws-box" key={label}><small>{label}</small><b>{text}</b></div>)}</div>
}
