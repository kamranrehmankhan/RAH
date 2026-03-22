import Link from 'next/link'

import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export default async function ShippingReturnsPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params

  const principles = [
    {
      title: 'Responsible Materials',
      body: 'We prioritize premium fabrics sourced through partners committed to traceability, fair labor, and lower-impact production.'
    },
    {
      title: 'Conscious Production',
      body: 'Our atelier works in limited runs to reduce excess inventory and preserve quality control at every step.'
    },
    {
      title: 'Longevity Over Waste',
      body: 'We design silhouettes intended for repeated wear across seasons, with craftsmanship that supports long-term use.'
    }
  ]

  const shippingCards = [
    {
      name: 'Standard Silk',
      eta: '3-5 business days',
      description: 'Tracked worldwide shipping with signature confirmation for most destinations.'
    },
    {
      name: 'Dusk Priority',
      eta: '1-2 business days',
      description: 'Accelerated dispatch for in-stock pieces with priority logistics handling.'
    }
  ]

  return (
    <main className="bg-surface text-on-surface">
      <section className="px-8 pb-16 pt-14 md:px-12 md:pt-20">
        <div className="mx-auto max-w-screen-2xl">
          <span className="mb-5 block font-headline text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Ethical Craft
          </span>
          <h1 className="max-w-4xl font-headline text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Sustainability, Shipping, and Returns
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-on-surface-variant md:text-lg">
            A clear commitment to responsible production, transparent global
            logistics, and practical support after delivery.
          </p>
        </div>
      </section>

      <section className="bg-surface-container-low px-8 py-16 md:px-12">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Our Craft Principles
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-outline-variant/30 bg-surface p-6"
              >
                <h3 className="font-headline text-xl font-bold text-on-surface">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-on-surface-variant">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-8 py-16 md:px-12">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
                Worldwide Shipping
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-on-surface-variant">
                We ship internationally with tracking. Delivery estimates depend
                on destination and customs timelines. Once an order is
                dispatched, you receive shipment updates and tracking details.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {shippingCards.map((item) => (
                  <article
                    key={item.name}
                    className="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-5"
                  >
                    <h3 className="font-headline text-lg font-bold text-on-surface">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{item.eta}</p>
                    <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-outline-variant/30 bg-surface-container-low p-7">
                <h2 className="font-headline text-2xl font-bold text-on-surface">
                  Returns & Exchanges
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                  Contact us within 14 days of delivery for eligible returns or
                  exchanges. Items must be unworn and in original condition.
                  Custom made pieces remain final sale unless a quality issue is
                  confirmed.
                </p>
                <h3 className="mt-6 font-headline text-sm font-bold uppercase tracking-[0.18em] text-on-surface">
                  Before Ordering
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-on-surface-variant">
                  <li>Review size and variant details carefully.</li>
                  <li>Color may vary slightly by screen and lighting conditions.</li>
                  <li>For bespoke sizing, submit a quote request first.</li>
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href={`/${locale}/quote`}
                    className="rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-primary transition-colors hover:bg-primary-dim"
                  >
                    Request Quote
                  </Link>
                  <Link
                    href={`/${locale}/contact`}
                    className="rounded-full border border-outline-variant px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-surface transition-colors hover:border-primary hover:text-primary"
                  >
                    Contact Concierge
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale: localeParam} = await params
  const locale = getLocaleFromString(localeParam) ?? 'en'

  return buildPageMetadata({
    locale,
    restPath: '/shipping-returns',
    title: 'Ethical Craft | Ethereal Solstice',
    description:
      'Learn about our ethical craftsmanship, worldwide shipping, and return guidance.'
  })
}
