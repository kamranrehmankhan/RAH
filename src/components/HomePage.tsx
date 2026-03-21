'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

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
  return (
    <main className="min-h-screen bg-cream-50 font-serif">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blush-100 via-cream-100 to-rose-50 py-20 border-b border-rose-100">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <p className="text-sm font-medium text-rose-400 tracking-widest uppercase">
                Worldwide delivery • Premium fabrics • Modern craftsmanship
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-rose-900 md:text-6xl leading-tight">
                Abayas built for<br/>
                <span className="text-rose-400">global style</span>
              </h1>
              <p className="mt-5 text-lg text-rose-700">
                Create your look for Eid, weddings, Ramadan, and everyday elegance.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href={`/${locale}/products`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-full bg-rose-500 px-7 py-3 text-sm font-medium text-white shadow-md hover:bg-rose-600 transition-colors"
                >
                  Shop Abayas
                </motion.a>
                <motion.a
                  href={`/${locale}/quote`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center rounded-full border-2 border-rose-300 bg-white px-7 py-3 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  Request a Quote
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="rounded-3xl border border-rose-100 bg-white p-6 shadow-lg"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Trusted quality', desc: 'Fabric-first design and durable stitching.' },
                  { title: 'Clear pricing', desc: 'Variant pricing for size/length/material.' },
                  { title: 'Fast admin updates', desc: 'Upload images and update pricing in seconds.' },
                  { title: 'Global support', desc: 'International shipping + easy returns.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="rounded-2xl bg-blush-100 p-4"
                  >
                    <div className="text-sm font-semibold text-rose-800">{item.title}</div>
                    <div className="mt-1 text-sm text-rose-600">{item.desc}</div>
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
              <h2 className="text-3xl font-semibold text-rose-900">Shop by Occasion</h2>
              <p className="mt-2 text-rose-500">Find the right abaya for your celebration or daily style.</p>
            </div>
            <a href={`/${locale}/collections`} className="text-sm font-medium text-rose-500 underline underline-offset-4 hover:text-rose-700">
              View all collections
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
                className="block rounded-2xl border border-rose-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl">{c.emoji}</div>
                <div className="mt-3 text-lg font-semibold text-rose-900">{c.title}</div>
                <div className="mt-1 text-sm text-rose-500">Explore styles + pricing variants</div>
                <div className="mt-4 text-sm font-medium text-rose-400 hover:text-rose-600">Browse →</div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-gradient-to-r from-rose-100 to-blush-100 py-14 border-t border-rose-100">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Worldwide Shipping', desc: 'International delivery with transparent timelines.' },
              { title: 'Easy Returns', desc: 'Clear guidance for returns and exchanges worldwide.' },
              { title: 'Secure Admin Tools', desc: 'Upload images and manage pricing with ease.' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
                  <div className="font-semibold text-rose-800">{item.title}</div>
                  <p className="mt-2 text-sm text-rose-500">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
