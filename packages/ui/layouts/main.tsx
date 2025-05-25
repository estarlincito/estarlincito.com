import { Box } from '@repo/ui/components/box';
import { cn } from '@repo/ui/lib/utils';
import type { ComponentProps } from 'react';
interface MainProps extends ComponentProps<typeof Box> {
  unstyled?: boolean;
}
export const Main = ({ children, className, unstyled }: MainProps) => (
  <Box className={cn(!unstyled && '*:h-full p-5', className)}>{children}</Box>
);
