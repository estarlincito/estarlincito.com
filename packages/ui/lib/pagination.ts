// export const PaginationProps = z.object({
//   count: z.number(),
//   limit: z.string().optional(),
//   offset: z.string().optional(),
//   route: z.string(),
//   title: z.string(),
// });

export interface PaginationProps {
  count: number;
  limit?: string;
  offset?: string;
  route: string;
  title: string;
}

export const pagination = ({
  count,
  route,
  limit = '6',
  offset = '0',
}: PaginationProps) => {
  let parsedLimit = parseInt(limit);
  let parsedOffset = parseInt(offset);

  if (isNaN(parsedLimit)) parsedLimit = 6;
  if (isNaN(parsedOffset)) parsedOffset = 0;

  parsedLimit = Math.min(parsedLimit, 6);
  parsedOffset = Math.max(0, Math.min(parsedOffset, count));

  const nextOffset =
    parsedOffset + parsedLimit < count ? parsedOffset + parsedLimit : null;

  const prevOffset =
    parsedOffset - parsedLimit >= 0 ? parsedOffset - parsedLimit : null;

  const nextRoute =
    nextOffset !== null
      ? `${route}?offset=${nextOffset}&limit=${parsedLimit}`
      : null;
  const prevRoute =
    prevOffset !== null
      ? `${route}?offset=${prevOffset}&limit=${parsedLimit}`
      : null;

  const startIndex = parsedOffset + 1;
  const endIndex = Math.min(parsedOffset + parsedLimit, count + 1);

  return {
    endIndex,
    limit: parsedLimit,
    next: nextRoute,
    offset: parsedOffset,
    prev: prevRoute,
    startIndex,
  };
};
