import Link from 'next/link'

import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

type SupportedLocale = 'en' | 'ar' | 'ur' | 'fr'

const craftCopy = {
  en: {
    label: 'Ethical Craft',
    title: 'Sustainability, Shipping, and Returns',
    subtitle:
      'A clear commitment to responsible production, transparent global logistics, and practical support after delivery.',
    principlesTitle: 'Our Craft Principles',
    shippingTitle: 'Worldwide Shipping',
    shippingDesc:
      'We ship internationally with tracking. Delivery estimates depend on destination and customs timelines.',
    returnsTitle: 'Returns & Exchanges',
    returnsDesc:
      'Contact us within 14 days of delivery for eligible returns or exchanges.',
    beforeOrdering: 'Before Ordering',
    requestQuote: 'Request Quote',
    contact: 'Contact Concierge',
    metaTitle: 'Ethical Craft | Ethereal Solstice',
    metaDescription:
      'Learn about our ethical craftsmanship, worldwide shipping, and return guidance.',
    principles: [
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
    ],
    shippingCards: [
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
    ],
    notes: [
      'Review size and variant details carefully.',
      'Color may vary slightly by screen and lighting conditions.',
      'For bespoke sizing, submit a quote request first.'
    ]
  },
  ar: {
    label: 'الحرفة الأخلاقية',
    title: 'الاستدامة والشحن والاسترجاع',
    subtitle:
      'التزام واضح بالإنتاج المسؤول، ولوجستيات عالمية شفافة، ودعم عملي بعد التسليم.',
    principlesTitle: 'مبادئ الحرفة لدينا',
    shippingTitle: 'الشحن العالمي',
    shippingDesc:
      'نقوم بالشحن الدولي مع التتبع. تعتمد المدة على الوجهة وإجراءات الجمارك.',
    returnsTitle: 'الاسترجاع والاستبدال',
    returnsDesc:
      'تواصلي معنا خلال 14 يومًا من التسليم لطلبات الاسترجاع أو الاستبدال المؤهلة.',
    beforeOrdering: 'قبل الطلب',
    requestQuote: 'طلب عرض سعر',
    contact: 'تواصل مع الكونسيرج',
    metaTitle: 'الحرفة الأخلاقية | إيثيريال سولستيس',
    metaDescription: 'تعرفي على الحرفية الأخلاقية وسياسات الشحن والاسترجاع.',
    principles: [
      {
        title: 'مواد مسؤولة',
        body: 'نختار أقمشة فاخرة من شركاء يلتزمون بالتتبع والعمالة العادلة والإنتاج منخفض الأثر.'
      },
      {
        title: 'إنتاج واعٍ',
        body: 'يعمل الأتيليه بإصدارات محدودة لتقليل الفائض والحفاظ على جودة دقيقة في كل خطوة.'
      },
      {
        title: 'الاستدامة أولًا',
        body: 'نصمم قطعًا قابلة للارتداء طويلًا عبر المواسم مع تشطيب يدعم العمر الطويل.'
      }
    ],
    shippingCards: [
      {
        name: 'الشحن القياسي',
        eta: '3-5 أيام عمل',
        description: 'شحن عالمي متتبع مع تأكيد التسليم لمعظم الوجهات.'
      },
      {
        name: 'أولوية الغروب',
        eta: '1-2 يوم عمل',
        description: 'تجهيز أسرع للقطع المتوفرة مع معالجة لوجستية ذات أولوية.'
      }
    ],
    notes: [
      'راجعي المقاس وخيارات المنتج بعناية.',
      'قد تختلف الألوان قليلًا حسب الشاشة والإضاءة.',
      'للمقاسات الخاصة، يُرجى إرسال طلب عرض سعر أولًا.'
    ]
  },
  ur: {
    label: 'اخلاقی دستکاری',
    title: 'پائیداری، شپنگ اور ریٹرنز',
    subtitle:
      'ذمہ دار پیداوار، شفاف عالمی لاجسٹکس، اور ڈیلیوری کے بعد عملی سپورٹ کا واضح عزم۔',
    principlesTitle: 'ہماری کاریگری کے اصول',
    shippingTitle: 'عالمی شپنگ',
    shippingDesc:
      'ہم ٹریکنگ کے ساتھ عالمی شپنگ کرتے ہیں۔ مدت منزل اور کسٹمز کے مطابق ہوتی ہے۔',
    returnsTitle: 'ریٹرنز اور ایکسچینج',
    returnsDesc:
      'اہل ریٹرن/ایکسچینج کے لیے ڈیلیوری کے 14 دن کے اندر ہم سے رابطہ کریں۔',
    beforeOrdering: 'آرڈر سے پہلے',
    requestQuote: 'کوٹ کی درخواست',
    contact: 'کنسئیرج سے رابطہ',
    metaTitle: 'اخلاقی دستکاری | ایتھیریل سولسٹس',
    metaDescription: 'ہماری اخلاقی دستکاری، عالمی شپنگ اور ریٹرن گائیڈ جانیں۔',
    principles: [
      {
        title: 'ذمہ دار مواد',
        body: 'ہم ایسے پارٹنرز سے اعلیٰ کپڑے لیتے ہیں جو ٹریس ایبلٹی اور منصفانہ محنت کے اصولوں پر قائم ہوں۔'
      },
      {
        title: 'باشعور پیداوار',
        body: 'ہمارا اٹیلیے محدود رنز میں کام کرتا ہے تاکہ اضافی اسٹاک کم ہو اور معیار برقرار رہے۔'
      },
      {
        title: 'کم ضیاع، زیادہ پائیداری',
        body: 'ہم ایسے سلیوئیٹس ڈیزائن کرتے ہیں جو طویل مدت تک بار بار پہننے کے لیے موزوں ہوں۔'
      }
    ],
    shippingCards: [
      {
        name: 'اسٹینڈرڈ سلک',
        eta: '3-5 کاروباری دن',
        description: 'زیادہ تر مقامات کے لیے دستخطی تصدیق کے ساتھ عالمی ٹریکڈ شپنگ۔'
      },
      {
        name: 'ڈسک پریارٹی',
        eta: '1-2 کاروباری دن',
        description: 'اسٹاک میں موجود اشیاء کے لیے ترجیحی ڈسپیچ اور لاجسٹکس۔'
      }
    ],
    notes: [
      'سائز اور ویرینٹ کی تفصیل غور سے دیکھیں۔',
      'اسکرین اور روشنی کے فرق سے رنگ معمولی مختلف ہوسکتے ہیں۔',
      'بیسپوک سائزنگ کے لیے پہلے کوٹ ریکوئسٹ جمع کریں۔'
    ]
  },
  fr: {
    label: 'Artisanat Éthique',
    title: 'Durabilité, Livraison et Retours',
    subtitle:
      'Un engagement clair envers une production responsable, une logistique internationale transparente et un service après livraison.',
    principlesTitle: 'Nos Principes Artisanaux',
    shippingTitle: 'Livraison Internationale',
    shippingDesc:
      'Nous expédions dans le monde entier avec suivi. Les délais varient selon la destination et les douanes.',
    returnsTitle: 'Retours & Échanges',
    returnsDesc:
      'Contactez-nous dans les 14 jours après livraison pour les retours/échanges éligibles.',
    beforeOrdering: 'Avant de Commander',
    requestQuote: 'Demander un Devis',
    contact: 'Contacter la Conciergerie',
    metaTitle: 'Artisanat Éthique | Ethereal Solstice',
    metaDescription:
      'Découvrez notre artisanat éthique, la livraison mondiale et la politique de retours.',
    principles: [
      {
        title: 'Matières Responsables',
        body: 'Nous privilégions des tissus premium issus de partenaires engagés dans la traçabilité et des pratiques équitables.'
      },
      {
        title: 'Production Consciente',
        body: 'Notre atelier produit en séries limitées pour réduire le surplus et préserver la qualité.'
      },
      {
        title: 'Longévité Avant Tout',
        body: 'Nos silhouettes sont conçues pour durer et être portées au fil des saisons.'
      }
    ],
    shippingCards: [
      {
        name: 'Standard Soie',
        eta: '3-5 jours ouvrés',
        description: 'Livraison internationale suivie avec confirmation de réception.'
      },
      {
        name: 'Priorité Dusk',
        eta: '1-2 jours ouvrés',
        description: 'Expédition accélérée pour les pièces disponibles en stock.'
      }
    ],
    notes: [
      'Vérifiez attentivement la taille et les variantes.',
      'Les couleurs peuvent varier selon l’écran et la lumière.',
      'Pour une taille sur mesure, envoyez d’abord une demande de devis.'
    ]
  }
} as const

