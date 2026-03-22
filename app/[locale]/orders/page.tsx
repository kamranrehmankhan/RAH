import Link from 'next/link'

import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

type SupportedLocale = 'en' | 'ar' | 'ur' | 'fr'

const ordersCopy = {
  en: {
    label: 'Personal Archive',
    title: 'Acquisitions',
    subtitle: 'A curated record of your journey through modest luxury.',
    totalOrders: 'Total Orders',
    searchPlaceholder: 'Search by Order ID or collection name...',
    all: 'All',
    processing: 'Processing',
    transit: 'Transit',
    delivered: 'Delivered',
    view: 'View',
    archiveMetaTitle: 'Order Archive | Ethereal Solstice',
    archiveMetaDesc:
      'Review your Ethereal Solstice order history and shipment status.'
  },
  ar: {
    label: 'الأرشيف الشخصي',
    title: 'المقتنيات',
    subtitle: 'سجل منسق لرحلتك في عالم الفخامة المحتشمة.',
    totalOrders: 'إجمالي الطلبات',
    searchPlaceholder: 'ابحثي برقم الطلب أو اسم المجموعة...',
    all: 'الكل',
    processing: 'قيد المعالجة',
    transit: 'قيد الشحن',
    delivered: 'تم التسليم',
    view: 'عرض',
    archiveMetaTitle: 'أرشيف الطلبات | إيثيريال سولستيس',
    archiveMetaDesc: 'راجعي سجل طلباتك وحالة الشحن في إيثيريال سولستيس.'
  },
  ur: {
    label: 'ذاتی آرکائیو',
    title: 'خریداری',
    subtitle: 'محتشم لگژری میں آپ کے سفر کا منتخب ریکارڈ۔',
    totalOrders: 'کل آرڈرز',
    searchPlaceholder: 'آرڈر آئی ڈی یا کلیکشن کے نام سے تلاش کریں...',
    all: 'سب',
    processing: 'پروسیسنگ',
    transit: 'ٹرانزٹ',
    delivered: 'ڈیلیورڈ',
    view: 'دیکھیں',
    archiveMetaTitle: 'آرڈر آرکائیو | ایتھیریل سولسٹس',
    archiveMetaDesc: 'اپنے آرڈرز کی تاریخ اور شپمنٹ اسٹیٹس دیکھیں۔'
  },
  fr: {
    label: 'Archive Personnel',
    title: 'Acquisitions',
    subtitle: 'Un registre soigné de votre parcours dans le luxe pudique.',
    totalOrders: 'Total des Commandes',
    searchPlaceholder: 'Rechercher par ID commande ou collection...',
    all: 'Tout',
    processing: 'Traitement',
    transit: 'Transit',
    delivered: 'Livré',
    view: 'Voir',
    archiveMetaTitle: 'Archives de Commandes | Ethereal Solstice',
    archiveMetaDesc:
      "Consultez l'historique et le statut de vos commandes Ethereal Solstice."
  }
} as const

const orderRows = [
  {
    id: 'ES-94821',
    title: 'The Rose Petal Collection',
    date: 'Oct 14, 2024',
    status: 'delivered',
    total: '$1,240.00'
  },
  {
    id: 'ES-94705',
    title: 'Essential Silk Blouse',
    date: 'Oct 28, 2024',
    status: 'transit',
    total: '$350.00'
  },
  {
    id: 'ES-94911',
    title: 'Evening Gala Collection',
    date: 'Nov 02, 2024',
    status: 'processing',
    total: '$2,890.00'
  }
] as const

export default async function OrdersPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  const language = (['en', 'ar', 'ur', 'fr'].includes(locale)
    ? locale
    : 'en') as SupportedLocale
  const copy = ordersCopy[language]

  return (
    <main className="bg-surface px-6 pb-24 pt-14 md:px-12">
      <div className="mx-auto max-w-screen-2xl">
        <header className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="mb-5 block font-headline text-xs font-bold uppercase tracking-[0.4em] text-secondary">
              {copy.label}
            </span>
            <h1 className="font-headline text-5xl font-black leading-[0.86] tracking-tight text-on-surface md:text-8xl">
              {copy.title}
            </h1>
            <p className="mt-7 text-on-surface-variant md:text-lg">
              {copy.subtitle}
            </p>
          </div>
          <div className="rounded-2xl border border-outline-variant/40 bg-surface-container-low px-6 py-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              {copy.totalOrders}
            </p>
            <p className="mt-1 font-headline text-4xl font-black text-on-surface">
              {orderRows.length}
            </p>
          </div>
        </header>

        <div className="mb-10 flex flex-col gap-4 rounded-3xl border border-outline-variant/30 bg-surface-container-low p-4 md:flex-row md:items-center md:justify-between">
          <input
            className="w-full rounded-full border border-outline-variant bg-surface px-5 py-3 text-sm focus:border-primary focus:outline-none md:max-w-xl"
            placeholder={copy.searchPlaceholder}
          />
          <div className="flex flex-wrap gap-2">
            <button className="rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-primary">
              {copy.all}
            </button>
            <button className="rounded-full border border-outline-variant px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              {copy.processing}
            </button>
            <button className="rounded-full border border-outline-variant px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              {copy.transit}
            </button>
            <button className="rounded-full border border-outline-variant px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              {copy.delivered}
            </button>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {orderRows.map((order) => (
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
                    order.status === 'delivered'
                      ? 'bg-surface-container-high text-on-surface'
                      : order.status === 'transit'
                        ? 'bg-primary text-on-primary'
                        : 'bg-secondary/10 text-secondary'
                  }`}
                >
                  {order.status === 'delivered'
                    ? copy.delivered
                    : order.status === 'transit'
                      ? copy.transit
                      : copy.processing}
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
                  {copy.view}
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
  const copy = ordersCopy[locale] ?? ordersCopy.en

  return buildPageMetadata({
    locale,
    restPath: '/orders',
    title: copy.archiveMetaTitle,
    description: copy.archiveMetaDesc
  })
}
