import { Box } from '@repo/ui/components/box';
import { cn } from '@repo/ui/lib/utils';
import type { ComponentProps } from 'react';

type GridProps = ComponentProps<typeof Box>;

export const Grid = ({ children, className, ...props }: GridProps) => (
  <Box className={cn('grid', className)} {...props}>
    {children}
  </Box>
);
