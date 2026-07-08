// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// EDIT: set `site` to your final domain before deploying (used for sitemap + OG URLs).
export default defineConfig({
  site: "https://ddr-rag-book-website.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
