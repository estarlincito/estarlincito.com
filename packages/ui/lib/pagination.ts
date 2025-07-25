/* Pagination utility */

// Maximum number of items per page
const MAX_LIMIT = 6;

/**
 * Build pagination route with query params
 * @param route Base route (e.g., '/quotes')
 * @param offset Zero-based offset for pagination as string
 * @param limit Items per page
 * @returns Full URL with pagination query
 */
const makePageRoute = (route: string, offset: string, limit: number): string =>
  `${route}?offset=${offset}&limit=${limit}`;

/**
 * Result of pagination
 */
export interface PaginationResult<T> {
  /** Paginated slice of items */
  data: T[];
  /** Current items per page */
  limit: number;
  /** Current offset as string */
  offset: string;
  /** Total number of items */
  count: number;
  /** URL for next page, or null if none */
  next: string | null;
  /** URL for previous page, or null if none */
  prev: string | null;
  /** Zero-based index of first item in this page */
  startIndex: number;
  /** Zero-based index after the last item in this page */
  endIndex: number;
}

/**
 * Get pagination data for an array of items
 * @param params.content Full list of items
 * @param params.route Base route for constructing links
 * @param params.limit Optional desired items per page (string)
 * @param params.offset Optional desired offset (string)
 * @returns Structured pagination data and links
 */
export const getPaginationData = <T>({
  content,
  route,
  limit = '6',
  offset = '0',
}: {
  content: T[];
  route: string;
  limit?: string;
  offset?: string;
}): PaginationResult<T> => {
  const parsedLimit = Math.min(Number(limit) || MAX_LIMIT, MAX_LIMIT);
  const parsedOffset = Math.max(Number(offset) || 0, 0);

  const count = content.length;

  const startIndex = parsedOffset;
  const endIndex = Math.min(parsedOffset + parsedLimit, count);
  const data = content.slice(startIndex, endIndex);

  const nextOffset =
    endIndex < count ? String(parsedOffset + parsedLimit) : null;
  const prevOffset =
    parsedOffset > 0 ? String(Math.max(parsedOffset - parsedLimit, 0)) : null;

  const next = nextOffset
    ? makePageRoute(route, nextOffset, parsedLimit)
    : null;
  const prev = prevOffset
    ? makePageRoute(route, prevOffset, parsedLimit)
    : null;

  return {
    count,
    data,
    endIndex,
    limit: parsedLimit,
    next,
    offset: String(parsedOffset),
    prev,
    startIndex,
  };
};
