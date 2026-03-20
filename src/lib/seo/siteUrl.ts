export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL
  const fallback = 'http://localhost:3000'
  const siteUrl = raw && raw.trim() ? raw.trim() : fallback
  return siteUrl.replace(/\/+$/, '')
}

