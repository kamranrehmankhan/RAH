import Link from 'next/link'

import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

type SupportedLocale = 'en' | 'ar' | 'ur' | 'fr'

const aboutCopy = {
  en: {
    heroLabel: 'A Legacy of Discrete Elegance',
    heroTitleTop: 'The Soul',
    heroTitleBottom: 'of',
    heroAccent: 'Radiant Sunset',
    heroQuote:
      '"In the profound quietude that follows the light, we discover the architecture of true grace."',
    heroDesc:
      'Inspired by amber horizons, Ethereal Solstice crafts silhouettes that honor heritage while serving modern life with stillness and confidence.',
    heroCta: 'Explore the Collection',
    ethicsLabel: 'The Ethics of Beauty',
    ethicsTitleTop: 'The Poetry of',
    ethicsAccent: 'Conscious Luxury',
    legacyTitle: 'A Legacy in Motion',
    legacySubtitle: 'Four decades of uncompromising craft.',
    invitationalLabel: 'Invitational',
    invitationalTitleTop: 'Enter the Circle of',
    invitationalAccent: 'Radiant Craft',
    invitationalDesc:
      'Receive our quarterly dossier on global artistry, ethical practice, and the luminous life.',
    invitationalCta: 'Join the Circle',
    values: [
      {
        title: 'The Cycle of Dusk',
        desc: 'A zero-waste ethos where silk remnants are meticulously archived and re-woven into limited edition narratives.'
      },
      {
        title: 'Botanical Alchemy',
        desc: 'Our signature palettes are derived from mineral earths and botanical husks, employing Sienese dyeing techniques.'
      },
      {
        title: 'The Archive',
        desc: 'A curated legacy of silhouettes designed for trans-generational passage, representing our sartorial commitment.'
      }
    ],
    timeline: [
      {
        year: '1984',
        title: 'The First Loom',
        desc: 'The seminal workshop in the Sienese hills began weaving the first threads of our narrative.'
      },
      {
        year: '2002',
        title: 'Global Reach',
        desc: 'Our debut in Paris introduced sun-matured palettes to the global stage.'
      },
      {
        year: '2018',
        title: 'The New Era',
        desc: 'A new creative direction refined the house into a beacon of modest luxury.'
      },
      {
        year: 'Today',
        title: 'Radiant Future',
        desc: 'Leading with carbon-neutral silk production and principled artisanal standards.'
      }
    ],
    metaTitle: 'Our Story | Ethereal Solstice',
    metaDescription:
      'Discover the heritage, ethics, and artisanship behind Ethereal Solstice.'
  },
  ar: {
    heroLabel: 'إرث من الأناقة الهادئة',
    heroTitleTop: 'روح',
    heroTitleBottom: 'الغروب',
    heroAccent: 'المتوهج',
    heroQuote: '"في السكون الذي يلي الضوء، نكتشف معمار النعمة الحقيقية."',
    heroDesc:
      'مستوحاة من أفق العنبر، تصوغ إيثيريال سولستيس تصاميم تُكرّم الإرث وتخدم الحياة العصرية بثبات ووقار.',
    heroCta: 'استكشاف المجموعة',
    ethicsLabel: 'أخلاقيات الجمال',
    ethicsTitleTop: 'شِعر',
    ethicsAccent: 'الفخامة الواعية',
    legacyTitle: 'إرث متحرك',
    legacySubtitle: 'أربعة عقود من الحرفية المتقنة.',
    invitationalLabel: 'دعوة خاصة',
    invitationalTitleTop: 'انضمي إلى دائرة',
    invitationalAccent: 'الحرفة المتوهجة',
    invitationalDesc:
      'احصلي على ملفنا الفصلي حول الفن العالمي والممارسة الأخلاقية والحياة المضيئة.',
    invitationalCta: 'الانضمام إلى الدائرة',
    values: [
      {
        title: 'دورة الغسق',
        desc: 'نهج بلا هدر حيث تُحفَظ بقايا الحرير وتُعاد صياغتها في إصدارات محدودة.'
      },
      {
        title: 'كيمياء نباتية',
        desc: 'لوحاتنا اللونية تستمد روحها من المعادن والنباتات بأساليب صباغة سيينية.'
      },
      {
        title: 'الأرشيف',
        desc: 'إرث من التصاميم المصممة للانتقال بين الأجيال برؤية حرفية مستدامة.'
      }
    ],
    timeline: [
      {
        year: '1984',
        title: 'أول نول',
        desc: 'في تلال سيينا انطلقت الورشة الأولى لتنسج خيوط الحكاية.'
      },
      {
        year: '2002',
        title: 'انتشار عالمي',
        desc: 'قدّمت باريس لأول مرة لوحاتنا اللونية الناضجة تحت الشمس.'
      },
      {
        year: '2018',
        title: 'العصر الجديد',
        desc: 'رؤية إبداعية جديدة صقلت الهوية كمنارة للفخامة المحتشمة.'
      },
      {
        year: 'اليوم',
        title: 'مستقبل متوهج',
        desc: 'ريادة في إنتاج حرير منخفض الأثر ومعايير حرفية أخلاقية.'
      }
    ],
    metaTitle: 'قصتنا | إيثيريال سولستيس',
    metaDescription: 'اكتشفي الإرث والأخلاق والحرفية وراء إيثيريال سولستيس.'
  },
  ur: {
    heroLabel: 'خاموش نفاست کا ورثہ',
    heroTitleTop: 'روشن',
    heroTitleBottom: 'غروب',
    heroAccent: 'کی روح',
    heroQuote:
      '"روشنی کے بعد کے سکون میں ہی اصل وقار کی ساخت محسوس ہوتی ہے۔"',
    heroDesc:
      'عنبر آسمانوں سے متاثر ہوکر ایتھیریل سولسٹس ایسے سلیوئیٹس تخلیق کرتا ہے جو ورثے کا احترام اور جدید زندگی کی وقار بھری ضرورت دونوں پوری کریں۔',
    heroCta: 'کلیکشن دیکھیں',
    ethicsLabel: 'جمالیات کی اخلاقیات',
    ethicsTitleTop: 'شاعری',
    ethicsAccent: 'باشعور لگژری کی',
    legacyTitle: 'حرکت میں ورثہ',
    legacySubtitle: 'چار دہائیوں کی بے مثال دستکاری۔',
    invitationalLabel: 'خصوصی دعوت',
    invitationalTitleTop: 'شامل ہوں',
    invitationalAccent: 'روشن دستکاری کے حلقے میں',
    invitationalDesc:
      'عالمی فن، اخلاقی طرزِ عمل اور روشن زندگی پر ہمارا سہ ماہی ڈوزیئر حاصل کریں۔',
    invitationalCta: 'حلقے میں شامل ہوں',
    values: [
      {
        title: 'ڈسک کا چکر',
        desc: 'زیرو ویسٹ طرز جہاں سلک کے باقیات محفوظ ہو کر محدود ایڈیشن میں دوبارہ بنائے جاتے ہیں۔'
      },
      {
        title: 'بوٹینیکل کیمیا',
        desc: 'ہماری رنگتیں معدنی اور نباتاتی ذرائع سے تیار ہوتی ہیں، سیانی رنگ کاری کی روایت کے ساتھ۔'
      },
      {
        title: 'آرکائیو',
        desc: 'ایسے سلیوئیٹس کا ورثہ جو نسل در نسل منتقل ہونے کے لیے تیار کیے جاتے ہیں۔'
      }
    ],
    timeline: [
      {
        year: '1984',
        title: 'پہلا لوم',
        desc: 'سیانا کی پہاڑیوں میں پہلی ورکشاپ نے اس کہانی کے دھاگے بُنے۔'
      },
      {
        year: '2002',
        title: 'عالمی رسائی',
        desc: 'پیرس میں پہلی پیشکش نے ہمارے رنگوں کو عالمی منظرنامے تک پہنچایا۔'
      },
      {
        year: '2018',
        title: 'نیا دور',
        desc: 'نئی تخلیقی قیادت نے برانڈ کو محتشم لگژری کی علامت بنایا۔'
      },
      {
        year: 'آج',
        title: 'روشن مستقبل',
        desc: 'کم اثر سلک پروڈکشن اور اصولی دستکاری کے ساتھ قیادت۔'
      }
    ],
    metaTitle: 'ہماری کہانی | ایتھیریل سولسٹس',
    metaDescription:
      'ایتھیریل سولسٹس کے پس منظر میں موجود ورثہ، اخلاقیات اور دستکاری کو دریافت کریں۔'
  },
  fr: {
    heroLabel: "Un Héritage d'Élégance Discrète",
    heroTitleTop: "L'Âme",
    heroTitleBottom: 'du',
    heroAccent: 'Crépuscule Radieux',
    heroQuote:
      '"Dans le calme qui suit la lumière, nous découvrons l’architecture de la vraie grâce."',
    heroDesc:
      "Inspirée par les horizons ambrés, Ethereal Solstice crée des silhouettes qui honorent l'héritage et servent la vie moderne avec sérénité.",
    heroCta: 'Explorer la Collection',
    ethicsLabel: 'L’Éthique de la Beauté',
    ethicsTitleTop: 'La Poésie du',
    ethicsAccent: 'Luxe Conscient',
    legacyTitle: 'Un Héritage en Mouvement',
    legacySubtitle: 'Quatre décennies de savoir-faire sans compromis.',
    invitationalLabel: 'Invitation',
    invitationalTitleTop: 'Entrez dans le Cercle du',
    invitationalAccent: 'Savoir-faire Rayonnant',
    invitationalDesc:
      'Recevez notre dossier trimestriel sur les arts mondiaux, la pratique éthique et la vie lumineuse.',
    invitationalCta: 'Rejoindre le Cercle',
    values: [
      {
        title: 'Le Cycle du Crépuscule',
        desc: 'Une approche zéro déchet où les chutes de soie sont archivées puis réinterprétées en éditions limitées.'
      },
      {
        title: 'Alchimie Botanique',
        desc: 'Nos palettes naissent de minéraux et de végétaux, selon des techniques de teinture siennoises.'
      },
      {
        title: 'Les Archives',
        desc: 'Un héritage de silhouettes pensé pour traverser les générations.'
      }
    ],
    timeline: [
      {
        year: '1984',
        title: 'Le Premier Métier',
        desc: 'Dans les collines siennoises, l’atelier fondateur a tissé les premiers fils de notre récit.'
      },
      {
        year: '2002',
        title: 'Portée Mondiale',
        desc: 'Le lancement à Paris a présenté nos palettes mûries au soleil sur la scène internationale.'
      },
      {
        year: '2018',
        title: 'La Nouvelle Ère',
        desc: 'Une direction créative renouvelée a affirmé notre vision du luxe pudique.'
      },
      {
        year: "Aujourd'hui",
        title: 'Avenir Rayonnant',
        desc: 'Leadership en production de soie responsable et standards artisanaux exigeants.'
      }
    ],
    metaTitle: 'Notre Histoire | Ethereal Solstice',
    metaDescription:
      "Découvrez l'héritage, l'éthique et l'artisanat d'Ethereal Solstice."
  }
} as const

