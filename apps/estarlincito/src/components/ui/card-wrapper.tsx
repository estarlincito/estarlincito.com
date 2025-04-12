import { Grid } from '@repo/ui';
import type { ReactNode } from 'react';

const CardWrapper = ({ children }: { children: ReactNode }) => (
  <Grid columns='repeat(auto-fill, 280px)' gap='3' justify='center'>
    {children}
  </Grid>
);

export default CardWrapper;
