'use client';
import { Box, Grid } from '@repo/ui';
import stylez from '@stylezjs/stylez';

import useCollapse from '@/Hooks/useCollapse';

import DarkModeToggle from '../../ui/darkmode-toggle';
import Nav from './nav';
import Quote from './quote';

const styles = stylez.create({
  backgroundColor: 'var(--gray-1)',
  borderBottom: '1px solid var(--gray-5)',
  borderRadius: '0px 0px 10px 0px',
  borderRight: '1px solid var(--gray-5)',
  zIndex: 3,
});

export const Collapse = () => {
  const { collapse } = useCollapse();

  return (
    collapse && (
      <Grid
        height='100vh'
        left='0'
        p='4'
        position='fixed'
        top='9'
        width={{ initial: '70vw', lg: '30vw', md: '50vw' }}
        {...stylez.className(styles)}
        align='center'
      >
        <Box ml='1'>
          <Nav />
        </Box>
        <Box ml='1'>
          <Quote />
        </Box>
        <Box>
          <DarkModeToggle />
        </Box>
      </Grid>
    )
  );
};
