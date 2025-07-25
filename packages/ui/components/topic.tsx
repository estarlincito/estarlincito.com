import { Badge } from '@repo/ui/components/badge';
import { Box } from '@repo/ui/components/box';
import { cn } from '@repo/ui/lib/utils';
import React from 'react';

export const Topic = (props: React.ComponentProps<typeof Box>) => (
  <Box {...props} />
);

interface TopicContentProps extends React.ComponentProps<typeof Box> {
  unstyled?: boolean;
}

export const TopicContent = (props: TopicContentProps) => (
  <Box
    {...props}
    className={cn(
      props.className,
      !props.unstyled && 'inline-flex flex-wrap gap-1 justify-center',
    )}
  />
);

export const TopicItem = (props: React.ComponentProps<typeof Badge>) => (
  <Badge {...props} />
);
