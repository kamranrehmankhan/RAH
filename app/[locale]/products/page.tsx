import Link from 'next/link'

import {createSupabaseServerClient} from '@/lib/supabase/server'
import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export const dynamic = 'force-dynamic'

export default async function ProductsIndexPage({
  params
}: {
  params: {locale: string}
}) {
  const {locale} = params

  let products: Array<{id: string; title: string; slug: string; category: string; material: string | null}> = []
  try {
    const supabase = await createSupabaseServerClient()
    const {data} = await supabase
      .from('products')
      .select('id,title,slug,category,material')
      .order('created_at', {ascending: false})
      .limit(24)

    products = (data ?? []) as any
  } catch {
    products = []
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Products</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Browse published abayas and see variant pricing on each product page.
      </p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
            No published products yet. Create products in the admin panel and
            set them to published.
          </div>
        ) : (
          products.map((p) => (
            <Link
              key={p.id}
              href={`/${locale}/products/${p.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate text-lg font-semibold">
                    {p.title}
                  </div>
                  <div className="mt-1 truncate text-sm text-slate-600 dark:text-slate-300">
                    {p.category}
                    {p.material ? ` • ${p.material}` : ''}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm font-medium text-slate-900 underline underline-offset-4 decoration-slate-900/30 group-hover:decoration-slate-900 dark:text-slate-100 dark:decoration-white/30">
                View pricing →
              </div>
            </Link>
          ))
        )}
      </section>
    </main>
  )
}

export function generateMetadata({
  params
}: {
  params: {locale: string}
}) {
  const locale = getLocaleFromString(params.locale) ?? 'en'

  const variants: Record<typeof locale, {title: string; description: string}> =
    {
      en: {
        title: 'Shop Abayas | Abayas',
        description:
          'Browse published abayas and view variant pricing on every product page.'
      },
      ar: {
        title: 'تسوق العبايات | عبايات',
        description:
          'تصفح العبايات المنشورة واعرض أسعار الخيارات في كل صفحة منتج.'
      },
      ur: {
        title: 'عبایہ خریدیں | عبايات',
        description:
          'مینو میں موجود عبایہ مصنوعات دیکھیں اور ہر پروڈکٹ پیج پر مختلف قیمتیں دیکھیں۔'
      },
      fr: {
        title: 'Boutique d’Abayas | Abayas',
        description:
          'Découvrez les abayas publiées et consultez les prix par variantes sur chaque produit.'
      }
    }

  const copy = variants[locale]

  return buildPageMetadata({
    locale,
    restPath: '/products',
    title: copy.title,
    description: copy.description
  })
}

