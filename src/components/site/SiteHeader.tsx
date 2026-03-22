'use client'

import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import {useMemo} from 'react'
import {useTranslations} from 'next-intl'

const LOCALES = ['en', 'ar', 'ur', 'fr'] as const
type Locale = (typeof LOCALES)[number]

export default function SiteHeader({locale}: {locale: Locale}) {
  const t = useTranslations()
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

  return (
    <header style={{ backgroundColor: 'rgba(254,245,240,0.92)', borderBottom: '1px solid #e5dbd5', position: 'sticky', top: 0, zIndex: 40, backdropFilter: 'blur(20px)' }}>
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-3 px-8 py-5">
        <div className="flex items-center gap-12">
          <Link href={`/${locale}`} style={{ fontFamily: 'Georgia, serif', fontWeight: 900, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#431407', textDecoration: 'none' }}>
            ETHEREAL SOLSTICE
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href={`/${locale}/collections`} style={{ fontFamily: 'Georgia, serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#605a57', textDecoration: 'none' }} className="hover:text-orange-700 transition-colors">
              Collections
            </Link>
            <Link href={`/${locale}/products`} style={{ fontFamily: 'Georgia, serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#605a57', textDecoration: 'none' }} className="hover:text-orange-700 transition-colors">
              Products
            </Link>
            <Link href={`/${locale}/quote`} style={{ fontFamily: 'Georgia, serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#605a57', textDecoration: 'none' }} className="hover:text-orange-700 transition-colors">
              Request a Quote
            </Link>
            <Link href={`/${locale}/about`} style={{ fontFamily: 'Georgia, serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#605a57', textDecoration: 'none' }} className="hover:text-orange-700 transition-colors">
              Our Story
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <select
            style={{ borderRadius: '9999px', border: '1px solid #e5dbd5', backgroundColor: 'transparent', padding: '4px 12px', fontSize: '0.75rem', color: '#605a57', outline: 'none' }}
            value={locale}
            onChange={(e) => onLocaleChange(e.target.value as Locale)}
            aria-label="Language"
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
