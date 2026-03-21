import Image from 'next/image'
import {notFound} from 'next/navigation'

import {createSupabaseServerClient} from '@/lib/supabase/server'
import QuoteForm from '@/components/quote/QuoteForm'
import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export const dynamic = 'force-dynamic'

function safeJsonStringify(value: any) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

export default async function ProductPage({
  params
}: {
  params: {locale: string; slug: string}
}) {
  const {slug, locale} = params

  const supabase = await createSupabaseServerClient()

  const {data: product} = await supabase
    .from('products')
    .select('id,title,slug,description,category,material,seo_title,seo_description')
    .eq('slug', slug)
    .maybeSingle()

  if (!product) notFound()

  const {data: images} = await supabase
    .from('product_images')
    .select('storage_path,sort_order,alt_text')
    .eq('product_id', product.id)
    .order('sort_order', {ascending: true})

  const {data: variants} = await supabase
    .from('product_variants')
    .select('id,label,price,currency,is_default')
    .eq('product_id', product.id)
    .order('is_default', {ascending: false})

  const imageList = (images ?? []) as Array<{
    storage_path: string
    sort_order: number
    alt_text: string | null
  }>

  const variantList = (variants ?? []) as Array<{
    id: string
    label: string
    price: number
    currency: string
    is_default: boolean
  }>

  const defaultVariant = variantList.find((v) => v.is_default) ?? variantList[0]
  const priceForSchema = defaultVariant
    ? {
        price: defaultVariant.price,
        priceCurrency: defaultVariant.currency
      }
    : null

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const storageBaseUrl = supabaseUrl
    ? `${supabaseUrl}/storage/v1/object/public/abaya-images`
    : null

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const baseUrl = siteUrl.replace(/\/+$/, '')
  const categorySlug = product.category || 'Everyday'

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    category: product.category,
    image:
      storageBaseUrl && imageList.length > 0
        ? imageList.map((i) => `${storageBaseUrl}/${i.storage_path}`)
        : undefined,
    offers: priceForSchema
      ? {
          '@type': 'Offer',
          price: priceForSchema.price,
          priceCurrency: priceForSchema.priceCurrency,
          availability: 'https://schema.org/InStock'
        }
      : undefined
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/${locale}`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Collections',
        item: `${baseUrl}/${locale}/collections`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: categorySlug,
        item: `${baseUrl}/${locale}/collections/${encodeURIComponent(
          categorySlug
        )}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: product.title,
        item: `${baseUrl}/${locale}/products/${product.slug}`
      }
    ]
  }

  const jsonLd = [productJsonLd, breadcrumbJsonLd]

  const metaTitle = product.seo_title ?? product.title
  const metaDescription = product.seo_description ?? product.description

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: safeJsonStringify(jsonLd)}}
      />

      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {product.title}
          </h1>
          <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {product.category}
            {product.material ? ` • ${product.material}` : ''}
          </div>
          <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-200">
            {product.description}
          </p>
        </div>

        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
          <div className="text-sm font-semibold">Variant pricing</div>
          <div className="mt-3 space-y-3">
            {variantList.length === 0 ? (
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Pricing will appear after admin adds variants.
              </div>
            ) : (
              variantList.map((v) => (
                <div
                  key={v.id}
                  className="flex items-start justify-between gap-4"
                >
                  <div className="text-sm">
                    <div className="font-medium">{v.label}</div>
                    <div className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
                      {v.is_default ? 'Default' : 'Option'}
                    </div>
                  </div>
                  <div className="text-right text-sm font-semibold">
                    {v.currency} {Number(v.price).toFixed(2)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold">Gallery</h2>

        {storageBaseUrl && imageList.length > 0 ? (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {imageList.map((img) => (
              <div
                key={img.storage_path}
                className="relative aspect-[4/5] overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800"
              >
                <Image
                  src={`${storageBaseUrl}/${img.storage_path}`}
                  alt={img.alt_text ?? product.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
            No images yet for this product. Upload pictures in the admin
            product editor.
          </div>
        )}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-lg font-semibold">Request a quote</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Tell us your variant and country. We’ll reply with shipping details
            and final pricing.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
          <QuoteForm
            productId={product.id}
            variantId={defaultVariant?.id}
          />
        </div>
      </section>

      {/* Placeholder SEO fields (kept here until we generate per-locale metadata hooks) */}
      <div className="sr-only">{metaTitle}</div>
      <div className="sr-only">{metaDescription}</div>
    </main>
  )
}

export async function generateMetadata({
  params
}: {
  params: {locale: string; slug: string}
}) {
  const {locale: localeParam} = await params
  const locale = getLocaleFromString(localeParam) ?? 'en'
  const {slug} = params

  try {
    const supabase = await createSupabaseServerClient()

    const {data: product} = await supabase
      .from('products')
      .select('id,title,slug,description,category,material,seo_title,seo_description')
      .eq('slug', slug)
      .maybeSingle()

    if (!product) {
      return buildPageMetadata({
        locale,
        restPath: `/products/${slug}`,
        title: 'Abayas | Product',
        description: 'Premium abayas with worldwide shipping.'
      })
    }

    const {data: images} = await supabase
      .from('product_images')
      .select('storage_path,sort_order')
      .eq('product_id', product.id)
      .order('sort_order', {ascending: true})
      .limit(1)

    const firstImagePath = (images ?? [])[0]?.storage_path as
      | string
      | undefined

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const storageBaseUrl = supabaseUrl
      ? `${supabaseUrl}/storage/v1/object/public/abaya-images`
      : null

    const ogImageUrl =
      storageBaseUrl && firstImagePath
        ? `${storageBaseUrl}/${firstImagePath}`
        : undefined

    const title = product.seo_title ?? product.title
    const description = product.seo_description ?? product.description

    return buildPageMetadata({
      locale,
      restPath: `/products/${slug}`,
      title,
      description,
      ogImageUrl
    })
  } catch {
    return buildPageMetadata({
      locale,
      restPath: `/products/${slug}`,
      title: 'Abayas | Product',
      description: 'Premium abayas with worldwide shipping.'
    })
  }
}

