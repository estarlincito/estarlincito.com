import { quotely } from '@repo/constants';
import { Box, Grid, Pagination, type SearchParams } from '@repo/ui';
import type { z } from 'zod';

import type { returnSchema } from '@/schema/quotes/return';

import CardTag from './card';

interface Props extends SearchParams {
  tagsData: z.infer<typeof returnSchema.tags>;
}

const TagList = ({ tagsData: { tags, count }, limit, offset }: Props) => (
  <Box>
    <Grid
      columns='repeat(auto-fill, 350px)'
      gap='1.25rem'
      justify='center'
      mt='8'
    >
      {tags.map((tag) => (
        <CardTag {...tag} key={tag.id} />
      ))}
    </Grid>

    <Box m='5'>
      <Pagination
        count={count}
        limit={limit}
        offset={offset}
        route='/tags'
        title={quotely.tags.title}
      />
    </Box>
  </Box>
);

export default TagList;
