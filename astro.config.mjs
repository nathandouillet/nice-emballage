// @ts-check
import { defineConfig } from "astro/config";

// GitHub Actions (Pages) : sous-dossier /nice-emballage.
// Cloudflare / local : racine du domaine. Surchargeable avec SITE_URL.
const onGithubPages = process.env.GITHUB_ACTIONS === "true";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.SITE_URL ??
    (onGithubPages
      ? "https://nathandouillet.github.io"
      : "https://nice-emballage.workers.dev"),
  base: onGithubPages ? "/nice-emballage" : "/",
});
