import Link from 'next/link'

import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

type SupportedLocale = 'en' | 'ar' | 'ur' | 'fr'

const checkoutCopy = {
  en: {
    step1: 'Shipping',
    step2: 'Payment',
    step3: 'Review',
    title: 'Secure Checkout',
    subtitle:
      'Finalize your order with protected checkout and white-glove delivery options.',
    fullName: 'Full name',
    email: 'Email address',
    address: 'Delivery address',
    city: 'City',
    postal: 'Postal code',
    country: 'Country',
    deliveryMethod: 'Delivery Method',
    standard: 'Standard Silk',
    standardEta: '3-5 business days',
    priority: 'Dusk Priority',
    priorityEta: 'Next day delivery',
    orderPortfolio: 'Order Portfolio',
    subtotal: 'Subtotal',
    logistics: 'Logistics',
    vat: 'VAT',
    total: 'Total',
    confirm: 'Confirm Purchase',
    continue: 'Continue Shopping',
    metaTitle: 'Secure Checkout | Ethereal Solstice',
    metaDescription:
      'Complete your Ethereal Solstice purchase with secure checkout.'
  },
  ar: {
    step1: 'الشحن',
    step2: 'الدفع',
    step3: 'المراجعة',
    title: 'دفع آمن',
    subtitle:
      'أكملي طلبك عبر دفع محمي وخيارات توصيل راقية.',
    fullName: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    address: 'عنوان التسليم',
    city: 'المدينة',
    postal: 'الرمز البريدي',
    country: 'الدولة',
    deliveryMethod: 'طريقة التوصيل',
    standard: 'التوصيل القياسي',
    standardEta: '3-5 أيام عمل',
    priority: 'أولوية الغروب',
    priorityEta: 'توصيل في اليوم التالي',
    orderPortfolio: 'ملف الطلب',
    subtotal: 'الإجمالي الفرعي',
    logistics: 'الشحن',
    vat: 'ضريبة القيمة المضافة',
    total: 'الإجمالي',
    confirm: 'تأكيد الشراء',
    continue: 'متابعة التسوق',
    metaTitle: 'الدفع الآمن | إيثيريال سولستيس',
    metaDescription: 'أكملي شراءك من إيثيريال سولستيس عبر دفع آمن.'
  },
  ur: {
    step1: 'شپنگ',
    step2: 'ادائیگی',
    step3: 'جائزہ',
    title: 'محفوظ چیک آؤٹ',
    subtitle:
      'محفوظ ادائیگی اور وائٹ گلوو ڈلیوری آپشنز کے ساتھ اپنا آرڈر مکمل کریں۔',
    fullName: 'مکمل نام',
    email: 'ای میل',
    address: 'ڈیلیوری پتہ',
    city: 'شہر',
    postal: 'پوسٹل کوڈ',
    country: 'ملک',
    deliveryMethod: 'ڈیلیوری طریقہ',
    standard: 'اسٹینڈرڈ سلک',
    standardEta: '3-5 کاروباری دن',
    priority: 'ڈسک پریارٹی',
    priorityEta: 'اگلے دن ڈیلیوری',
    orderPortfolio: 'آرڈر پورٹ فولیو',
    subtotal: 'ذیلی مجموعہ',
    logistics: 'لاجسٹکس',
    vat: 'وی اے ٹی',
    total: 'کل',
    confirm: 'خریداری کی تصدیق',
    continue: 'خریداری جاری رکھیں',
    metaTitle: 'محفوظ چیک آؤٹ | ایتھیریل سولسٹس',
    metaDescription: 'ایتھیریل سولسٹس کی خریداری محفوظ چیک آؤٹ کے ساتھ مکمل کریں۔'
  },
  fr: {
    step1: 'Livraison',
    step2: 'Paiement',
    step3: 'Vérification',
    title: 'Paiement Sécurisé',
    subtitle:
      'Finalisez votre commande avec un paiement protégé et une livraison premium.',
    fullName: 'Nom complet',
    email: 'Adresse e-mail',
    address: 'Adresse de livraison',
    city: 'Ville',
    postal: 'Code postal',
    country: 'Pays',
    deliveryMethod: 'Mode de livraison',
    standard: 'Standard Soie',
    standardEta: '3-5 jours ouvrés',
    priority: 'Priorité Dusk',
    priorityEta: 'Livraison le lendemain',
    orderPortfolio: 'Portefeuille de Commande',
    subtotal: 'Sous-total',
    logistics: 'Logistique',
    vat: 'TVA',
    total: 'Total',
    confirm: "Confirmer l'Achat",
    continue: 'Continuer les Achats',
    metaTitle: 'Paiement Sécurisé | Ethereal Solstice',
    metaDescription:
      'Finalisez votre achat Ethereal Solstice avec un paiement sécurisé.'
  }
} as const

