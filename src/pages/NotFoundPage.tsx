import { Link } from 'react-router-dom'
import { useLocale } from '../i18n'
export function NotFoundPage() {
  const { locale } = useLocale()
  return <main className="not-found"><div><span>404</span><h1>{locale === 'en' ? 'Page not found.' : '页面不存在。'}</h1><Link className="text-link" to="/">← Xiangfengxing AI</Link></div></main>
}
