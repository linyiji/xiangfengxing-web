export type ProductStatus = 'featured' | 'live' | 'preview' | 'capability'
export type RouteKey = 'vefin' | 'voice' | 'brand' | 'developers' | 'api' | 'mcp' | 'work'

export const productRoutes = {
  vefin: '/products/vefin',
  voice: '/products/voice',
  brand: '/products/brand-ip',
  developers: '/developers',
  api: '/developers/api',
  mcp: '/developers/mcp',
  work: '/work/web3',
} as const

export const routeMeta: Record<string, { key: RouteKey; visual: RouteKey }> = {
  '/products/vefin': { key: 'vefin', visual: 'vefin' },
  '/products/voice': { key: 'voice', visual: 'voice' },
  '/products/brand-ip': { key: 'brand', visual: 'brand' },
  '/developers': { key: 'developers', visual: 'developers' },
  '/developers/api': { key: 'api', visual: 'api' },
  '/developers/mcp': { key: 'mcp', visual: 'mcp' },
  '/work/web3': { key: 'work', visual: 'work' },
}
