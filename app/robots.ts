import type {MetadataRoute} from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const sitemapUrl = `${siteUrl}/sitemap.xml`

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: sitemapUrl
  }
}

