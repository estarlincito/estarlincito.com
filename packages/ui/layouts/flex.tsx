import { Box } from '@repo/ui/components/box';
import { cn } from '@repo/ui/lib/utils';
import type { ComponentProps } from 'react';

interface FlexProps extends ComponentProps<typeof Box> {
  unstyled?: boolean;
}

export const Flex = ({
  unstyled,
  children,
  className,
  ...props
}: FlexProps) => (
  <Box className={cn(!unstyled && 'gap-y-5', 'flex', className)} {...props}>
    {children}
  </Box>
);
