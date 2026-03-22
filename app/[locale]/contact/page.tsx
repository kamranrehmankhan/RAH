import Link from 'next/link'
import { buildPageMetadata, getLocaleFromString } from '@/lib/seo/metadata'

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <main style={{ backgroundColor: '#fef5f0', color: '#322e2b', minHeight: '100vh' }}>

      {/* Header */}
      <section style={{ backgroundColor: '#f9efea' }} className="py-24 px-8 text-center">
        <span className="text-xs uppercase font-bold mb-6 block" style={{ letterSpacing: '0.4em', color: '#a13917' }}>Get In Touch</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>
          Contact
        </h1>
        <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#a03b00' }}></div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 px-8 max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="rounded-2xl p-10 transition-all hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: '#fff', border: '1px solid #e5dbd5' }}>
            <div className="text-4xl mb-6">💬</div>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>Request a Quote</h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#605a57' }}>
              Looking for a custom order or bulk pricing? Fill out our quote form and we will get back to you within 24 hours.
            </p>
            <Link
              href={`/${locale}/quote`}
              className="inline-block px-8 py-4 rounded-full text-sm font-bold uppercase transition-all hover:opacity-90"
              style={{ backgroundColor: '#a03b00', color: '#ffefea', letterSpacing: '0.15em' }}
            >
              Go to Quote Form →
            </Link>
          </div>

          <div className="rounded-2xl p-10 transition-all hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: '#fff', border: '1px solid #e5dbd5' }}>
            <div className="text-4xl mb-6">✉️</div>
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>Email & WhatsApp</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#605a57' }}>
              For quick international replies, reach us via email or WhatsApp. We respond to all enquiries personally.
            </p>
            <p className="text-sm italic" style={{ color: '#a03b00' }}>
              Available Saturday – Thursday, 9am – 6pm PKT
            </p>
          </div>

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
    restPath: '/contact',
    title: 'Contact | Ethereal Solstice',
    description: 'Get in touch with Ethereal Solstice for custom orders and enquiries.'
  })
}
