import Link from 'next/link'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { buildPageMetadata, getLocaleFromString } from '@/lib/seo/metadata'

export default async function ProductsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  let products: Array<{ id: string; title: string; slug: string; category: string; material: string | null }> = []
  try {
    const supabase = await createSupabaseServerClient()
    const { data } = await supabase
      .from('products')
      .select('id,title,slug,category,material')
      .order('created_at', { ascending: false })
      .limit(24)
    products = (data ?? []) as any
  } catch {
    products = []
  }

  return (
    <main style={{ backgroundColor: '#fef5f0', color: '#322e2b', minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ backgroundColor: '#f9efea' }} className="py-24 px-8 text-center">
        <span className="text-xs uppercase font-bold mb-6 block" style={{ letterSpacing: '0.4em', color: '#a13917' }}>Curation Series</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>
          The Collection
        </h1>
        <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#a03b00' }}></div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-8 max-w-screen-xl mx-auto">
        {products.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-lg italic" style={{ color: '#605a57' }}>No published products yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
            {products.map((product, i) => (
              <Link
                key={product.id}
                href={`/${locale}/products/${product.slug}`}
                className="group block"
                style={{ marginTop: i % 3 === 1 ? '3rem' : '0' }}
              >
                <div className="relative mb-6 overflow-hidden rounded-md flex items-center justify-center" style={{ aspectRatio: '4/5', backgroundColor: '#f0e6e1' }}>
                  <span className="text-6xl opacity-20">✦</span>
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="w-full text-center py-3 rounded-full text-sm font-bold uppercase" style={{ backgroundColor: 'rgba(254,245,240,0.9)', color: '#322e2b', letterSpacing: '0.1em' }}>
                      Request Private Viewing
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>{product.title}</h4>
                  {product.material && <p style={{ color: '#605a57' }}>{product.material}</p>}
                  <p className="text-sm font-bold uppercase mt-2" style={{ color: '#a03b00', letterSpacing: '0.1em' }}>View pricing →</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

    </main>
  )
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale = getLocaleFromString(localeParam) ?? 'en'
  return buildPageMetadata({
    locale,
    restPath: '/products',
    title: 'The Collection | Ethereal Solstice',
    description: 'Browse our curated collection of luxury modest abayas.'
  })
}
