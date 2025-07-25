import type { HomeContent } from '@repo/content/estarlincito/home';
import { Badge } from '@repo/ui/components/badge';
import { Blockquote } from '@repo/ui/components/blockquote';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { Section } from '@repo/ui/layouts/section';

export const QuotelySection = async ({
  authors,
  cta,
  quote,
  tags,
  title,
}: HomeContent['sections']['quotely']) => (
  <Section>
    <Heading as='h3' content={title} />
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

    <Link className='w-fit' {...cta} target='_blank' />
  </Section>
);
