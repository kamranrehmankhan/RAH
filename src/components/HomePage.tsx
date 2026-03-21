'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(30px)', transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s` }}>
      {children}
    </div>
  )
}

export default function HomePage({ locale }: { locale: string }) {
  const t = useTranslations('home')

  return (
    <main className="min-h-screen bg-pink-50">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-200 via-pink-100 to-rose-100 py-20 border-b border-pink-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <p className="text-sm font-medium text-pink-400 tracking-widest uppercase">
                {t('tagline')}
              </p>
              <h1 className="mt-4 text-5xl font-bold tracking-tight text-pink-950 md:text-6xl leading-tight drop-shadow-sm">
                {t('hero_title')}
              </h1>
              <p className="mt-5 text-lg text-pink-700">
                {t('hero_desc')}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href={`/${locale}/products`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-full bg-pink-500 px-7 py-3 text-sm font-medium text-white shadow-md hover:bg-pink-600 transition-colors"
                >
                  {t('shop_btn')}
                </motion.a>
                <motion.a
                  href={`/${locale}/quote`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-full border-2 border-pink-300 bg-white px-7 py-3 text-sm font-medium text-pink-600 hover:bg-pink-50 transition-colors"
                >
                  {t('quote_btn')}
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="rounded-3xl border border-pink-100 bg-white p-6 shadow-lg"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: t('quality_title'), desc: t('quality_desc') },
                  { title: t('pricing_title'), desc: t('pricing_desc') },
                  { title: t('admin_title'), desc: t('admin_desc') },
                  { title: t('support_title'), desc: t('support_desc') },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="rounded-2xl bg-white border border-pink-100 p-4"
                  >
                    <div className="text-sm font-semibold text-pink-800">{item.title}</div>
                    <div className="mt-1 text-sm text-pink-600">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop by Occasion */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <FadeIn>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-pink-900">{t('occasions_title')}</h2>
              <p className="mt-2 text-pink-500">{t('occasions_desc')}</p>
            </div>
            <a href={`/${locale}/collections`} className="text-sm font-medium text-pink-500 underline underline-offset-4 hover:text-pink-700">
              {t('view_all')}
            </a>
          </div>
        </FadeIn>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { slug: 'Eid', title: 'Eid', emoji: '🌙' },
            { slug: 'Wedding', title: 'Wedding', emoji: '💍' },
            { slug: 'Ramadan', title: 'Ramadan', emoji: '✨' },
            { slug: 'Everyday', title: 'Everyday', emoji: '🌸' },
          ].map((c, i) => (
            <FadeIn key={c.slug} delay={i * 0.1}>
              <motion.a
                href={`/${locale}/collections/${c.slug}`}
                whileHover={{ scale: 1.03, y: -4 }}
                className="block rounded-2xl border border-pink-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl">{c.emoji}</div>
                <div className="mt-3 text-lg font-semibold text-pink-900">{c.title}</div>
                <div className="mt-1 text-sm text-pink-500">{t('occasions_explore')}</div>
                <div className="mt-4 text-sm font-medium text-pink-400 hover:text-pink-600">{t('browse')}</div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-gradient-to-r from-pink-200 to-rose-200 py-14 border-t border-pink-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: t('shipping_title'), desc: t('shipping_desc') },
              { title: t('returns_title'), desc: t('returns_desc') },
              { title: t('secure_title'), desc: t('secure_desc') },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="rounded-2xl border border-pink-200 bg-white p-6 shadow-md">
                  <div className="font-bold text-pink-900">{item.title}</div>
                  <p className="mt-2 text-sm text-pink-500">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
