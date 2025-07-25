import type { AboutContent } from '@repo/content/estarlincito/about';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/ui/components/accordion';
import { Button } from '@repo/ui/components/button';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { Container } from '@repo/ui/layouts/container';
import { Flex } from '@repo/ui/layouts/flex';
import { Header } from '@repo/ui/layouts/header';
import { Section } from '@repo/ui/layouts/section';

export const About = ({ sections, summary, title }: AboutContent) => (
  <Container size='3'>
    <Header summary={summary} title={title} />
    <Section>
      <Heading as='h3'>Mission</Heading>
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

    <Flex className='mt-5 flex-col justify-center'>
      <Button asChild className='mt-5'>
        <Link variant='default' {...sections.cta} />
      </Button>
    </Flex>
  </Container>
);
