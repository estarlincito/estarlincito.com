import { Heading } from '@repo/ui/components/heading';
import { Container } from '@repo/ui/layouts/container';
import { Section } from '@repo/ui/layouts/section';
import { ContactForm } from '@repo/ui/pages/contact';

export const Contact = () => (
  <Container asChild size='3'>
    <Section className='scroll-mt-28 mt-28' id='contact'>
      <Heading className='text-center mb-5' content='Get in touch' />
      <ContactForm />
    </Section>
  </Container>
);
