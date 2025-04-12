import { Section, Title } from '@repo/ui';

import Card from './card';

export const Education = () => (
  <Section>
    <Title content='Education' mb='2' />

    <Card
      label='Advanced Computer Science Course'
      summary='Programming, web development, computer systems, database management.'
    />

    <Card label='Ethical Hacking Course' summary='Cybersecurity' />

    <Card
      label='Responsive Web Design'
      summary='Responsive Web Design, flexible layouts, media queries, mobile-first design, adaptive images.'
    />

    <Card
      label='JavaScript Course'
      summary='JavaScript Algorithms and Data Structures'
    />
  </Section>
);
