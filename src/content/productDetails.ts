// Public source snapshots checked on 2026-10-28. Voice PR #1 is open.
const repo = 'https://github.com/linyiji/verifiable-financial-ai-agent'
export const sourceRefs = {
  repo,
  foundation: 'ea2002ca571c869c59936f64067ec0d7c7eaabd1',
  voice: '20a5eaafdcb7dcfbe9d4c90059628cf5a9279ea5',
  voicePr: `${repo}/pull/1`,
}
export const sourceFile = (path: string, voice = false) => `${repo}/blob/${voice ? sourceRefs.voice : sourceRefs.foundation}/${path}`
export const demoEmail = 'mailto:zeno@atlasanalyse.cn?subject=VeFin%20demonstration'

type Section = { title: string; body: string; items: readonly (readonly [string, string])[] }
type ProductDetail = {
  kicker: string; title: string; subtitle: string; description: string; tags: readonly string[];
  flowLabel: string; flow: readonly string[]; flowNote: string;
  sections: readonly Section[]; sourceTitle: string; sourceNote: string;
  ctaTitle: string; ctaBody: string; cta: string; related: string;
}
type ProductDetails = { vefin: ProductDetail; voice: ProductDetail }

const en: ProductDetails = {
  vefin: {
    kicker: 'VeFin / Transaction verification', title: 'VeFin', subtitle: 'Verify the transaction. Keep the evidence.',
    description: 'Our current business direction is transaction verification: bring records, rules, discrepancies and evidence into one bounded workflow. The existing financial research system provides foundations; transaction-specific execution is a PoC target.',
    tags: ['Implemented foundations', 'Transaction PoC target', 'Facilitated demo by contact'],
    flowLabel: 'Target workflow · Illustrative diagram',
    flow: ['Scope & authority', 'Records & evidence', 'Discrepancy review', 'Bounded verification result'],
    flowNote: 'A proposed PoC flow, not a screenshot, live transaction or measured customer result.',
    sections: [
      { title: 'Implemented foundations', body: 'The public code documents a locally deployable, controlled financial-research Alpha. These foundations are not an accepted transaction-verification service.', items: [
        ['Research & execution', 'Research objects, goals, confirmed schemes, specialist tasks and controlled changes to the execution path.'],
        ['Evidence & review', 'Supported deterministic financial calculations, financial review and proofs limited to defined computations. Source and report-contribution coverage is partial.'],
        ['Continuity', 'Research Memory v2, incremental research and bounded recovery within the same Run. Reuse does not transfer prior approval to a new result.'],
      ] },
      { title: 'Transaction-verification PoC', body: 'The next validation target is a narrow, authorized business workflow. Its data, rules and acceptance criteria must be agreed for that PoC.', items: [
        ['Records → comparison', 'Bring supplied transaction records and relevant evidence into an agreed scope, compare specified fields and retain discrepancies.'],
        ['Gaps → follow-up', 'Request missing evidence where authorized. VeFin Voice is a candidate communication module; transaction reconciliation and evidence collection are not part of its R8 acceptance.'],
        ['Review → result', 'Return findings with sources, unresolved items and review records. No claim of completed account changes, settlement or institutional write-back.'],
      ] },
      { title: 'Future plans and current limits', body: 'This website presents the product direction and source evidence. Contact us to discuss a scoped demonstration.', items: [
        ['Integration', 'Institutional records, authorized business Ports and end-to-end transaction acceptance remain future work.'],
        ['Assurance', 'Full agent execution-conformance proofs and global capability certification are planned; current proofs cover bounded computations.'],
        ['Availability', 'No public SaaS trial, hosted VeFin API, released SDK or public MCP connection is offered here. No transaction customer case or production certification is claimed.'],
      ] },
    ],
    sourceTitle: 'Source and capability evidence', sourceNote: 'The implemented-foundation claims refer to the pinned public repository snapshot below. The transaction workflow above is a target, not a new acceptance result.',
    ctaTitle: 'Start with a scoped verification task.', ctaBody: 'Email us to discuss the records, rules and boundaries for a facilitated demonstration. This contact link does not start a live service.', cta: 'Contact for a demo', related: 'Explore the VeFin Voice module',
  },
  voice: {
    kicker: 'VeFin / Voice communication module', title: 'VeFin Voice', subtitle: 'A conversation with context, state and boundaries.',
    description: 'VeFin Voice connects speech input, task context, registered knowledge and controlled dialogue to spoken responses. It is a reusable communication module within VeFin, with a bounded local Cantonese consultation acceptance.',
    tags: ['VeFin module', 'Local R8 acceptance', 'No public voice trial'],
    flowLabel: 'Module flow · Architectural illustration',
    flow: ['Speech & context', 'Knowledge & task state', 'Accepted response plan', 'Audio & delivery record'],
    flowNote: 'This diagram explains the module. It is not a live call, a product screenshot or an R8 recording.',
    sections: [
      { title: 'What the module does', body: 'Speech recognition and synthesis are adapters within a stateful communication loop.', items: [
        ['Dialogue & knowledge', 'Retain accepted information, corrections, independent prohibitions and pending items across turns. Answer from applicable registered knowledge and preserve source references.'],
        ['Guidance & response', 'Use task methods and necessary questions, accept candidate fields and freeze a response plan before natural expression and speech delivery.'],
        ['Delivery', 'Track generated, published and client-received audio separately. Missing information and technical failures remain distinguishable.'],
      ] },
      { title: 'How responsibilities are divided', body: 'Communication completion is separate from business execution.', items: [
        ['VeFin Voice', 'Speech input, dialogue, necessary guidance, spoken delivery and communication outcomes.'],
        ['Business capabilities / Ports', 'Authoritative business records, verification rules, query results and actual business receipts. Transaction reconciliation and evidence collection are candidate consumers, not accepted integrations.'],
        ['Harness / Runtime', 'Capability availability, authorization, budgets, cancellation, execution identity and persistence boundaries.'],
        ['Skill & persona / policy', 'Skill supplies task methods; persona and policy control tone, initiative, depth and length. They do not grant permissions or change facts.'],
      ] },
      { title: 'R8 · Bounded historical acceptance', body: 'Public summary of Owner-local reports and listening feedback. This website update does not reproduce or extend that acceptance.', items: [
        ['Scenario & configuration', 'Prudential Hong Kong payment-account public-entry consultation; 0.3.0/v3, efficient-partner / goal-led / core / concise. No customer account query, submission, change or actual human transfer. This is a test scenario, not a customer case or endorsement.'],
        ['Final session', 'One fresh two-turn session: 9/9 response segments reached the RTC client. Three earlier failed sessions remain separate. User month UNKNOWN, year null; consultation COMPLETED.'],
        ['Measured timing', 'Dialogue processing: 2.459 s / 2.509 s, within the 8 s dialogue deadline. End of speech to first client audio: 6.266 s / 4.836 s. These are two turns, not p95 or full playback times.'],
        ['Human and machine checks', 'Owner listening review confirmed clear, complete Cantonese without obvious clipping, truncation or repeated playback. Strict waveform checks: 5 passed, 4 did not pass. Listening approval does not erase machine failures.'],
        ['Input boundary', 'Self-authored Kiki-synthesized input through real browser RTC and ASR. No real-microphone, telephone or arbitrary-dialogue acceptance; no persona/policy switching in this run.'],
      ] },
      { title: 'Current limits and publication status', body: 'The source is in open PR #1. Its publication checks are separate from the historical R8 result.', items: [
        ['Business outcomes', 'COMPLETED describes the consultation. Without a real receiver, human follow-up remains REQUEST_RECORDED_NO_RECEIVER. No account change or payment is completed by this module.'],
        ['Quality & scope', 'Repetition, verbosity, strict waveform differences, historical ASR issues and external-source validity limits remain. Ordinary defaults and QUALITY_PENDING are unchanged.'],
        ['Access', 'No standalone voice installer, hosted API or production certification. Existing research installers do not enable voice automatically. The public configuration template is structural, not runnable authorization.'],
        ['Evidence boundary', 'The PR contains source and offline checks. Publication-version RTC reacceptance and a complete voice product UI are not established by R8. No raw recordings, private profiles or credentials are shared here.'],
      ] },
    ],
    sourceTitle: 'Module documentation and actual source', sourceNote: 'Voice PR #1 is unmerged as checked on 2026-10-28. Links below use its existing commit 20a5eaaf, not missing files on main. R8 method-package hashes and Git commit identities are distinct; see the publication manifest.',
    ctaTitle: 'Explore a bounded voice demonstration.', ctaBody: 'Contact us to discuss scope and arrange a facilitated demo. This website does not activate a consultation, microphone, RTC session or business action.', cta: 'Contact for a demo', related: 'Back to the VeFin product',
  },
}

