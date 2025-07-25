import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Heading } from '@repo/ui/components/heading';
import { Container } from '@repo/ui/layouts/container';
import { Section } from '@repo/ui/layouts/section';

interface EducationProps {
  items: { summary: string; label: string }[];
  title: string;
}
export const EducationSection = ({ items, title }: EducationProps) => (
  <Container asChild size='3'>
    <Section className='scroll-mt-28 mt-28' id='education'>
      <Heading className='mb-2 text-center sm:text-start' content={title} />

      {items.map(({ summary, label }) => (
        <Card key={label}>
          <CardHeader>
            <CardTitle>{label}</CardTitle>
            <CardDescription>{summary}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </Section>
  </Container>
);
