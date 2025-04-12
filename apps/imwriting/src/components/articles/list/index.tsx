import { Box, Grid, Pagination, type SearchParams } from '@repo/ui';
import { type Articles } from 'contentlayer/generated';

import getOffsetData from '@/lib/offset-data';

import Card from './card';

interface Props extends SearchParams {
  articles: Articles[];
  route: string;
  count: number;
}

const ArticlesList = ({ articles, limit, offset, route, count }: Props) => {
  const data = getOffsetData({ articles, limit, offset });

  return (
    <Box mt='5'>
      <Grid columns='repeat(auto-fill, 350px)' gap='1.25rem' justify='center'>
        {data.map((article) => (
          <Box as='div' key={article._id}>
            <Card {...article} />
          </Box>
        ))}
      </Grid>

      <Box m='5'>
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
    </Box>
  );
};

export default ArticlesList;
