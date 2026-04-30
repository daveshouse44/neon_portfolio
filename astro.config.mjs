import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { getDraftUrls } from "./config-utils.js";

export default defineConfig({
  site: "https://davetierney.dev",
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => {
        const draftUrls = getDraftUrls();
        return !draftUrls.includes(page);
      },
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
