'use client';
import DarkmodeToggle from '@/components/darkmode-toggle';
import TwitterLink from '@/components/navbar/twitterlink';
import { Flex } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Brand from './brand';
import HireMeLink from './hiremelink';
import MenuToggle from './menu-toggle';
import styled from './navbar.module.scss';

const Navbar = () => {
  const [title, setTitle] = useState('');
  const path = usePathname();

  useEffect(() => {
    if (path.split('/').length > 4) {
      setTitle('Artículo');
    } else {
      setTitle(document.title);
    }
  }, [path]);

  return (
    <nav className={styled.nav}>
      <Flex direction='row' ml='5' align='center' gap='5'>
        <MenuToggle />
        <Brand />
      </Flex>

      <Flex direction='row' mr='5' align='center' gap='5'>
        <DarkmodeToggle />
        <HireMeLink />
        <TwitterLink />
      </Flex>
    </nav>
  );
};

export default Navbar;
