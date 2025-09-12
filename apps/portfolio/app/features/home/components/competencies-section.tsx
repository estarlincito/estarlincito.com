import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Heading } from '@repo/ui/components/heading';
import { withDefaultProps } from '@repo/ui/hocs/default-props';
import { Section } from '@repo/ui/layouts/section';
import type { IconType } from 'react-icons';
import * as FA from 'react-icons/fa';
import { GiBrain, GiLifeBar } from 'react-icons/gi';
import {
  MdOutlineSecurity,
  MdOutlineSupportAgent,
  MdWorkHistory,
} from 'react-icons/md';

const toIcon = (Icon: IconType, color: string) =>
  withDefaultProps(Icon, {
    className: `text-${color}-600`,
    size: '80px',
  });

const extra = {
  'critical-thinking': toIcon(GiBrain, 'orange'),
  'cybersecurity-awareness': toIcon(MdOutlineSecurity, 'green'),
  'exceptional-organizational': toIcon(MdWorkHistory, 'cyan'),
  'proactive-and-self-motivated': toIcon(GiLifeBar, 'red'),
  'technical-problem-solving': toIcon(MdOutlineSupportAgent, 'yellow'),
  'web-development-expertise': toIcon(FA.FaReact, 'blue'),
};

interface CompetenciesProps {
  title: string;
  items: { summary: string; label: string; id: string }[];
}

import { Grid } from '@repo/ui/layouts/grid';

export const CompetenciesSection = ({ items, title }: CompetenciesProps) => (
  <Section className='scroll-mt-28 mt-28' id='competencies'>
    <Heading className='text-center my-5' content={title} />

    <Grid className='grid-cols-[repeat(auto-fill,280px)] gap-3 justify-center'>
      {items.map(({ summary, label, id }) => {
        const Icon = extra[id as keyof typeof extra];

        return (
          <Card key={id}>
            <CardContent>
              <Icon />
            </CardContent>
            <CardHeader>
              <CardTitle>{label}</CardTitle>
              <CardDescription>{summary}</CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </Grid>
  </Section>
);
