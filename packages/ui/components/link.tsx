import { Button } from '@repo/ui/components/button';
import { cn } from '@repo/ui/lib/utils';
import L from 'next/link';
import type { ComponentProps } from 'react';

interface LinkProps
  extends Pick<
    ComponentProps<typeof Button>,
    'children' | 'label' | 'className'
  > {
  route?: Pick<ComponentProps<typeof L>, 'href'>['href'];
  target?: '_blank' | '_self';
  unstyled?: boolean;
  variant?: 'default';
}

export const Link = ({
  children,
  variant,
  label,
  route,
  target,
  className,
  unstyled,
}: LinkProps) => {
  const href = route ?? undefined;

  return variant === 'default' ? (
    <a
      className={cn(className)}
      {...(href ? ({ href } as { href: string }) : {})}
      target={target ?? '_self'}
    >
      {children ?? label}
    </a>
  ) : (
    <Button
      asChild
      className={cn(!unstyled && 'h-fit p-0', className)}
      variant='link'
    >
      {href ? (
        <L href={href} target={target ?? '_self'}>
          {children ?? label}
        </L>
      ) : (
        <Button variant='link'>{children ?? label}</Button>
      )}
    </Button>
  );
};
