import { Box } from '@repo/ui/components/box';
import type { ReactNode } from 'react';

export const Empty = ({ children }: { children: ReactNode }) => (
  <Box>{children}</Box>
);