export default async function ShippingReturnsPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  const language = (['en', 'ar', 'ur', 'fr'].includes(locale)
    ? locale
    : 'en') as SupportedLocale
  const copy = craftCopy[language]

  return (
    <main className="bg-surface text-on-surface">
      <section className="px-8 pb-16 pt-14 md:px-12 md:pt-20">
        <div className="mx-auto max-w-screen-2xl">
          <span className="mb-5 block font-headline text-xs font-bold uppercase tracking-[0.4em] text-primary">
            {copy.label}
          </span>
          <h1 className="max-w-4xl font-headline text-4xl font-black leading-tight tracking-tight md:text-6xl">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-on-surface-variant md:text-lg">
            {copy.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-surface-container-low px-8 py-16 md:px-12">
        <div className="mx-auto max-w-screen-2xl">
          <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            {copy.principlesTitle}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {copy.principles.map((item) => (
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
                {copy.shippingTitle}
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-on-surface-variant">
                {copy.shippingDesc}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {copy.shippingCards.map((item) => (
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
                  {copy.returnsTitle}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                  {copy.returnsDesc}
                </p>
                <h3 className="mt-6 font-headline text-sm font-bold uppercase tracking-[0.18em] text-on-surface">
                  {copy.beforeOrdering}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-on-surface-variant">
                  {copy.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
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
  const copy = craftCopy[locale] ?? craftCopy.en

  return buildPageMetadata({
    locale,
    restPath: '/shipping-returns',
    title: copy.metaTitle,
    description: copy.metaDescription
  })
}
