import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  experimental: {
    assets: true
  },
  image: {
    service: "astro/assets/services/sharp"
  },
  integrations: [tailwind({
    config: { applyBaseStyles: false }
  })]
});