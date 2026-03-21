import Link from 'next/link'

import {createSupabaseServerClient} from '@/lib/supabase/server'
import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export const dynamic = 'force-dynamic'

export default async function CollectionPage({
  params
}: {
  params: {locale: string; slug: string}
}) {
  const {locale, slug} = params

  let products: Array<{id: string; title: string; slug: string; category: string}> = []
  try {
    const supabase = await createSupabaseServerClient()
    const {data} = await supabase
      .from('products')
      .select('id,title,slug,category')
      .eq('category', slug)
      .order('created_at', {ascending: false})
      .limit(30)
    products = (data ?? []) as any
  } catch {
    products = []
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        {slug} Collection
      </h1>
      <p className="mt-2 text-pink-600 ">
        View pricing variants and request a quote.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.length === 0 ? (
          <div className="rounded-xl border border-pink-100 bg-pink-50 p-6 text-sm text-pink-600   ">
            No published products found for this collection yet. Once you
            publish products in the admin tools, they’ll appear here.
          </div>
        ) : (
          products.map((p) => (
            <Link
              key={p.id}
              href={`/${locale}/products/${p.slug}`}
              className="group rounded-xl border border-pink-100 bg-pink-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md  "
            >
              <div className="text-lg font-semibold">{p.title}</div>
              <div className="mt-1 text-sm text-pink-600 ">
                {p.category}
              </div>
              <div className="mt-4 text-sm font-medium text-pink-900 underline underline-offset-4 decoration-slate-900/30 group-hover:decoration-slate-900  ">
                View details →
              </div>
            </Link>
          ))
        )}
      </section>
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
  const slug = params.slug

  const variants: Record<typeof locale, {titlePrefix: string; description: string}> =
    {
      en: {
        titlePrefix: `${slug} Abayas`,
        description:
          'Explore styles in the “' +
          slug +
          '” collection and compare variant pricing.'
      },
      ar: {
        titlePrefix: `عبايات ${slug}`,
        description:
          'استكشف تصاميم مجموعة “' + slug + '” وقارن أسعار الخيارات.'
      },
      ur: {
        titlePrefix: `${slug} عبایہ`,
        description:
          'اس “' +
          slug +
          '” مجموعے میں اسٹائلز دیکھیں اور مختلف قیمتیں موازنہ کریں۔'
      },
      fr: {
        titlePrefix: `Abayas ${slug}`,
        description:
          'Découvrez les styles de la collection « ' +
          slug +
          ' » et comparez les prix par variantes.'
      }
    }

  const copy = variants[locale]
  return buildPageMetadata({
    locale,
    restPath: `/collections/${slug}`,
    title: `${copy.titlePrefix} | Abayas`,
    description: copy.description
  })
}

