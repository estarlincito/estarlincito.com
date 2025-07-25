import { Skeleton } from '@repo/ui/components/skeleton';
import { Container } from '@repo/ui/layouts/container';

const LoadingSkeleton = () => (
  <Container className='space-y-8' size='3'>
    {Array.from({ length: 3 }, (_, key) => (
      <div className='space-y-4' key={key}>
        <Skeleton className='h-4 w-1/3 rounded-md' />
        <Skeleton className='h-6 w-3/4 rounded-md' />
        <Skeleton className='h-40 w-full rounded-xl' />
      </div>
    ))}
  </Container>
);

export default LoadingSkeleton;
