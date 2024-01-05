import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tompluess.ch/",
  integrations: [
    mdx(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
  ],
  i18n: {
    defaultLocale: "de",
    locales: ["de"]
  }
});
