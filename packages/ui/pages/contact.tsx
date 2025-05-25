import { GenerateMetadata } from '@estarlincito/utils';
import { Container } from '@repo/ui/layouts/container';
import { Flex } from '@repo/ui/layouts/flex';
import { Header } from '@repo/ui/layouts/header';
import { cn } from '@repo/ui/lib/utils';
import { ContactForm } from '@repo/ui/pages/components/form';

const contactMeta = ({
  locale,
  siteName,
  url,
}: {
  locale: string;
  siteName: string;
  url: string;
}) =>
  GenerateMetadata.website({
    description:
      'Seeks collaboration on building something impactful and sustainable!',
    images: [
      {
        alt: '',
        url: '',
      },
    ],
    locale,
    siteName,
    title: 'Contact',
    url: `${url}/contact`,
  });

const ContactPage = () => (
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
        summary='Seeks collaboration on building something impactful and sustainable!'
        title='Get in touch'
      />

      <ContactForm />
    </Flex>
  </Container>
);

export { ContactForm, contactMeta, ContactPage };
