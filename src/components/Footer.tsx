import { Link } from 'react-router-dom'
import { useLocale } from '../i18n'

export function Footer() {
  const { copy } = useLocale()
  return <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/assets/xiangfengxing-logo.png" alt="" />
          <div><h3>Xiangfengxing AI</h3><p>{copy.footer.description}</p></div>
        </div>
        <div className="footer-col"><h4>{copy.footer.products}</h4><Link to="/products/vefin">VeFin →</Link><a href="https://atlasanalyse.cn" target="_blank" rel="noreferrer">AtlasAnalyse ↗</a><Link to="/products/voice">Cantonese Voice →</Link><Link to="/products/brand-ip">Brand / IP →</Link></div>
        <div className="footer-col"><h4>{copy.footer.developers}</h4><Link to="/developers">{copy.footer.overview} →</Link><Link to="/developers/api">API →</Link><Link to="/developers/mcp">MCP →</Link></div>
        <div className="footer-col"><h4>{copy.footer.platform}</h4><a href="mailto:zeno@atlasanalyse.cn">{copy.footer.contact} →</a></div>
      </div>
      <div className="footer-bottom"><span>{copy.footer.city}</span><span>© 2026 Xiangfengxing AI</span></div>
    </div>
  </footer>
}
