import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export default async function ShippingReturnsPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        Shipping & Returns
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Transparent guidance for customers worldwide.
      </p>

      <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-200">
        <section>
          <h2 className="text-lg font-semibold">Worldwide Shipping</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            We ship internationally. Delivery times depend on destination country.
            Tracking details are shared once your order is confirmed.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Custom Orders</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            For custom sizes, lengths, or materials, use the “Request a Quote”
            form so we can confirm availability and final pricing.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Returns & Exchanges</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Contact us within a reasonable time after delivery. We’ll guide you
            on eligible returns/exchanges and next steps.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Important Notes</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Colors may vary slightly due to lighting and screen settings. Always
            check the size guide and variant pricing notes before ordering.
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
  const locale = getLocaleFromString(params.locale) ?? 'en'

  const variants: Record<typeof locale, {title: string; description: string}> =
    {
      en: {
        title: 'Shipping & Returns | Abayas',
        description:
          'Worldwide shipping and clear returns guidance for international customers.'
      },
      ar: {
        title: 'الشحن والاستبدال | عبايات',
        description:
          'شحن عالمي وإرشادات واضحة للمرتجعات والعملاء حول العالم.'
      },
      ur: {
        title: 'شپنگ اور ریٹرنز | عبايات',
        description:
          'دنیا بھر میں شپنگ اور بین الاقوامی صارفین کے لیے واضح ریٹرنز گائیڈ۔'
      },
      fr: {
        title: 'Livraison & Retours | Abayas',
        description:
          'Livraison internationale et conseils clairs pour les retours.'
      }
    }

  const copy = variants[locale]

  return buildPageMetadata({
    locale,
    restPath: '/shipping-returns',
    title: copy.title,
    description: copy.description
  })
}

