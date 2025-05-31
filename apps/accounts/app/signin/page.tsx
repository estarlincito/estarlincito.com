import { SigninForm } from '@app/accounts/app/signin/form';
import { METADATA } from '@app/accounts/constants/signin';
import { GenerateMetadata } from '@estarlincito/utils';
import { Skeleton } from '@repo/ui/components/skeleton';
import { Container } from '@repo/ui/layouts/container';
import { Suspense } from 'react';

export const metadata = GenerateMetadata.website(METADATA);

const FormSkeleton = () => (
  <div className='space-y-6'>
    <div className='space-y-2'>
      <Skeleton className='h-8 w-1/2' />
      <Skeleton className='h-5 w-full' />
    </div>
    <div className='space-y-4'>
      <Skeleton className='h-10 w-full' />
      <Skeleton className='h-10 w-full' />
      <Skeleton className='h-10 w-full mt-6' />
    </div>
  </div>
);

console.log('FormSkeleton on all components');

const SigninPage = () => (
  <Container className='flex items-center justify-center' size='1'>
    <Suspense fallback={<FormSkeleton />}>
      <SigninForm />
    </Suspense>
  </Container>
);

export default SigninPage;
