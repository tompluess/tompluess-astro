import { defineConfig } from "astro/config"
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://tompluess.ch/",
  vite: {
    plugins: [tailwindcss()],
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
