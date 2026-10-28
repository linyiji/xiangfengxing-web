import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { useLocale } from '../i18n'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { demoEmail, productSources, sourceFile, sourceRefs } from '../content/productDetails'

export function DevelopersPage({ surface = 'overview' }: { surface?: 'overview' | 'api' | 'mcp' }) {
  const { locale } = useLocale()
  const zh = locale === 'zh'
  const title = surface === 'api' ? (zh ? 'API 文档与边界' : 'API documentation & scope') : surface === 'mcp' ? (zh ? 'MCP 集成方向' : 'MCP integration direction') : (zh ? '开发者资料' : 'Developer resources')
  const description = surface === 'api'
    ? (zh ? '阅读 VeFin 实际后端 API 契约。源码中的本地接口不等于已开放的托管公共 API；没有已发布的公共 SDK。' : 'Read the actual VeFin backend API contract. Local interfaces in source are not a hosted public API; no public SDK is released here.')
    : surface === 'mcp'
      ? (zh ? '公共 MCP 接入属于后续集成方向。此处没有可连接的公共 MCP 服务或已发布的配置；先查看实际源码与能力边界。' : 'Public MCP access is a future integration direction. No public MCP service or released connection configuration is offered here; review source and capability boundaries first.')
      : (zh ? '从实际源码、能力状态与模块文档了解 VeFin。区分已实现基础、交易验证 PoC 目标与未发布的集成接口。' : 'Explore VeFin through actual source, capability status and module guides. Distinguish implemented foundations, transaction-verification PoC targets and unreleased integrations.')
  useDocumentMeta(`${title} — Xiangfengxing AI`, description)
  const suffix = zh ? '.zh-CN' : ''
  const links = [
    { label: zh ? '实际后端 API 契约' : 'Actual backend API contract', href: sourceFile(`docs/09_API_CONTRACT_V1${suffix}.md`) },
    { label: zh ? '系统架构' : 'System architecture', href: sourceFile(`docs/architecture/SYSTEM_ARCHITECTURE${suffix}.md`) },
    ...productSources(locale, false),
  ]
  return <main className="detail-page">
    <section className="container developer-hero"><div className="route-kicker">{zh ? '开发者 / 真实资料入口' : 'Developers / Source documentation'}</div><h1>{title}</h1><p>{description}</p>
      <div className="route-meta"><span>{zh ? '源码文档' : 'Source documentation'}</span><span>{zh ? '无托管公共 API' : 'No hosted public API'}</span><span>{zh ? '无公开 MCP 接入' : 'No public MCP access'}</span></div>
    </section>
    <nav className="container detail-jump" aria-label={zh ? '开发者导航' : 'Developer navigation'}><Link to="/developers">{zh ? '概览' : 'Overview'}</Link><Link to="/developers/api">API</Link><Link to="/developers/mcp">MCP</Link></nav>
    <section className="detail-section"><div className="container detail-grid">
      <div className="detail-section-intro"><div className="eyebrow">01 / VeFin</div><h2>{zh ? '已实现基础的文档' : 'Implemented-foundation documentation'}</h2><p>{zh ? `固定公开快照 ${sourceRefs.foundation.slice(0, 8)}。API 文档描述研究后端；交易业务 Port 与公共接入不因此获得验收。` : `Pinned public snapshot ${sourceRefs.foundation.slice(0, 8)}. The API contract describes the research backend; it does not certify transaction Ports or public access.`}</p></div>
      <div className="source-links">{links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<span>↗</span></a>)}</div>
    </div></section>
    <section className="detail-section source-section"><div className="container detail-grid">
      <div className="detail-section-intro"><div className="eyebrow">02 / VeFin Voice</div><h2>{zh ? '语音模块 · PR 版本' : 'Voice module · PR version'}</h2><p>{zh ? '截至 2026-10-28，PR #1 尚未合并。以下文档及源码固定到 PR 提交 20a5eaaf。限定本机 R8 结果与发布离线检查分别记录；不是托管 API、独立安装包或一键调用教程。' : 'PR #1 is unmerged as checked on 2026-10-28. These documents and source use PR commit 20a5eaaf. Bounded local R8 results and publication offline checks are separate; this is not a hosted API, standalone installer or one-command calling guide.'}</p></div>
      <div className="source-links">{productSources(locale, true).map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<span>↗</span></a>)}</div>
    </div></section>
    <section className="detail-contact"><div className="container"><h2>{zh ? '先明确集成范围。' : 'Define the integration scope first.'}</h2><p>{zh ? '阅读源码和限制，或通过邮件讨论演示。此网站不分发凭据、不调用业务服务。' : 'Review the source and limits, or discuss a demo by email. This website distributes no credentials and invokes no business services.'}</p><div className="detail-actions"><a className="detail-cta" href={demoEmail}>{zh ? '联系演示' : 'Contact for a demo'} ↗</a><Link className="text-link" to="/products/voice">VeFin Voice →</Link></div></div></section>
    <Footer />
  </main>
}
