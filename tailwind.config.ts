import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#a03b00',
        'primary-dim': '#8c3300',
        'primary-fixed': '#ff793b',
        'on-primary': '#ffefea',
        secondary: '#a13917',
        tertiary: '#755600',
        surface: '#fef5f0',
        'surface-container': '#f0e6e1',
        'surface-container-low': '#f9efea',
        'surface-container-high': '#ebe0db',
        'surface-container-lowest': '#ffffff',
        'on-surface': '#322e2b',
        'on-surface-variant': '#605a57',
        'outline': '#7c7572',
        'outline-variant': '#b3aca7',
        background: '#fef5f0',
      },
      fontFamily: {
        headline: ['Epilogue', 'Georgia', 'serif'],
        body: ['Manrope', 'sans-serif'],
        label: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
} satisfies Config
