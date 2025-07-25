import { cn } from '@repo/ui/lib/utils';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import I from 'next/image';
interface ImageProps {
  className?: string;
  src: string;
  alt: string;
  key?: string | number;
  fill?: boolean;
  width?: number;
  height?: number;
  unstyled?: boolean;
}

export const Image = ({
  height = 800,
  width = 1200,
  className,
  unstyled,
  ...props
}: ImageProps) => (
  <I
    {...props}
    className={cn(
      className,
      !unstyled && 'w-full h-full object-cover object-top',
    )}
    height={height}
    width={width}
  />
);
