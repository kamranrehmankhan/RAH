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
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-4">
          <Link href={`/${locale}`} className="font-semibold tracking-tight">
            {t('brand')}
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            <Link
              href={`/${locale}/collections`}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
              {t('nav.collections')}
            </Link>
            <Link
              href={`/${locale}/products`}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
              {t('nav.products')}
            </Link>
            <Link
              href={`/${locale}/quote`}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
              {t('nav.quote')}
            </Link>
            <Link
              href={`/${locale}/admin/login`}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
              {t('nav.admin')}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <select
            className="rounded-md border border-slate-200 bg-white px-2 py-1 text-sm outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50"
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

