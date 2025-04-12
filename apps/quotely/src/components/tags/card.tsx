import { num } from '@estarlincito/utils';
import {
  Badge,
  Card as RadixCard,
  Flex,
  Heading,
  Link,
  Separator,
} from '@repo/ui';
import type { z } from 'zod';

import type { returnSchema } from '@/schema/quotes/return';

// eslint-disable-next-line no-magic-numbers
type Props = z.infer<typeof returnSchema.tags>['tags'][0];

const TagCard = ({ name, quotes }: Props) => (
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
            {`${quote.slice(num('0'), num('30'))}${quote.length > num('30') ? '...' : ''}`}
          </Link>
        ))}
      </Flex>
    </Flex>
  </RadixCard>
);

export default TagCard;
