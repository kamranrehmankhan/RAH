'use client'

import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import {useMemo} from 'react'

const LOCALES = ['en', 'ar', 'ur', 'fr'] as const
type Locale = (typeof LOCALES)[number]

export default function SiteHeader({locale}: {locale: Locale}) {
  const router = useRouter()
  const pathname = usePathname()

  const restPath = useMemo(() => {
    const parts = pathname.split('/').filter(Boolean)
    if (parts.length === 0) return ''
    const maybeLocale = parts[0]
    if (LOCALES.includes(maybeLocale as Locale)) {
      return parts.slice(1).join('/')
    }
    return parts.join('/')
  }, [pathname])

  function onLocaleChange(nextLocale: Locale) {
    const next = restPath ? `/${nextLocale}/${restPath}` : `/${nextLocale}`
    router.push(next)
  }

  const navItems = [
    {label: 'Couture Collections', href: `/${locale}/collections`, key: 'collections'},
    {label: 'The Journal', href: `/${locale}/about`, key: 'about'},
    {label: 'Ethical Craft', href: `/${locale}/shipping-returns`, key: 'shipping-returns'},
    {label: 'Archive', href: `/${locale}/orders`, key: 'orders'}
  ]

  const activeSegment = restPath.split('/')[0] ?? ''

  return (
    <header className="sticky top-0 z-40 border-b border-outline-variant/20 bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-6 py-5 md:px-10">
        <div className="flex items-center gap-10">
          <Link
            href={`/${locale}`}
            className="font-headline text-lg font-black tracking-tight text-orange-950 md:text-xl"
          >
            ETHEREAL SOLSTICE
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`font-headline text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  activeSegment === item.key
                    ? 'text-orange-900'
                    : 'text-orange-900/60 hover:text-orange-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={`/${locale}/checkout`}
            className="hidden rounded-full bg-primary px-5 py-2 font-headline text-xs uppercase tracking-[0.18em] text-on-primary transition-colors hover:bg-primary-dim md:inline-block"
          >
            Checkout
          </Link>
          <Link
            href={`/${locale}/quote`}
            className="hidden rounded-full border border-outline-variant px-4 py-2 font-headline text-[11px] uppercase tracking-[0.16em] text-on-surface transition-colors hover:border-primary hover:text-primary md:inline-block"
          >
            Quote
          </Link>
          <select
            value={locale}
            onChange={(e) => onLocaleChange(e.target.value as Locale)}
            aria-label="Language"
            className="rounded-full border border-outline-variant bg-surface px-3 py-1.5 text-xs uppercase tracking-wide text-on-surface-variant outline-none transition-colors focus:border-primary"
          >
            {LOCALES.map((l) => (
              <option key={l} value={l}>
                {l.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  )
}
