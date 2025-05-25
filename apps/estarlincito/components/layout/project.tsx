import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/ui/components/accordion';
import { Button } from '@repo/ui/components/button';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Container } from '@repo/ui/layouts/container';
import { Flex } from '@repo/ui/layouts/flex';
import { Header } from '@repo/ui/layouts/header';
import { Section } from '@repo/ui/layouts/section';

interface ProjectPros {
  cta: { route: string; label: string };
  summary: string;
  title: string;
  topics: {
    items: {
      label: string;
      value: string;
    }[];
    title: string;
  };
}

export const Project = ({ summary, title, topics, cta }: ProjectPros) => (
  <Container size='3'>
    <Flex className='h-full flex-col justify-center'>
      <Header summary={summary} title={title} />
      <Section>
        <Heading as='h3'>{topics.title}</Heading>
        <Accordion collapsible className='w-full' type='single'>
          {topics.items.map(({ label, value }, key) => (
            <AccordionItem key={label} value={`item-${key}`}>
              <AccordionTrigger>{label}</AccordionTrigger>
              <AccordionContent>{value}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Button asChild className='mt-5'>
          <Link route={cta.route} target='_blank' variant='default'>
            {cta.label}
          </Link>
        </Button>
      </Section>
    </Flex>
  </Container>
);
