import type { Config } from 'tailwindcss'

const tailwindConfig = {
  darkMode: 'class',
  content: {
    files: ['./src/**/*!(*.stories|*.spec|*.test).{ts,tsx,astro,md,mdx,html}'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

export default tailwindConfig