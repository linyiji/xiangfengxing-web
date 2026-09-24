import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

const localeStorageKey = 'xiangfengxing-locale'

const en = {
  nav: { products: 'Products', developers: 'Developers', work: 'Work', company: 'Company' },
  hero: {
    label: 'Xiangfengxing AI / Product Company',
    title1: 'We build AI products', title2: 'for real-world work.',
    sub: 'Product-first AI systems built around real workflows, interaction and delivery.',
    altTitle1: '我们打造真正可用的', altTitle2: 'AI 产品。',
    altSub: '从真实工作流、交互体验到最终交付，让 AI 真正进入使用场景。',
    tip: 'Move to translate · EN / 中文',
  },
  peeks: {
    vefin: 'Verifiable Financial System · Product / API / MCP',
    atlas: 'AI compliance testing · Mainland China',
    voice: 'Voice AI · Product / API',
    brand: 'Brand / IP collaboration · Product preview',
  },
  products: {
    eyebrow: '01 / Products',
    title1: 'Products shaped by', title2: 'the work they do.',
    intro: 'One company, different product forms. We only share platform capabilities where it improves the actual product.',
    statuses: { featured: 'Featured Product', live: 'Live · Independent', preview: 'Preview', capability: 'Product Capability' },
  },
  vefin: {
    formal: 'Verifiable Financial System',
    description: 'A professional financial research workflow from question to evidence, review and report.',
    explore: 'Explore product',
    steps: [
      { short: 'Question', title: 'Define the question.', body: 'Clarify the research goal before the system starts searching and analysing.' },
      { short: 'Evidence', title: 'Build the evidence.', body: 'Research, retrieve and keep evidence linked to the claims it supports.' },
      { short: 'Review', title: 'Review the reasoning.', body: 'Surface conflicts, assumptions and items that still require professional judgement.' },
      { short: 'Report', title: 'Deliver the report.', body: 'Turn the work into a professional output that remains traceable to the evidence.' },
    ],
    workspace: {
      research: 'Research', evidence: 'Evidence', review: 'Review', report: 'Report',
      intentLabel: 'Research intent', intentTitle: 'Analyze NVIDIA fundamentals',
      focus: 'Focus', selected: 'Selected',
      intentRows: ['Growth sustainability', 'Margin outlook', 'Valuation', 'Full fundamental review'],
      evidenceLabel: 'Evidence workspace', evidenceTitle: '23 linked evidence items',
      evidenceBoxes: [
        ['Primary source', 'Revenue growth remains strong.'],
        ['Review point', 'Margin assumptions conflict.'],
        ['Scenario', 'Valuation sensitivity retained.'],
        ['Traceability', 'Claims stay linked to evidence.'],
      ],
      reviewLabel: 'Professional review', reviewTitle: 'Resolve before reporting',
      reviewBoxes: [
        ['Conflict', 'Margin assumption differs across sources.'],
        ['Human review', 'Confirm treatment before final output.'],
        ['Evidence', '3 primary sources linked.'],
        ['Status', '1 item remains open.'],
      ],
      reportLabel: 'Final output', reportTitle: 'NVDA Fundamental Report',
      viewTitle: 'Investment view', viewBody: 'Growth remains supported by demand and product-cycle evidence, while margin assumptions require tighter scenario handling.',
      traceTitle: 'Evidence', traceBody: 'Major claims remain linked to source material and review decisions.',
    },
  },
  atlas: {
    status: 'Independent Product / Mainland China', title: 'AtlasAnalyse', formal: 'AI Compliance Testing & Evaluation Platform',
    description: 'Structured testing, execution evidence and traceable evaluation, kept independent for Mainland China deployment and compliance.',
    visit: 'Visit atlasanalyse.cn',
    chain: [['TEST_CASE','Define what to test'],['FIXTURE','Freeze execution context'],['ORACLE','Define expected behavior'],['EVIDENCE','Trace result to execution']],
    run: 'Evaluation Run', rows: [['TEST_CASE_001','Safety mapping'],['TEST_CASE_002','Oracle check'],['TEST_CASE_003','Evidence link'],['TEST_CASE_004','Regression']], pass: 'PASS',
  },
  voice: {
    status: 'Preview / Product · API', title: 'Cantonese Voice', formal: 'Voice AI for real Cantonese conversations',
    description: 'Continuous business communication built around context retention, grounded knowledge and task completion.', explore: 'Explore Voice',
    live: 'LIVE CONVERSATION', phrase: '「我想問返份保單嘅保障範圍……」',
    points: [['Context','Retained across turns'],['Knowledge','Grounded in relevant sources'],['Completion','Moves toward a business outcome']],
  },
  brand: {
    status: 'Product Capability / Preview', title: 'Brand / IP', formal: 'Interactive AI experiences for brands and IP.',
    description: 'Configure, generate and review AI-powered brand/IP collaborations while preserving character identity.', explore: 'Explore product',
    capabilities: ['Identity', 'Brand cues', 'Fusion', 'Review', 'Export'],
    outputLabel: 'Creative direction', output: 'A distinct character. A coherent collaboration.',
  },
  brandPage: {
    metaTitle: 'Brand / IP — Xiangfengxing AI', metaDescription: 'A public preview of Brand / IP: shape character identity, extract brand features, develop a fusion strategy, and review a design package.',
    kicker: 'Product capability / Preview', title: 'Brand / IP', descriptor: 'Interactive AI experiences for brands and IP.',
    intro: 'Configure, generate and review AI-powered brand/IP collaborations while preserving character identity.',
    heroNote: 'An illustrative product preview', heroIndex: '01 / Creative setup',
    setupTitle: 'Start with two distinct identities.', setupBody: 'The character and the brand each bring their own visual language. The preview keeps both legible before exploring where they can meet.',
    ipReference: 'IP Reference', brandReference: 'Brand Reference', ipName: 'Lumi / an original character', brandName: 'Northfield / a fictional outdoor label',
    ipDetail: 'Rounded silhouette · leaf-shaped crest · warm expression', brandDetail: 'Quiet utility · field green · contour lines',
    fictionalNote: 'Fictional examples created for this preview. No third-party imagery.',
    goalLabel: '02 / Creative goal', goalTitle: 'Choose the direction.', goalBody: 'Select a collaboration goal to explore how the concept could develop. These controls illustrate the product experience; they do not submit or generate content.',
    goals: [
      { label: 'Character styling', direction: 'Give Lumi a field-ready look while keeping the crest and silhouette recognizable.' },
      { label: 'Shared visual world', direction: 'Bring Northfield’s contour language into a setting built around Lumi.' },
      { label: 'Collectible concept', direction: 'Shape a small design collection with a consistent character and brand system.' },
    ],
    selectedDirection: 'Visual direction', workflowLabel: '03 / Workflow', workflowTitle: 'From reference to reviewed direction.',
    workflow: [
      ['Understand', 'Identify the character’s defining traits and the intended collaboration.'],
      ['Extract', 'Separate stable IP identity from the brand features available to use.'],
      ['Fuse', 'Choose a strategy that connects both identities with a clear purpose.'],
      ['Generate', 'Develop visual directions and supporting design decisions.'],
      ['Review', 'Check character continuity and flag changes that need a human decision.'],
    ],
    guardianLabel: '04 / Guardian Review', guardianTitle: 'Protect what makes the character itself.',
    guardianBody: 'The review compares each direction with the original character identity. It keeps recognizable traits visible and calls out changes that may weaken continuity.',
    guardianChecks: [['Silhouette', 'Retained'], ['Signature crest', 'Retained'], ['Expression', 'Review in context']],
    guardianNote: 'Illustrative review state · final approval remains a human decision.',
    packageLabel: '05 / Design Package', packageTitle: 'A direction ready to discuss.',
    packageBody: 'A design package brings the reference, fusion strategy, selected direction and review notes together for a creative team to evaluate.',
    packageItems: ['IP Identity', 'Brand Features', 'Fusion Strategy', 'Visual Direction', 'Guardian Review'],
    statusLabel: 'Preview capability status', statusTitle: 'See the product approach.', statusBody: 'This is a public, illustrative preview of the Brand / IP workflow. Live generation and export are not available on this website.',
    back: 'Back to products',
  },
  ways: {
    eyebrow: 'Ways to use / Xiangfengxing Platform', title: 'Use products your way.',
    description: 'The product experience comes first. API and MCP are additional delivery surfaces where they genuinely help.',
    items: [
      ['Product','Use the complete workflow as it was designed.','Explore products'],
      ['API','Bring selected capabilities into your own systems.','Explore APIs'],
      ['MCP','Let compatible agents call selected capabilities directly.','Explore MCP'],
    ],
  },
  work: {
    eyebrow: 'Proof / Selected Work', title: 'Work beyond the product line.',
    description: 'Context-specific builds for events, partners or one-off problems. When a capability becomes repeatable, it can graduate into Products.',
    context: 'Context build · not a product category', note: 'AI × Web3 · OKX context', view: 'View case',
  },
  principle: {
    eyebrow: 'Principle', title: 'Product, not model.',
    lines: ['We start with the work,','the user and the experience.','Then we choose the models, agents and infrastructure required to ship it.'],
    thesis1: 'AI is the infrastructure.', thesis2: 'Products are the outcome.',
    flow: ['Problem','Experience','Product','Ship'],
  },
  footer: {
    description: 'Guangzhou Xiangfengxing Artificial Intelligence Technology Co., Ltd. Building AI products for global markets.',
    products: 'Products', developers: 'Developers', platform: 'Platform', overview: 'Overview', contact: 'Contact', city: 'Guangzhou · Greater Bay Area',
  },
  common: { preparing: 'Preparing', back: 'Back to Xiangfengxing', comingNext: 'Coming next', previewOnly: 'Preview only', notLive: 'Not live' },
  routes: {
    vefin: { kicker:'Product / Finance', title:'VeFin', formal:'Verifiable Financial System', copy:'Professional financial research from question to evidence, review and report.', pending:'The full VeFin product experience is being connected.', pendingCopy:'This route is reserved for the complete VeFin product page. Product, API and MCP access will open here as they become ready.', features:['Research workspace','Evidence graph','Professional report'], meta:['Product','API','MCP'] },
    voice: { kicker:'Product / Voice AI', title:'Cantonese Voice', formal:'Voice AI for real Cantonese conversations', copy:'Continuous business communication built around context retention, grounded knowledge and task completion.', pending:'The Cantonese Voice product page is being connected.', pendingCopy:'The complete voice product and API experience will open here when the product surface is ready.', features:['Real-time conversation','Context retention','Business workflows'], meta:['Product','API'] },
    brand: { kicker:'Product Capability', title:'Brand / IP', formal:'Interactive AI experiences for brands and IP', copy:'Configure, call and embed an interactive experience instead of treating every collaboration as a one-off build.', pending:'The callable Brand / IP experience is being connected.', pendingCopy:'This route will become the complete productized capability page, including configuration, usage and API entry points.', features:['Configuration','Interactive experience','Use / API'], meta:['Use','API'] },
    developers: { kicker:'Developers', title:'Build with Xiangfengxing', formal:'Developer surfaces for selected capabilities', copy:'Use complete products where they fit, or connect selected capabilities through APIs and MCP.', pending:'Developer access is being connected.', pendingCopy:'Documentation, capability discovery and developer tools will open here as the interfaces stabilize.', features:['Capability discovery','API and MCP previews','Developer documentation'], meta:['API','MCP','Documentation'] },
    api: { kicker:'Developers / API', title:'API', formal:'Integrate selected Xiangfengxing capabilities', copy:'A developer-facing surface for bringing professional product capabilities into your own systems.', pending:'API access and documentation are being connected.', pendingCopy:'The code shown above is an illustrative preview only. Live endpoints and documentation are not open yet.', features:['Capability endpoints','Usage documentation','Integration guides'], meta:['Preview','Documentation','Integration'] },
    mcp: { kicker:'Developers / MCP', title:'MCP', formal:'Connect compatible agents to professional capabilities', copy:'A connection layer for exposing selected Xiangfengxing capabilities to compatible agent environments.', pending:'MCP access is being connected.', pendingCopy:'Capability discovery and MCP connection details will open here when the interface is ready.', features:['Discover','Connect','Call & verify'], meta:['Discover','Connect','Call','Verify'] },
    work: { kicker:'Selected Work', title:'AI × Web3', formal:'Built for a specific event and product context', copy:'A context-specific build presented in an OKX-related setting. The complete case study will live here.', pending:'The full project story will be published here.', pendingCopy:'Context, approach, product decisions and outcomes will be added when the case study is ready.', features:['Context','Approach','Outcome'], meta:['OKX context','2026','Case study'] },
  },
  routeVisual: {
    productPreview:'Product preview', conversationPreview:'Conversation preview', capabilityPreview:'Capability preview', developerOverview:'Developer overview', connectionPreview:'Connection preview', casePreview:'Case study preview',
    researchWorkspace:'Research workspace', question:'Research question', defined:'Defined', evidenceItems:'Evidence items', linked:'23 linked', reviewStatus:'Review status', openItem:'1 open item', output:'Output', professionalReport:'Professional report',
    customer:'Customer', system:'System', systemLine:'Context retained · Knowledge grounded · Task in progress',
    configure:'Configure', tone:'Tone', playful:'Playful', interaction:'Interaction', conversation:'Conversation', delivery:'Delivery', identityOutput:'Identity becomes an interactive product surface.',
    integrate:'Integrate', integrateBody:'Bring selected product capabilities into your own systems.', connectAgents:'Connect agents', connectBody:'Expose compatible professional capabilities to supported agent environments.', stayProduct:'Stay product-shaped', stayProductBody:'Not every capability is forced into an API or MCP surface.',
    compatibleAgent:'Compatible Agent', otherCapabilities:'Other capabilities',
  },
} as const

