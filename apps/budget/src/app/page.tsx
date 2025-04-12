import { accounts, budget } from '@repo/constants';
import { Avatar, Flex, Grid, Link, Wrapper } from '@repo/ui';

export const { metadata } = budget.home;

const Page = () => (
  <Wrapper>
    <Grid height='100%' rows='1fr auto'>
      <Flex align='center' direction='column' height='100%' justify='center'>
        <Avatar
          fallback={budget.siteName}
          size='8'
          src='/assets/favicons/android-chrome-512x512.png'
        />

        <Link
          highContrast
          color='gray'
          href='/'
          mt='2'
          size='8'
          underline='none'
          weight='bold'
        >
          {budget.siteName}
        </Link>
      </Flex>
      <Flex justify='center'>
        <Link
          href={`${accounts.url}/signin?redirect=${budget.url}/dashboard`}
          weight='bold'
        >
          Sign in
        </Link>
      </Flex>
    </Grid>
  </Wrapper>
);

export default Page;
