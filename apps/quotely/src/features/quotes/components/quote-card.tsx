import type { Quote } from '@repo/content/quotely/utils/quotes';
import { Badge } from '@repo/ui/components/badge';
import { Blockquote } from '@repo/ui/components/blockquote';
import { Card, CardContent, CardFooter } from '@repo/ui/components/card';
import { Copy } from '@repo/ui/components/copy';
import { Link } from '@repo/ui/components/link';
import { Flex } from '@repo/ui/layouts/flex';
import { cn } from '@repo/ui/lib/utils';

export const QuoteCard = ({ quote, id, tags, language }: Quote) => (
  <Card className={cn('hover:bg-muted duration-300', 'h-70 gap-1!')}>
    <Link
      className='h-full'
      route={`/${language}/quotes/${id}`}
      variant='default'
    >
      <CardContent className='h-full flex items-center justify-center'>
        <Blockquote className='font-extralight text-lg truncate-5-line'>
          {quote}
        </Blockquote>
      </CardContent>
    </Link>

    <CardFooter className='flex justify-between '>
      <Flex className='gap-x-1'>
        {tags.slice(0, 2).map(({ name, slug }) => (
          <Link
            className='no-underline!'
            key={slug}
            route={`/${language}/topics/${slug}`}
          >
            <Badge className='text-muted-foreground hover:text-accent-foreground'>
              {name}
            </Badge>
          </Link>
        ))}
      </Flex>
      <Copy text={quote} />
    </CardFooter>
  </Card>
);
