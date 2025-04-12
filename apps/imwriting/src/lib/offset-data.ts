import { num, sortByDate } from '@estarlincito/utils';
import { type SearchParams } from '@repo/ui';
import type { Articles } from 'contentlayer/generated';

interface Props extends SearchParams {
  articles: Articles[];
}

const getOffsetData = ({ articles, limit = '6', offset = '0' }: Props) => {
  let parsedLimit = parseInt(limit);
  let parsedOffset = parseInt(offset);

  if (isNaN(parsedLimit)) parsedLimit = num('6');
  if (isNaN(parsedOffset)) parsedOffset = num('0');

  const sortedArticles = sortByDate(articles, 'publishedTime');

  return sortedArticles.slice(parsedOffset, parsedOffset + parsedLimit);
};

export default getOffsetData;
