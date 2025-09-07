import type { QuoteContent } from '@repo/content/quotely/quotes/quote';
import { host } from '@repo/content/quotely/settings';
import { Badge } from '@repo/ui/components/badge';
import { Copy } from '@repo/ui/components/copy';
import { Label } from '@repo/ui/components/label';
import { Link } from '@repo/ui/components/link';
import { Share } from '@repo/ui/components/share';
import { Flex } from '@repo/ui/layouts/flex';
import type { ReactNode } from 'react';

interface ItemProps {
  label: string;
  children: ReactNode;
}

const Item = ({ children, label }: ItemProps) => (
  <Flex className='gap-x-1'>
    <Label className='font-bold'>{label}:</Label>
    {children}
  </Flex>
);

export const QuoteMeta = ({
  sourceName,
  language,
  reference,
  sourceUrl,
  tags,
  authors,
  sourceType,
  quote,
  id,
  translation,
}: QuoteContent) => (
  <Flex className='flex-col gap-y-3'>
    <Item label={translation.authors}>
      {authors.map((author) => (
        <Link
          className='text-accent-foreground font-normal'
          key={author.slug}
          route={`/authors/${author.slug}`}
        >
          {author.name}
        </Link>
      ))}
    </Item>

    {reference.length > 0 && (
      <Item label={translation.reference}>
        <span className='font-normal text-sm'> {reference}</span>
      </Item>
    )}

    <Item label={translation.sourceName}>
      <span className='font-normal text-sm'>{sourceName}</span>
    </Item>

    <Item label={translation.sourceType}>
      <span className='font-normal text-sm'>{sourceType}</span>
    </Item>

    {sourceUrl !== '#' && (
      <Item label={translation.sourceURL}>
        <Link
          className='text-accent-foreground font-normal underline'
          route={sourceUrl}
          target='_blank'
        >
          URL
        </Link>
      </Item>
    )}

    <Item label={translation.tags}>
      {tags.map((tag) => (
        <Link
          className='no-underline!'
          key={tag.slug}
          route={`/${language}/topics/${tag.slug}`}
        >
          <Badge>{tag.name}</Badge>
        </Link>
      ))}
    </Item>

    <Flex className='mt-5'>
      <Copy className='self-start' text={quote} />
      <Share route={`${host}/${language}/quotes/${id}`} />
    </Flex>
  </Flex>
);
