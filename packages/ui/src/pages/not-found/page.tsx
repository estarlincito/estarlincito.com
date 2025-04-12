import { Link, Text, Title } from '@/components/ui/index.js';
import { Wrapper } from '@/layouts/index.js';

export const NotFoundPage = () => (
  <Wrapper align='center' size='1'>
    <Title content='Oops!' size='8' />
    <Text>
      Looks like that page took a little detour and doesn’t exist anymore. No
      worries! Head back to{' '}
      <Link href='/' weight='bold'>
        Home
      </Link>{' '}
      and keep exploring!
    </Text>
  </Wrapper>
);
