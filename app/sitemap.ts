import type {MetadataRoute} from 'next'

import {createSupabaseServerClient} from '@/lib/supabase/server'

const LOCALES = ['en', 'ar', 'ur', 'fr'] as const

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const pages = [
    '',
    '/products',
    '/collections',
    '/quote',
    '/about',
    '/privacy',
    '/terms',
    '/cookies',
    '/shipping-returns',
    '/faq',
    '/contact'
  ]

  let productSlugs: string[] = []
  try {
    const supabase = await createSupabaseServerClient()
    const {data} = await supabase
      .from('products')
      .select('slug')
      .eq('is_published', true)
      .order('created_at', {ascending: false})
      .limit(200)

    productSlugs = (data ?? []).map((d: any) => d.slug).filter(Boolean)
  } catch {
    productSlugs = []
  }

  const productPaths = productSlugs.map((s) => `/products/${s}`)

  return LOCALES.flatMap((locale) =>
    [...pages, ...productPaths].map((p) => {
      const path = p === '' ? `/${locale}` : `/${locale}${p}`
      return {
        url: `${siteUrl}${path}`,
        changeFrequency: 'weekly',
        priority: p === '' ? 1 : p.startsWith('/products/') ? 0.8 : 0.7
      }
    })
  )
}

