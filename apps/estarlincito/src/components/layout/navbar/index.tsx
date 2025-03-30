'use client';
import { Flex } from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';

import TwitterLink from '@/components/layout/navbar/twitterlink';
import DarkModeToggle from '@/components/ui/darkmode-toggle';
import type Children from '@/types/children';

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
  const Nav = ({ children }: Children) => {
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
        {...stylez.className(styles)}
      >
        <nav>{children}</nav>
      </Flex>
    );
  };

  interface UlProps extends Children {
    m: 'r' | 'l';
  }

  const Ul = ({ m, children }: UlProps) => {
    return (
      <Flex
        direction='row'
        mr={m === 'r' ? '5' : '0'}
        ml={m === 'l' ? '5' : '0'}
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
        <DarkModeToggle />
        <HireMeLink />
        <TwitterLink />
      </Ul>
    </Nav>
  );
};
