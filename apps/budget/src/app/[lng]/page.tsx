import * as accounts from '@repo/content/accounts/settings';
import { generateMetadata } from '@repo/content/budget/home';
import { host, siteName } from '@repo/content/budget/settings';
import type { LocalesParams } from '@repo/content/utils/locales';
import { Avatar } from '@repo/ui/components/avatar';
import { Box } from '@repo/ui/components/box';
import { Link } from '@repo/ui/components/link';
import { Flex } from '@repo/ui/layouts/flex';

export { generateMetadata };

const HomePage = async ({ params }: LocalesParams) => {
  const { lng } = await params;

  return (
    <Flex className='items-center flex-col'>
      <Flex className='items-center flex-col grow justify-center '>
        <Avatar
          className='w-25 h-25'
          fallback={siteName}
          src='https://cdn.estarlincito.com/budget/assets/favicons/android-chrome-512x512.png'
        />

        <Link className='mt-2 text-2xl font-bold hover:no-underline'>
          {siteName}
        </Link>
      </Flex>

      <Box className='mb-5 shrink-0'>
        <Link
          className='font-bold hover:no-underline'
          route={`${accounts.host}/${lng}/signin?redirect=${host}/dashboard`}
        >
          Sign in
        </Link>
      </Box>
    </Flex>
  );
};
export default HomePage;
