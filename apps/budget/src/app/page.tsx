import { Avatar, Container, Flex, Link, Strong } from '@radix-ui/themes';
import { accounts, budget } from '@repo/constants';
import { Wrapper } from '@repo/ui';

const Page = () => {
  return (
    <Container>
      <Wrapper align='center' gapY='2'>
        <Flex direction='column' align='center'>
          <Avatar
            size='8'
            src='/assets/favicons/android-chrome-512x512.png'
            fallback={budget.siteName}
          />

          <Link href='/' underline='none' size='8' mt='2' color='gray'>
            <Strong>{budget.siteName}</Strong>
          </Link>
        </Flex>
      </Wrapper>
      <Flex justify='center'>
        <Link href={`${accounts.url}/signin?redirect=${budget.url}/dashboard`}>
          <Strong>Sign in</Strong>
        </Link>
      </Flex>
    </Container>
  );
};

export default Page;
