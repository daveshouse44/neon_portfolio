import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.union([z.string(), z.date()]),
      updated: z.union([z.string(), z.date()]).optional(),
      author: z.string(),
      description: z.string(),
      draft: z.boolean(),
      category: z.string(),
      cover: image(),
      coverAlt: z.string(),
    }),
});

export const collections = { posts };
