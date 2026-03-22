import { buildPageMetadata, getLocaleFromString } from '@/lib/seo/metadata'

export default async function FaqPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const faqs = [
    {
      q: 'How do I find my size?',
      a: 'Each product page includes a detailed size guide. We recommend measuring your height and bust for the best fit. You can also request a custom size via our quote form.'
    },
    {
      q: 'How does variant pricing work?',
      a: 'Each product can have multiple variants — size, length, and material. The product page shows the price per variant so you can choose what fits your needs and budget.'
    },
    {
      q: 'How do I request a custom abaya?',
      a: 'Use the "Request a Quote" form and describe your preferred size, length, fabric, and color. We will respond within 24 hours with a personalised quote.'
    },
    {
      q: 'Do you ship internationally?',
      a: 'Yes — we ship worldwide. Delivery times and costs vary by destination. Please see our Shipping & Returns page for full details.'
    },
    {
      q: 'What is your returns policy?',
      a: 'We accept returns within 14 days of delivery for unworn, unaltered items in original packaging. Custom orders are non-refundable.'
    },
    {
      q: 'What fabrics do you use?',
      a: 'We use premium fabrics including Mulberry Silk, Crêpe de Chine, Organic Linen, and Cotton Twill — all ethically sourced and carefully selected for modest elegance.'
    },
  ]

  return (
    <main style={{ backgroundColor: '#fef5f0', color: '#322e2b', minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ backgroundColor: '#f9efea' }} className="py-24 px-8 text-center">
        <span className="text-xs uppercase font-bold mb-6 block" style={{ letterSpacing: '0.4em', color: '#a13917' }}>Answers & Guidance</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>
          FAQ
        </h1>
        <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#a03b00' }}></div>
      </section>

      {/* FAQ List */}
      <section className="py-24 px-8 max-w-screen-md mx-auto">
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl p-10" style={{ backgroundColor: '#fff', border: '1px solid #e5dbd5' }}>
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>{faq.q}</h2>
              <p className="text-sm leading-relaxed" style={{ color: '#605a57' }}>{faq.a}</p>
            </div>
          ))}
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
    restPath: '/faq',
    title: 'FAQ | Ethereal Solstice',
    description: 'Frequently asked questions about our abayas, sizing, shipping and custom orders.'
  })
}
