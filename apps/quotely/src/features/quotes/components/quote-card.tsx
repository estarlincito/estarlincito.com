import type { returnSchema } from '@repo/lib/schemas/quotes/return';
import { Blockquote } from '@repo/ui/components/blockquote';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Link } from '@repo/ui/components/link';
import { Flex } from '@repo/ui/layouts/flex';
import type { z } from 'zod/v4';

import { CopyQuote } from '@/features/quotes/components/copy-quote';
import { TagsList } from '@/features/quotes/components/tag-list';

export const QuoteCard = ({
  quote,
  authors,
  tags,
  id,
}: z.infer<typeof returnSchema.quote>) => (
  <Card className='h-75 py-3'>
    <CardHeader className='h-5'>
      <CardTitle>
        <Link route={`/quotes/${id}`} variant='default'>{`Quote ${id}`}</Link>
      </CardTitle>
    </CardHeader>
    <CardContent className='h-50 flex justify-center items-center'>
      <Link route={`/quotes/${id}`} variant='default'>
        <Blockquote>{`${quote.slice(0, 140)}${quote.length > 140 ? '...' : ''}`}</Blockquote>
      </Link>
    </CardContent>

    <CardFooter className='flex-col h-20'>
      {authors.map((author) => (
        <Link
          className='hover:no-underline self-start my-1 opacity-70'
          key={author.id}
          route={`/authors/${author.slug}`}
          variant='default'
        >
          {author.name}
        </Link>
      ))}

      <Flex className='items-center justify-between self-stretch my-1'>
        <TagsList tags={tags.slice(0, 2)} />
        <CopyQuote text={quote} />
      </Flex>
    </CardFooter>
  </Card>
);
