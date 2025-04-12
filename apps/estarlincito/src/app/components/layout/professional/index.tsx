import { Section, Title } from '@repo/ui';

import Card from './card';

export const Professional = () => (
  <Section>
    <Title content='Professional experience' mb='2' />
    <Card
      company='Altice'
      date=' May 2023 - Agu 2024'
      label='Technical Support Representative'
      summary='I provided exceptional customer service, efficiently
      resolving customer inquiries and complaints. I also assisted with order
      processing, account management, and troubleshooting technical issues.'
    />
  </Section>
);
