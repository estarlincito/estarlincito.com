import {
  generateMetadata,
  getSigninContent,
} from '@repo/content/accounts/signin';
import type { LocalesParams } from '@repo/content/utils/locales';
import { Container } from '@repo/ui/layouts/container';
import { Suspense } from 'react';

import { FormSkeleton } from '@/features/components/form-skeleton';

import { SigninForm } from './form';

export { generateMetadata };

const SigninPage = async ({ params }: LocalesParams) => {
  const { lng } = await params;

  const content = await getSigninContent(lng);

  return (
    <Container className='flex flex-col items-center justify-center gap-6 p-6 md:p-10'>
      <Suspense fallback={<FormSkeleton />}>
        <SigninForm {...content} />
      </Suspense>
    </Container>
  );
};

export default SigninPage;
