import { Skeleton } from '@repo/ui/components/skeleton';

export const FormSkeleton = () => (
  <div className='space-y-6'>
    <div className='space-y-2'>
      <Skeleton className='h-8 w-1/2' />
      <Skeleton className='h-5 w-full' />
    </div>
    <div className='space-y-4'>
      <Skeleton className='h-10 w-full' />
      <Skeleton className='h-10 w-full' />
      <Skeleton className='h-10 w-full' />
      <Skeleton className='h-10 w-full' />
      <Skeleton className='h-10 w-full mt-6' />
    </div>
  </div>
);
