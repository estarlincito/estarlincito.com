import type { HomeContent } from '@repo/content/quotely/home';
import { getTags } from '@repo/content/quotely/lib/quotes';
import { Badge } from '@repo/ui/components/badge';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Container } from '@repo/ui/layouts/container';
import { Flex } from '@repo/ui/layouts/flex';
import { Section } from '@repo/ui/layouts/section';

export const TagsSection = async ({
  cta,
  title,
}: HomeContent['sections']['tags']) => {
  const { tags } = await getTags({ limit: '6', offset: '0' });

  return (
    <Container asChild size='1'>
      <Section>
        <Heading className='text-center' content={title} />
        <Flex className='flex-wrap justify-center'>
          {tags.map(({ name, id }) => (
            <Badge className='mr-1' key={id}>
              <Link
                className='hover:no-underline'
                route={`${cta.route}/${name}`}
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
