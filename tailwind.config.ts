import type { Config } from 'tailwindcss'

// Add opacity options
const withOpacity = (variableName: string) =>
  `rgb(var(${variableName}) / <alpha-value>)`

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          white: withOpacity('--color-brand-white'),
          midnight: withOpacity('--color-brand-midnight'),
          smokey: withOpacity('--color-brand-smokey'),
          lavender: withOpacity('--color-brand-lavender'),
          clay: withOpacity('--color-brand-clay'),
          steel: withOpacity('--color-brand-steel'),
          pink: withOpacity('--color-brand-pink'),
          cyan: withOpacity('--color-brand-cyan'),
          purple: withOpacity('--color-brand-purple'),
          indigo: withOpacity('--color-brand-indigo'),
        },
      },
      fontSize: {
        'display-lg': ['64px', '72px'],
        'display-md': ['48px', '64px'],
        'display-sm': ['40px', '48px'],
        'title-lg': ['32px', '40px'],
        'title-md': ['28px', '36px'],
        'title-sm': ['24px', '32px'],
        'body-lg': ['24px', '32px'],
        'body-md': ['20px', '28px'],
        'body-sm': ['16px', '24px'],
        'caption-lg': ['14px', '20px'],
        'caption-md': ['12px', '16px'],
        'caption-sm': ['10px', '12px'],
      },
      fontWeight: {
        'display-lg': 'bold',
        'display-md': 'bold',
        'display-sm': 'bold',
        'title-lg': 'bold',
        'title-md': 'bold',
        'title-sm': 'bold',
        'body-lg': 'normal',
        'body-md': 'normal',
        'body-sm': 'normal',
        'caption-lg': 'normal',
        'caption-md': 'normal',
        'caption-sm': 'normal',
      },
    },
  },
}
export default config
