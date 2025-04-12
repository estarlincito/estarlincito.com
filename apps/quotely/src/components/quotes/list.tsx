import { quotely } from '@repo/constants';
import { Box, Grid, Pagination, type SearchParams } from '@repo/ui';
import type { z } from 'zod';

import type { returnSchema } from '@/schema/quotes/return';

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
}: Props) => (
  <Box>
    <Grid
      columns='repeat(auto-fill, 350px)'
      gap='1.25rem'
      justify='center'
      mt='8'
    >
      {quotes.map((quote) => (
        <Card {...quote} key={quote.id} />
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

export default QuoteList;
