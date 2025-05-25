import { url as accountsUrl } from '@app/accounts/settings';
import { METADATA } from '@app/budget/constants/home';
import { siteName, url } from '@app/budget/settings';
import { GenerateMetadata } from '@estarlincito/utils';
import { Avatar } from '@repo/ui/components/avatar';
import { Box } from '@repo/ui/components/box';
import { Link } from '@repo/ui/components/link';
import { Flex } from '@repo/ui/layouts/flex';

export const metadata = GenerateMetadata.website(METADATA);

const Page = () => (
  <Flex className='items-center flex-col'>
    <Flex className='items-center flex-col grow justify-center '>
      <Avatar
        className='w-25 h-25'
        fallback={siteName}
        src='/assets/favicons/android-chrome-512x512.png'
      />

      <Link className='mt-2 text-2xl font-bold hover:no-underline'>
        {siteName}
      </Link>
    </Flex>

    <Box className='mb-5 shrink-0'>
      <Link
        className='font-bold hover:no-underline'
        route={`${accountsUrl}/signin?redirect=${url}/dashboard`}
      >
        Sign in
      </Link>
    </Box>
  </Flex>
);
export default Page;
