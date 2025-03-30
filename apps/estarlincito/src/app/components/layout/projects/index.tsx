import { Button, Flex, Link, Section } from '@radix-ui/themes';
import { Title } from '@repo/ui';

import CardWrapper from '../wrapper';
import Card from './card';

export const Projects = () => {
  return (
    <Section>
      <Title contents='Web Projects' align='center' mb='5' />

      <CardWrapper>
        <Card
          label='Carly'
          summary='is an AI-driven task automation platform that boosts productivity. Powered by OpenAI, it streamlines content creation, answers queries, and solves problems effortlessly.'
        />

        <Card
          label='Imwriting'
          summary='is a blog exploring philosophy, psychology, web development, and technology. It offers insights on how tech shapes our thinking, interactions, and emotional well-being.'
        />

        <Card
          label='Quotely'
          summary='brings you daily inspiration. Whether it’s motivation, wisdom, or positivity, these quotes uplift your spirit and brighten your day. A simple way to stay inspired, every day.'
        />
      </CardWrapper>

      <Flex direction='column' align='center'>
        <Button variant='outline' mt='5' disabled>
          <Link href='/projects' underline='none'>
            Browse Projects
          </Link>
        </Button>
      </Flex>
    </Section>
  );
};
