import { Section, Title } from '@repo/ui';
import { FaReact } from 'react-icons/fa';
import { GiBrain, GiLifeBar } from 'react-icons/gi';
import {
  MdOutlineSecurity,
  MdOutlineSupportAgent,
  MdWorkHistory,
} from 'react-icons/md';

import CardWrapper from '@/components/ui/card-wrapper';

import Card from './card';

export const Competencies = () => (
  <Section>
    <Title align='center' content='Key Competencies' mb='5' />

    <CardWrapper>
      <Card
        color='var(--blue-8)'
        Icon={FaReact}
        label='Web Development Expertise'
        summary='I know how to build responsive websites using technologies like Node.js, React, and Next.js, ensuring optimal performance and user experience across devices.'
      />
      <Card
        color='var(--yellow-8)'
        Icon={MdOutlineSupportAgent}
        label='Technical Problem-Solving'
        summary='I have strong skills in troubleshooting and resolving computer issues, ensuring systems run smoothly by identifying and fixing both hardware and software problems effectively.'
      />

      <Card
        color='var(--green-8)'
        Icon={MdOutlineSecurity}
        label='Cybersecurity Awareness'
        summary='With experience in data protection, I am knowledgeable in cybersecurity principles, practices, and tools to help secure information from unauthorized access or cyber threats.'
      />

      <Card
        color='var(--orange-8)'
        Icon={GiBrain}
        label='Critical thinking'
        summary='I am skilled in evaluating complex situations, considering various perspectives, and making reasoned decisions that lead to effective problem-solving and positive outcomes.'
      />

      <Card
        color='var(--cyan-8)'
        Icon={MdWorkHistory}
        label='Exceptional organisational'
        summary='I am highly skilled at organizing tasks, prioritizing what matters most, and staying focused, which helps me efficiently manage multiple projects while meeting deadlines.'
      />

      <Card
        color='var(--red-8)'
        Icon={GiLifeBar}
        label='Proactive and self-motivated'
        summary='I take initiative and work independently, staying focused on achieving goals, while also collaborating effectively with teams to drive success and deliver high-quality results.'
      />
    </CardWrapper>
  </Section>
);
