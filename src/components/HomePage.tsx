import Link from 'next/link'

type SupportedLocale = 'en' | 'ar' | 'ur' | 'fr'

const homeCopy = {
  en: {
    atelierLabel: 'The Atelier of Ethereal Solstice',
    heroTitleTop: 'THE RADIANT',
    heroTitleBottom: 'DUSK',
    heroCta: 'Explore the Archives',
    curationLabel: 'Curation Series',
    curationTitle: 'Mastering the Art of Modest Drapery',
    curationDesc:
      'A masterclass in ancestral weaving and contemporary tailoring. Each Abaya is a testament to longevity and the profound dignity of modest grace.',
    terracottaTitle: 'The Terracotta Heritage',
    terracottaDesc: 'Earth-born elegance. Artisanal organic linen.',
    sunsetTitle: 'Radiant Sunset Silk',
    sunsetDesc: 'Celestial movement. Fine Italian Mulberry Silk.',
    narrativeLabel: 'The Narrative',
    narrativeTitle: 'A LEGACY CRAFTED FOR THE RADIANT FUTURE',
    narrativeDesc:
      'Ethereal Solstice transcends standard boutique experiences; it is a sacred commitment to the rhythm of nature and the integrity of artisanal lineage.',
    narrativeCta: 'Our Ancestral Heritage',
    spotlightTitle: 'Masterpiece Silhouettes',
    privateViewing: 'Request Private Viewing',
    products: [
      {
        name: 'The Solstice Abaya',
        material: 'Terracotta Fine Wool',
        price: '$1,240'
      },
      {
        name: 'The Dusk Over-coat',
        material: 'Structured Cotton Twill',
        price: '$980',
        offset: true
      },
      {
        name: 'Celestial Silk Wrap',
        material: 'Artisanal Mulberry Silk',
        price: '$450'
      }
    ]
  },
  ar: {
    atelierLabel: 'أتيليه إيثيريال سولستيس',
    heroTitleTop: 'الشفق',
    heroTitleBottom: 'المتوهج',
    heroCta: 'استكشاف الأرشيف',
    curationLabel: 'سلسلة مختارة',
    curationTitle: 'إتقان فن الانسياب المحتشم',
    curationDesc:
      'درس متقدم في النسيج التراثي والخياطة المعاصرة. كل عباية شهادة على الاستدامة وكرامة الأناقة المحتشمة.',
    terracottaTitle: 'تراث التيراكوتا',
    terracottaDesc: 'أناقة مستوحاة من الأرض. كتان عضوي حرفي.',
    sunsetTitle: 'حرير الغروب المشع',
    sunsetDesc: 'انسيابية سماوية. حرير توت إيطالي فاخر.',
    narrativeLabel: 'الرواية',
    narrativeTitle: 'إرث يُصاغ لمستقبل متوهج',
    narrativeDesc:
      'إيثيريال سولستيس تتجاوز تجربة المتاجر التقليدية؛ إنها التزام بإيقاع الطبيعة ونزاهة السلالة الحرفية.',
    narrativeCta: 'تراثنا الأصيل',
    spotlightTitle: 'تصاميم أيقونية',
    privateViewing: 'طلب معاينة خاصة',
    products: [
      {
        name: 'عباية السولستيس',
        material: 'صوف تيراكوتا فاخر',
        price: '$1,240'
      },
      {
        name: 'معطف الدسك',
        material: 'قطن تويل هيكلي',
        price: '$980',
        offset: true
      },
      {
        name: 'وشاح حرير سماوي',
        material: 'حرير توت حرفي',
        price: '$450'
      }
    ]
  },
  ur: {
    atelierLabel: 'ایتھیریل سولسٹس اٹیلیے',
    heroTitleTop: 'روشن',
    heroTitleBottom: 'شام',
    heroCta: 'آرکائیوز دیکھیں',
    curationLabel: 'کیوریشن سیریز',
    curationTitle: 'محتشم ڈریپنگ کے فن میں مہارت',
    curationDesc:
      'وراثتی بُنائی اور جدید سلائی کا امتزاج۔ ہر عبایہ پائیداری اور وقار کی علامت ہے۔',
    terracottaTitle: 'ٹیراکوٹا ورثہ',
    terracottaDesc: 'زمین سے جڑی خوبصورتی۔ آرٹیزنل آرگینک لینن۔',
    sunsetTitle: 'ریڈینٹ سن سیٹ سلک',
    sunsetDesc: 'آسمانی روانی۔ نفیس اطالوی ملبری سلک۔',
    narrativeLabel: 'داستان',
    narrativeTitle: 'ایک ورثہ، روشن مستقبل کے لیے',
    narrativeDesc:
      'ایتھیریل سولسٹس روایتی بوتیک سے آگے بڑھ کر فطرت کی رفتار اور ہنرمندانہ میراث کے ساتھ وابستہ ہے۔',
    narrativeCta: 'ہمارا آبائی ورثہ',
    spotlightTitle: 'شاندار سلیوئیٹس',
    privateViewing: 'نجی معائنہ کی درخواست',
    products: [
      {
        name: 'دی سولسٹس عبایہ',
        material: 'ٹیراکوٹا فائن وول',
        price: '$1,240'
      },
      {
        name: 'دی ڈسک اوور کوٹ',
        material: 'اسٹرکچرڈ کاٹن ٹوئل',
        price: '$980',
        offset: true
      },
      {
        name: 'سیلیسچل سلک ریپ',
        material: 'آرٹیزنل ملبری سلک',
        price: '$450'
      }
    ]
  },
  fr: {
    atelierLabel: "L'Atelier Ethereal Solstice",
    heroTitleTop: 'LE CRÉPUSCULE',
    heroTitleBottom: 'RAYONNANT',
    heroCta: 'Explorer les Archives',
    curationLabel: 'Série Curatée',
    curationTitle: "Maîtriser l'Art du Drapé Pudique",
    curationDesc:
      'Une masterclass de tissage ancestral et de coupe contemporaine. Chaque abaya incarne la durabilité et la grâce pudique.',
    terracottaTitle: 'Héritage Terracotta',
    terracottaDesc: 'Élégance née de la terre. Lin biologique artisanal.',
    sunsetTitle: 'Soie Sunset Radieuse',
    sunsetDesc: 'Mouvement céleste. Soie de mûrier italienne.',
    narrativeLabel: 'Le Récit',
    narrativeTitle: "UN HÉRITAGE CONÇU POUR L'AVENIR RAYONNANT",
    narrativeDesc:
      "Ethereal Solstice dépasse l'expérience boutique classique et honore le rythme de la nature et l'intégrité artisanale.",
    narrativeCta: 'Notre Héritage Ancestral',
    spotlightTitle: 'Silhouettes Signature',
    privateViewing: 'Demander une Présentation Privée',
    products: [
      {
        name: 'Abaya Solstice',
        material: 'Laine fine Terracotta',
        price: '$1,240'
      },
      {
        name: 'Manteau Dusk',
        material: 'Twill de coton structuré',
        price: '$980',
        offset: true
      },
      {
        name: 'Étole en Soie Céleste',
        material: 'Soie de mûrier artisanale',
        price: '$450'
      }
    ]
  }
} as const

const spotlightImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCO77RUh1hC_O7Vkk1kM0dPfobzkwZCCiZ5dFCNdy2RniRQDJYj3tvwJnvBpftSUJGnirmN06_iRHtVKti0DoqaBafNkS0FalxDRqPp_115zvNmyiSKgwAsxoFmRV-6og0Yp7z0jhg4V3xMS2O_5Q3uGStedzNWCERvl6xpiRTuakX19zNeosgHGwbglxmuCz7tlHd3SrKKOSMR7VGtaLAnPuH5-EZvwD65Jq4qIuqGMgGNnOHwQwzNqBjSjcwnYSVXxz1Fr8R0BVHG',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDNuhOP6uiuXsYIokQVOAaxZkklEh4Ej_65YVh4jUfAhwKGjt67ldAPfY75y_1KNbFa419T0UrjJP0U3DjRIvSHqRC2baxUmpd-bF57YrELnQ6l1Qs4N-442ophOlzVqDSKknWRfH7USlYcwB3DZQVinDW2PcD__9Y8Lyxcp5EzTBfnSNHCX9XiGe2LU5ThBEx6pHyb36I8QcPCboVJvbyYG2zhuixBJGqTwmKfL4ZQxt-NJW-pffY9Rjad3_i6XxN_TrakJYpi0Q-N',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBsNoEz4dnfreHvyJAqKsM70mKkN7yG3uww4aDrPiz---vaLpYHNVR10A58dLo8I3f4dv1Fe4X-p-C4sO5WwcBuf5vo72JkPbCLPbB2fgHcX4DDEtfiSE3S0MLb-ZYPgJyCoQUUgd4kMlO_Yw919-aibDy-1g-AmS7Rr6tIVh5FNmaQyS_b8eYaufD3lw-cDcZ5Zgyz-yp0qF903kEa3MwBI7o9x2TygmlSdxZApidgWr038kxil3y7zaFwUizLnz2E1XiVHR-iSNQO'
]

