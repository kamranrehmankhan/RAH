import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export default async function FAQPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">FAQ</h1>
      <p className="mt-2 text-pink-600 ">
        Quick answers for worldwide customers.
      </p>

      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-lg font-semibold">Do you ship internationally?</h2>
          <p className="mt-2 text-sm text-pink-600 ">
            Yes. We ship to most countries. Use “Request a Quote” with your
            country for shipping confirmation.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">How do pricing variants work?</h2>
          <p className="mt-2 text-sm text-pink-600 ">
            Each product can have multiple variants (size/length/material). The
            product page shows price per variant so you can choose what fits your
            needs.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">How do I request a custom abaya?</h2>
          <p className="mt-2 text-sm text-pink-600 ">
            Use the “Request a Quote” form and describe your preferred size,
            length, fabric, and color.
          </p>
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

  const variants: Record<typeof locale, {title: string; description: string}> =
    {
      en: {
        title: 'FAQ | Abayas',
        description:
          'Frequently asked questions about abayas, variant pricing, shipping and returns.'
      },
      ar: {
        title: 'الأسئلة الشائعة | عبايات',
        description:
          'أسئلة شائعة حول العبايات وأسعار الخيارات والشحن والاستبدال.'
      },
      ur: {
        title: 'عمومی سوالات | عبايات',
        description:
          'عبایہ کے بارے میں عام سوالات، ویرینٹ کی قیمتیں، شپنگ اور ریٹرنز۔'
      },
      fr: {
        title: 'FAQ | Abayas',
        description:
          'Questions fréquentes sur les abayas, les prix par variantes, la livraison et les retours.'
      }
    }

  const copy = variants[locale]

  return buildPageMetadata({
    locale,
    restPath: '/faq',
    title: copy.title,
    description: copy.description
  })
}

