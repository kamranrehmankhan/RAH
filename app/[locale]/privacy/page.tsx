import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export default function PrivacyPage({
  params
}: {
  params: {locale: string}
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        This is a placeholder privacy policy. Update it with your official
        business details and compliance requirements.
      </p>

      <div className="mt-8 space-y-5 text-slate-700 dark:text-slate-200">
        <section>
          <h2 className="text-lg font-semibold">What we collect</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Information you submit through forms (name, email, country, and
            inquiry message).
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">How we use it</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            To respond to inquiries, provide shipping/pricing information, and
            improve customer service.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Add your contact email/WhatsApp here.
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
        title: 'Privacy Policy | Abayas',
        description:
          'Read our privacy policy for form submissions and quote requests.'
      },
      ar: {
        title: 'سياسة الخصوصية | عبايات',
        description:
          'اقرأ سياسة الخصوصية لتقديم الطلبات وطلبات العرض.'
      },
      ur: {
        title: 'پرائیویسی پالیسی | عبايات',
        description:
          'فارم سبمیشنز اور کوٹ کی درخواستوں کے بارے میں ہماری پرائیویسی پالیسی پڑھیں۔'
      },
      fr: {
        title: 'Politique de confidentialité | Abayas',
        description:
          'Lisez notre politique de confidentialité pour les demandes et devis.'
      }
    }

  const copy = variants[locale]

  return buildPageMetadata({
    locale,
    restPath: '/privacy',
    title: copy.title,
    description: copy.description
  })
}

