import { cn } from '@repo/ui/lib/utils';
import type { HTMLAttributes } from 'react';

interface StrongProps extends HTMLAttributes<HTMLElement> {
  unstyled?: boolean;
}

export const Strong = ({ unstyled, children, className }: StrongProps) => (
  <strong className={cn(!unstyled && '', className)}>{children}</strong>
);
