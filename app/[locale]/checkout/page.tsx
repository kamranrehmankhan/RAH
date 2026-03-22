import Link from 'next/link'

import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'

export default async function CheckoutPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params

  return (
    <main className="bg-background px-6 pb-24 pt-14 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-center gap-5 text-xs font-bold uppercase tracking-[0.25em] text-on-surface-variant">
          <span className="rounded-full bg-primary px-3 py-2 text-on-primary">
            1 Shipping
          </span>
          <span>2 Payment</span>
          <span>3 Review</span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <section className="space-y-14 lg:col-span-7">
            <div>
              <h1 className="font-headline text-4xl font-black tracking-tight text-on-surface md:text-5xl">
                Secure Checkout
              </h1>
              <p className="mt-3 max-w-xl text-on-surface-variant">
                Finalize your order with protected checkout and white-glove
                delivery options.
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <input
                  className="rounded-full border border-outline-variant bg-surface px-6 py-4 text-sm focus:border-primary focus:outline-none"
                  placeholder="Full name"
                />
                <input
                  className="rounded-full border border-outline-variant bg-surface px-6 py-4 text-sm focus:border-primary focus:outline-none"
                  placeholder="Email address"
                />
              </div>
              <input
                className="w-full rounded-full border border-outline-variant bg-surface px-6 py-4 text-sm focus:border-primary focus:outline-none"
                placeholder="Delivery address"
              />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <input
                  className="rounded-full border border-outline-variant bg-surface px-6 py-4 text-sm focus:border-primary focus:outline-none"
                  placeholder="City"
                />
                <input
                  className="rounded-full border border-outline-variant bg-surface px-6 py-4 text-sm focus:border-primary focus:outline-none"
                  placeholder="Postal code"
                />
                <input
                  className="rounded-full border border-outline-variant bg-surface px-6 py-4 text-sm focus:border-primary focus:outline-none"
                  placeholder="Country"
                />
              </div>
            </div>

            <div>
              <h2 className="font-headline text-xl font-bold text-on-surface">
                Delivery Method
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-primary bg-primary/5 p-5">
                  <p className="font-headline text-sm font-bold uppercase tracking-[0.15em] text-on-surface">
                    Standard Silk
                  </p>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    3-5 business days
                  </p>
                  <p className="mt-2 font-semibold text-primary">$12.00</p>
                </div>
                <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-5">
                  <p className="font-headline text-sm font-bold uppercase tracking-[0.15em] text-on-surface">
                    Dusk Priority
                  </p>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    Next day delivery
                  </p>
                  <p className="mt-2 font-semibold text-primary">$35.00</p>
                </div>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-outline-variant/40 bg-surface-container-low p-8 lg:sticky lg:top-24">
              <h2 className="font-headline text-2xl font-bold text-on-surface">
                Order Portfolio
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start justify-between gap-4 border-b border-outline-variant/30 pb-4 text-sm">
                  <div>
                    <p className="font-semibold text-on-surface">Autumn Whisper Abaya</p>
                    <p className="text-on-surface-variant">Midnight Oak / XL</p>
                  </div>
                  <p className="font-semibold">$285.00</p>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-outline-variant/30 pb-4 text-sm">
                  <div>
                    <p className="font-semibold text-on-surface">Dusk Silk Scarf</p>
                    <p className="text-on-surface-variant">Amber Dust</p>
                  </div>
                  <p className="font-semibold">$85.00</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>$370.00</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Logistics</span>
                    <span>$12.00</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>VAT</span>
                    <span>$31.45</span>
                  </div>
                </div>
                <div className="border-t border-outline-variant/30 pt-5">
                  <div className="flex items-end justify-between">
                    <span className="font-headline text-lg font-bold text-on-surface">Total</span>
                    <span className="font-headline text-3xl font-black text-primary">$413.45</span>
                  </div>
                </div>
              </div>
              <button className="mt-8 w-full rounded-full bg-primary px-6 py-4 font-headline text-xs font-bold uppercase tracking-[0.22em] text-on-primary transition-colors hover:bg-primary-dim">
                Confirm Purchase
              </button>
              <Link
                href={`/${locale}/products`}
                className="mt-4 block text-center text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary"
              >
                Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
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
  return buildPageMetadata({
    locale,
    restPath: '/checkout',
    title: 'Secure Checkout | Ethereal Solstice',
    description: 'Complete your Ethereal Solstice purchase with secure checkout.'
  })
}
