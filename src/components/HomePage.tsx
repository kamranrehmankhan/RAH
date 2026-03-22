'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomePage({ locale }: { locale: string }) {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fef5f0', color: '#322e2b' }}>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img alt="Editorial modest fashion" className="w-full h-full object-cover brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFq-AYjfjCxN-0i1GGqpL5A2mnk6BzHzOMuyTrGcqGLJtdlxWE0XkoQZv55UwB1kCDiuLRXVuh7tqDnOc1dDBKyWJqoL2v44wa0pZIeDC0y9exn_ZGZeMXJ6MV1XmquUsMyYjFqOnX8Pk3PYXrwKKGTM-bgNZIYeiz6R8xdgb9n3tPtV2mCtMfxjAAfo116g1VI6L7-f4WzmLmKuFJeOzVlyTmlYzdH3EDF1bhLgUBOjOC5LtuYj7uHdbYh9SDlIjatILHcp2ueL4Q" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(254,245,240,0.4))' }}></div>
        </div>
        <motion.div className="relative z-10 text-center px-4" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span style={{ letterSpacing: '0.4em', color: '#605a57', fontWeight: 300 }} className="text-sm uppercase mb-6 block">The Atelier of Ethereal Solstice</span>
          <h1 style={{ fontFamily: 'Georgia, serif', fontWeight: 900, color: '#431407', lineHeight: 0.85 }} className="text-7xl md:text-9xl mb-8">THE RADIANT <br /> DUSK</h1>
          <Link href={`/${locale}/products`} className="inline-flex items-center gap-4 px-10 py-5 rounded-full text-sm uppercase font-bold transition-all hover:opacity-90 mt-12" style={{ backgroundColor: '#a03b00', color: '#ffefea', letterSpacing: '0.15em' }}>
            Explore the Collections →
          </Link>
        </motion.div>
      </section>

      <section className="py-32 px-8" style={{ backgroundColor: '#fef5f0' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#322e2b' }}>Masterpiece Silhouettes</h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#a03b00' }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20">
            {[
              { name: 'The Solstice Abaya', material: 'Terracotta Fine Wool', price: '$1,240', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO77RUh1hC_O7Vkk1kM0dPfobzkwZCCiZ5dFCNdy2RniRQDJYj3tvwJnvBpftSUJGnirmN06_iRHtVKti0DoqaBafNkS0FalxDRqPp_115zvNmyiSKgwAsxoFmRV-6og0Yp7z0jhg4V3xMS2O_5Q3uGStedzNWCERvl6xpiRTuakX19zNeosgHGwbglxmuCz7tlHd3SrKKOSMR7VGtaLAnPuH5-EZvwD65Jq4qIuqGMgGNnOHwQwzNqBjSjcwnYSVXxz1Fr8R0BVHG' },
              { name: 'The Dusk Over-coat', material: 'Structured Cotton Twill', price: '$980', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNuhOP6uiuXsYIokQVOAaxZkklEh4Ej_65YVh4jUfAhwKGjt67ldAPfY75y_1KNbFa419T0UrjJP0U3DjRIvSHqRC2baxUmpd-bF57YrELnQ6l1Qs4N-442ophOlzVqDSKknWRfH7USlYcwB3DZQVinDW2PcD__9Y8Lyxcp5EzTBfnSNHCX9XiGe2LU5ThBEx6pHyb36I8QcPCboVJvbyYG2zhuixBJGqTwmKfL4ZQxt-NJW-pffY9Rjad3_i6XxN_TrakJYpi0Q-N' },
              { name: 'Celestial Silk Wrap', material: 'Artisanal Mulberry Silk', price: '$450', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsNoEz4dnfreHvyJAqKsM70mKkN7yG3uww4aDrPiz---vaLpYHNVR10A58dLo8I3f4dv1Fe4X-p-C4sO5WwcBuf5vo72JkPbCLPbB2fgHcX4DDEtfiSE3S0MLb-ZYPgJyCoQUUgd4kMlO_Yw919-aibDy-1g-AmS7Rr6tIVh5FNmaQyS_b8eYaufD3lw-cDcZ5Zgyz-yp0qF903kEa3MwBI7o9x2TygmlSdxZApidgWr038kxil3y7zaFwUizLnz2E1XiVHR-iSNQO' },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="group">
                <div className="relative mb-6 overflow-hidden rounded-md" style={{ aspectRatio: '4/5', backgroundColor: '#f0e6e1' }}>
                  <img alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.img} />
                </div>
                <h4 className="text-xl font-bold" style={{ color: '#322e2b' }}>{item.name}</h4>
                <p style={{ color: '#605a57' }}>{item.material}</p>
                <p className="font-bold mt-2" style={{ color: '#a03b00' }}>{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: '#fff7f2' }} className="py-12 border-t border-orange-100">
        <div className="max-w-screen-xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p style={{ color: '#7c5c52', fontSize: '0.8rem' }}>© 2024 Ethereal Solstice. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href={`/${locale}/products`} className="text-xs uppercase hover:opacity-70" style={{ color: '#7c5c52', letterSpacing: '0.15em' }}>Collections</Link>
            <Link href={`/${locale}/contact`} className="text-xs uppercase hover:opacity-70" style={{ color: '#7c5c52', letterSpacing: '0.15em' }}>Contact</Link>
          </div>
        </div>
      </footer>

    </main>
  )
}