const zh: ProductDetails = {
  vefin: {
    kicker: 'VeFin / 交易验证', title: 'VeFin', subtitle: '验证交易，保留依据。',
    description: 'VeFin 当前面向交易验证：在有明确边界的流程中连接业务记录、核验规则、差异与证据。已有金融研究系统提供基础；交易专用执行链路属于 PoC 目标。',
    tags: ['已实现基础', '交易验证 PoC 目标', '联系安排演示'],
    flowLabel: '目标流程 · 示意图', flow: ['范围与授权', '记录与证据', '差异复核', '有边界的验证结果'],
    flowNote: '这是拟验证的 PoC 流程，不是产品实拍、实时交易或客户实测结果。',
    sections: [
      { title: '已实现的基础能力', body: '公开源码记录了可本地部署、受控评估的金融研究 Alpha。这些基础不等于交易验证服务已完成验收。', items: [
        ['研究与执行', '研究对象、目标、已确认方案、专业任务，以及受控的执行路径调整。'],
        ['证据与复核', '受支持的确定性财务计算、财务复核，以及限定计算范围的证明。整体来源与报告贡献覆盖仍为部分覆盖。'],
        ['连续性', 'Research Memory v2、增量研究与同一 Run 内的有界恢复。复用历史不代表新结果继承既有批准。'],
      ] },
      { title: '交易验证 PoC 目标', body: '下一步验证一条范围有限、获得授权的业务流程；数据、规则与验收标准需针对该 PoC 确定。', items: [
        ['记录 → 对比', '将提供的交易记录与相关证据纳入约定范围，对比指定字段并保留差异。'],
        ['缺口 → 补齐', '在授权下请求补充证据。VeFin Voice 是候选沟通模块；交易对账与证据补齐不在其 R8 验收范围内。'],
        ['复核 → 结果', '交付带来源、未解决事项与复核记录的发现。不声称已完成账户变更、结算或机构系统写入。'],
      ] },
      { title: '后续计划与当前限制', body: '本网站展示产品方向与源码证据。可联系我们讨论限定范围的演示。', items: [
        ['业务接入', '机构记录、获准业务 Port 和交易端到端验收仍属后续工作。'],
        ['验证保障', '完整 Agent 执行合规证明与全局能力认证属于计划；现有证明仅覆盖有界计算。'],
        ['可用性', '此处不提供公开 SaaS 试用、托管 VeFin API、已发布 SDK 或公共 MCP 接入。不声称拥有交易客户案例或生产认证。'],
      ] },
    ],
    sourceTitle: '源码与能力证据', sourceNote: '已实现基础的表述依据下方固定版本的公开仓库。上方交易流程是目标，不是新的验收结果。',
    ctaTitle: '从一个明确的核验任务开始。', ctaBody: '通过邮件讨论演示所需的记录、规则和边界，安排有人协助的演示。联系入口不会启动真实服务。', cta: '联系演示', related: '了解 VeFin Voice 模块',
  },
  voice: {
    kicker: 'VeFin / 语音沟通模块', title: 'VeFin Voice', subtitle: '让沟通保有上下文、状态与边界。',
    description: 'VeFin Voice 连接语音输入、任务上下文、已登记知识与受控对话，交付语音回答。它是 VeFin 内可复用的沟通模块，已完成限定粤语咨询的本机验收。',
    tags: ['VeFin 内的模块', 'R8 本机限定验收', '无公开语音试用'],
    flowLabel: '模块链路 · 架构示意', flow: ['语音与上下文', '知识与任务状态', '已接受的回应计划', '语音与交付记录'],
    flowNote: '此图用于解释模块，不是实时通话、产品截图或 R8 录音。',
    sections: [
      { title: '模块的作用', body: '语音识别与合成是持续状态沟通闭环中的适配能力。', items: [
        ['对话与知识', '跨轮保留已接受信息、更正、独立禁止与待补项，基于适用的已登记知识回答并保留来源。'],
        ['引导与回应', '使用任务方法和必要追问，接受字段候选、冻结回应计划后，再生成自然表达并交付语音。'],
        ['交付记录', '分别记录音频生成、发布与客户端接收，区分信息缺失和技术失败。'],
      ] },
      { title: '与业务能力如何分工', body: '沟通完成与实际业务执行分别管理。', items: [
        ['VeFin Voice', '语音输入、组织对话、必要引导、语音交付与沟通结果。'],
        ['业务能力 / Port', '权威业务记录、核验规则、查询结果与真实业务回执。交易对账和证据补齐是候选使用方，尚未完成接入验收。'],
        ['Harness / Runtime', '能力可用性、授权、预算、取消、执行身份与持久化边界。'],
        ['Skill 与人格 / 策略', 'Skill 提供任务方法；人格和策略控制语气、主动程度、深度与篇幅，不授予权限、不改变事实。'],
      ] },
      { title: 'R8 · 历史限定验收', body: '依据 Owner 本机报告与人工听评的公开摘要。本次网站更新不复验或扩大该验收范围。', items: [
        ['场景与固定配置', '保诚香港扣款账户变更的公开入口咨询；0.3.0/v3，efficient-partner / goal-led / core / concise。不涉及客户账户查询、提交、修改或真实人工转接。这是测试场景，不是客户案例或背书。'],
        ['最终会话', '同一新鲜两轮会话，9/9 段回答送达 RTC 客户端；此前三场失败独立保留。用户月份 UNKNOWN、年份 null；咨询状态 COMPLETED。'],
        ['实测时间', '对话处理 2.459 秒 / 2.509 秒，满足 8 秒对话截止；语音结束至客户端首音频 6.266 秒 / 4.836 秒。仅为两轮数据，不是 p95 或完整播报时长。'],
        ['人工与机器检查', 'Owner 听评确认粤语清楚完整，无明显爆音、截断或重复播放。严格波形检查 5 项通过、4 项未过；听评不覆盖机器失败。'],
        ['输入边界', '自编 Kiki 合成输入，经真实浏览器 RTC 与 ASR。不包含真人麦克风、电话或任意对话适应验收；本场未切换人格或策略。'],
      ] },
      { title: '当前限制与发布状态', body: '源码位于开放中的 PR #1。发布检查与历史 R8 验收分别记录。', items: [
        ['业务结果', 'COMPLETED 仅指咨询。没有真实接收方时，人工跟进仍为 REQUEST_RECORDED_NO_RECEIVER，不表示账户变更或付款完成。'],
        ['质量与范围', '重复、冗长、严格波形差异、历史 ASR 问题与外部来源有效性边界仍保留。普通默认及 QUALITY_PENDING 不变。'],
        ['使用入口', '没有独立语音安装器、托管 API 或生产认证；现有研究系统安装器不自动启用语音。公开配置模板仅有结构，不包含可执行授权。'],
        ['证据边界', 'PR 包含源码与离线检查；R8 不证明发布版本已重新通过 RTC 验收，也不证明完整语音产品界面已交付。此处不分享原始录音、私有配置或凭据。'],
      ] },
    ],
    sourceTitle: '模块文档与实际源码', sourceNote: '截至 2026-10-28，语音 PR #1 尚未合并。下方链接固定到其中实际存在的提交 20a5eaaf，不指向 main 中缺失的文件。R8 方法包 hash 与 Git 提交身份不同，详见发布清单。',
    ctaTitle: '了解限定范围的语音演示。', ctaBody: '联系我们讨论范围并安排有人协助的演示。本网站不会开启真实咨询、麦克风、RTC 会话或业务操作。', cta: '联系演示', related: '返回 VeFin 产品',
  },
}
export const productDetails = { en, zh }