export default function HomePage({locale}: {locale: string}) {
  const language = (['en', 'ar', 'ur', 'fr'].includes(locale)
    ? locale
    : 'en') as SupportedLocale
  const copy = homeCopy[language]

  return (
    <main className="bg-surface text-on-surface">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
        <div className="absolute inset-0 z-0 scale-105">
          <img
            alt="Editorial modest fashion"
            className="h-full w-full object-cover brightness-90"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFq-AYjfjCxN-0i1GGqpL5A2mnk6BzHzOMuyTrGcqGLJtdlxWE0XkoQZv55UwB1kCDiuLRXVuh7tqDnOc1dDBKyWJqoL2v44wa0pZIeDC0y9exn_ZGZeMXJ6MV1XmquUsMyYjFqOnX8Pk3PYXrwKKGTM-bgNZIYeiz6R8xdgb9n3tPtV2mCtMfxjAAfo116g1VI6L7-f4WzmLmKuFJeOzVlyTmlYzdH3EDF1bhLgUBOjOC5LtuYj7uHdbYh9SDlIjatILHcp2ueL4Q"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/40" />
        </div>
        <div className="relative z-10 text-center">
          <span className="mb-6 block font-headline text-xs font-light uppercase tracking-[0.4em] text-on-surface-variant md:text-sm">
            {copy.atelierLabel}
          </span>
          <h1 className="mb-8 font-headline text-6xl font-black leading-[0.85] tracking-tighter text-orange-950 sm:text-7xl md:text-9xl">
            {copy.heroTitleTop} <br /> {copy.heroTitleBottom}
          </h1>
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-3 rounded-full bg-primary px-9 py-4 font-headline text-xs uppercase tracking-[0.24em] text-on-primary transition-colors hover:bg-primary-dim md:text-sm"
          >
            {copy.heroCta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="bg-surface px-8 py-20 md:px-10 md:py-40">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-4 block font-headline text-xs font-bold uppercase tracking-[0.25em] text-primary">
                {copy.curationLabel}
              </span>
              <h2 className="font-headline text-4xl font-bold leading-tight tracking-tight text-on-surface md:text-6xl">
                {copy.curationTitle}
              </h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-on-surface-variant md:text-lg">
              {copy.curationDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <Link href={`/${locale}/collections`} className="group md:col-span-7">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-container">
                <img
                  alt={copy.terracottaTitle}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8HayE8wuws_cuP6coe8uOgNUDvMuHp4uC6ILqLURngkWIb5j1Prgg2xBBt3vnGuFV0LrymHm44MYfVaIag9Be2QBilmSJl3bKEjf9K9LUeP7allqgWJEA8LkrwWAW8mPiKMcfSxlhJrHKdaVLGitNI1bIFS2UUc_OboND3bIYriUsiVaIgLciFPEwnjYoV1ata_rnz2vRmvffx6ikZUb9prqNejRo8A1hqivFLhTGqtKseKwunvSiw4XTxFpHoB_ThWqgBmj5NFpb"
                />
              </div>
              <div className="mt-8 flex items-start justify-between">
                <div>
                  <h3 className="font-headline text-3xl font-bold text-on-surface">
                    {copy.terracottaTitle}
                  </h3>
                  <p className="mt-2 text-on-surface-variant">{copy.terracottaDesc}</p>
                </div>
                <span className="text-3xl text-primary">↗</span>
              </div>
            </Link>

            <Link href={`/${locale}/collections`} className="group md:col-span-5 md:mt-24">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-surface-container">
                <img
                  alt={copy.sunsetTitle}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQJ4Y45aOVm8UjkBb3QNqDfvoHyNrGUPsFww2VKlLuwjWH1F3Ze38WArHA8bwX2atIeAcRBUgwRPXGJmIvf4BMfFFgX3owNtdIYcJcM34xsoqOE4yZP4OZOxb35sehPZMmImZp8Iwl2rFWRyHD3VNQUe9uvrjvs8-ZzwimozYGdyYzlvFdd_mhPfjG8Gj7e2NsiO54S2LsydTFfykneQ4mDkDT1heERHFPhzZgTKiFmH8cUXqgtU_d64csnVt5L_Zl6eo7N2UZ4nVp"
                />
              </div>
              <div className="mt-8 flex items-start justify-between">
                <div>
                  <h3 className="font-headline text-3xl font-bold text-on-surface">
                    {copy.sunsetTitle}
                  </h3>
                  <p className="mt-2 text-on-surface-variant">{copy.sunsetDesc}</p>
                </div>
                <span className="text-3xl text-primary">↗</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-8 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div
            className="overflow-hidden rounded-2xl px-8 py-14 text-center text-on-primary shadow-xl md:px-16 md:py-20"
            style={{
              background: 'linear-gradient(135deg, #a03b00 0%, #ff793b 100%)'
            }}
          >
            <span className="mb-7 block font-headline text-xs uppercase tracking-[0.45em]">
              {copy.narrativeLabel}
            </span>
            <h2 className="mx-auto max-w-4xl font-headline text-4xl font-black leading-none tracking-tighter md:text-7xl">
              {copy.narrativeTitle}
            </h2>
            <p className="mx-auto mb-12 mt-8 max-w-3xl text-lg leading-relaxed opacity-90 md:text-xl">
              {copy.narrativeDesc}
            </p>
            <Link
              href={`/${locale}/about`}
              className="inline-block rounded-full bg-surface px-11 py-4 font-headline text-xs font-bold uppercase tracking-[0.22em] text-primary transition-transform hover:scale-105"
            >
              {copy.narrativeCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface px-8 py-24 md:py-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-20 text-center">
            <h2 className="mb-4 font-headline text-4xl font-bold text-on-surface md:text-5xl">
              {copy.spotlightTitle}
            </h2>
            <div className="mx-auto h-1 w-24 bg-primary" />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-x-8 md:gap-y-20">
            {copy.products.map((item, index) => (
              <Link
                key={item.name}
                href={`/${locale}/products`}
                className={`group ${'offset' in item && item.offset ? 'md:mt-12' : ''}`}
              >
                <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-md bg-surface-container">
                  <img
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={spotlightImages[index]}
                  />
                  <span className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 whitespace-nowrap rounded-full bg-surface/90 px-6 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-on-surface opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    {copy.privateViewing}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface">
                  {item.name}
                </h3>
                <p className="text-sm text-on-surface-variant">{item.material}</p>
                <p className="mt-2 font-bold text-primary">{item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
