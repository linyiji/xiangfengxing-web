import type { ProductStatus } from '../data'
import { useLocale } from '../i18n'

export function StatusBadge({ status }: { status: ProductStatus }) {
  const { copy } = useLocale()
  return <span className={`status-badge status-${status}`}>{copy.products.statuses[status]}</span>
}
