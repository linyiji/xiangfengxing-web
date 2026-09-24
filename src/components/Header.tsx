import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLocale } from '../i18n'

export function Header() {
  const { locale, copy, toggle } = useLocale()
  const location = useLocation()
  const navigate = useNavigate()

  const goHomeSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <header className="site-header">
    <nav className="nav-shell">
      <Link className="brand" to="/" aria-label="Xiangfengxing AI home">
        <span className="brand-logo"><img src="/assets/xiangfengxing-logo.png" alt="" /></span>
        <span>XIANGFENGXING AI</span>
      </Link>
      <div className="nav-right">
        <div className="nav-links">
          <button type="button" onClick={() => goHomeSection('products')}>{copy.nav.products}</button>
          <Link to="/developers">{copy.nav.developers}</Link>
          <button type="button" onClick={() => goHomeSection('work')}>{copy.nav.work}</button>
          <button type="button" onClick={() => goHomeSection('principle')}>{copy.nav.company}</button>
        </div>
        <button className="lang-switch" type="button" onClick={toggle} aria-label="Switch language">
          <b className={locale === 'en' ? 'active' : ''}>EN</b><span>/</span><b className={locale === 'zh' ? 'active' : ''}>中文</b>
        </button>
      </div>
    </nav>
  </header>
}
