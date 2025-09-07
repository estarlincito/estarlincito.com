import { type Translations } from '@repo/content/shared/locales';
import { Heading } from '@repo/ui/components/heading';
import { Container } from '@repo/ui/layouts/container';
import { Section } from '@repo/ui/layouts/section';
import { ContactForm } from '@repo/ui/pages/components/contact-form';

type ContactProps = Pick<Translations['contact'], 'form'> & {
  title: string;
};

export const ContactSection = ({ form, title }: ContactProps) => (
  <Container asChild size='3'>
    <Section className='scroll-mt-28 mt-28' id='contact'>
      <Heading className='text-center mb-5' content={title} />
      <ContactForm {...form} />
    </Section>
  </Container>
);
