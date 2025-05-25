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

  return (
    <Comp
      className={cn(
        !unstyled && 'scroll-m-20',
        className,
        as === 'h1' &&
          !unstyled &&
          'text-4xl font-extrabold tracking-tight lg:text-5xl',
        as === 'h2' &&
          !unstyled &&
          'border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        as === 'h3' && !unstyled && 'text-2xl font-semibold tracking-tight',
        as === 'h4' && !unstyled && 'text-xl font-semibold tracking-tight',
        as === 'h5' && !unstyled && 'text-base font-semibold tracking-tight',
      )}
    >
      {children ?? content}
    </Comp>
  );
};
