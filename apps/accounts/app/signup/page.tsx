import SignupForm from '@app/accounts/app/signup/form';
import { METADATA } from '@app/accounts/constants/signup';
import { GenerateMetadata } from '@estarlincito/utils';
import { Flex } from '@repo/ui/layouts/flex';

export const metadata = GenerateMetadata.website(METADATA);

const Page = () => (
  <Flex className='items-center justify-center'>
    <SignupForm />
  </Flex>
);

export default Page;
