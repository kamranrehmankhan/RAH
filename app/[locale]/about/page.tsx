import Link from 'next/link'

import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export default async function AboutPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params

  const values = [
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
  ]

  const timeline = [
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
  ]

  return (
    <main className="bg-surface text-on-surface">
      <section className="relative overflow-hidden px-8 py-24 md:px-20 md:py-32">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="mb-8 block font-headline text-xs font-bold uppercase tracking-[0.48em] text-secondary">
              A Legacy of Discrete Elegance
            </span>
            <h1 className="font-headline text-5xl font-black leading-[0.86] tracking-tight text-on-surface md:text-8xl">
              The Soul <br />
              of <span className="font-light italic text-primary">Radiant Sunset</span>
            </h1>
            <div className="my-10 h-px w-20 bg-primary/30" />
            <p className="max-w-md text-lg italic leading-relaxed text-on-surface-variant">
              "In the profound quietude that follows the light, we discover the architecture of true grace."
            </p>
            <p className="mt-6 max-w-md leading-relaxed text-on-surface-variant/90">
              Inspired by amber horizons, Ethereal Solstice crafts silhouettes
              that honor heritage while serving modern life with stillness and
              confidence.
            </p>
            <Link
              href={`/${locale}/products`}
              className="mt-10 inline-block border border-outline px-8 py-4 font-headline text-xs font-bold uppercase tracking-[0.34em] transition-colors hover:bg-on-surface hover:text-surface"
            >
              Explore the Collection
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
              The Ethics of Beauty
            </span>
            <h2 className="font-headline text-4xl font-black leading-tight tracking-tight md:text-6xl">
              The Poetry of <span className="font-light italic text-primary">Conscious Luxury</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {values.map((item) => (
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
                A Legacy in Motion
              </h2>
              <p className="mt-3 italic text-on-surface-variant">
                Four decades of uncompromising craft.
              </p>
            </div>
            <span className="font-headline text-5xl font-black text-surface-container-high md:text-7xl">
              EST. 1984
            </span>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {timeline.map((item) => (
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
          Invitational
        </span>
        <h2 className="font-headline text-4xl font-black tracking-tight md:text-6xl">
          Enter the Circle of <span className="font-light italic">Radiant Craft</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-on-surface-variant">
          Receive our quarterly dossier on global artistry, ethical practice,
          and the luminous life.
        </p>
        <div className="mt-10">
          <Link
            href={`/${locale}/quote`}
            className="inline-block rounded-full bg-on-surface px-10 py-4 font-headline text-xs font-bold uppercase tracking-[0.3em] text-surface transition-colors hover:bg-primary"
          >
            Join the Circle
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
  return buildPageMetadata({
    locale,
    restPath: '/about',
    title: 'Our Story | Ethereal Solstice',
    description:
      'Discover the heritage, ethics, and artisanship behind Ethereal Solstice.'
  })
}