export default async function AboutPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  const language = (['en', 'ar', 'ur', 'fr'].includes(locale)
    ? locale
    : 'en') as SupportedLocale
  const copy = aboutCopy[language]

  return (
    <main className="bg-surface text-on-surface">
      <section className="relative overflow-hidden px-8 py-24 md:px-20 md:py-32">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="mb-8 block font-headline text-xs font-bold uppercase tracking-[0.48em] text-secondary">
              {copy.heroLabel}
            </span>
            <h1 className="font-headline text-5xl font-black leading-[0.86] tracking-tight text-on-surface md:text-8xl">
              {copy.heroTitleTop} <br />
              {copy.heroTitleBottom}{' '}
              <span className="font-light italic text-primary">{copy.heroAccent}</span>
            </h1>
            <div className="my-10 h-px w-20 bg-primary/30" />
            <p className="max-w-md text-lg italic leading-relaxed text-on-surface-variant">
              {copy.heroQuote}
            </p>
            <p className="mt-6 max-w-md leading-relaxed text-on-surface-variant/90">
              {copy.heroDesc}
            </p>
            <Link
              href={`/${locale}/products`}
              className="mt-10 inline-block border border-outline px-8 py-4 font-headline text-xs font-bold uppercase tracking-[0.34em] transition-colors hover:bg-on-surface hover:text-surface"
            >
              {copy.heroCta}
            </Link>
          </div>
          <div className="md:col-span-7">
            <div className="relative mx-auto max-w-4xl">
              <div className="aspect-[4/5] overflow-hidden bg-surface-container shadow-sm">
                <img
                  className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1vStUVTaq3mB1TKsWewZXvWIVLEEJX5TZGQNpvKKaPMaOSgacOnuv5t7lgK2FjV8AiZ48lp_n29uaR6O4022ZBas_deNaUY8G09dWzpK7RTO6DkLqXiP-sfOQqmKSlAw9XoWZZfGtnmh6pqto1FTIp-A7RY2VrE56Wn_FFmpGxQXc9_FM0HA7Z_8JdrZZULCFvwsbHPsC0MUUZYbLChxgBzZ8Icrj4g0KjsBwUW4V36gOnQDdPb7dBT1Xju7oQiZWNiUXbmlMPZXB"
                  alt="Sophisticated modest fashion editorial"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 hidden w-1/3 bg-surface-container-lowest p-4 shadow-xl md:block">
                <img
                  className="aspect-[3/4] w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyIGpaw0qZa9rETiPG-kOsSycA5e3t2Y1KUTb2WNFtbX2S7PS_GZ1eS8LNRQj_Urg9haEmHzPbUnMB1-2gw_HPmrlbvto0OnlwqLj1GP3B0mBa7ti1cpSmsxuO_W1chjUdr9QiLXGgzk07DOrMrkoWG5ibm-GyjXv6BHAklAcxsPGZPpO_Kax6zIL3jQqTblA-S3XJbJUDN41IuAO7dltslOp_p6WQT88Chw_vKQ_MHrxZAXIBTb5_HQuaEtut1MU3sTiACjY2CI5u"
                  alt="Close up fabric detail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-8 py-24 md:px-20">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-16 max-w-3xl">
            <span className="mb-4 block font-headline text-xs font-bold uppercase tracking-[0.4em] text-secondary">
              {copy.ethicsLabel}
            </span>
            <h2 className="font-headline text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {copy.ethicsTitleTop}{' '}
              <span className="font-light italic text-primary">{copy.ethicsAccent}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {copy.values.map((item) => (
              <article key={item.title} className="space-y-5 border-l border-primary/20 pl-5">
                <h3 className="font-headline text-2xl font-bold text-on-surface">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-on-surface-variant">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-8 py-24 md:px-20 md:py-28">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
                {copy.legacyTitle}
              </h2>
              <p className="mt-3 italic text-on-surface-variant">
                {copy.legacySubtitle}
              </p>
            </div>
            <span className="font-headline text-5xl font-black text-surface-container-high md:text-7xl">
              EST. 1984
            </span>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {copy.timeline.map((item) => (
              <article key={item.year} className="space-y-4">
                <p className="text-2xl font-black text-primary">{item.year}</p>
                <h3 className="font-headline text-xs font-bold uppercase tracking-[0.18em] text-on-surface">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low px-8 py-24 text-center md:px-20">
        <span className="mb-6 block font-headline text-xs font-bold uppercase tracking-[0.5em] text-primary">
          {copy.invitationalLabel}
        </span>
        <h2 className="font-headline text-4xl font-black tracking-tight md:text-6xl">
          {copy.invitationalTitleTop}{' '}
          <span className="font-light italic">{copy.invitationalAccent}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-on-surface-variant">
          {copy.invitationalDesc}
        </p>
        <div className="mt-10">
          <Link
            href={`/${locale}/quote`}
            className="inline-block rounded-full bg-on-surface px-10 py-4 font-headline text-xs font-bold uppercase tracking-[0.3em] text-surface transition-colors hover:bg-primary"
          >
            {copy.invitationalCta}
          </Link>
        </div>
      </section>
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
  const copy = aboutCopy[locale] ?? aboutCopy.en

  return buildPageMetadata({
    locale,
    restPath: '/about',
    title: copy.metaTitle,
    description: copy.metaDescription
  })
}
