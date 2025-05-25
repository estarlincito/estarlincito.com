import { Button } from '@repo/ui/components/button';
import { cn } from '@repo/ui/lib/utils';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import L from 'next/link';
import type { ComponentProps } from 'react';

interface LinkProps
  extends Pick<
    ComponentProps<typeof Button>,
    'children' | 'label' | 'className'
  > {
  route?: string;
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
}: LinkProps) =>
  variant === 'default' ? (
    <a className={cn(className)} href={route ?? ''} target={target ?? '_self'}>
      {children ?? label}
    </a>
  ) : (
    <Button
      asChild
      className={cn(!unstyled && 'h-fit p-0', className)}
      variant='link'
    >
      <L
        // className={cn(!unstyled && 'h-fit', className)}
        href={route ?? ''}
        target={target ?? '_self'}
      >
        {children ?? label}
      </L>
    </Button>
  );
