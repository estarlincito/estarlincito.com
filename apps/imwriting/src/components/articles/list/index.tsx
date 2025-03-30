import { Box, Grid } from '@radix-ui/themes';
import { Pagination, SearchParams } from '@repo/ui';
import { type Articles } from 'contentlayer/generated';
import React from 'react';

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
    <Box>
      <Grid gap='1.25rem' justify='center' columns='repeat(auto-fill, 350px)'>
        {data.map((article, id) => (
          <Box as='div' key={id}>
            <Card {...article} />
          </Box>
        ))}
      </Grid>

      <Box m='5'>
        {route !== '/' && (
          <Pagination
            count={count}
            route={route}
            limit={limit}
            offset={offset}
            title={'Articles'}
          />
        )}
      </Box>
    </Box>
  );
};

export default ArticlesList;
