'use client';
import { DarkmodeToggle, HireMeLink, MenuToggle, TwitterLink } from '@UI/atoms';

const Navbar = () => {
  return (
    <nav className='grid items-center h-16 grid-cols-5 select-none '>
      <menu className='col-start-1 ml-5'>
        <MenuToggle />
      </menu>

      <ul className='grid justify-end grid-flow-col col-start-5 mr-5 gap-x-3'>
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
