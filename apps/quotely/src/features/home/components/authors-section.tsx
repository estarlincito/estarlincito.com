import type { HomeContent } from '@repo/content/quotely/home';
import { getAuthors } from '@repo/content/quotely/lib/quotes';
import { Badge } from '@repo/ui/components/badge';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Container } from '@repo/ui/layouts/container';
import { Flex } from '@repo/ui/layouts/flex';
import { Section } from '@repo/ui/layouts/section';

export const AuthorsSection = async ({
  cta,
  title,
}: HomeContent['sections']['authors']) => {
  const { authors } = await getAuthors({ limit: '6', offset: '0' });

  return (
    <Container asChild size='1'>
      <Section>
        <Heading className='text-center' content={title} />

        <Flex className='flex-wrap justify-center'>
          {authors.map(({ name, slug, id }) => (
            <Badge className='mr-1' key={id}>
              <Link
                className='hover:no-underline'
                route={`${cta.route}/${slug}`}
                variant='default'
              >
                {name}
              </Link>
            </Badge>
          ))}
        </Flex>

        <Link className='self-center' {...cta} />
      </Section>
    </Container>
  );
};
