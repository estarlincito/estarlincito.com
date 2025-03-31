import { Box, Container, Link, Strong } from '@radix-ui/themes';

import { Title } from '../../components/index.js';
import { Wrapper } from '../../layouts/index.js';

export const NotFoundPage = () => {
  return (
    <Container size='1'>
      <Wrapper align='center'>
        <Title contents='Oops!' size='8' />
        <Box>
          Looks like that page took a little detour and doesn’t exist anymore.
          No worries! Head back to{' '}
          <Link href='/'>
            <Strong>Home</Strong>
          </Link>{' '}
          and keep exploring!
        </Box>
      </Wrapper>
    </Container>
  );
};
