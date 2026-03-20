import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export default function TermsPage({
  params
}: {
  params: {locale: string}
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        This is a placeholder terms page. Replace it with your official terms.
      </p>

      <div className="mt-8 space-y-5 text-slate-700 dark:text-slate-200">
        <section>
          <h2 className="text-lg font-semibold">Orders & quotes</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Quote requests are not confirmed orders until you provide final
            confirmation to the customer.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Pricing updates</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Variant pricing may change based on fabric/material availability.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Add your support email/WhatsApp here.
          </p>
        </section>
      </div>
    </main>
  )
}

export function generateMetadata({
  params
}: {
  params: {locale: string}
}) {
  const locale = getLocaleFromString(params.locale) ?? 'en'

  const variants: Record<typeof locale, {title: string; description: string}> =
    {
      en: {
        title: 'Terms of Service | Abayas',
        description:
          'Read terms for quote requests, pricing updates, and customer communication.'
      },
      ar: {
        title: 'الشروط والأحكام | عبايات',
        description:
          'اقرأ الشروط لطلبات العرض وتحديثات الأسعار والتواصل مع العملاء.'
      },
      ur: {
        title: 'سروس کی شرائط | عبايات',
        description:
          'کوٹ درخواستوں، قیمت اپڈیٹس اور کسٹمر کمیونیکیشن کے لیے شرائط پڑھیں۔'
      },
      fr: {
        title: 'Conditions d’utilisation | Abayas',
        description:
          'Lisez les conditions pour les demandes de devis, les mises à jour de prix et la communication.'
      }
    }

  const copy = variants[locale]

  return buildPageMetadata({
    locale,
    restPath: '/terms',
    title: copy.title,
    description: copy.description
  })
}

