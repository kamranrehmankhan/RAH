import type {Metadata} from 'next'

import {LOCALES, type Locale} from './locales'
import {canonicalUrl, alternatesLanguages} from './urls'

type BuildMetadataParams = {
  locale: Locale
  restPath: string
  title: string
  description: string
  ogImageUrl?: string
}

export function buildPageMetadata({
  locale,
  restPath,
  title,
  description,
  ogImageUrl
}: BuildMetadataParams): Metadata {
  const canonical = canonicalUrl(locale, restPath)
  const languages = alternatesLanguages(restPath)

  const images = ogImageUrl ? [{url: ogImageUrl}] : undefined

  return {
    title,
    description,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      images
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImageUrl ? [ogImageUrl] : undefined
    }
  }
}

export function getLocaleFromString(value: string): Locale | null {
  return LOCALES.includes(value as Locale) ? (value as Locale) : null
}

