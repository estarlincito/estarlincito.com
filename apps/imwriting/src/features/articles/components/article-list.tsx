import type { ArticlesContent } from '@repo/content/imwriting/articles';
import type { SearchParams } from '@repo/types';
import { Box } from '@repo/ui/components/box';
import { Pagination } from '@repo/ui/components/pagination';
import { Gallery } from '@repo/ui/layouts/gallery';
import { getPaginationData } from '@repo/ui/lib/pagination';

import { ArticleCard } from '@/features/articles/components/article-card';

interface ListProps extends SearchParams {
  route?: string;
}

export const ArticlesList = ({
  limit,
  items,
  offset,
  route = '',
}: ListProps & ArticlesContent['sections']['articles']) => {
  const { data, ...rest } = getPaginationData({
    content: items,
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

      {items.length > 6 && (
        <Box className='m-8'>
          <Pagination {...rest} />
        </Box>
      )}
    </Box>
  );
};
