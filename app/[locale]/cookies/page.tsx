import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export default async function CookiesPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Cookies Policy</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        This is a placeholder cookies policy page. Update it to match your
        analytics/marketing tools.
      </p>

      <div className="mt-8 space-y-5 text-slate-700 dark:text-slate-200">
        <section>
          <h2 className="text-lg font-semibold">What cookies we use</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Update with which cookies you use (analytics, preferences, ads, etc.).
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">How to manage cookies</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            You can manage cookies through your browser settings.
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
        title: 'Cookies Policy | Abayas',
        description:
          'Learn about cookies used for analytics, preferences, and website functionality.'
      },
      ar: {
        title: 'سياسة ملفات الارتباط | عبايات',
        description:
          'تعرف على ملفات الارتباط المستخدمة للتحليلات والتفضيلات ووظائف الموقع.'
      },
      ur: {
        title: 'کوکیز پالیسی | عبايات',
        description:
          'اینالٹیکس، ترجیحات اور ویب سائٹ کی فعالیت کے لیے استعمال ہونے والی کوکیز کے بارے میں جانیں۔'
      },
      fr: {
        title: 'Politique relative aux cookies | Abayas',
        description:
          'Découvrez les cookies utilisés pour l’analyse, les préférences et les fonctionnalités du site.'
      }
    }

  const copy = variants[locale]

  return buildPageMetadata({
    locale,
    restPath: '/cookies',
    title: copy.title,
    description: copy.description
  })
}

