import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export default async function CollectionsIndexPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params

  const collections = [
    {slug: 'Eid', title: 'Eid'},
    {slug: 'Wedding', title: 'Wedding'},
    {slug: 'Ramadan', title: 'Ramadan'},
    {slug: 'Everyday', title: 'Everyday'},
    {slug: 'Custom', title: 'Custom'}
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Collections</h1>
      <p className="mt-2 text-pink-600 ">
        Browse by occasion and discover variant pricing for your perfect fit.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {collections.map((c) => (
          <a
            key={c.slug}
            href={`/${locale}/collections/${c.slug}`}
            className="rounded-xl border border-pink-100 bg-pink-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md  "
          >
            <div className="text-lg font-semibold">{c.title}</div>
            <div className="mt-2 text-sm text-pink-600 ">
              Styles + pricing variants
            </div>
          </a>
        ))}
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
        title: 'Abayas Collections | Abayas',
        description:
          'Browse abaya collections by occasion and explore variant pricing for sizes, lengths, and materials.'
      },
      ar: {
        title: 'مجموعات العبايات | عبايات',
        description:
          'تصفح مجموعات العبايات حسب المناسبة واستعرض أسعار الخيارات للأحجام والطول والخامة.'
      },
      ur: {
        title: 'عبایہ مجموعے | عبايات',
        description:
          'موقع بہ مطابق عبایہ مجموعے دیکھیں اور سائز، لمبائی اور میٹیریل کے مطابق مختلف قیمتیں دریافت کریں۔'
      },
      fr: {
        title: 'Collections d’Abayas | Abayas',
        description:
          'Découvrez les collections par occasion et comparez les prix selon la taille, la longueur et le tissu.'
      }
    }

  const copy = variants[locale]

  return buildPageMetadata({
    locale,
    restPath: '/collections',
    title: copy.title,
    description: copy.description
  })
}

