import { ArticleCard } from '@app/imwriting/components/articles/card';
import { getOffsetData } from '@app/imwriting/lib/offset-data';
import type { SearchParams } from '@repo/types';
import { Box } from '@repo/ui/components/box';
import { Pagination } from '@repo/ui/components/pagination';
import { Grid } from '@repo/ui/layouts/grid';
import { type Articles } from 'contentlayer/generated';

interface Props extends SearchParams {
  articles: Articles[];
  route: string;
  count: number;
}

export const ArticlesList = ({
  articles,
  limit,
  offset,
  route,
  count,
}: Props) => {
  const data = getOffsetData({ articles, limit, offset });

  return (
    <Box className='mt-10'>
      <Grid className='gap-y-5 justify-center grid-cols-[repeat(auto-fill,320px)]'>
        {data.map((article) => (
          <Box className='justify-self-center' key={article._id}>
            <ArticleCard {...article} />
          </Box>
        ))}
      </Grid>

      {count > 6 && (
        <Box className='m-8'>
          {route !== '/' && (
            <Pagination
              count={count}
              limit={limit}
              offset={offset}
              route={route}
              title='Articles'
            />
          )}
        </Box>
      )}
    </Box>
  );
};
