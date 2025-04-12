import { carly } from '@repo/constants';
import { Wrapper } from '@repo/ui';

import Carly from '@/components/carly';

export const { metadata } = carly.home;

const Page = () => (
  <Wrapper size='3'>
    <Carly />
  </Wrapper>
);

export default Page;
