import { Grid } from '@repo/ui/layouts/grid';
import type { ReactNode } from 'react';

export const CardWrapper = ({ children }: { children: ReactNode }) => (
  <Grid className='grid-cols-[repeat(auto-fill,280px)] gap-3 justify-center'>
    {children}
  </Grid>
);
