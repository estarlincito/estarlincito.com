import { type Articles } from '@repo/content/.mdxlayer/imwriting/generated';
import type { SearchParams } from '@repo/types';
import { Box } from '@repo/ui/components/box';
import { Pagination } from '@repo/ui/components/pagination';
import { Gallery } from '@repo/ui/layouts/gallery';
import { getPaginationData } from '@repo/ui/lib/pagination';

import { ArticleCard } from '@/features/articles/components/article-card';

interface ListProps extends SearchParams {
  articles: Articles[];
  route?: string;
}

export const ArticlesList = ({
  articles,
  limit,
  offset,
  route = '',
}: ListProps) => {
  const { data, ...rest } = getPaginationData({
    content: articles,
    limit,
    offset,
    route,
  });

  return (
    <Box className='mt-10'>
      <Gallery>
        {data.map((article) => (
          <ArticleCard {...article} key={article._id} />
        ))}
      </Gallery>

      {articles.length > 6 && (
        <Box className='m-8'>
          <Pagination {...rest} />
        </Box>
      )}
    </Box>
  );
};
