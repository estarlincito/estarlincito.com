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

const AuthorCard = ({
  name,
  slug,
  quotes,
}: z.infer<typeof returnSchema.authors>['authors'][0]) => {
  return (
    <RadixCard>
      <Flex direction='column' gap='2' p='2'>
        <Link href={`authors/${slug}`}>
          <Badge radius='medium'>{name}</Badge>
        </Link>
        <Separator size='4' />
        <Flex direction='column'>
          <Heading size='3'>Quotes linked:</Heading>
          {quotes.map(({ quote, id }, key) => (
            <Link href={`quotes/${id}`} key={key}>
              {quote.slice(0, 30)}...
            </Link>
          ))}
        </Flex>
      </Flex>
    </RadixCard>
  );
};

export default AuthorCard;
