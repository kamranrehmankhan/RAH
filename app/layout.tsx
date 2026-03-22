import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ETHEREAL SOLSTICE | The Radiant Abaya',
  description: 'World-class luxury modest abayas. Consciously crafted for the global soul.'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;700;800;900&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body style={{ fontFamily: 'Manrope, sans-serif', backgroundColor: '#fef5f0' }}>{children}</body>
    </html>
  )
}
