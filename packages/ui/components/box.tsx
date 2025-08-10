import { Slot } from '@radix-ui/react-slot';
import { cn } from '@repo/ui/lib/utils';
import type { HTMLAttributes } from 'react';

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  unstyled?: boolean;
}

export const Box = ({
  unstyled,
  children,
  className,
  asChild,
  ...rest
}: BoxProps) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp className={cn(!unstyled && '', className)} {...rest}>
      {children}
    </Comp>
  );
};
