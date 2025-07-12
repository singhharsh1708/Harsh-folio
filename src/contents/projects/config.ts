import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      author: z.string(),
      pubDatetime: z.date(),
      title: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      modDatetime: z.date().optional().nullable(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      ogImage: z.union([z.string(), z.object({ src: z.string() })]).optional(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      techStack: z.array(z.string()).optional(),
    }),
  }),
};