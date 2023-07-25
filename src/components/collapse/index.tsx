'use client';
import useCollapse from '@/Hooks/useCollapse';
import Button from '@/components/UI/button';
import Linkdoc from '@/components/UI/linkdoc';
import Logo from '@/components/logo';
import clsx from 'clsx';
import { TbX } from 'react-icons/tb';
import DarkmodeToggle from '../darkmode-toggle';
import Highlight from './highlight';
import Nav from './nav';

const Collapse = () => {
  const { collapse, offCollapse } = useCollapse();

  return (
    <>
      {collapse === 'ON' ? (
        <div
          className={clsx(
            'grid gap-y-5',
            'left-0 top-0 fixed w-[70vw] h-[90vh] rounded-br-md z-20 p-5',
            'sm:w-[50vw] md:w-[40vw] lg:w-[27vw]',
            'bg-inherit',
            'border-b-[1px] border-r-[1px] border-gray-300 dark:border-gray-800'
          )}
        >
          <div className='flex flex-row justify-between'>
            <Button onClick={offCollapse} className='flex text-2xl'>
              <TbX />
            </Button>

            <Linkdoc href='/' target='_self' onClick={offCollapse}>
              <Logo />
            </Linkdoc>
          </div>

          <div className='ml-2'>
            <Nav />
          </div>

          <div className='ml-2'>
            <Highlight />
          </div>

          <div className='self-end'>
            <DarkmodeToggle />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Collapse;
