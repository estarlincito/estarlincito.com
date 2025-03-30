import {
  Badge,
  Blockquote,
  Container,
  Heading,
  Link,
  Separator,
} from '@radix-ui/themes';
import { quotely } from '@repo/constants';
import { Block, SearchParamsProps, Wrapper } from '@repo/ui';

import Card from '@/components/quotes/card';
import { getAuthors, getLastQuote, getTags } from '@/lib/quotes';

export const { metadata } = quotely.home;

const Page = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;

  const quoteData = await getLastQuote();
  const { tags } = await getTags(params);
  const { authors } = await getAuthors(params);

  return (
    <Container size='3'>
      <Heading>Welcome to Quotely!</Heading>
      <Blockquote mt='5'>{quotely.home.description}</Blockquote>
      <Separator orientation='horizontal' size='4' mt='2' />

      <Wrapper align='center'>
        <Block
          route={quotely.quotes.path}
          title='Quote of the day'
          label='View more quotes'
        >
          <Card {...quoteData} />
        </Block>

        <Separator orientation='horizontal' size='4' mt='2' />

        <Block route={quotely.tags.path} title='Tags' label='View more tags'>
          {tags.map(({ name }, id) => (
            <Badge color='gray' key={id} mr='1'>
              <Link underline='none' href={`${quotely.tags.path}/${name}`}>
                {name}
              </Link>
            </Badge>
          ))}
        </Block>

        <Separator orientation='horizontal' size='4' mt='2' />

        <Block
          route={quotely.authors.path}
          title='Authors'
          label='View more authors'
        >
          {authors.map(({ name, slug }, id) => (
            <Badge color='gray' key={id} mr='1'>
              <Link underline='none' href={`${quotely.authors.path}/${slug}`}>
                {name}
              </Link>
            </Badge>
          ))}
        </Block>

        <Separator orientation='horizontal' size='4' mt='2' />
      </Wrapper>
    </Container>
  );
};

export default Page;
