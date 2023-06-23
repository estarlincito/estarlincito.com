'use client';
import DarkmodeToggle from '@/components/darkmode-toggle';
import TwitterLink from '@/components/navbar/twitterlink';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Brand from './brand';
import HireMeLink from './hiremelink';
import MenuToggle from './menu-toggle';

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
    <nav
      className={clsx(
        'fixed left-0 right-0 top-0 grid items-center h-16 grid-cols-5 select-none',
        'border-b-[1px] border-gray-300 dark:border-gray-800',
        'backdrop-blur dark:bg-black/60 bg-white/60'
      )}
    >
      <div
        className={clsx(
          'col-start-1 col-span-2',
          'ml-5',
          'flex flex-row gap-x-5'
        )}
      >
        <MenuToggle />
        <Brand />
      </div>

      <ul
        className={clsx(
          'col-start-5',
          'grid  grid-flow-col justify-end gap-x-3 mr-5'
        )}
      >
        <li>
          <DarkmodeToggle />
        </li>

        <li>
          <HireMeLink />
        </li>
        <li>
          <TwitterLink />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
