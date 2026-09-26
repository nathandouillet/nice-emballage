// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // URL publique du site (canonical, og:url) — surchargeable avec SITE_URL.
  site: process.env.SITE_URL ?? "https://nice-emballage.workers.dev",
});
