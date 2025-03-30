import { Grid } from '@radix-ui/themes';

import type ChildrenProps from '@/types/children';

const CardWrapper = ({ children }: ChildrenProps) => {
  return (
    <Grid columns='repeat(auto-fill, 280px)' justify='center' gap='3'>
      {children}
    </Grid>
  );
};

export default CardWrapper;
