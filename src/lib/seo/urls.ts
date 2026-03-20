import {LOCALES, type Locale} from './locales'
import {getSiteUrl} from './siteUrl'

function normalizeRestPath(restPath: string) {
  if (!restPath || restPath === '/') return ''
  let p = restPath.startsWith('/') ? restPath : `/${restPath}`
  // Remove trailing slash (except root, which becomes '').
  p = p.replace(/\/+$/, '')
  return p === '/' ? '' : p
}

export function canonicalUrl(locale: Locale, restPath: string) {
  const rp = normalizeRestPath(restPath)
  return `${getSiteUrl()}/${locale}${rp}`
}

export function alternatesLanguages(restPath: string) {
  const rp = normalizeRestPath(restPath)
  const base = getSiteUrl()
  return Object.fromEntries(
    LOCALES.map((l) => [l, `${base}/${l}${rp}`])
  ) as Record<Locale, string>
}

