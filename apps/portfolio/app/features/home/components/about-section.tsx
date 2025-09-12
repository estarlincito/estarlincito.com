import { Avatar } from '@repo/ui/components/avatar';
import { Button } from '@repo/ui/components/button';
import { Heading } from '@repo/ui/components/heading';
import { Markdown } from '@repo/ui/components/markdown';
import { Container } from '@repo/ui/layouts/container';
import { Flex } from '@repo/ui/layouts/flex';
import { Section } from '@repo/ui/layouts/section';

export const AboutSection = ({
  bio,
  title,
}: {
  bio: string;
  title: string;
}) => (
  <Container asChild size='3'>
    <Section className='scroll-mt-28 mt-28' id='about'>
      <Flex className='items-center flex-row gap-x-4'>
        <Avatar
          className='rounded-xl h-28 w-28'
          fallback='A'
          src='https://cdn.estarlincito.com/estarlincito/assets/avatar.jpeg'
        />
        <Heading content={title} />
      </Flex>
      <Flex className='flex-col gap-y-5'>
        <Markdown content={bio} />
      </Flex>

      <Button asChild className='max-w-2xs mt-5' variant='default' />
    </Section>
  </Container>
);
