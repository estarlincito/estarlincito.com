import { Slot } from '@radix-ui/react-slot';
import { cn } from '@repo/ui/lib/utils';
import type { HTMLAttributes } from 'react';

interface HeadingProps
  extends Pick<
    HTMLAttributes<HTMLHeadingElement>,
    'children' | 'className' | 'content'
  > {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  asChild?: boolean;
  unstyled?: boolean;
}

export const Heading = ({
  as = 'h1',
  children,
  content,
  className,
  asChild,
  unstyled,
}: HeadingProps) => {
  const Comp = asChild ? Slot : as;

  const classVariant = {
    h1: 'text-4xl font-extrabold tracking-tight lg:text-5xl',
    h2: 'text-3xl font-semibold tracking-tight',
    h3: 'text-2xl font-semibold tracking-tight',
    h4: 'text-xl font-semibold tracking-tight',
    h5: 'text-base font-semibold tracking-tight',
  };

  return (
    <Comp className={cn(!unstyled && classVariant[as], className)}>
      {children ?? content}
    </Comp>
  );
};
