import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  image: {
    service: "astro/assets/services/sharp"
  },
  integrations: [tailwind()]
});