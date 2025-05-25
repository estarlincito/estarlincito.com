import { Box } from '@repo/ui/components/box';
import { cn } from '@repo/ui/lib/utils';
import type { ReactNode } from 'react';

interface ViewProps {
  variant: 'child-1' | 'child-2' | 'child-3';
  children: ReactNode;
}

export const View = ({ variant, children }: ViewProps) => (
  <Box
    className={cn(
      'grid min-h-screen w-full',
      variant === 'child-1' && 'grid-rows-[auto]',
      variant === 'child-2' && 'grid-rows-[auto_1fr]',
      variant === 'child-3' && 'grid-rows-[auto_1fr_auto]',
    )}
  >
    {children}
  </Box>
);