export default async function CheckoutPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  const language = (['en', 'ar', 'ur', 'fr'].includes(locale)
    ? locale
    : 'en') as SupportedLocale
  const copy = checkoutCopy[language]

  return (
    <main className="bg-background px-6 pb-24 pt-14 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-center gap-5 text-xs font-bold uppercase tracking-[0.25em] text-on-surface-variant">
          <span className="rounded-full bg-primary px-3 py-2 text-on-primary">
            1 {copy.step1}
          </span>
          <span>2 {copy.step2}</span>
          <span>3 {copy.step3}</span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <section className="space-y-14 lg:col-span-7">
            <div>
              <h1 className="font-headline text-4xl font-black tracking-tight text-on-surface md:text-5xl">
                {copy.title}
              </h1>
              <p className="mt-3 max-w-xl text-on-surface-variant">
                {copy.subtitle}
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <input
                  className="rounded-full border border-outline-variant bg-surface px-6 py-4 text-sm focus:border-primary focus:outline-none"
                  placeholder={copy.fullName}
                />
                <input
                  className="rounded-full border border-outline-variant bg-surface px-6 py-4 text-sm focus:border-primary focus:outline-none"
                  placeholder={copy.email}
                />
              </div>
              <input
                className="w-full rounded-full border border-outline-variant bg-surface px-6 py-4 text-sm focus:border-primary focus:outline-none"
                placeholder={copy.address}
              />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <input
                  className="rounded-full border border-outline-variant bg-surface px-6 py-4 text-sm focus:border-primary focus:outline-none"
                  placeholder={copy.city}
                />
                <input
                  className="rounded-full border border-outline-variant bg-surface px-6 py-4 text-sm focus:border-primary focus:outline-none"
                  placeholder={copy.postal}
                />
                <input
                  className="rounded-full border border-outline-variant bg-surface px-6 py-4 text-sm focus:border-primary focus:outline-none"
                  placeholder={copy.country}
                />
              </div>
            </div>

            <div>
              <h2 className="font-headline text-xl font-bold text-on-surface">
                {copy.deliveryMethod}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-primary bg-primary/5 p-5">
                  <p className="font-headline text-sm font-bold uppercase tracking-[0.15em] text-on-surface">
                    {copy.standard}
                  </p>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    {copy.standardEta}
                  </p>
                  <p className="mt-2 font-semibold text-primary">$12.00</p>
                </div>
                <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-5">
                  <p className="font-headline text-sm font-bold uppercase tracking-[0.15em] text-on-surface">
                    {copy.priority}
                  </p>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    {copy.priorityEta}
                  </p>
                  <p className="mt-2 font-semibold text-primary">$35.00</p>
                </div>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-outline-variant/40 bg-surface-container-low p-8 lg:sticky lg:top-24">
              <h2 className="font-headline text-2xl font-bold text-on-surface">
                {copy.orderPortfolio}
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start justify-between gap-4 border-b border-outline-variant/30 pb-4 text-sm">
                  <div>
                    <p className="font-semibold text-on-surface">Autumn Whisper Abaya</p>
                    <p className="text-on-surface-variant">Midnight Oak / XL</p>
                  </div>
                  <p className="font-semibold">$285.00</p>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-outline-variant/30 pb-4 text-sm">
                  <div>
                    <p className="font-semibold text-on-surface">Dusk Silk Scarf</p>
                    <p className="text-on-surface-variant">Amber Dust</p>
                  </div>
                  <p className="font-semibold">$85.00</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>{copy.subtotal}</span>
                    <span>$370.00</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>{copy.logistics}</span>
                    <span>$12.00</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>{copy.vat}</span>
                    <span>$31.45</span>
                  </div>
                </div>
                <div className="border-t border-outline-variant/30 pt-5">
                  <div className="flex items-end justify-between">
                    <span className="font-headline text-lg font-bold text-on-surface">
                      {copy.total}
                    </span>
                    <span className="font-headline text-3xl font-black text-primary">$413.45</span>
                  </div>
                </div>
              </div>
              <button className="mt-8 w-full rounded-full bg-primary px-6 py-4 font-headline text-xs font-bold uppercase tracking-[0.22em] text-on-primary transition-colors hover:bg-primary-dim">
                {copy.confirm}
              </button>
              <Link
                href={`/${locale}/products`}
                className="mt-4 block text-center text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary"
              >
                {copy.continue}
              </Link>
            </div>
          </aside>
        </div>
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
  const copy = checkoutCopy[locale] ?? checkoutCopy.en

  return buildPageMetadata({
    locale,
    restPath: '/checkout',
    title: copy.metaTitle,
    description: copy.metaDescription
  })
}
