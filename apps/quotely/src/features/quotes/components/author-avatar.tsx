import { Avatar } from '@repo/ui/components/avatar';
import type { ComponentProps } from 'react';

export const AuthorAvatar = ({
  fallback,
  src,
}: ComponentProps<typeof Avatar>) => (
  <Avatar
    className='m-auto w-40 h-40 rounded-full'
    fallback={fallback[0] ?? 'A'}
    src={src}
  />
);
