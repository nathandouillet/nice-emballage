import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      date: z.coerce.date(),
      category: z.string().default("Actualité"),
      cover: image(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { articles };
