import { SECTIONS } from '@app/portfolio/constants/home';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Heading } from '@repo/ui/components/heading';
import { Container } from '@repo/ui/layouts/container';
import { Section } from '@repo/ui/layouts/section';

export const Education = () => (
  <Container asChild size='3'>
    <Section className='scroll-mt-28 mt-28' id='education'>
      <Heading
        className='mb-2 text-center sm:text-start'
        content={SECTIONS.EDUCATION.title}
      />

      {SECTIONS.EDUCATION.items.map(({ summary, title }) => (
        <Card key={title}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{summary}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </Section>
  </Container>
);
