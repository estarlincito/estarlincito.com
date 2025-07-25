import { cn } from '@repo/ui/lib/utils';
import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  unstyled?: boolean;
}

export const Section = ({ unstyled, className, ...props }: SectionProps) => (
  <section
    className={cn(!unstyled && 'flex flex-col gap-y-5 mt-16', className)}
    {...props}
  />
);
