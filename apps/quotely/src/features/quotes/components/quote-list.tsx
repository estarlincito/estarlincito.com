import type { returnSchema } from '@repo/lib/schemas/quotes/return';
import type { SearchParams } from '@repo/types';
import { Box } from '@repo/ui/components/box';
import { Pagination } from '@repo/ui/components/pagination';
import { Gallery } from '@repo/ui/layouts/gallery';
import { getPaginationData } from '@repo/ui/lib/pagination';
import type { z } from 'zod/v4';

import { QuoteCard } from '@/features/quotes/components/quote-card';

interface Props extends SearchParams {
  items: z.infer<typeof returnSchema.quotes>;
  route: string;
}

export const QuoteList = ({
  items: { quotes },
  limit,
  offset,
  route,
}: Props) => {
  const { data, ...rest } = getPaginationData({
    content: quotes,
    limit,
    offset,
    route,
  });

  return (
    <Box>
      <Gallery>
        {data.map((quote) => (
          <QuoteCard {...quote} key={quote.id} />
        ))}
      </Gallery>

      {quotes.length > 6 && (
        <Box className='m-5'>
          <Pagination {...rest} />
        </Box>
      )}
    </Box>
  );
};
