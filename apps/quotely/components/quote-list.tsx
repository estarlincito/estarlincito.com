import { QuoteCard } from '@app/quotely/components/quote-card';
import { QUOTES_TITLE } from '@app/quotely/constants/quotes';
import type { returnSchema } from '@app/quotely/schema/quotes/return';
import type { SearchParams } from '@repo/types';
import { Box } from '@repo/ui/components/box';
import { Pagination } from '@repo/ui/components/pagination';
import { Grid } from '@repo/ui/layouts/grid';
import type { z } from 'zod';

interface Props extends SearchParams {
  quotesData: z.infer<typeof returnSchema.quotes>;
  route: string;
}

export const QuoteList = ({
  quotesData: { quotes, count },
  limit,
  offset,
  route,
}: Props) => (
  <Box>
    <Grid className='grid-cols-[repeat(auto-fill,320px)] gap-5 justify-center mt-8'>
      {quotes.map((quote) => (
        <QuoteCard {...quote} key={quote.id} />
      ))}
    </Grid>

    {count > 6 && (
      <Box className='m-5'>
        <Pagination
          count={count}
          limit={limit}
          offset={offset}
          route={route}
          title={QUOTES_TITLE}
        />
      </Box>
    )}
  </Box>
);
