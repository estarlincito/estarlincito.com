/* eslint-disable react/jsx-no-useless-fragment */
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
  lng?: 'en';
  route?: string;
  target?: '_blank' | '_self';
  unstyled?: boolean;
  variant?: 'default';
}

export const Link = ({
  children,
  lng,
  variant,
  label,
  route,
  target,
  className,
  unstyled,
}: LinkProps) => {
  let href = route ?? undefined;
  if (lng) href = `/${lng}${href}`;

  return variant === 'default' ? (
    <a
      className={cn(className)}
      {...(href ? { href } : {})}
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
        <>{children ?? label}</>
      )}
    </Button>
  );
};
