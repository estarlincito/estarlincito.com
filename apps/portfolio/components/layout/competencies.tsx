import { CardWrapper } from '@app/portfolio/components/ui/card-wrapper';
import { SECTIONS } from '@app/portfolio/constants/home';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Heading } from '@repo/ui/components/heading';
import { Section } from '@repo/ui/layouts/section';
import * as FA from 'react-icons/fa';
import { GiBrain, GiLifeBar } from 'react-icons/gi';
import {
  MdOutlineSecurity,
  MdOutlineSupportAgent,
  MdWorkHistory,
} from 'react-icons/md';

const items = [
  {
    color: 'text-blue-600',
    Icon: FA.FaReact,
    summary:
      'I know how to build responsive websites using technologies like Node.js, React, and Next.js, ensuring optimal performance and user experience across devices.',
    title: 'Web Development Expertise',
  },
  {
    color: 'text-yellow-600',
    Icon: MdOutlineSupportAgent,
    summary:
      'I have strong skills in troubleshooting and resolving computer issues, ensuring systems run smoothly by identifying and fixing both hardware and software problems effectively.',
    title: 'Technical Problem-Solving',
  },

  {
    color: 'text-green-600',
    Icon: MdOutlineSecurity,
    summary:
      'With experience in data protection, I am knowledgeable in cybersecurity principles, practices, and tools to help secure information from unauthorized access or cyber threats.',
    title: 'Cybersecurity Awareness',
  },

  {
    color: 'text-orange-600',
    Icon: GiBrain,
    summary:
      'I am skilled in evaluating complex situations, considering various perspectives, and making reasoned decisions that lead to effective problem-solving and positive outcomes.',
    title: 'Critical thinking',
  },

  {
    color: 'text-cyan-600',
    Icon: MdWorkHistory,
    summary:
      'I am highly skilled at organizing tasks, prioritizing what matters most, and staying focused, which helps me efficiently manage multiple projects while meeting deadlines.',
    title: 'Exceptional organizational',
  },

  {
    color: 'text-red-600',
    Icon: GiLifeBar,
    summary:
      'I take initiative and work independently, staying focused on achieving goals, while also collaborating effectively with teams to drive success and deliver high-quality results.',
    title: 'Proactive and self-motivated',
  },
];
export const Competencies = () => (
  <Section className='scroll-mt-28 mt-28' id='competencies'>
    <Heading
      className='text-center my-5'
      content={SECTIONS.COMPETENCIES.title}
    />

    <CardWrapper>
      {items.map(({ Icon, color, summary, title }) => (
        <Card key={title}>
          <CardContent>
            <Icon className={color} size='80px' />
          </CardContent>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{summary}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </CardWrapper>
  </Section>
);
