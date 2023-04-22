import { defineConfig } from "astro/config";

export default defineConfig({
  experimental: {
    assets: true,
  },
  image: {
    service: "astro/assets/services/sharp",
  },
});
