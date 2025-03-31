import { Box, Grid } from '@radix-ui/themes';
import { quotely } from '@repo/constants';
import { Pagination, type SearchParams } from '@repo/ui';
import type { z } from 'zod';

import type { returnSchema } from '@/schemas/quotes/return';

import CardTag from './card';

interface Props extends SearchParams {
  authorsData: z.infer<typeof returnSchema.authors>;
}

const AuthorList = ({
  authorsData: { authors, count },
  limit,
  offset,
}: Props) => {
  return (
    <Box>
      <Grid
        gap='1.25rem'
        justify='center'
        columns='repeat(auto-fill, 350px)'
        mt='8'
      >
        {authors.map((author, id) => (
          <CardTag {...author} key={id} />
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
};

export default AuthorList;
