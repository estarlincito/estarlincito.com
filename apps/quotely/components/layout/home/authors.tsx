import { SECTIONS } from '@app/quotely/constants/home';
import { getAuthors } from '@app/quotely/lib/quotes';
import { Badge } from '@repo/ui/components/badge';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Container } from '@repo/ui/layouts/container';
import { Flex } from '@repo/ui/layouts/flex';
import { Section } from '@repo/ui/layouts/section';

export const Authors = async () => {
  const { authors } = await getAuthors({ limit: '6', offset: '0' });

  return (
    <Container asChild size='1'>
      <Section>
        <Heading className='text-center' content={SECTIONS.AUTHORS.title} />

        <Flex className='flex-wrap justify-center'>
          {authors.map(({ name, slug, id }) => (
            <Badge className='mr-1' key={id}>
              <Link
                className='hover:no-underline'
                route={`${SECTIONS.AUTHORS.cta.route}/${slug}`}
                variant='default'
              >
                {name}
              </Link>
            </Badge>
          ))}
        </Flex>

        <Link
          className='self-center'
          label={SECTIONS.AUTHORS.cta.label}
          route={SECTIONS.AUTHORS.cta.route}
        />
      </Section>
    </Container>
  );
};
