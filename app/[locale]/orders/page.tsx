import Link from 'next/link'

import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

const orders = [
  {
    id: 'ES-94821',
    title: 'The Rose Petal Collection',
    date: 'Oct 14, 2024',
    status: 'Delivered',
    total: '$1,240.00'
  },
  {
    id: 'ES-94705',
    title: 'Essential Silk Blouse',
    date: 'Oct 28, 2024',
    status: 'In Transit',
    total: '$350.00'
  },
  {
    id: 'ES-94911',
    title: 'Evening Gala Collection',
    date: 'Nov 02, 2024',
    status: 'Processing',
    total: '$2,890.00'
  }
]

export default async function OrdersPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params

  return (
    <main className="bg-surface px-6 pb-24 pt-14 md:px-12">
      <div className="mx-auto max-w-screen-2xl">
        <header className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="mb-5 block font-headline text-xs font-bold uppercase tracking-[0.4em] text-secondary">
              Personal Archive
            </span>
            <h1 className="font-headline text-5xl font-black leading-[0.86] tracking-tight text-on-surface md:text-8xl">
              Acquisitions
            </h1>
            <p className="mt-7 text-on-surface-variant md:text-lg">
              A curated record of your journey through modest luxury.
            </p>
          </div>
          <div className="rounded-2xl border border-outline-variant/40 bg-surface-container-low px-6 py-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Total Orders
            </p>
            <p className="mt-1 font-headline text-4xl font-black text-on-surface">
              {orders.length}
            </p>
          </div>
        </header>

        <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-outline-variant/30 bg-surface-container-low p-4 md:flex-row md:items-center md:justify-between">
          <input
            className="w-full rounded-full border border-outline-variant bg-surface px-5 py-3 text-sm focus:border-primary focus:outline-none md:max-w-xl"
            placeholder="Search by Order ID or collection name..."
          />
          <div className="flex flex-wrap gap-2">
            <button className="rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-primary">
              All
            </button>
            <button className="rounded-full border border-outline-variant px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Processing
            </button>
            <button className="rounded-full border border-outline-variant px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Transit
            </button>
            <button className="rounded-full border border-outline-variant px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Delivered
            </button>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {orders.map((order) => (
            <article
              key={order.id}
              className="rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(45,27,20,0.08)]"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="font-headline text-[11px] font-bold uppercase tracking-[0.2em] text-outline">
                    ID: {order.id}
                  </p>
                  <h2 className="mt-3 font-headline text-2xl font-black leading-tight text-on-surface">
                    {order.title}
                  </h2>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
                    order.status === 'Delivered'
                      ? 'bg-surface-container-high text-on-surface'
                      : order.status === 'In Transit'
                        ? 'bg-primary text-on-primary'
                        : 'bg-secondary/10 text-secondary'
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                    {order.date}
                  </p>
                  <p className="mt-2 font-headline text-3xl font-black text-secondary">
                    {order.total}
                  </p>
                </div>
                <Link
                  href={`/${locale}/products`}
                  className="rounded-full border border-primary/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-on-primary"
                >
                  View
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
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
    restPath: '/orders',
    title: 'Order Archive | Ethereal Solstice',
    description: 'Review your Ethereal Solstice order history and shipment status.'
  })
}
