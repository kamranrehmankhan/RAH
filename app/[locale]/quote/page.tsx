import QuoteForm from '@/components/quote/QuoteForm'
import { buildPageMetadata, getLocaleFromString } from '@/lib/seo/metadata'

export default async function QuotePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <main style={{ backgroundColor: '#fef5f0', color: '#322e2b', minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ backgroundColor: '#f9efea' }} className="py-24 px-8 text-center">
        <span className="text-xs uppercase font-bold mb-6 block" style={{ letterSpacing: '0.4em', color: '#a13917' }}>Bespoke Service</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>
          Request a Quote
        </h1>
        <p className="text-lg italic max-w-xl mx-auto" style={{ color: '#605a57' }}>
          Share what you want to order, your size and country. We will respond with shipping details and final pricing.
        </p>
        <div className="w-24 h-1 mx-auto mt-8" style={{ backgroundColor: '#a03b00' }}></div>
      </section>

      {/* Form */}
      <section className="py-24 px-8 max-w-screen-md mx-auto">
        <div className="rounded-2xl p-10 md:p-14" style={{ backgroundColor: '#fff', border: '1px solid #e5dbd5' }}>
          <QuoteForm />
        </div>
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
    restPath: '/quote',
    title: 'Request a Quote | Ethereal Solstice',
    description: 'Request a custom abaya quote. Share your variant and country and we will respond with pricing and shipping details.'
  })
}
