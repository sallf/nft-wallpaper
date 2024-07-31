import type { Config } from 'tailwindcss'

// Add opacity options
const withOpacity = (variableName: string) =>
  `rgb(var(${variableName}), / <alpha-value>)`

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}'],
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
    },
  },
}
export default config
