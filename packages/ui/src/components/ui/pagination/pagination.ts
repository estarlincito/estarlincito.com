import { num } from '@estarlincito/utils';
import { z } from 'zod';

export const PaginationProps = z.object({
  count: z.number(),
  limit: z.string().optional(),
  offset: z.string().optional(),
  route: z.string(),
  title: z.string(),
});

export const pagination = ({
  count,
  route,
  limit = '6',
  offset = '0',
}: z.infer<typeof PaginationProps>) => {
  let parsedLimit = parseInt(limit);
  let parsedOffset = parseInt(offset);

  if (isNaN(parsedLimit)) parsedLimit = num('6');
  if (isNaN(parsedOffset)) parsedOffset = num('0');

  parsedLimit = Math.min(parsedLimit, num('6'));
  parsedOffset = Math.max(num('0'), Math.min(parsedOffset, count));

  const nextOffset =
    parsedOffset + parsedLimit < count ? parsedOffset + parsedLimit : null;

  const prevOffset =
    parsedOffset - parsedLimit >= num('0') ? parsedOffset - parsedLimit : null;

  const nextRoute =
    nextOffset !== null
      ? `${route}?offset=${nextOffset}&limit=${parsedLimit}`
      : null;
  const prevRoute =
    prevOffset !== null
      ? `${route}?offset=${prevOffset}&limit=${parsedLimit}`
      : null;

  const startIndex = parsedOffset + num('1');
  const endIndex = Math.min(parsedOffset + parsedLimit, count + num('1'));

  return {
    endIndex,
    limit: parsedLimit,
    next: nextRoute,
    offset: parsedOffset,
    prev: prevRoute,
    startIndex,
  };
};
