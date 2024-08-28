// File: /src/content/config.ts
import { defineCollection, z } from 'astro:content';

const documentSchema = z.object({
  title: z.string(),
  date: z.string(), // Considere usar z.date() se quiser validar como data
  tags: z.array(z.string()),
  category: z.string(),
  sector: z.array(z.string()),
  authors: z.array(z.string()).optional(),
});

const documentCollection = defineCollection({
  type: 'content',
  schema: documentSchema,
});

export const collections = {
  'dve': documentCollection,
  'farmacia': documentCollection,
  'primaria': documentCollection,
  'dae': documentCollection,
};
