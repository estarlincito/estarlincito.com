import type { LinkType } from '@repo/types';
import { Button } from '@repo/ui/components/button';
import { Link } from '@repo/ui/components/link';
import { Flex } from '@repo/ui/layouts/flex';
import { cn } from '@repo/ui/lib/utils';

interface TriggersProps extends Pick<LinkType, 'route' | 'label'> {
  submitLabel: string;
}

export const Triggers = ({ route, label, submitLabel }: TriggersProps) => (
  <Flex
    className={cn(
      'flex-col-reverse justify-between mt-3 gap-y-3',
      // 'sm:flex-row sm:gap-x-3 sm:gap-y-0'
    )}
  >
    <Button asChild type='button' variant='outline'>
      <Link className='hover:no-underline' label={label} route={route} />
    </Button>

    <Button label={submitLabel} type='submit' />
  </Flex>
);
