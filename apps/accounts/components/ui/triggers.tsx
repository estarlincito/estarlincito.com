import type { LinkType } from '@repo/types';
import { Button } from '@repo/ui/components/button';
import { Link } from '@repo/ui/components/link';
import { Flex } from '@repo/ui/layouts/flex';
import { cn } from '@repo/ui/lib/utils';
import { Loader2Icon } from 'lucide-react';

interface TriggersProps extends Pick<LinkType, 'route' | 'label'> {
  submitLabel: string;
  loading: boolean;
}

export const Triggers = ({
  route,
  label,
  submitLabel,
  loading,
}: TriggersProps) => (
  <Flex
    className={cn(
      'flex-col-reverse justify-between mt-3 gap-y-3',
      // 'sm:flex-row sm:gap-x-3 sm:gap-y-0'
    )}
  >
    {loading ? (
      <Button disabled label={label} type='button' variant='outline' />
    ) : (
      <Button asChild type='button' variant='outline'>
        <Link className='hover:no-underline' label={label} route={route} />
      </Button>
    )}

    <Button disabled={loading} type='submit'>
      {loading ? (
        <>
          <Loader2Icon className='animate-spin' /> Please wait
        </>
      ) : (
        submitLabel
      )}
    </Button>
  </Flex>
);
