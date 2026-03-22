'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { use } from 'react'

export default function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params)

  return (
    <main style={{ backgroundColor: '#fef5f0', color: '#322e2b' }} className="min-h-screen">

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center px-8 md:px-24 py-32 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-screen-xl mx-auto items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <span className="text-xs uppercase font-bold mb-10 block" style={{ letterSpacing: '0.6em', color: '#a13917' }}>A Legacy of Discrete Elegance</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-12" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>
              The Soul <br />of <span style={{ color: '#a03b00', fontStyle: 'italic', fontWeight: 300 }}>Radiant Sunset</span>
            </h1>
            <p className="text-lg leading-relaxed mb-12 max-w-md italic" style={{ color: '#605a57' }}>
              "In the profound quietude that follows the light, we discover the architecture of true grace."
            </p>
            <p className="text-md leading-relaxed max-w-sm opacity-80" style={{ color: '#605a57' }}>
              Inspired by the amber glow of the horizon, Ethereal Solstice crafts garments that speak of heritage and silent luxury.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
            <div className="overflow-hidden rounded-lg shadow-sm" style={{ aspectRatio: '4/5', backgroundColor: '#f0e6e1' }}>
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1vStUVTaq3mB1TKsWewZXvWIVLEEJX5TZGQNpvKKaPMaOSgacOnuv5t7lgK2FjV8AiZ48lp_n29uaR6O4022ZBas_deNaUY8G09dWzpK7RTO6DkLqXiP-sfOQqmKSlAw9XoWZZfGtnmh6pqto1FTIp-A7RY2VrE56Wn_FFmpGxQXc9_FM0HA7Z_8JdrZZULCFvwsbHPsC0MUUZYbLChxgBzZ8Icrj4g0KjsBwUW4V36gOnQDdPb7dBT1Xju7oQiZWNiUXbmlMPZXB" alt="Sophisticated modest fashion editorial" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#fef5f0' }} className="py-32 px-8 md:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: '🌿', title: 'The Cycle of Dusk', desc: 'A zero-waste ethos where silk remnants are meticulously archived and re-woven into limited edition narratives.' },
              { icon: '🎨', title: 'Botanical Alchemy', desc: 'Our signature palettes are derived from mineral earths and botanical husks, employing Sienese dyeing techniques.' },
              { icon: '📜', title: 'The Archive', desc: 'A curated legacy of silhouettes designed for trans-generational passage, representing our sartorial commitment.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="space-y-6">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-80" style={{ color: '#605a57' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section style={{ backgroundColor: '#f9efea' }} className="py-24 px-8 md:px-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>A Legacy in Motion</h2>
          <p className="italic opacity-70 mb-16" style={{ color: '#605a57' }}>Four decades of uncompromising craft.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { year: '1984', title: 'The First Loom', desc: 'The seminal workshop established, weaving the initial threads of our narrative.' },
              { year: '2002', title: 'Global Reach', desc: 'Debut introducing our sun-matured palettes to the global stage.' },
              { year: '2018', title: 'The New Era', desc: 'Creative direction refined into a global beacon of modest luxury.' },
              { year: 'Today', title: 'Radiant Future', desc: 'Leading with carbon-neutral production and the Global Artisanal Ethics Charter.' },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <span className="text-2xl font-black" style={{ color: '#a03b00' }}>{item.year}</span>
                <h5 className="font-bold text-xs uppercase" style={{ letterSpacing: '0.15em', color: '#322e2b' }}>{item.title}</h5>
                <p className="text-xs leading-relaxed opacity-80" style={{ color: '#605a57' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#fef5f0' }} className="py-24 px-8 text-center">
        <h2 className="text-4xl font-black mb-8" style={{ fontFamily: 'Georgia, serif', color: '#322e2b' }}>Explore the Collection</h2>
        <Link href={`/${locale}/products`} className="inline-block px-12 py-5 rounded-full font-bold uppercase transition-all hover:opacity-90" style={{ backgroundColor: '#a03b00', color: '#ffefea', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
          Shop Now →
        </Link>
      </section>

    </main>
  )
}
