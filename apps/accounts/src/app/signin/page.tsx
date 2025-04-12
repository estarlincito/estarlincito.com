import { accounts } from '@repo/constants';
import { Wrapper } from '@repo/ui';

import SigninForm from './form';

export const { metadata } = accounts.signin;

const Page = () => (
  <Wrapper align='center' size='3'>
    <SigninForm />
  </Wrapper>
);

export default Page;
