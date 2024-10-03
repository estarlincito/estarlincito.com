'use client';
import DarkmodeToggle from '@/components/darkmode-toggle';
import TwitterLink from '@/components/navbar/twitterlink';
import ChildrenProps from '@/types/children';
import { Flex } from '@radix-ui/themes';
import clsx from 'clsx';
import React from 'react';
import Brand from './brand';
import HireMeLink from './hiremelink';
import MenuToggle from './menu-toggle';

const Navbar = () => {
  const Nav = ({ children }: ChildrenProps) => {
    return (
      <Flex
        asChild
        justify='between'
        position='fixed'
        top='0'
        bottom='0'
        right='0'
        left='0'
        height='70px'
        style={{
          backgroundColor: 'var(--gray-1)',
          zIndex: 1,
          userSelect: 'none',
          borderBottom: '1px solid var(--gray-5)',
        }}
      >
        <nav>{children}</nav>
      </Flex>
    );
  };

  interface UlProps {
    m: 'r' | 'l';
    children: React.ReactNode;
  }
  const Ul = ({ m, children }: UlProps) => {
    return (
      <Flex
        direction='row'
        mr={clsx(m === 'r' ? '5' : '0')}
        ml={clsx(m === 'l' ? '5' : '0')}
        align='center'
        gap='5'
        asChild
      >
        <ul>{children}</ul>
      </Flex>
    );
  };

  return (
    <Nav>
      <Ul m='l'>
        <MenuToggle />
        <Brand />
      </Ul>

      <Ul m='r'>
        <DarkmodeToggle />
        <HireMeLink />
        <TwitterLink />
      </Ul>
    </Nav>
  );
};

export default Navbar;
