import {
  loadTranslations,
  type LocalesParams,
} from '@repo/content/estarlincito/locales';
import { Container } from '@repo/ui/layouts/container';
import { Flex } from '@repo/ui/layouts/flex';
import { Header } from '@repo/ui/layouts/header';
import { cn } from '@repo/ui/lib/utils';
import { ContactForm } from '@repo/ui/pages/components/contact-form';

const Contact = async ({ params }: LocalesParams) => {
  const { lng } = await params;
  const { contact } = await loadTranslations(lng);

  return (
    <Container>
      <Flex
        className={cn(
          'justify-center h-full',
          'items-stretch sm:items-center',
          'flex-col sm:flex-row',
          'sm:gap-x-5',
          'mb-8 sm:mb-0',
        )}
      >
        <Header
          className='max-w-full sm:max-w-[50%]'
          summary={contact.summary}
          title={contact.title}
        />

        <ContactForm {...contact.form} />
      </Flex>
    </Container>
  );
};

export default Contact;
