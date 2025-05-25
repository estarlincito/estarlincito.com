import { sortByDate } from '@estarlincito/utils';
import { type SearchParams } from '@repo/types';
import type { Articles } from 'contentlayer/generated';

interface Props extends SearchParams {
  articles: Articles[];
}

export const getOffsetData = ({
  articles,
  limit = '6',
  offset = '0',
}: Props) => {
  let parsedLimit = parseInt(limit);
  let parsedOffset = parseInt(offset);

  if (isNaN(parsedLimit)) parsedLimit = 6;
  if (isNaN(parsedOffset)) parsedOffset = 0;

  const sortedArticles = sortByDate(articles, 'publishedTime');

  return sortedArticles.slice(parsedOffset, parsedOffset + parsedLimit);
};
