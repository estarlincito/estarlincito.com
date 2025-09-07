import type { Quote } from '@repo/content/quotely/utils/quotes';
import { Gallery } from '@repo/ui/layouts/gallery';

import { QuoteCard } from '@/features/quotes/components/quote-card';

interface QuoteListProps {
  quotes: Quote[];
}

export const QuoteList = ({ quotes }: QuoteListProps) => (
  <Gallery>
    {quotes.map((quote) => (
      <QuoteCard {...quote} key={quote.id} />
    ))}
  </Gallery>
);
