import { returnSchema } from '@app/quotely/schema/quotes/return';
import { apiFetch, throwAppError } from '@estarlincito/utils';
import type { SearchParams } from '@repo/types';
import { type ZodType } from 'zod';

interface Props<T> {
  route: string;
  zod: ZodType<T>;
  offset?: string;
  limit?: string;
}

const GET = async <T>({ route, zod, limit, offset }: Props<T>) => {
  let data: T | T[];
  let url;

  if (!offset || !limit) {
    url = `https://quotely.estarlincito.workers.dev${route}`;
  } else {
    const offset_ = isNaN(parseInt(offset)) ? 1 : parseInt(offset);
    const limit_ = isNaN(parseInt(limit)) ? 6 : parseInt(limit);

    url = `https://quotely.estarlincito.workers.dev${route}?offset=${offset_ - 1}&limit=${limit_}`;
  }

  try {
    const res = await apiFetch({
      method: 'GET',
      url,
    });

    data = await res.json();
  } catch {
    throwAppError('Error in the server');
  }

  return zod.parse(data);
};

// Quotes
export const getQuotes = async ({ offset, limit }: SearchParams) =>
  GET({
    limit,
    offset,
    route: '/quotes',
    zod: returnSchema.quotes,
  });

export const findQuote = async (name: string) =>
  GET({ route: `/quote/${name}`, zod: returnSchema.quote });

export const getRandomQuote = async () =>
  GET({ route: '/random', zod: returnSchema.quote });

export const getLastQuote = async () =>
  GET({ route: '/last', zod: returnSchema.quote });

// Tags
export const findTag = async (name: string) =>
  GET({ route: `/tag/${name}`, zod: returnSchema.tag });

export const getTags = async ({ offset, limit }: SearchParams) =>
  GET({ limit, offset, route: '/tags', zod: returnSchema.tags });

// Authors
export const getAuthors = async ({ offset, limit }: SearchParams) =>
  GET({
    limit,
    offset,
    route: '/authors',
    zod: returnSchema.authors,
  });

export const findAuthor = async (name: string) =>
  GET({ route: `/author/${name}`, zod: returnSchema.author });
