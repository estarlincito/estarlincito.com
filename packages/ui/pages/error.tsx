import { GenerateMetadata } from '@estarlincito/utils';
import { Button } from '@repo/ui/components/button';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { Flex } from '@repo/ui/layouts/flex';

const errorMeta = ({
  locale,
  siteName,
  url,
}: {
  locale: string;
  siteName: string;
  url: string;
}) =>
  GenerateMetadata.website({
    description: '...We apologize for the inconvenience.',
    images: [
      {
        alt: 'Page not found cover',
        url: 'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png',
      },
    ],
    locale,
    siteName,
    title: 'Oops!',
    url: `${url}`,
  });

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => (
  <Flex className='justify-center items-center'>
    <Flex className='max-w-80 flex-col gap-y-2'>
      <Heading content='Oops!' />
      <Heading as='h4' content={error.message} />

      <Text>
        Please try again or if the problem persists, feel free to contact
        support for assistance. We apologize for the inconvenience.
      </Text>

      <Flex className='justify-between w-36 gap-x-2 mt-3'>
        <Button label='Try again' onClick={reset} />

        <Button asChild variant='secondary'>
          <Link className='cursor-default' label='Contact' route='/contact' />
        </Button>
      </Flex>
    </Flex>
  </Flex>
);

export { errorMeta, ErrorPage };
