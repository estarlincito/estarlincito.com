import { accounts } from '@repo/constants';
import { Wrapper } from '@repo/ui';

import SignupForm from './form';

export const { metadata } = accounts.signup;

const Page = () => (
  <Wrapper align='center' size='3'>
    <SignupForm />
  </Wrapper>
);

export default Page;
