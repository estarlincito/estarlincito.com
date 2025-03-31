import { Box, Grid } from '@radix-ui/themes';
import { quotely } from '@repo/constants';
import { Pagination, type SearchParams } from '@repo/ui';
import type { z } from 'zod';

import type { returnSchema } from '@/schemas/quotes/return';

import Card from './card';

interface Props extends SearchParams {
  quotesData: z.infer<typeof returnSchema.quotes>;
  route: string;
}

const QuoteList = ({
  quotesData: { quotes, count },
  limit,
  offset,
  route,
}: Props) => {
  return (
    <Box>
      <Grid
        gap='1.25rem'
        justify='center'
        columns='repeat(auto-fill, 350px)'
        mt='8'
      >
        {quotes.map((quote, id) => (
          <Card {...quote} key={id} />
        ))}
      </Grid>

      <Box m='5'>
        <Pagination
          count={count}
          limit={limit}
          offset={offset}
          route={route}
          title={quotely.quotes.title}
        />
      </Box>
    </Box>
  );
};

export default QuoteList;
