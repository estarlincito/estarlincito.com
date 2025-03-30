import { accounts } from '@repo/constants';
import { Container, Wrapper } from '@repo/ui';

import SigninForm from './form';

export const { metadata } = accounts.signin;

const Page = () => {
  return (
    <Container size='3'>
      <Wrapper align='center'>
        <SigninForm />
      </Wrapper>
    </Container>
  );
};

export default Page;
