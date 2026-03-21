import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abayas',
  description: 'Modern abayas with global shipping.'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

