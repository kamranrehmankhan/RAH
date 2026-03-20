export const LOCALES = ['en', 'ar', 'ur', 'fr'] as const

export type Locale = (typeof LOCALES)[number]

