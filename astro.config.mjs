import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // TODO: site: "https://tompluess.ch/",
  site: "https://tompluess.vercel.app/",
  integrations: [
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