export function productSources(locale: 'en' | 'zh', voice: boolean) {
  const suffix = locale === 'zh' ? '.zh-CN' : ''
  return voice ? [
    { label: locale === 'zh' ? '模块说明与 R8 摘要' : 'Module guide & R8 snapshot', href: sourceFile(`docs/modules/voice/README${suffix}.md`, true) },
    { label: locale === 'zh' ? '发布清单与源码对应' : 'Publication manifest & provenance', href: sourceFile('docs/modules/voice/PUBLICATION.json', true) },
    { label: 'VoiceDialogue', href: sourceFile('src/application/voice_dialogue.py', true) },
    { label: locale === 'zh' ? '回应计划源码' : 'Response-plan source', href: sourceFile('src/application/voice_skill_plan.py', true) },
    { label: locale === 'zh' ? '查看语音 PR #1' : 'View voice PR #1', href: sourceRefs.voicePr },
  ] : [
    { label: locale === 'zh' ? '产品能力与限制' : 'Product status & limits', href: sourceFile(`docs/product/PRODUCT_STATUS${suffix}.md`) },
    { label: locale === 'zh' ? '产品演示文档' : 'Product walkthrough', href: sourceFile(`docs/product/PRODUCT_WALKTHROUGH${suffix}.md`) },
    { label: locale === 'zh' ? '公开仓库' : 'Public repository', href: sourceRefs.repo },
  ]
}
