import { quotely } from '@repo/constants';
import {
  Badge,
  Block,
  Header,
  Link,
  type SearchParamsProps,
  Separator,
  Wrapper,
} from '@repo/ui';

import Card from '@/components/quotes/card';
import { getAuthors, getLastQuote, getTags } from '@/lib/quotes';

export const { metadata } = quotely.home;

const Page = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;

  const quoteData = await getLastQuote();
  const { tags } = await getTags(params);
  const { authors } = await getAuthors(params);

  return (
    <Wrapper align='center' size='3'>
      <Header
        separator
        summary={quotely.home.description}
        title='Welcome to Quotely!'
      />

      <Block
        label='View more quotes'
        route={quotely.quotes.path}
        title='Quote of the day'
      >
        <Card {...quoteData} />
      </Block>

      <Separator mt='2' orientation='horizontal' size='4' />

      <Block label='View more tags' route={quotely.tags.path} title='Tags'>
        {tags.map(({ name, id }) => (
          <Badge color='gray' key={id} mr='1'>
            <Link href={`${quotely.tags.path}/${name}`} underline='none'>
              {name}
            </Link>
          </Badge>
        ))}
      </Block>

      <Separator mt='2' orientation='horizontal' size='4' />

      <Block
        label='View more authors'
        route={quotely.authors.path}
        title='Authors'
      >
        {authors.map(({ name, slug, id }) => (
          <Badge color='gray' key={id} mr='1'>
            <Link href={`${quotely.authors.path}/${slug}`} underline='none'>
              {name}
            </Link>
          </Badge>
        ))}
      </Block>

      <Separator mt='2' orientation='horizontal' size='4' />
    </Wrapper>
  );
};

export default Page;
