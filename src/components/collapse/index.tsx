'use client';
import useCollapse from '@/Hooks/useCollapse';
import IconButton from '@UI/Iconbutton';
import * as Icons from '@radix-ui/react-icons';
import { Box, Flex, Link } from '@radix-ui/themes';
import DarkmodeToggle from '../darkmode-toggle';
import styled from './collapse.module.scss';
import Highlight from './highlight';
import Nav from './nav';

const Collapse = () => {
  const { collapse, offCollapse } = useCollapse();

  return (
    <>
      {collapse === 'ON' ? (
        <Box className={styled.collapse}>
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
            <Highlight />
          </Box>

          <Box className='self-end'>
            <DarkmodeToggle />
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default Collapse;
