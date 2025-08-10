import {
  generateMetadata,
  getSignupContent,
} from '@repo/content/accounts/signup';
import type { LocalesParams } from '@repo/content/utils/locales';
import { Container } from '@repo/ui/layouts/container';
import { Suspense } from 'react';

import { FormSkeleton } from '@/features/components/form-skeleton';

import { SignupForm } from './form';

export { generateMetadata };

const SignupPage = async ({ params }: LocalesParams) => {
  const { lng } = await params;
  const content = await getSignupContent(lng);

  return (
    <Container className='flex flex-col items-center justify-center gap-6 p-6 md:p-10'>
      <Suspense fallback={<FormSkeleton />}>
        <SignupForm {...content} />
      </Suspense>
    </Container>
  );
};

export default SignupPage;
