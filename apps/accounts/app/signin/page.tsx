import { SigninForm } from '@app/accounts/app/signin/form';
import { METADATA } from '@app/accounts/constants/signin';
import { GenerateMetadata } from '@estarlincito/utils';
import { Flex } from '@repo/ui/layouts/flex';

export const metadata = GenerateMetadata.website(METADATA);

const SigninPage = () => (
  <Flex className='items-center justify-center'>
    <SigninForm />
  </Flex>
);

export default SigninPage;
