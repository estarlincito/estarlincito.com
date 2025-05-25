import { QUOTES_ROUTE } from '@app/quotely/constants/quotes';
import { getRandomQuote } from '@app/quotely/lib/quotes';
import { url } from '@app/quotely/settings';
import { Badge } from '@repo/ui/components/badge';
import { Blockquote } from '@repo/ui/components/blockquote';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { Section } from '@repo/ui/layouts/section';

export const QuotelyUpdate = async () => {
  const { quote, authors, tags } = await getRandomQuote();

  return (
    <Section>
      <Heading as='h3' content='Quote of the day' />
      <Blockquote>
        {quote}
        <br />
        <br />
        {authors.map(({ name, id }) => (
          <Text as='span' key={id}>
            -{name}-{' '}
          </Text>
        ))}
        <br />
        {tags.map(({ name, id }) => (
          <Badge className='mr-1' key={id}>
            {name}
          </Badge>
        ))}
      </Blockquote>

      <Link className='w-fit' route={`${url}${QUOTES_ROUTE}`} target='_blank'>
        Check more Quotes
      </Link>
    </Section>
  );
};
