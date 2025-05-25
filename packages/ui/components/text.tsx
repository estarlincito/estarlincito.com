import { Slot } from '@radix-ui/react-slot';
import { cn } from '@repo/ui/lib/utils';
import type { HTMLAttributes } from 'react';

interface TextProps
  extends Pick<
    HTMLAttributes<HTMLParagraphElement>,
    'children' | 'className' | 'content'
  > {
  as?: 'span' | 'p';
  asChild?: boolean;
  unstyled?: boolean;
}

export const Text = ({
  className,
  children,
  unstyled,
  content,
  as = 'p',
  asChild,
}: TextProps) => {
  const Comp = asChild ? Slot : as;

  return (
    <Comp
      className={cn(
        as === 'p' && !unstyled && 'leading-7 [&:not(:first-child)]:mt-6',
        className,
      )}
    >
      {children ?? content}
    </Comp>
  );
};
