import type { QuoteContent } from '@repo/content/quotely/quotes/quote';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Container } from '@repo/ui/layouts/container';
import { Flex } from '@repo/ui/layouts/flex';

import { QuoteList } from '@/features/quotes/components/quote-list';

type InterestingQuotesProps = Pick<QuoteContent, 'randomQuotes' | 'route'> &
  Pick<QuoteContent['translation'], 'interesting' | 'label'>;

export const InterestingQuotes = ({
  randomQuotes,
  interesting,
  route,
  label,
}: InterestingQuotesProps) => (
  <Container size='3'>
    <Flex className='gap-y-10 mt-8 w-full flex-col'>
      <Heading className='text-center'>{interesting}</Heading>
      <QuoteList quotes={randomQuotes} />
      <Link className='text-accent-foreground' route={route}>
        {label}
      </Link>
    </Flex>
  </Container>
);
