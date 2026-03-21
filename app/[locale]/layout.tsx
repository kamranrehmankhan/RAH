import {NextIntlClientProvider} from 'next-intl'
import {getMessages} from 'next-intl/server'

import SiteFooter from '@/components/site/SiteFooter'
import SiteHeader from '@/components/site/SiteHeader'

function safeJsonStringify(value: any) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  const dir = (locale === 'ar' || locale === 'ur') ? 'rtl' : 'ltr'
  const messages = await getMessages()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Abayas',
    url: siteUrl.replace(/\/+$/, ''),
    description:
      'Premium abayas with worldwide shipping and clear variant pricing.'
  }

  return (
    <div dir={dir} className="min-h-screen bg-pink-50 text-pink-900">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonStringify(organizationJsonLd)
          }}
        />
        <SiteHeader locale={locale as any} />
        {children}
        <SiteFooter locale={locale} />
      </NextIntlClientProvider>
    </div>
  )
}

