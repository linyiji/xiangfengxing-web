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
    vefin: 'Transaction verification · PoC direction',
    atlas: 'AI compliance testing · Mainland China',
    voice: 'VeFin module · Bounded acceptance',
    brand: 'Callable capability · Use / API',
  },
  products: {
    eyebrow: '01 / Products',
    title1: 'Products shaped by', title2: 'the work they do.',
    intro: 'One company, different product forms. We only share platform capabilities where it improves the actual product.',
    statuses: { featured: 'Featured Product', live: 'Live · Independent', preview: 'Preview', capability: 'Product Capability' },
  },
  vefin: {
    "formal": "Transaction verification · Current business direction",
    "description": "VeFin is moving toward evidence-based transaction verification. Existing research and review foundations support a scoped PoC; transaction reconciliation and voice-led evidence collection remain integration goals.",
    "explore": "Explore VeFin and its scope",
    "steps": [
        {
            "short": "Scope",
            "title": "Define the verification task.",
            "body": "PoC target: agree on the transaction, records, verification rules and authority before processing."
        },
        {
            "short": "Evidence",
            "title": "Connect records to evidence.",
            "body": "Implemented foundation: evidence handling and supported deterministic financial calculations in the research system. Transaction-record ingestion is a PoC target."
        },
        {
            "short": "Review",
            "title": "Investigate discrepancies.",
            "body": "PoC target: compare records, explain differences and request missing evidence. VeFin Voice is a candidate communication module; the business bridge is not accepted."
        },
        {
            "short": "Result",
            "title": "Return a bounded result.",
            "body": "PoC target: deliver verification findings, unresolved items and traceable records. Institutional integration and production deployment are future work."
        }
    ],
    "workspace": {
        "research": "Scope",
        "evidence": "Evidence",
        "review": "Review",
        "report": "Result",
        "intentLabel": "Illustrative PoC task",
        "intentTitle": "Verify a transaction record",
        "focus": "To define",
        "selected": "Target scope",
        "intentRows": [
            "Transaction and counterparties",
            "Records and permissions",
            "Verification rules",
            "Evidence and discrepancy review"
        ],
        "evidenceLabel": "Target evidence workspace",
        "evidenceTitle": "Bring records into context",
        "evidenceBoxes": [
            [
                "Records",
                "Authorized transaction records"
            ],
            [
                "References",
                "Applicable verification rules"
            ],
            [
                "Gaps",
                "Missing evidence stays visible"
            ],
            [
                "Provenance",
                "Source and execution records"
            ]
        ],
        "reviewLabel": "Target review flow",
        "reviewTitle": "Resolve or retain discrepancies",
        "reviewBoxes": [
            [
                "Compare",
                "Check agreed fields and rules"
            ],
            [
                "Communicate",
                "Request evidence with permission"
            ],
            [
                "Boundary",
                "No business bridge accepted yet"
            ],
            [
                "Status",
                "Unresolved items remain open"
            ]
        ],
        "reportLabel": "Illustrative output",
        "reportTitle": "Verification result and limits",
        "viewTitle": "Bounded conclusion",
        "viewBody": "Record findings against supplied evidence and agreed rules; retain unknowns and items requiring human review.",
        "traceTitle": "PoC target · Not live data",
        "traceBody": "This interface illustrates the intended workflow. It is not a product screenshot or a measured transaction-verification result."
    }
},
  atlas: {
    status: 'Independent Product / Mainland China', title: 'AtlasAnalyse', formal: 'AI Compliance Testing & Evaluation Platform',
    description: 'Structured testing, execution evidence and traceable evaluation, kept independent for Mainland China deployment and compliance.',
    visit: 'Visit atlasanalyse.cn',
    chain: [['TEST_CASE','Define what to test'],['FIXTURE','Freeze execution context'],['ORACLE','Define expected behavior'],['EVIDENCE','Trace result to execution']],
    run: 'Evaluation Run', rows: [['TEST_CASE_001','Safety mapping'],['TEST_CASE_002','Oracle check'],['TEST_CASE_003','Evidence link'],['TEST_CASE_004','Regression']], pass: 'PASS',
  },
  voice: {
    "status": "VeFin module · Bounded acceptance",
    "title": "VeFin Voice",
    "formal": "Voice communication within VeFin",
    "description": "A stateful communication module connecting speech, task context, registered knowledge and controlled dialogue. Locally accepted in a bounded Cantonese consultation; transaction-workflow integration remains a goal.",
    "explore": "Explore VeFin Voice",
    "live": "ILLUSTRATIVE CONVERSATION",
    "phrase": "“How can I change my debit account?”",
    "points": [
        [
            "Module",
            "Communication within VeFin"
        ],
        [
            "Evidence",
            "Bounded local R8 acceptance"
        ],
        [
            "Boundary",
            "No public voice trial or hosted API"
        ]
    ]
},
  brand: {
    status: 'Product Capability / Preview', title: 'Brand / IP', formal: 'Interactive AI experiences for brands and IP',
    description: 'Configure, call and embed an interactive experience rather than treating every collaboration as a one-off build.', explore: 'Explore capability',
    config: [['Brand / IP','Character A'],['Experience','Interactive conversation'],['Delivery','Use · API']],
    outputLabel: 'Generated experience', output: 'Brand identity becomes an interactive product surface.',
  },
  ways: {
    "eyebrow": "Ways to explore / Xiangfengxing",
    "title": "Explore the product and its evidence.",
    "description": "Read the current scope and source documentation, or contact us for a facilitated demonstration.",
    "items": [
        [
            "Product",
            "Review implemented foundations, PoC targets and current limits.",
            "Explore products"
        ],
        [
            "API documentation",
            "Read the actual backend contract. A hosted public API or SDK is not offered here.",
            "Read API scope"
        ],
        [
            "MCP direction",
            "Public MCP access is not available. Review source and integration boundaries.",
            "Read integration scope"
        ]
    ]
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


    brand: { kicker:'Product Capability', title:'Brand / IP', formal:'Interactive AI experiences for brands and IP', copy:'Configure, call and embed an interactive experience instead of treating every collaboration as a one-off build.', pending:'The callable Brand / IP experience is being connected.', pendingCopy:'This route will become the complete productized capability page, including configuration, usage and API entry points.', features:['Configuration','Interactive experience','Use / API'], meta:['Use','API'] },



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
  peeks: { vefin: '交易验证 · PoC 方向', atlas: 'AI 合规测试 · 中国大陆', voice: 'VeFin 模块 · 限定验收', brand: '产品化能力 · Use / API' },
  products: {
    eyebrow: '01 / 产品', title1: '产品形态由', title2: '真实工作决定。',
    intro: '同一家公司，不同产品形态。只有在真正改善产品体验时，我们才共享平台能力。',
    statuses: { featured: '核心产品', live: '已上线 · 独立产品', preview: '预览中', capability: '产品化能力' },
  },
  vefin: {
    "formal": "交易验证 · 当前业务方向",
    "description": "VeFin 面向基于证据的交易验证。已有研究与复核基础支持限定 PoC；交易对账与通过语音补齐证据仍是待接入、待验证的目标。",
    "explore": "了解 VeFin 与能力边界",
    "steps": [
        {
            "short": "范围",
            "title": "明确验证任务。",
            "body": "PoC 目标：先确定交易对象、业务记录、核验规则与授权范围。"
        },
        {
            "short": "证据",
            "title": "连接记录与证据。",
            "body": "已实现基础：研究系统中的证据处理与受支持的确定性财务计算。交易记录接入属于 PoC 目标。"
        },
        {
            "short": "复核",
            "title": "核查差异并补齐材料。",
            "body": "PoC 目标：对比记录、解释差异、请求补齐证据。VeFin Voice 是候选沟通模块，业务桥接尚未验收。"
        },
        {
            "short": "结果",
            "title": "交付有边界的验证结果。",
            "body": "PoC 目标：保留核验结论、待处理项与追溯记录。机构系统接入与生产部署属于后续计划。"
        }
    ],
    "workspace": {
        "research": "范围",
        "evidence": "证据",
        "review": "复核",
        "report": "结果",
        "intentLabel": "PoC 任务示意",
        "intentTitle": "验证一笔交易记录",
        "focus": "待确定",
        "selected": "目标范围",
        "intentRows": [
            "交易对象与相关方",
            "记录来源与授权",
            "核验规则",
            "证据与差异复核"
        ],
        "evidenceLabel": "目标证据工作区",
        "evidenceTitle": "让记录具有上下文",
        "evidenceBoxes": [
            [
                "业务记录",
                "获准使用的交易记录"
            ],
            [
                "参考依据",
                "适用的核验规则"
            ],
            [
                "材料缺口",
                "显式保留待补证据"
            ],
            [
                "可追溯性",
                "来源与执行记录"
            ]
        ],
        "reviewLabel": "目标复核流程",
        "reviewTitle": "处理差异或保留待处理项",
        "reviewBoxes": [
            [
                "对比",
                "核查约定字段与规则"
            ],
            [
                "沟通",
                "在授权下请求补齐证据"
            ],
            [
                "边界",
                "业务桥接尚未验收"
            ],
            [
                "状态",
                "未解决事项保持开放"
            ]
        ],
        "reportLabel": "输出示意",
        "reportTitle": "验证结果与限制",
        "viewTitle": "有边界的结论",
        "viewBody": "依据所提供证据与约定规则记录发现，保留未知项和需要人工判断的事项。",
        "traceTitle": "PoC 目标 · 非实时数据",
        "traceBody": "此界面仅示意目标流程，不是产品实拍，也不是交易验证实测结果。"
    }
},
  atlas: {
    status: '独立产品 / 中国大陆', title: 'AtlasAnalyse', formal: 'AI 合规测试与评估平台',
    description: '围绕结构化测试、执行证据和可追溯评估构建，并为中国大陆部署和合规保持独立。', visit: '访问 atlasanalyse.cn',
    chain: [['TEST_CASE','定义测试内容'],['FIXTURE','冻结执行上下文'],['ORACLE','定义预期行为'],['EVIDENCE','将结果追溯至执行']],
    run: '评估运行', rows: [['TEST_CASE_001','安全映射'],['TEST_CASE_002','Oracle 校验'],['TEST_CASE_003','证据关联'],['TEST_CASE_004','回归测试']], pass: '通过',
  },
  voice: {
    "status": "VeFin 模块 · 限定验收",
    "title": "VeFin Voice",
    "formal": "VeFin 内的语音沟通模块",
    "description": "连接语音、任务上下文、已登记知识与受控对话的持续状态沟通模块。已完成限定粤语咨询的本机验收；交易业务流程接入仍是目标。",
    "explore": "了解 VeFin Voice",
    "live": "对话示意",
    "phrase": "「我想問點樣更改扣款戶口？」",
    "points": [
        [
            "模块",
            "VeFin 内的沟通能力"
        ],
        [
            "证据",
            "R8 本机限定验收"
        ],
        [
            "边界",
            "无公开语音试用或托管 API"
        ]
    ]
},
  brand: {
    status: '产品化能力 / 预览中', title: 'Brand / IP', formal: '面向品牌与 IP 的互动式 AI 体验',
    description: '把品牌身份配置、调用并嵌入互动体验，而不是把每次合作都做成一次性项目。', explore: '查看能力',
    config: [['品牌 / IP','角色 A'],['体验','互动对话'],['交付','Use · API']], outputLabel: '生成体验', output: '让品牌身份成为可交互的产品界面。',
  },
  ways: {
    "eyebrow": "了解方式 / 向风行",
    "title": "了解产品与实际证据。",
    "description": "阅读当前范围与源码文档，或联系我们安排有人协助的演示。",
    "items": [
        [
            "产品",
            "区分已实现基础、PoC 目标与当前限制。",
            "了解产品"
        ],
        [
            "API 文档",
            "阅读实际后端契约。此处不提供托管公共 API 或 SDK。",
            "查看 API 范围"
        ],
        [
            "MCP 方向",
            "尚未提供公开 MCP 接入，可先查看源码与集成边界。",
            "查看集成范围"
        ]
    ]
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


    brand: { kicker:'产品化能力', title:'Brand / IP', formal:'面向品牌与 IP 的互动式 AI 体验', copy:'将品牌身份配置、调用并嵌入互动体验，而不是把每次合作都做成一次性项目。', pending:'Brand / IP 产品化能力页面正在接入。', pendingCopy:'后续将在此开放完整配置、使用与 API 入口。', features:['配置','互动体验','Use / API'], meta:['Use','API'] },



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
