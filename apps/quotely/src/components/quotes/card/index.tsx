import { num } from '@estarlincito/utils';
import { Box, Card as RadixCard, Flex, Link, Strong, Text } from '@repo/ui';
import type { z } from 'zod';

import type { returnSchema } from '@/schema/quotes/return';

import CopyQuote from './copy_message';
import Tags from './tags';

const Quote = Link;
const Author = Box;
const TagsFlex = Flex;

const QuoteCard = ({
  quote,
  authors,
  tags,
  id,
}: z.infer<typeof returnSchema.quote>) => (
  <RadixCard>
    <Flex direction='column' gap='2' height='100%' justify='between' p='2'>
      <Quote color='gray' href={`/quotes/${id}`} mb='2' underline='none'>
        <Text size='5'>
          &ldquo;
          {`${quote.slice(num('0'), num('110'))}${quote.length > num('110') ? '...' : ''}`}
          &ldquo;
        </Text>
      </Quote>

      <Author>
        {authors.map((author) => (
          <Strong key={author.id}>
            <Link
              color='gray'
              href={`/authors/${author.slug}`}
              underline='none'
            >
              {author.name}
            </Link>
            {/* &nbsp;- */}
          </Strong>
        ))}
      </Author>

      <TagsFlex align='center' justify='between'>
        <Tags tags={tags} />
        <CopyQuote text={quote} />
      </TagsFlex>
    </Flex>
  </RadixCard>
);

export default QuoteCard;
