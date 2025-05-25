import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/ui/components/accordion';
import { Heading } from '@repo/ui/components/heading';
import { Text } from '@repo/ui/components/text';
import { Container } from '@repo/ui/layouts/container';
import { Header } from '@repo/ui/layouts/header';
import { Section } from '@repo/ui/layouts/section';

interface AboutProps {
  title: string;
  sections: {
    footer: string;
    header: {
      summary: string;
      title: string;
    };
    overview: {
      mission: string;
      title: string;
    };
    topics: {
      items: {
        label: string;
        value: string;
      }[];
      title: string;
    };
  };
}
export const About = ({ sections }: AboutProps) => (
  <Container size='3'>
    <Header summary={sections.header.summary} title={sections.header.title} />
    <Section>
      <Heading as='h3'>Mission</Heading>
      {/* <Text>{sections.overview.is}</Text> */}
      <Text unstyled>{sections.overview.mission}</Text>
    </Section>
    <Section>
      <Heading as='h3'>{sections.topics.title}</Heading>
      <Accordion collapsible className='w-full' type='single'>
        {sections.topics.items.map(({ label, value }, key) => (
          <AccordionItem key={label} value={`item-${key}`}>
            <AccordionTrigger>{label}</AccordionTrigger>
            <AccordionContent>{value}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
    <Section>
      <Text>{sections.footer}</Text>
    </Section>
  </Container>
);
