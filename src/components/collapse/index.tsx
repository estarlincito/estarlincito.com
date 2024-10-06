'use client';
import useCollapse from '@/Hooks/useCollapse';
import IconButton from '@UI/Iconbutton';
import * as Icons from '@radix-ui/react-icons';
import { Box, Flex, Grid, Link } from '@radix-ui/themes';
import DarkmodeToggle from '../darkmode-toggle';
import Nav from './nav';
import Quote from './quote';

const Collapse = () => {
  const { collapse, offCollapse } = useCollapse();

  return (
    <>
      {collapse === 'ON' ? (
        <Grid
          position='fixed'
          left='0'
          top='0'
          p='4'
          width={{ initial: '70vw', md: '50vw', lg: '30vw' }}
          height='90vh'
          style={{
            zIndex: 3,
            backgroundColor: 'var(--gray-1)',
            borderRadius: '0px 0px 10px 0px',
            borderRight: '1px solid var(--gray-5)',
            borderBottom: '1px solid var(--gray-5)',
          }}
        >
          <Flex direction='row' align='stretch' justify='between'>
            <IconButton onClick={offCollapse}>
              <Icons.Cross1Icon />
            </IconButton>

            <Link href='/' target='_self' onClick={offCollapse}>
              {/* <Logo /> */}
            </Link>
          </Flex>

          <Box className='ml-2'>
            <Nav />
          </Box>

          <Box className='ml-2'>
            <Quote />
          </Box>

          <Box className='self-end'>
            <DarkmodeToggle />
          </Box>
        </Grid>
      ) : null}
    </>
  );
};

export default Collapse;
