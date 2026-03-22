import Link from 'next/link'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { buildPageMetadata, getLocaleFromString } from '@/lib/seo/metadata'

export default async function CollectionsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  let collections: Array<{ slug: string; name: string }> = []
  try {
    const supabase = await createSupabaseServerClient()
    const { data } = await supabase
      .from('collections')
      .select('slug,name')
      .order('name')
    collections = (data ?? []) as any
  } catch {
    collections = []
  }

  const emojis = ['🌙', '💍', '✨', '🌸', '🌿', '☀️', '🕊️', '💫']

  return (
    <main style={{ backgroundColor: '#fef5f0', color: '#322e2b', minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ backgroundColor: '#f9efea' }} className="py-24 px-8 text-center">
        <span className="text-xs uppercase font-bold mb-6 block" style={{ letterSpacing: '0.4em', color: '#a13917' }}>Curated For You</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>
          Collections
        </h1>
        <p className="text-lg italic max-w-xl mx-auto" style={{ color: '#605a57' }}>Browse by occasion and discover the perfect abaya for every moment.</p>
        <div className="w-24 h-1 mx-auto mt-8" style={{ backgroundColor: '#a03b00' }}></div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 px-8 max-w-screen-xl mx-auto">
        {collections.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-lg italic" style={{ color: '#605a57' }}>No collections yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {collections.map((c, i) => (
              <a
                key={c.slug}
                href={`/${locale}/collections/${c.slug}`}
                className="group block rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ backgroundColor: '#fff', border: '1px solid #e5dbd5' }}
              >
                <div className="text-4xl mb-6">{emojis[i % emojis.length]}</div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>{c.name}</h3>
                <p className="text-sm mb-6" style={{ color: '#605a57' }}>Styles + pricing variants</p>
                <span className="text-xs font-bold uppercase" style={{ color: '#a03b00', letterSpacing: '0.15em' }}>Browse →</span>
              </a>
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
    restPath: '/collections',
    title: 'Collections | Ethereal Solstice',
    description: 'Browse abaya collections by occasion.'
  })
}
