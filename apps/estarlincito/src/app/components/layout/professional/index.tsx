import { Section } from '@radix-ui/themes';
import { Title } from '@repo/ui';

import Card from './card';

export const Professional = () => {
  return (
    <Section>
      <Title contents='Professional experience' mb='2' />
      <Card
        label='Technical Support Representative'
        summary='I provided exceptional customer service, efficiently
      resolving customer inquiries and complaints. I also assisted with order
      processing, account management, and troubleshooting technical issues.'
        date=' May 2023 - Agu 2024'
        company='Altice'
      />
    </Section>
  );
};
