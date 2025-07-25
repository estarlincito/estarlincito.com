'use client';

import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '@repo/ui/lib/utils';
import * as React from 'react';

function RootAvatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      data-slot='avatar'
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      className={cn('aspect-square size-full', className)}
      data-slot='avatar-image'
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className,
      )}
      data-slot='avatar-fallback'
      {...props}
    />
  );
}

interface AvatarProps
  extends Pick<
    React.ComponentProps<typeof AvatarPrimitive.Image>,
    'className' | 'src' | 'alt'
  > {
  fallback: string;
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Avatar = ({
  className,
  radius,
  fallback,
  ...props
}: AvatarProps) => (
  <RootAvatar className={cn(className, radius && `rounded-${radius}`)}>
    <AvatarFallback>{fallback}</AvatarFallback>
    <AvatarImage {...props} />
  </RootAvatar>
);
