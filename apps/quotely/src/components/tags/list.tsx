import { Box, Grid } from '@radix-ui/themes';
import { quotely } from '@repo/constants';
import { Pagination, type SearchParams } from '@repo/ui';
import type { z } from 'zod';

import type { returnSchema } from '@/schemas/quotes/return';

import CardTag from './card';

interface Props extends SearchParams {
  tagsData: z.infer<typeof returnSchema.tags>;
}

const TagList = ({ tagsData: { tags, count }, limit, offset }: Props) => {
  return (
    <Box>
      <Grid
        gap='1.25rem'
        justify='center'
        columns='repeat(auto-fill, 350px)'
        mt='8'
      >
        {tags.map((tag, id) => (
          <CardTag {...tag} key={id} />
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
};

export default TagList;
