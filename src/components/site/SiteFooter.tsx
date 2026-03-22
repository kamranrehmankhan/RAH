import Link from 'next/link'

const footerCopy = {
  en: {
    brand: 'ETHEREAL SOLSTICE',
    brandDesc:
      'Consciously curated for the global soul. Our atelier prioritizes low-impact manufacturing and honors artisanal legacy through refined, modest design.',
    navigation: 'Atelier Navigation',
    coutureCollections: 'Couture Collections',
    journal: 'The Journal',
    productStories: 'Product Stories',
    concierge: 'Concierge',
    whiteGlove: 'White Glove Delivery',
    secureCheckout: 'Secure Checkout',
    orderArchive: 'Order Archive',
    faq: 'FAQ',
    innerCircle: 'The Inner Circle',
    innerCircleDesc:
      'Join our circle for seasonal previews and deep editorial insights.',
    requestQuote: 'Request Quote',
    contact: 'Contact',
    rights: 'All rights reserved.'
  },
  ar: {
    brand: 'إيثيريال سولستيس',
    brandDesc:
      'تنسيق واعٍ للروح العالمية. يركز الأتيليه لدينا على التصنيع منخفض الأثر ويحافظ على إرث الحرفية الراقية.',
    navigation: 'تنقل الأتيليه',
    coutureCollections: 'المجموعات الراقية',
    journal: 'المجلة',
    productStories: 'قصص المنتجات',
    concierge: 'خدمة العملاء',
    whiteGlove: 'توصيل فاخر',
    secureCheckout: 'دفع آمن',
    orderArchive: 'أرشيف الطلبات',
    faq: 'الأسئلة الشائعة',
    innerCircle: 'الدائرة الداخلية',
    innerCircleDesc:
      'انضمي إلى دائرتنا للحصول على معاينات موسمية ورؤى تحريرية عميقة.',
    requestQuote: 'طلب عرض سعر',
    contact: 'تواصل',
    rights: 'جميع الحقوق محفوظة.'
  },
  ur: {
    brand: 'ایتھیریل سولسٹس',
    brandDesc:
      'عالمی ذوق کے لیے شعوری طور پر منتخب کیا گیا۔ ہمارا اٹیلیے کم اثر والی پیداوار اور نفیس دستکاری کے ورثے کو ترجیح دیتا ہے۔',
    navigation: 'اٹیلیے نیویگیشن',
    coutureCollections: 'کوتور کلیکشنز',
    journal: 'جرنل',
    productStories: 'مصنوعات کی کہانیاں',
    concierge: 'کنسئیرج',
    whiteGlove: 'وائٹ گلوو ڈلیوری',
    secureCheckout: 'محفوظ چیک آؤٹ',
    orderArchive: 'آرڈر آرکائیو',
    faq: 'عمومی سوالات',
    innerCircle: 'اندرونی حلقہ',
    innerCircleDesc:
      'موسمی پری ویوز اور ادارتی بصیرت کے لیے ہمارے حلقے میں شامل ہوں۔',
    requestQuote: 'کوٹ کی درخواست',
    contact: 'رابطہ',
    rights: 'تمام حقوق محفوظ ہیں۔'
  },
  fr: {
    brand: 'ETHEREAL SOLSTICE',
    brandDesc:
      'Une sélection consciente pour une élégance mondiale. Notre atelier privilégie une fabrication responsable et un savoir-faire raffiné.',
    navigation: "Navigation de l'Atelier",
    coutureCollections: 'Collections Couture',
    journal: 'Le Journal',
    productStories: 'Histoires Produits',
    concierge: 'Conciergerie',
    whiteGlove: 'Livraison Premium',
    secureCheckout: 'Paiement Sécurisé',
    orderArchive: 'Archives des Commandes',
    faq: 'FAQ',
    innerCircle: 'Le Cercle Intérieur',
    innerCircleDesc:
      'Rejoignez notre cercle pour des avant-premières saisonnières et des insights éditoriaux.',
    requestQuote: 'Demander un Devis',
    contact: 'Contact',
    rights: 'Tous droits réservés.'
  }
} as const

export default function SiteFooter({locale}: {locale: string}) {
  const copy = footerCopy[(locale in footerCopy ? locale : 'en') as keyof typeof footerCopy]

  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-low px-8 pb-12 pt-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="font-headline text-xl font-black tracking-tight text-on-surface">
              {copy.brand}
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-surface-variant">
              {copy.brandDesc}
            </p>
          </div>

          <div>
            <div className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-on-surface">
              {copy.navigation}
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href={`/${locale}/collections`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  {copy.coutureCollections}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  {copy.journal}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  {copy.productStories}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-on-surface">
              {copy.concierge}
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href={`/${locale}/shipping-returns`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  {copy.whiteGlove}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/checkout`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  {copy.secureCheckout}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/orders`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  {copy.orderArchive}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/faq`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  {copy.faq}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-on-surface">
              {copy.innerCircle}
            </div>
            <p className="mt-4 text-sm text-on-surface-variant">
              {copy.innerCircleDesc}
            </p>
            <div className="mt-5 flex gap-2">
              <Link
                href={`/${locale}/quote`}
                className="rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-primary transition-colors hover:bg-primary-dim"
              >
                {copy.requestQuote}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-full border border-outline-variant px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-surface transition-colors hover:border-primary hover:text-primary"
              >
                {copy.contact}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-outline-variant/30 pt-8">
          <p className="text-xs text-on-surface-variant">
            © {new Date().getFullYear()} {copy.brand}. {copy.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
