import Link from 'next/link'

export default function SiteFooter({locale}: {locale: string}) {
  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-low px-8 pb-12 pt-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="font-headline text-xl font-black tracking-tight text-on-surface">
              ETHEREAL SOLSTICE
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-surface-variant">
              Consciously curated for the global soul. Our atelier prioritizes low-impact manufacturing and honors artisanal legacy through refined, modest design.
            </p>
          </div>

          <div>
            <div className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-on-surface">
              Atelier Navigation
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href={`/${locale}/collections`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  Couture Collections
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  The Journal
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  Product Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-on-surface">
              Concierge
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href={`/${locale}/shipping-returns`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  White Glove Delivery
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/checkout`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  Secure Checkout
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/orders`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  Order Archive
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/faq`}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-on-surface">
              The Inner Circle
            </div>
            <p className="mt-4 text-sm text-on-surface-variant">
              Join our circle for seasonal previews and deep editorial insights.
            </p>
            <div className="mt-5 flex gap-2">
              <Link
                href={`/${locale}/quote`}
                className="rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-primary transition-colors hover:bg-primary-dim"
              >
                Request Quote
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-full border border-outline-variant px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-on-surface transition-colors hover:border-primary hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-outline-variant/30 pt-8">
          <p className="text-xs text-on-surface-variant">
            © {new Date().getFullYear()} Ethereal Solstice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
