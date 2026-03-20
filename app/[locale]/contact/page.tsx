import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export default function ContactPage({
  params
}: {
  params: {locale: string}
}) {
  const {locale} = params

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Reach us for orders, custom requests, and support.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
          <h2 className="font-semibold">Request a Quote</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Fastest way to get pricing and shipping info for your country.
          </p>
          <a
            href={`/${locale}/quote`}
            className="mt-4 inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Go to Quote Form
          </a>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
          <h2 className="font-semibold">Email</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Add your support email in the next step.
          </p>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Add WhatsApp link here for quick international replies.
          </p>
        </div>
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
        title: 'Contact | Abayas',
        description:
          'Contact us for orders, custom requests, and worldwide support.'
      },
      ar: {
        title: 'تواصل معنا | عبايات',
        description:
          'تواصل معنا للطلبات والطلبات المخصصة ودعم عالمي.'
      },
      ur: {
        title: 'رابطہ | عبايات',
        description:
          'آرڈرز، کسٹم درخواستوں اور عالمی سپورٹ کے لیے ہم سے رابطہ کریں۔'
      },
      fr: {
        title: 'Contact | Abayas',
        description:
          'Contactez-nous pour vos commandes, demandes personnalisées et support international.'
      }
    }

  const copy = variants[locale]

  return buildPageMetadata({
    locale,
    restPath: '/contact',
    title: copy.title,
    description: copy.description
  })
}

