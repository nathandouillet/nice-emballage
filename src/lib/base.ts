// Préfixe de déploiement (GitHub Pages : "/nice-emballage").
// En dev sans `base`, import.meta.env.BASE_URL vaut "/" -> préfixe "".
const raw = import.meta.env.BASE_URL;
export const BASE = raw.endsWith("/") ? raw.slice(0, -1) : raw;

/** Préfixe un chemin absolu interne avec la base de déploiement.
 *  rel("/")          -> "/nice-emballage/"
 *  rel("/contact")   -> "/nice-emballage/contact"
 *  rel("/#ancre")    -> "/nice-emballage/#ancre"
 */
export function rel(path: string): string {
  if (!path.startsWith("/")) path = "/" + path;
  return BASE + path;
}
