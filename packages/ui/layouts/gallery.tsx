import { Grid } from '@repo/ui/layouts/grid';
import { cn } from '@repo/ui/lib/utils';
import type { ComponentProps } from 'react';

interface GalleryProps extends ComponentProps<typeof Grid> {
  unstyled?: boolean;
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
}

export const Gallery = ({
  unstyled,
  className,
  size = '4',
  children,
  ...props
}: GalleryProps) => {
  const sizeMap = {
    // '1': 'grid-cols-[repeat(auto-fill,60px)]',
    // '2': 'grid-cols-[repeat(auto-fill,120px)]',
    // '3': 'grid-cols-[repeat(auto-fill,220px)]',
    // '4': 'grid-cols-[repeat(auto-fill,320px)]',
    // '5': 'grid-cols-[repeat(auto-fill,420px)]',
    // '6': 'grid-cols-[repeat(auto-fill,520px)]',
    // '7': 'grid-cols-[repeat(auto-fill,620px)]',
    // '8': 'grid-cols-[repeat(auto-fill,720px)]',
    '1': 'grid-cols-[repeat(auto-fill,minmax(40px,60px))]',
    '2': 'grid-cols-[repeat(auto-fill,minmax(60px,120px))]',
    '3': 'grid-cols-[repeat(auto-fill,minmax(80px,220px))]',
    '4': 'grid-cols-[repeat(auto-fill,minmax(100px,320px))]',
    '5': 'grid-cols-[repeat(auto-fill,minmax(120px,420px))]',
    '6': 'grid-cols-[repeat(auto-fill,minmax(140px,520px))]',
    '7': 'grid-cols-[repeat(auto-fill,minmax(160px,620px))]',
    '8': 'grid-cols-[repeat(auto-fill,minmax(180px,720px))]',
  };

  return (
    <Grid
      className={cn(
        !unstyled && 'gap-5 justify-center',
        sizeMap[size],
        className,
      )}
      {...props}
    >
      {children}
    </Grid>
  );
};
