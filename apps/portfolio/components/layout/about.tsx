import { Avatar } from '@repo/ui/components/avatar';
import { Bio } from '@repo/ui/components/bio';
import { Button } from '@repo/ui/components/button';
import { Heading } from '@repo/ui/components/heading';
import { Container } from '@repo/ui/layouts/container';
// import { Link } from '@repo/ui/components/link';
import { Flex } from '@repo/ui/layouts/flex';
import { Section } from '@repo/ui/layouts/section';

export const About = () => (
  <Container asChild size='3'>
    <Section className='scroll-mt-28 mt-28' id='about'>
      <Flex className='items-center flex-row gap-x-4'>
        <Avatar
          className='rounded-xl h-28 w-28'
          fallback='A'
          src='/assets/avatar.jpeg'
        />
        <Heading content='Hello!' />
      </Flex>
      <Bio />
      <Button asChild className='max-w-2xs mt-5' variant='default'>
        {/* <Link>Download My Portfolio</Link> */}
      </Button>
    </Section>
  </Container>
);
