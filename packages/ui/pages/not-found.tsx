import { GenerateMetadata } from '@estarlincito/utils';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { Flex } from '@repo/ui/layouts/flex';

const notFoundMeta = ({
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
      'Looks like that page took a little detour and doesn’t exist anymore.',
    images: [
      {
        alt: 'Page not found cover',
        url: 'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png',
      },
    ],
    locale,
    siteName,
    title: 'Oops!',
    url: `${url}/not-found`,
  });

const NotFoundPage = () => (
  <Flex className='justify-center items-center'>
    <Flex className='max-w-80 flex-col gap-y-2'>
      <Heading content='Oops!' />
      <Text className='text-2xl'>
        Looks like that page took a little detour and doesn’t exist anymore. No
        worries! Head back to{' '}
        <Link className='text-2xl hover:no-underline' route='/'>
          Home
        </Link>{' '}
        and keep exploring!
      </Text>
    </Flex>
  </Flex>
);

export { notFoundMeta, NotFoundPage };
