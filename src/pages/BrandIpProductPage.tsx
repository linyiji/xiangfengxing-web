import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useLocale } from '../i18n'

function CharacterStudy() {
  return <div className="bip-character" aria-hidden="true">
    <span className="bip-character-crest" />
    <span className="bip-character-head"><i /><i /><b /></span>
    <span className="bip-character-body" />
    <span className="bip-character-foot left" /><span className="bip-character-foot right" />
  </div>
}

function BrandStudy() {
  return <div className="bip-landscape" aria-hidden="true">
    <span className="bip-sun" />
    <span className="bip-ridge ridge-one" /><span className="bip-ridge ridge-two" /><span className="bip-ridge ridge-three" />
  </div>
}

export function BrandIpProductPage() {
  const { copy } = useLocale()
  const page = copy.brandPage
  const [goalIndex, setGoalIndex] = useState(0)

  useDocumentMeta(page.metaTitle, page.metaDescription)

  return <main className="route-page brand-ip-page">
    <section className="container bip-hero">
      <div className="bip-hero-copy">
        <div className="route-kicker">{page.kicker}</div>
        <h1>{page.title}</h1>
        <div className="route-formal">{page.descriptor}</div>
        <p>{page.intro}</p>
        <div className="bip-hero-rule"><span>{page.heroNote}</span><span>01 — 05</span></div>
      </div>
      <div className="bip-hero-art" aria-hidden="true">
        <div className="bip-hero-circle"><CharacterStudy /></div>
        <div className="bip-hero-line line-one" /><div className="bip-hero-line line-two" /><div className="bip-hero-line line-three" />
      </div>
    </section>

    <section className="bip-section bip-setup">
      <div className="container">
        <div className="bip-section-heading"><span className="eyebrow">{page.heroIndex}</span><div><h2>{page.setupTitle}</h2><p>{page.setupBody}</p></div></div>
        <div className="bip-reference-grid">
          <article className="bip-reference"><div className="bip-reference-visual ip"><CharacterStudy /></div><div className="bip-reference-text"><small>{page.ipReference}</small><h3>{page.ipName}</h3><p>{page.ipDetail}</p></div></article>
          <article className="bip-reference"><div className="bip-reference-visual brand"><BrandStudy /></div><div className="bip-reference-text"><small>{page.brandReference}</small><h3>{page.brandName}</h3><p>{page.brandDetail}</p></div></article>
        </div>
        <p className="bip-caption">{page.fictionalNote}</p>
      </div>
    </section>

    <section className="container bip-section bip-goals">
      <div className="bip-section-heading"><span className="eyebrow">{page.goalLabel}</span><div><h2>{page.goalTitle}</h2><p>{page.goalBody}</p></div></div>
      <div className="bip-goal-layout"><div className="bip-goal-options" role="group" aria-label={page.goalTitle}>
        {page.goals.map((goal, index) => <button type="button" className={goalIndex === index ? 'selected' : ''} aria-pressed={goalIndex === index} onClick={() => setGoalIndex(index)} key={index}><span>0{index + 1}</span>{goal.label}<span aria-hidden="true">↗</span></button>)}
      </div><div className="bip-direction"><small>{page.selectedDirection}</small><p>{page.goals[goalIndex].direction}</p><div className="bip-direction-mark" aria-hidden="true"><span /><span /><span /></div></div></div>
    </section>

    <section className="bip-section bip-workflow"><div className="container">
      <div className="bip-section-heading"><span className="eyebrow">{page.workflowLabel}</span><div><h2>{page.workflowTitle}</h2></div></div>
      <div className="bip-workflow-steps">{page.workflow.map(([title, body], index) => <article key={index}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </div></section>

    <section className="container bip-section bip-guardian">
      <div className="bip-section-heading"><span className="eyebrow">{page.guardianLabel}</span><div><h2>{page.guardianTitle}</h2><p>{page.guardianBody}</p></div></div>
      <div className="bip-guardian-panel"><div className="bip-guardian-art"><CharacterStudy /></div><div className="bip-guardian-checks">{page.guardianChecks.map(([label, status], index) => <div className="bip-guardian-row" key={index}><span>{label}</span><b>{status}</b></div>)}<small>{page.guardianNote}</small></div></div>
    </section>

    <section className="bip-section bip-package"><div className="container bip-package-layout">
      <div><span className="eyebrow">{page.packageLabel}</span><h2>{page.packageTitle}</h2><p>{page.packageBody}</p></div>
      <div className="bip-package-sheet"><div className="bip-package-top"><span>Brand / IP</span><span>01 — 05</span></div>{page.packageItems.map((item, index) => <div className="bip-package-row" key={index}><span>0{index + 1}</span><strong>{item}</strong><span aria-hidden="true">↗</span></div>)}</div>
    </div></section>

    <section className="container bip-status"><div><span className="eyebrow">{page.statusLabel}</span><h2>{page.statusTitle}</h2><p>{page.statusBody}</p></div><Link className="text-link" to="/" state={{ scrollTo: 'brandip' }}>← {page.back}</Link></section>
  </main>
}
