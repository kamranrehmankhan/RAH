import QuoteForm from '@/components/quote/QuoteForm'
import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export default async function QuotePage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Request a Quote
      </h1>
      <p className="mt-2 text-pink-600 ">
        Share what you want to order, your size/variant, and your country.
        We’ll respond with shipping details and final pricing.
      </p>

      <div className="mt-8 rounded-xl border border-pink-100 bg-pink-50 p-5  ">
        <QuoteForm />
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

  const variants: Record<typeof locale, {title: string; description: string}> =
    {
      en: {
        title: 'Request a Quote | Abayas',
        description:
          'Request a custom abaya quote. Share your variant and country and we’ll respond with pricing and shipping details.'
      },
      ar: {
        title: 'اطلب عرضاً | عبايات',
        description:
          'اطلب عرضاً لعباية مخصصة. شارك الخيار والبلد وسنرد بتفاصيل الأسعار والشحن.'
      },
      ur: {
        title: 'کوٹ کی درخواست | عبايات',
        description:
          'اپنی مطلوبہ عبایہ کے لیے کوٹ کی درخواست کریں۔ اپنا ویرینٹ اور ملک بتائیں، ہم قیمت اور شپنگ تفصیلات کے ساتھ جواب دیں گے۔'
      },
      fr: {
        title: 'Demander un devis | Abayas',
        description:
          'Demandez un devis pour votre abaya. Indiquez votre variante et votre pays, et nous répondrons avec les prix et les détails d’expédition.'
      }
    }

  const copy = variants[locale]

  return buildPageMetadata({
    locale,
    restPath: '/quote',
    title: copy.title,
    description: copy.description
  })
}

