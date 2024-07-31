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
        'display-lg': [
          '64px',
          {
            lineHeight: '72px',
            fontWeight: 'bold',
          },
        ],
        'display-md': [
          '48px',
          {
            lineHeight: '64px',
            fontWeight: 'bold',
          },
        ],
        'display-sm': [
          '40px',
          {
            lineHeight: '48px',
            fontWeight: 'bold',
          },
        ],
        'title-lg': [
          '32px',
          {
            lineHeight: '40px',
            fontWeight: 'bold',
          },
        ],
        'title-md': [
          '28px',
          {
            lineHeight: '36px',
            fontWeight: 'bold',
          },
        ],
        'title-sm': [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: 'bold',
          },
        ],
        'body-lg': [
          '24px',
          {
            lineHeight: '32px',
            fontWeight: 'normal',
          },
        ],
        'body-md': [
          '20px',
          {
            lineHeight: '28px',
            fontWeight: 'normal',
          },
        ],
        'body-sm': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: 'normal',
          },
        ],
        'caption-lg': [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: 'normal',
          },
        ],
        'caption-md': [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: 'normal',
          },
        ],
        'caption-sm': [
          '10px',
          {
            lineHeight: '12px',
            fontWeight: 'normal',
          },
        ],
      },
    },
  },
}
export default config
