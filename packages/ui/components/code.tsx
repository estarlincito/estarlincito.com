import { cn } from '@repo/ui/lib/utils';
import React from 'react';

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  unstyled?: boolean;
}

export const Code = ({ unstyled, className, ...props }: CodeProps) => (
  <code className={cn(!unstyled && '', className)} {...props} />
);
