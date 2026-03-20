import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export default function HomeByLocale({
  params
}: {
  params: {locale: string}
}) {
  const {locale} = params

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white py-14 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Worldwide delivery • Premium fabrics • Modern craftsmanship
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
                Abayas built for global style
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Create your look for Eid, weddings, Ramadan, and everyday elegance.
                Browse collections, compare variant pricing, and request a quote
                anytime.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`/${locale}/products`}
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Shop Abayas
                </a>
                <a
                  href={`/${locale}/quote`}
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-800"
                >
                  Request a Quote
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
                  <div className="text-sm font-semibold">Trusted quality</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Fabric-first design and durable stitching.
                  </div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
                  <div className="text-sm font-semibold">Clear pricing</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Variant pricing for size/length/material options.
                  </div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
                  <div className="text-sm font-semibold">Fast admin updates</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Upload images and update pricing in seconds.
                  </div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
                  <div className="text-sm font-semibold">Global support</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    International shipping + easy returns guidance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Shop by Occasion</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Find the right abaya for your celebration or daily style.
            </p>
          </div>
          <a
            href={`/${locale}/collections`}
            className="text-sm font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700 dark:text-slate-100 dark:hover:text-white"
          >
            View all collections
          </a>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {slug: 'Eid', title: 'Eid'},
            {slug: 'Wedding', title: 'Wedding'},
            {slug: 'Ramadan', title: 'Ramadan'},
            {slug: 'Everyday', title: 'Everyday'}
          ].map((c) => (
            <a
              key={c.slug}
              href={`/${locale}/collections/${c.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="text-lg font-semibold">{c.title}</div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Explore styles + pricing variants
              </div>
              <div className="mt-4 text-sm font-medium text-slate-900 group-hover:text-slate-700 dark:text-slate-100 dark:group-hover:text-white">
                Browse →
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="font-semibold">Worldwide Shipping</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                International delivery with transparent timelines and tracking.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="font-semibold">Easy Returns</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Clear guidance for returns and exchanges for customers worldwide.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="font-semibold">Secure Admin Tools</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Upload images and manage variant pricing using role-based access.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export function generateMetadata({
  params
}: {
  params: {locale: string}
}) {
  const locale = getLocaleFromString(params.locale) ?? 'en'

  const variants: Record<typeof locale, {title: string; description: string}> = {
    en: {
      title: 'Abayas for the World | Abayas',
      description:
        'Premium abayas with worldwide shipping. Browse collections, compare variant pricing, and request a quote.'
    },
    ar: {
      title: 'عبايات عالمية | عبايات',
      description:
        'عبايات راقية بشحن عالمي. تصفح المجموعات وقارن أسعار الخيارات واطلب عرضاً.'
    },
    ur: {
      title: 'دنیا کے لیے عبايات | عبايات',
      description:
        'دنیا بھر میں دستیاب پریمیم عبايات۔ مجموعے دیکھیں، مختلف قیمتیں موازنہ کریں اور کوٹ کی درخواست کریں۔'
    },
    fr: {
      title: 'Abayas pour le monde | Abayas',
      description:
        'Abayas premium avec livraison internationale. Découvrez les collections, comparez les prix par variantes et demandez un devis.'
    }
  }

  const copy = variants[locale]

  return buildPageMetadata({
    locale,
    restPath: '',
    title: copy.title,
    description: copy.description
  })
}

