import { num } from '@estarlincito/utils';
import { Button, Flex, Link, Section, Title } from '@repo/ui';

import CardProjects from '@/components/ui/card-projects';
import CardWrapper from '@/components/ui/card-wrapper';
import { PROJECTS } from '@/constants/projects';

export const Projects = () => (
  <Section>
    <Title align='center' content='Web Projects' mb='5' />

    <CardWrapper>
      {PROJECTS.slice(num('0'), num('3')).map(({ label, summary, key }) => (
        <CardProjects key={key} label={label} summary={summary} />
      ))}
    </CardWrapper>

    <Flex align='center' direction='column'>
      <Button asChild mt='5' variant='outline'>
        <Link href='/projects' underline='none'>
          Browse Projects
        </Link>
      </Button>
    </Flex>
  </Section>
);
