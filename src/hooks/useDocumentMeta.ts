import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLocale } from '../i18n'

export function useDocumentMeta(title: string, description: string) {
  const { pathname } = useLocation()
  const { locale } = useLocale()
  useEffect(() => {
    document.title = title
    const canonicalUrl = `https://atlasanalyse.com${pathname}`
    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      let meta = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
      if (!meta) { meta = document.createElement('meta'); meta.setAttribute(attribute, key); document.head.appendChild(meta) }
      meta.content = content
    }
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'Xiangfengxing AI')
    setMeta('property', 'og:locale', locale === 'zh' ? 'zh_CN' : 'en_US')
    setMeta('name', 'twitter:card', 'summary')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = canonicalUrl
  }, [title, description, pathname, locale])
}
