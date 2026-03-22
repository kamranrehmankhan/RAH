import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'
import HomePage from '@/components/HomePage'

export default async function HomeByLocale({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  return <HomePage locale={locale} />
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
    restPath: '',
    title: 'ETHEREAL SOLSTICE | The Radiant Abaya',
    description: 'World-class luxury modest abayas. Consciously crafted for the global soul.'
  })
}
