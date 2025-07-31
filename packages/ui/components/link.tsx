/* eslint-disable react/jsx-no-useless-fragment */

import { throwAppError } from '@estarlincito/utils';
import { Button } from '@repo/ui/components/button';
import { cn } from '@repo/ui/lib/utils';
import L from 'next/link';
import type { ComponentProps } from 'react';

const validateHref = (href: string | undefined) => {
  const errorMessage = `Invalid locale in URL: ${href}. Expected to match "/es" or "/en".`;
  if (href) {
    if (href.startsWith('http')) {
      const url = new URL(href);
      const { hostname } = url;

      const isOwn =
        hostname.endsWith('.estarlincito.com') ||
        hostname === 'estarlincito.com' ||
        hostname === 'localhost';

      if (isOwn) {
        const locale = url.pathname.split('/')[1];

        if (locale !== 'en' && locale !== 'es') {
          throwAppError(errorMessage);
        }
      }
    } else if (href.startsWith('/')) {
      if (!href.startsWith('/en') && !href.startsWith('/es')) {
        throwAppError(errorMessage);
      }
    }
  }
};

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
}: LinkProps) => {
  const href = route ?? undefined;

  if (
    process.env.NEXT_BUILD === 'true' ||
    process.env.NODE_ENV === 'development'
  ) {
    validateHref(href);
  }

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
