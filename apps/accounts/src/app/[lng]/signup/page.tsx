import {
  generateMetadata,
  getSignupContent,
} from '@repo/content/accounts/signup';
import { Container } from '@repo/ui/layouts/container';
import { Suspense } from 'react';

import { FormSkeleton } from '@/features/components/form-skeleton';

import { SignupForm } from './form';

const SignupPage = async ({ params }: PageProps<'/[lng]/signup'>) => {
  const content = await getSignupContent(params);

  return (
    <Container className='flex flex-col items-center justify-center gap-6 p-6 md:p-10'>
      <Suspense fallback={<FormSkeleton />}>
        <SignupForm {...content} />
      </Suspense>
    </Container>
  );
};

export { SignupPage as default, generateMetadata };
