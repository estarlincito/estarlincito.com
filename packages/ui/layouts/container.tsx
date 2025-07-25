import { Box } from '@repo/ui/components/box';
import { cn } from '@repo/ui/lib/utils';
import type { ComponentProps } from 'react';

interface ContainerProps extends ComponentProps<typeof Box> {
  size?: '1' | '2' | '3' | '4';
  center?: boolean;
}

export function Container({
  className,
  size = '4',
  center = true,
  ...props
}: ContainerProps) {
  const sizeMap = {
    '1': 'max-w-[448px]',
    '2': 'max-w-[688px]',
    '3': 'max-w-[880px]',
    '4': 'max-w-[1136px]',
  };

  return (
    <Box
      className={cn(
        'w-full px-4',
        sizeMap[size],
        center && 'mx-auto',
        className,
      )}
      {...props}
    />
  );
}
