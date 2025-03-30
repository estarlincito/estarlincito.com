import {
  Box,
  Card as RadixCard,
  Flex,
  Link,
  Strong,
  Text,
} from '@radix-ui/themes';
import type { z } from 'zod';

import type { returnSchema } from '@/schemas/quotes/return';

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
}: z.infer<typeof returnSchema.quote>) => {
  return (
    <RadixCard>
      <Flex direction='column' gap='2' p='2' height='100%' justify='between'>
        <Quote mb='2' href={`/quotes/${id}`} underline='none' color='gray'>
          <Text size='5'>
            &ldquo;
            {`${quote.slice(0, 110)}${quote.length > 110 ? '...' : ''}`}
            &ldquo;
          </Text>
        </Quote>

        <Author>
          {authors.map(({ name, slug }, key) => (
            <Strong key={key}>
              <Link underline='none' color='gray' href={`/authors/${slug}`}>
                {name}
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
};

export default QuoteCard;
