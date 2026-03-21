import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export default async function AboutPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        A modern abaya brand built for global customers.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-lg font-semibold">Our story</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            We design premium abayas for everyday elegance and special occasions.
            Our goal is to make it easy for customers worldwide to find the right fit,
            fabric, and variant pricing.
          </p>
        </section>
        <section className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-lg font-semibold">Why customers choose us</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
            <li>Clear variant pricing</li>
            <li>Worldwide shipping support</li>
            <li>Admin tools for fast updates</li>
            <li>Image-first product gallery</li>
          </ul>
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
        title: 'About | Abayas',
        description:
          'Learn about our abaya designs built for global customers and clear variant pricing.'
      },
      ar: {
        title: 'من نحن | عبايات',
        description:
          'تعرف على تصاميم العبايات التي تناسب العملاء حول العالم مع أسعار واضحة حسب الخيارات.'
      },
      ur: {
        title: 'ہمارے بارے میں | عبايات',
        description:
          'ہماری عبايات ڈیزائنز کے بارے میں جانیں جو عالمی صارفین کے لیے بنائے گئے ہیں۔'
      },
      fr: {
        title: 'À propos | Abayas',
        description:
          'Découvrez notre marque d’abayas conçue pour les clients du monde entier.'
      }
    }

  const copy = variants[locale]

  return buildPageMetadata({
    locale,
    restPath: '/about',
    title: copy.title,
    description: copy.description
  })
}