const zh = {
  nav: { products: '产品', developers: '开发者', work: '案例', company: '公司' },
  hero: {
    label: '向风行 AI / 产品公司',
    title1: '我们打造真正可用的', title2: 'AI 产品。',
    sub: '从真实工作流、交互体验到最终交付，让 AI 真正进入使用场景。',
    altTitle1: 'We build AI products', altTitle2: 'for real-world work.',
    altSub: 'Product-first AI systems built around real workflows, interaction and delivery.',
    tip: '移动查看另一语言 · 中文 / EN',
  },
  peeks: { vefin: '可验证金融系统 · Product / API / MCP', atlas: 'AI 合规测试 · 中国大陆', voice: '粤语 Voice AI · Product / API', brand: '品牌 / IP 联名 · 产品预览' },
  products: {
    eyebrow: '01 / 产品', title1: '产品形态由', title2: '真实工作决定。',
    intro: '同一家公司，不同产品形态。只有在真正改善产品体验时，我们才共享平台能力。',
    statuses: { featured: '核心产品', live: '已上线 · 独立产品', preview: '预览中', capability: '产品化能力' },
  },
  vefin: {
    formal: '可验证金融系统', description: '从研究问题到证据、复核与专业报告的一套金融研究工作流。', explore: '查看产品',
    steps: [
      { short: '问题', title: '明确研究问题。', body: '在开始搜索和分析之前，先明确真正需要回答的研究目标。' },
      { short: '证据', title: '构建证据链。', body: '研究、获取并保留证据，同时让证据与其支持的结论持续关联。' },
      { short: '复核', title: '复核分析过程。', body: '暴露冲突、假设和仍然需要专业判断的事项。' },
      { short: '报告', title: '交付专业报告。', body: '把整个研究过程转化为仍可追溯至证据的专业输出。' },
    ],
    workspace: {
      research: '研究', evidence: '证据', review: '复核', report: '报告',
      intentLabel: '研究意图', intentTitle: '分析 NVIDIA 基本面', focus: '重点', selected: '已选择',
      intentRows: ['增长可持续性', '利润率展望', '估值', '完整基本面分析'],
      evidenceLabel: '证据工作区', evidenceTitle: '23 条已关联证据',
      evidenceBoxes: [['一手来源','收入增长仍然强劲。'],['复核事项','不同来源的利润率假设存在冲突。'],['情景分析','保留估值敏感性分析。'],['可追溯性','关键结论持续关联至证据。']],
      reviewLabel: '专业复核', reviewTitle: '报告前需处理',
      reviewBoxes: [['冲突','不同来源的利润率假设不一致。'],['人工复核','最终输出前确认处理方式。'],['证据','已关联 3 个一手来源。'],['状态','仍有 1 个事项未关闭。']],
      reportLabel: '最终输出', reportTitle: 'NVDA 基本面研究报告', viewTitle: '研究观点', viewBody: '增长仍获得需求和产品周期证据支持，但利润率假设需要更严格的情景处理。', traceTitle: '证据', traceBody: '主要结论仍可追溯至来源材料和复核决策。',
    },
  },
  atlas: {
    status: '独立产品 / 中国大陆', title: 'AtlasAnalyse', formal: 'AI 合规测试与评估平台',
    description: '围绕结构化测试、执行证据和可追溯评估构建，并为中国大陆部署和合规保持独立。', visit: '访问 atlasanalyse.cn',
    chain: [['TEST_CASE','定义测试内容'],['FIXTURE','冻结执行上下文'],['ORACLE','定义预期行为'],['EVIDENCE','将结果追溯至执行']],
    run: '评估运行', rows: [['TEST_CASE_001','安全映射'],['TEST_CASE_002','Oracle 校验'],['TEST_CASE_003','证据关联'],['TEST_CASE_004','回归测试']], pass: '通过',
  },
  voice: {
    status: '预览 / Product · API', title: 'Cantonese Voice', formal: '面向真实粤语对话的 Voice AI',
    description: '围绕上下文保持、知识依据与任务完成，构建连续的业务沟通体验。', explore: '查看 Voice', live: '实时对话', phrase: '「我想問返份保單嘅保障範圍……」',
    points: [['上下文','跨轮次持续保持'],['知识','在需要时基于相关来源'],['完成','推动对话走向业务结果']],
  },
  brand: {
    status: '产品化能力 / 预览中', title: 'Brand / IP', formal: '面向品牌与 IP 的互动式 AI 体验。',
    description: '配置、生成并复核 AI 品牌/IP 联名方案，在创意变化中保持角色识别度。', explore: '查看产品',
    capabilities: ['身份建模', '品牌特征', '融合策略', '身份复核', '内容包导出'],
    outputLabel: '创意方向', output: '保留鲜明角色，也形成一致的联名表达。',
  },
  brandPage: {
    metaTitle: 'Brand / IP — 向风行 AI', metaDescription: 'Brand / IP 公开产品预览：建立角色身份、提取品牌特征、制定融合策略并复核设计内容包。',
    kicker: '产品化能力 / 预览', title: 'Brand / IP', descriptor: '面向品牌与 IP 的互动式 AI 体验。',
    intro: '配置、生成并复核 AI 品牌/IP 联名方案，在创意变化中保持角色识别度。',
    heroNote: '示意性产品预览', heroIndex: '01 / 创意准备',
    setupTitle: '从两种鲜明的身份出发。', setupBody: '角色与品牌各有自己的视觉语言。预览先清晰呈现双方特征，再探索它们如何相遇。',
    ipReference: 'IP 参考', brandReference: '品牌参考', ipName: 'Lumi / 原创角色', brandName: 'Northfield / 虚构户外品牌',
    ipDetail: '圆润轮廓 · 叶形头饰 · 温暖表情', brandDetail: '简洁实用 · 原野绿 · 等高线',
    fictionalNote: '本预览中的角色与品牌均为虚构示例，不含第三方图片。',
    goalLabel: '02 / 创意目标', goalTitle: '选择创作方向。', goalBody: '选择一个联名目标，查看概念可能如何展开。这些控件仅展示产品体验，不会提交或生成内容。',
    goals: [
      { label: '角色造型', direction: '让 Lumi 呈现适合户外探索的造型，同时保留叶形头饰与可识别轮廓。' },
      { label: '共同视觉世界', direction: '把 Northfield 的等高线语言融入围绕 Lumi 构建的场景。' },
      { label: '收藏品概念', direction: '构思一套在角色与品牌表达上保持一致的小型设计系列。' },
    ],
    selectedDirection: '视觉方向', workflowLabel: '03 / 工作流程', workflowTitle: '从参考素材走向经过复核的创意方向。',
    workflow: [
      ['理解', '识别角色的核心特征和此次联名的目标。'],
      ['提取', '区分稳定的 IP 身份与可使用的品牌特征。'],
      ['融合', '选择有明确目的的策略，让双方身份自然连接。'],
      ['生成', '形成视觉方向以及支撑它的设计决策。'],
      ['复核', '检查角色身份的连续性，标出需要人工判断的变化。'],
    ],
    guardianLabel: '04 / 身份复核', guardianTitle: '守住角色之所以为它的特征。',
    guardianBody: '复核环节将创意方向与原始角色身份对照，保持识别特征清晰可见，并指出可能削弱一致性的变化。',
    guardianChecks: [['角色轮廓', '已保留'], ['标志性头饰', '已保留'], ['表情', '结合情境复核']],
    guardianNote: '示意性复核状态 · 最终认可仍需人工判断。',
    packageLabel: '05 / 设计内容包', packageTitle: '形成可供讨论的创意方向。',
    packageBody: '设计内容包汇集参考素材、融合策略、选定方向与复核意见，供创意团队进一步评估。',
    packageItems: ['IP 身份', '品牌特征', '融合策略', '视觉方向', '身份复核'],
    statusLabel: '预览能力状态', statusTitle: '了解产品方法。', statusBody: '这是 Brand / IP 工作流程的公开示意预览。本站尚未开放实时生成与内容包导出。',
    back: '返回产品',
  },
  ways: {
    eyebrow: '使用方式 / 向风行 Platform', title: '按适合你的方式使用产品。',
    description: '产品体验优先。只有在确实有价值时，API 与 MCP 才作为额外交付方式出现。',
    items: [['Product','按设计好的完整工作流直接使用。','查看产品'],['API','把精选能力集成进你自己的系统。','查看 API'],['MCP','让兼容 Agent 直接调用精选能力。','查看 MCP']],
  },
  work: {
    eyebrow: '证明 / Selected Work', title: '产品线之外的场景构建。',
    description: '面向活动、合作方或一次性问题的具体构建。当某项能力具备重复价值时，它才会升级进入 Products。',
    context: '场景构建 · 不是产品分类', note: 'AI × Web3 · OKX 语境', view: '查看案例',
  },
  principle: {
    eyebrow: '原则', title: '产品，而不是模型。',
    lines: ['我们从工作本身出发，','从用户与体验出发。','然后再选择真正需要的模型、Agent 与基础设施，把产品交付出来。'],
    thesis1: 'AI 是基础设施。', thesis2: '产品才是最终结果。', flow: ['问题','体验','产品','交付'],
  },
  footer: {
    description: '广州向风行人工智能科技有限公司。面向全球市场构建真正可用的 AI 产品。', products: '产品', developers: '开发者', platform: '平台', overview: '概览', contact: '联系', city: '广州 · 粤港澳大湾区',
  },
  common: { preparing: '准备中', back: '返回向风行', comingNext: '即将开放', previewOnly: '仅为预览', notLive: '尚未开放' },
  routes: {
    vefin: { kicker:'产品 / 金融', title:'VeFin', formal:'可验证金融系统', copy:'从研究问题到证据、复核与报告的专业金融研究系统。', pending:'VeFin 完整产品页面正在接入。', pendingCopy:'该路径已为完整 VeFin 产品页保留，Product、API 与 MCP 将按成熟度逐步开放。', features:['研究工作区','证据图谱','专业报告'], meta:['Product','API','MCP'] },
    voice: { kicker:'产品 / Voice AI', title:'Cantonese Voice', formal:'面向真实粤语对话的 Voice AI', copy:'围绕上下文保持、知识依据与任务完成构建连续业务沟通。', pending:'Cantonese Voice 产品页面正在接入。', pendingCopy:'完整产品体验与 API 将在产品界面成熟后于此开放。', features:['实时对话','上下文保持','业务工作流'], meta:['Product','API'] },
    brand: { kicker:'产品化能力', title:'Brand / IP', formal:'面向品牌与 IP 的互动式 AI 体验', copy:'将品牌身份配置、调用并嵌入互动体验，而不是把每次合作都做成一次性项目。', pending:'Brand / IP 产品化能力页面正在接入。', pendingCopy:'后续将在此开放完整配置、使用与 API 入口。', features:['配置','互动体验','Use / API'], meta:['Use','API'] },
    developers: { kicker:'开发者', title:'Build with Xiangfengxing', formal:'面向精选能力的开发者入口', copy:'适合时直接使用完整产品，也可通过 API 与 MCP 接入精选能力。', pending:'开发者入口正在接入。', pendingCopy:'文档、能力发现和开发者工具将在接口稳定后开放。', features:['能力发现','API 与 MCP 预览','开发者文档'], meta:['API','MCP','文档'] },
    api: { kicker:'开发者 / API', title:'API', formal:'将向风行精选能力集成到你的系统', copy:'面向开发者的调用层，用于把专业产品能力接入现有系统。', pending:'API 访问和文档正在接入。', pendingCopy:'上方代码仅为界面预览，当前尚未开放真实 Endpoint 与文档。', features:['能力 Endpoint','使用文档','集成指南'], meta:['预览','文档','集成'] },
    mcp: { kicker:'开发者 / MCP', title:'MCP', formal:'让兼容 Agent 接入专业能力', copy:'用于向兼容 Agent 环境暴露向风行精选能力的连接层。', pending:'MCP 访问正在接入。', pendingCopy:'能力发现与 MCP 连接细节将在接口成熟后开放。', features:['发现','连接','调用与验证'], meta:['Discover','Connect','Call','Verify'] },
    work: { kicker:'Selected Work', title:'AI × Web3', formal:'面向特定活动与产品语境的构建', copy:'在 OKX 相关语境下展示的一次具体场景项目，完整案例后续将在此发布。', pending:'完整项目案例将在此发布。', pendingCopy:'案例准备完成后，将补充背景、方法、产品决策与结果。', features:['背景','方法','结果'], meta:['OKX 语境','2026','案例'] },
  },
  routeVisual: {
    productPreview:'产品预览', conversationPreview:'对话预览', capabilityPreview:'能力预览', developerOverview:'开发者概览', connectionPreview:'连接预览', casePreview:'案例预览',
    researchWorkspace:'研究工作区', question:'研究问题', defined:'已定义', evidenceItems:'证据条目', linked:'已关联 23 条', reviewStatus:'复核状态', openItem:'1 个待处理事项', output:'输出', professionalReport:'专业报告',
    customer:'客户', system:'系统', systemLine:'上下文保持 · 知识依据 · 任务进行中',
    configure:'配置', tone:'语气', playful:'活泼', interaction:'交互', conversation:'对话', delivery:'交付', identityOutput:'让品牌身份成为可交互的产品界面。',
    integrate:'集成', integrateBody:'将精选产品能力接入现有系统。', connectAgents:'连接 Agent', connectBody:'向兼容 Agent 环境开放专业能力。', stayProduct:'保持产品形态', stayProductBody:'并不是所有能力都必须被做成 API 或 MCP。',
    compatibleAgent:'兼容 Agent', otherCapabilities:'其他能力',
  },
}

type LocaleCopy = typeof en | typeof zh

const LocaleContext = createContext<{ locale: 'en' | 'zh'; copy: LocaleCopy; toggle: () => void } | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<'en' | 'zh'>(() => {
    const stored = window.localStorage.getItem(localeStorageKey)
    return stored === 'zh' ? 'zh' : 'en'
  })
  useEffect(() => {
    window.localStorage.setItem(localeStorageKey, locale)
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
  }, [locale])
  const value = useMemo(() => ({
    locale,
    copy: locale === 'en' ? en : zh,
    toggle: () => setLocale((current) => current === 'en' ? 'zh' : 'en'),
  }), [locale])
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocale must be used inside LocaleProvider')
  return context
}

export const localeShape = { en, zh }
