'use client';
import { Flex } from '@repo/ui';
import stylez from '@stylezjs/stylez';
import type { ReactNode } from 'react';

import TwitterLink from '@/components/layout/navbar/twitterlink';
import DarkModeToggle from '@/components/ui/darkmode-toggle';

import Brand from './brand';
import HireMeLink from './hiremelink';
import MenuToggle from './menu-toggle';

const styles = stylez.create({
  backgroundColor: 'var(--gray-1)',
  borderBottom: '1px solid var(--gray-5)',
  userSelect: 'none',
  zIndex: 1,
});

export const Navbar = () => {
  const Nav = ({ children }: { children: ReactNode }) => (
    <Flex
      asChild
      bottom='0'
      height='70px'
      justify='between'
      left='0'
      position='fixed'
      right='0'
      top='0'
      {...stylez.className(styles)}
    >
      <nav>{children}</nav>
    </Flex>
  );

  interface UlProps {
    m: 'r' | 'l';
    children: ReactNode;
  }

  const Ul = ({ m, children }: UlProps) => (
    <Flex
      asChild
      align='center'
      direction='row'
      gap='5'
      ml={m === 'l' ? '5' : '0'}
      mr={m === 'r' ? '5' : '0'}
    >
      <ul>{children}</ul>
    </Flex>
  );

  return (
    <Nav>
      <Ul m='l'>
        <MenuToggle />
        <Brand />
      </Ul>

      <Ul m='r'>
        <DarkModeToggle />
        <HireMeLink />
        <TwitterLink />
      </Ul>
    </Nav>
  );
};
