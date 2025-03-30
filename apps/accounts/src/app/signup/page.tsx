import { accounts } from '@repo/constants';
import { Container, Wrapper } from '@repo/ui';

import SignupForm from './form';

export const { metadata } = accounts.signup;

const Page = () => {
  return (
    <Container size='3'>
      <Wrapper align='center'>
        <SignupForm />
      </Wrapper>
    </Container>
  );
};

export default Page;
