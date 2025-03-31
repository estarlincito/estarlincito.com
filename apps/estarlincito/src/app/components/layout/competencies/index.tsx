import { Section } from '@radix-ui/themes';
import { Title } from '@repo/ui';
import { FaReact } from 'react-icons/fa';
import { GiBrain, GiLifeBar } from 'react-icons/gi';
import {
  MdOutlineSecurity,
  MdOutlineSupportAgent,
  MdWorkHistory,
} from 'react-icons/md';

import CardWrapper from '@/components/ui/card-wrapper';

import Card from './card';

export const Competencies = () => {
  return (
    <Section>
      <Title contents='Key Competencies' align='center' mb='5' />

      <CardWrapper>
        <Card
          label='Web Development Expertise'
          summary='I know how to build responsive websites using technologies like Node.js, React, and Next.js, ensuring optimal performance and user experience across devices.'
          Icon={FaReact}
          color='var(--blue-8)'
        />
        <Card
          label='Technical Problem-Solving'
          summary='I have strong skills in troubleshooting and resolving computer issues, ensuring systems run smoothly by identifying and fixing both hardware and software problems effectively.'
          Icon={MdOutlineSupportAgent}
          color='var(--yellow-8)'
        />

        <Card
          label='Cybersecurity Awareness'
          summary='With experience in data protection, I am knowledgeable in cybersecurity principles, practices, and tools to help secure information from unauthorized access or cyber threats.'
          Icon={MdOutlineSecurity}
          color='var(--green-8)'
        />

        <Card
          label='Critical thinking'
          summary='I am skilled in evaluating complex situations, considering various perspectives, and making reasoned decisions that lead to effective problem-solving and positive outcomes.'
          Icon={GiBrain}
          color='var(--orange-8)'
        />

        <Card
          label='Exceptional organisational'
          summary='I am highly skilled at organizing tasks, prioritizing what matters most, and staying focused, which helps me efficiently manage multiple projects while meeting deadlines.'
          Icon={MdWorkHistory}
          color='var(--cyan-8)'
        />

        <Card
          label='Proactive and self-motivated'
          summary='I take initiative and work independently, staying focused on achieving goals, while also collaborating effectively with teams to drive success and deliver high-quality results.'
          Icon={GiLifeBar}
          color='var(--red-8)'
        />
      </CardWrapper>
    </Section>
  );
};
