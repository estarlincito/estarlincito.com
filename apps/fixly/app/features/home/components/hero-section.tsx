import { Blockquote } from '@repo/ui/components/blockquote';
import { Heading } from '@repo/ui/components/heading';
import { Summary } from '@repo/ui/components/summary';
import { Container } from '@repo/ui/layouts/container';
import { Section } from '@repo/ui/layouts/section';

interface HeroProps {
  title: string;
  summary: string;
  slogan: string;
}

export const HeroSection = ({ summary, title, slogan }: HeroProps) => (
  <Container asChild size='3'>
    <Section>
      <Heading as='h1'>{title}</Heading>
      <Summary>{summary}</Summary>
      <Blockquote>{slogan}</Blockquote>
    </Section>
  </Container>
);
