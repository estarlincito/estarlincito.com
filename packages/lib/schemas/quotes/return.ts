import { z } from 'zod/v4';
const quoteReturnSchema = z.object({
  addedAt: z.string().datetime(),
  authors: z.array(
    z.object({
      bio: z.string().nullable().optional(),
      id: z.number(),
      name: z.string(),
      slug: z.string(),
    }),
  ),
  id: z.number(),
  quote: z.string(),
  reference: z.string(),
  sourceName: z.object({
    name: z.string(),
  }),
  sourceType: z.object({
    name: z.string(),
  }),

  sourceUrl: z.string(),

  tags: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  ),
});

const authorReturnSchema = z.object({
  bio: z.string().nullable().optional(),
  id: z.number(),
  name: z.string(),
  quotes: z.array(quoteReturnSchema),
  slug: z.string(),
});

const tagSchema = z.object({
  id: z.number(),
  name: z.string(),
  quotes: z.array(quoteReturnSchema),
});

export const returnSchema = {
  author: z.object({ author: authorReturnSchema, count: z.number() }),
  authors: z.object({
    authors: z.array(authorReturnSchema),
    count: z.number(),
  }),
  quote: quoteReturnSchema,
  quotes: z.object({ count: z.number(), quotes: z.array(quoteReturnSchema) }),
  tag: z.object({ count: z.number(), tag: tagSchema }),
  tags: z.object({ count: z.number(), tags: z.array(tagSchema) }),
};
