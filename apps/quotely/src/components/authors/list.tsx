import { quotely } from '@repo/constants';
import { Box, Grid, Pagination, type SearchParams } from '@repo/ui';
import type { z } from 'zod';

import type { returnSchema } from '@/schema/quotes/return';

import CardTag from './card';

interface Props extends SearchParams {
  authorsData: z.infer<typeof returnSchema.authors>;
}

const AuthorList = ({
  authorsData: { authors, count },
  limit,
  offset,
}: Props) => (
  <Box>
    <Grid
      columns='repeat(auto-fill, 350px)'
      gap='1.25rem'
      justify='center'
      mt='8'
    >
      {authors.map((author) => (
        <CardTag {...author} key={author.id} />
      ))}
    </Grid>

    <Box m='5'>
      <Pagination
        count={count}
        limit={limit}
        offset={offset}
        route='/authors'
        title={quotely.authors.title}
      />
    </Box>
  </Box>
);

export default AuthorList;
