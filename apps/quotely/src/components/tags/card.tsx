import {
  Badge,
  Card as RadixCard,
  Flex,
  Heading,
  Link,
  Separator,
} from '@radix-ui/themes';
import { z } from 'zod';

import { returnSchema } from '@/schemas/quotes/return';

const TagCard = ({
  name,
  quotes,
}: z.infer<typeof returnSchema.tags>['tags'][0]) => {
  return (
    <RadixCard>
      <Flex direction='column' gap='2' p='2'>
        <Link href={`tags/${name}`}>
          <Badge radius='medium'>{name}</Badge>
        </Link>
        <Separator size='4' />
        <Flex direction='column'>
          <Heading size='3'>Quotes linked:</Heading>
          {quotes.map(({ quote, id }) => (
            <Link href={`quotes/${id}`} key={id}>
              {`${quote.slice(0, 30)}${quote.length > 30 ? '...' : ''}`}
            </Link>
          ))}
        </Flex>
      </Flex>
    </RadixCard>
  );
};

export default TagCard;
