import { defineConfig } from "astro/config"
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'
import sitemap from "@astrojs/sitemap"
import tailwindConfig from "./tailwind.config"

// https://astro.build/config
export default defineConfig({
  site: "https://tompluess.ch/",
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcss({ config: tailwindConfig }),
          autoprefixer(),
        ],
      },
    },
  },
  integrations: [
    mdx(),
    sitemap(),
  ],
  i18n: {
    defaultLocale: "de",
    locales: ["de"]
  }
});
