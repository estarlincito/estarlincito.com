import { Button, Flex, Link, Section } from '@radix-ui/themes';
import { Title } from '@repo/ui';

import CardProjects from '@/components/ui/card-projects';
import CardWrapper from '@/components/ui/card-wrapper';
import { PROJECTS } from '@/constants/projects';

export const Projects = () => {
  return (
    <Section>
      <Title contents='Web Projects' align='center' mb='5' />

      <CardWrapper>
        {PROJECTS.slice(0, 3).map(({ label, summary }, key) => (
          <CardProjects key={key} label={label} summary={summary} />
        ))}
      </CardWrapper>

      <Flex direction='column' align='center'>
        <Button variant='outline' mt='5' asChild>
          <Link href='/projects' underline='none'>
            Browse Projects
          </Link>
        </Button>
      </Flex>
    </Section>
  );
};
