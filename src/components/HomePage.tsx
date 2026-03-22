'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomePage({ locale }: { locale: string }) {
  return (
    <main className="min-h-screen bg-surface text-on-surface">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img alt="Editorial modest fashion" className="w-full h-full object-cover brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFq-AYjfjCxN-0i1GGqpL5A2mnk6BzHzOMuyTrGcqGLJtdlxWE0XkoQZv55UwB1kCDiuLRXVuh7tqDnOc1dDBKyWJqoL2v44wa0pZIeDC0y9exn_ZGZeMXJ6MV1XmquUsMyYjFqOnX8Pk3PYXrwKKGTM-bgNZIYeiz6R8xdgb9n3tPtV2mCtMfxjAAfo116g1VI6L7-f4WzmLmKuFJeOzVlyTmlYzdH3EDF1bhLgUBOjOC5LtuYj7uHdbYh9SDlIjatILHcp2ueL4Q"/>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/40"></div>
        </div>
        <motion.div className="relative z-10 text-center px-4" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="font-label uppercase tracking-[0.4em] text-on-surface-variant mb-6 block font-light text-sm">The Atelier of Ethereal Solstice</span>
          <h1 className="font-headline text-7xl md:text-9xl font-black tracking-tighter text-on-surface leading-[0.85] mb-8">THE RADIANT <br/> DUSK</h1>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
            <Link href={`/${locale}/products`} className="group flex items-center gap-4 bg-primary text-on-primary px-10 py-5 rounded-full font-headline uppercase tracking-widest text-sm hover:bg-primary-dim transition-all">
              Explore the Collections →
            </Link>
          </div>
        </motion.div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40 text-3xl">↓</div>
      </section>

      {/* Collections Bento */}
      <section className="py-24 md:py-48 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <span className="uppercase tracking-widest text-primary font-bold mb-4 block text-sm font-label">Curation Series</span>
              <h2 className="font-headline text-5xl md:text-6xl font-bold text-on-surface tracking-tight leading-tight">Mastering the Art of Modest Drapery</h2>
            </div>
            <p className="font-body text-lg text-on-surface-variant max-w-sm">A masterclass in ancestral weaving and contemporary tailoring. Each Abaya is a testament to longevity and the profound dignity of modest grace.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <motion.div whileHover={{ scale: 1.01 }} className="md:col-span-7 cursor-pointer group">
              <div className="relative overflow-hidden rounded-lg bg-surface-container" style={{ aspectRatio: '4/5' }}>
                <img alt="Terracotta Series" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8HayE8wuws_cuP6coe8uOgNUDvMuHp4uC6ILqLURngkWIb5j1Prgg2xBBt3vnGuFV0LrymHm44MYfVaIag9Be2QBilmSJl3bKEjf9K9LUeP7allqgWJEA8LkrwWAW8mPiKMcfSxlhJrHKdaVLGitNI1bIFS2UUc_OboND3bIYriUsiVaIgLciFPEwnjYoV1ata_rnz2vRmvffx6ikZUb9prqNejRo8A1hqivFLhTGqtKseKwunvSiw4XTxFpHoB_ThWqgBmj5NFpb"/>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-3xl font-bold text-on-surface">The Terracotta Heritage</h3>
                  <p className="font-body text-on-surface-variant mt-2 italic">Earth-born elegance. Artisanal Organic Linen.</p>
                </div>
                <span className="text-4xl text-primary mt-1">↗</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }} className="md:col-span-5 md:mt-24 cursor-pointer group">
              <div className="relative overflow-hidden rounded-lg bg-surface-container" style={{ aspectRatio: '3/4' }}>
                <img alt="Radiant Sunset Silk" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQJ4Y45aOVm8UjkBb3QNqDfvoHyNrGUPsFww2VKlLuwjWH1F3Ze38WArHA8bwX2atIeAcRBUgwRPXGJmIvf4BMfFFgX3owNtdIYcJcM34xsoqOE4yZP4OZOxb35sehPZMmImZp8Iwl2rFWRyHD3VNQUe9uvrjvs8-ZzwimozYGdyYzlvFdd_mhPfjG8Gj7e2NsiO54S2LsydTFfykneQ4mDkDT1heERHFPhzZgTKiFmH8cUXqgtU_d64csnVt5L_Zl6eo7N2UZ4nVp"/>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-3xl font-bold text-on-surface">Radiant Sunset Silk</h3>
                  <p className="font-body text-on-surface-variant mt-2 italic">Celestial movement. Fine Italian Mulberry Silk.</p>
                </div>
                <span className="text-4xl text-primary mt-1">↗</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Narrative */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden p-12 md:p-24 flex flex-col items-center text-center" style={{ background: 'linear-gradient(135deg, #a03b00 0%, #ff793b 100%)' }}>
            <span className="uppercase tracking-[0.5em] text-on-primary mb-8 block font-headline text-xs font-bold">The Narrative</span>
            <h2 className="font-headline text-4xl md:text-7xl font-black text-on-primary leading-none mb-10 tracking-tighter">A LEGACY CRAFTED FOR THE RADIANT FUTURE</h2>
            <p className="font-body text-on-primary text-xl leading-relaxed mb-12 opacity-90">Ethereal Solstice transcends standard boutique experiences; it is a sacred commitment to the rhythm of nature and the integrity of artisanal lineage.</p>
            <Link href={`/${locale}/about`} className="bg-surface text-primary px-12 py-5 rounded-full font-headline uppercase tracking-[0.2em] text-sm font-bold hover:scale-105 transition-transform shadow-xl">Our Ancestral Heritage</Link>
          </div>
        </div>
      </section>

      {/* Product Spotlight */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-4">Masterpiece Silhouettes</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20">
            {[
              { name: 'The Solstice Abaya', material: 'Terracotta Fine Wool', price: '$1,240', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO77RUh1hC_O7Vkk1kM0dPfobzkwZCCiZ5dFCNdy2RniRQDJYj3tvwJnvBpftSUJGnirmN06_iRHtVKti0DoqaBafNkS0FalxDRqPp_115zvNmyiSKgwAsxoFmRV-6og0Yp7z0jhg4V3xMS2O_5Q3uGStedzNWCERvl6xpiRTuakX19zNeosgHGwbglxmuCz7tlHd3SrKKOSMR7VGtaLAnPuH5-EZvwD65Jq4qIuqGMgGNnOHwQwzNqBjSjcwnYSVXxz1Fr8R0BVHG', mt: '' },
              { name: 'The Dusk Over-coat', material: 'Structured Cotton Twill', price: '$980', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNuhOP6uiuXsYIokQVOAaxZkklEh4Ej_65YVh4jUfAhwKGjt67ldAPfY75y_1KNbFa419T0UrjJP0U3DjRIvSHqRC2baxUmpd-bF57YrELnQ6l1Qs4N-442ophOlzVqDSKknWRfH7USlYcwB3DZQVinDW2PcD__9Y8Lyxcp5EzTBfnSNHCX9XiGe2LU5ThBEx6pHyb36I8QcPCboVJvbyYG2zhuixBJGqTwmKfL4ZQxt-NJW-pffY9Rjad3_i6XxN_TrakJYpi0Q-N', mt: 'md:mt-12' },
              { name: 'Celestial Silk Wrap', material: 'Artisanal Mulberry Silk', price: '$450', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsNoEz4dnfreHvyJAqKsM70mKkN7yG3uww4aDrPiz---vaLpYHNVR10A58dLo8I3f4dv1Fe4X-p-C4sO5WwcBuf5vo72JkPbCLPbB2fgHcX4DDEtfiSE3S0MLb-ZYPgJyCoQUUgd4kMlO_Yw919-aibDy-1g-AmS7Rr6tIVh5FNmaQyS_b8eYaufD3lw-cDcZ5Zgyz-yp0qF903kEa3MwBI7o9x2TygmlSdxZApidgWr038kxil3y7zaFwUizLnz2E1XiVHR-iSNQO', mt: '' },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className={`group ${item.mt}`}>
                <div className="relative mb-6 overflow-hidden rounded-md bg-surface-container" style={{ aspectRatio: '4/5' }}>
                  <img alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={item.img}/>
                  <button className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-surface/90 backdrop-blur-md text-on-surface px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest whitespace-nowrap">Request Private Viewing</button>
                </div>
                <h4 className="font-headline text-xl font-bold text-on-surface">{item.name}</h4>
                <p className="font-body text-on-surface-variant">{item.material}</p>
                <p className="font-bold mt-2 text-primary">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-low pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-screen-2xl mx-auto">
          <div>
            <span className="text-xl font-black text-on-surface font-headline mb-6 block tracking-tighter">ETHEREAL SOLSTICE</span>
            <p className="font-body text-sm leading-relaxed text-on-surface-variant">Consciously curated for the global soul. Our atelier prioritizes low-impact manufacturing.</p>
          </div>
          <div>
            <h4 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-4">
              <li><Link className="font-body text-sm text-on-surface-variant hover:text-primary transition-all" href={`/${locale}/collections`}>Couture Collections</Link></li>
              <li><Link className="font-body text-sm text-on-surface-variant hover:text-primary transition-all" href={`/${locale}/about`}>Our Story</Link></li>
              <li><Link className="font-body text-sm text-on-surface-variant hover:text-primary transition-all" href={`/${locale}/contact`}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-wider text-xs">Concierge</h4>
            <ul className="space-y-4">
              <li><Link className="font-body text-sm text-on-surface-variant hover:text-primary transition-all" href={`/${locale}/faq`}>FAQ</Link></li>
              <li><Link className="font-body text-sm text-on-surface-variant hover:text-primary transition-all" href={`/${locale}/shipping-returns`}>Shipping & Returns</Link></li>
              <li><Link className="font-body text-sm text-on-surface-variant hover:text-primary transition-all" href={`/${locale}/privacy`}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold text-on-surface mb-6 uppercase tracking-wider text-xs">The Inner Circle</h4>
            <p className="font-body text-sm text-on-surface-variant mb-6">Join our circle for seasonal previews and deep editorial insights.</p>
            <Link href={`/${locale}/quote`} className="inline-block bg-primary text-on-primary px-6 py-3 rounded-full font-headline text-sm uppercase tracking-widest hover:bg-primary-dim transition-all">Request a Quote</Link>
          </div>
        </div>
        <div className="mt-24 border-t border-outline-variant pt-12 px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-sm text-on-surface-variant">© 2024 Ethereal Solstice. All rights reserved.</p>
        </div>
      </footer>

    </main>
  )
}
