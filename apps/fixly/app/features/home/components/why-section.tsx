import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/ui/components/accordion';
import { Heading } from '@repo/ui/components/heading';
import { Container } from '@repo/ui/layouts/container';
import { Section } from '@repo/ui/layouts/section';

interface WhyProps {
  title: string;
  items: { value: string; description: string }[];
}

export const WhySection = ({ title, items }: WhyProps) => (
  <Container asChild size='3'>
    <Section>
      <Heading as='h3' className='text-center'>
        {title}
      </Heading>

      <Accordion collapsible type='single'>
        {items.map(({ value, description }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger>{value}</AccordionTrigger>
            <AccordionContent>{description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  </Container>
);
