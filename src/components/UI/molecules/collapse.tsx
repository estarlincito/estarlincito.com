'use client';
import { DarkmodeToggle, Logo } from '@UI/atoms';
import { Button, Linkdoc } from '@/components/HOC';
import { useCollapse } from '@/Hooks';
import { TbX } from 'react-icons/tb';
import Highlight from './highlight';
import { sitemap } from '@/lib';
import clsx from 'clsx';

const Collapse = () => {
  const { collapse, offCollapse } = useCollapse();

  return (
    <>
      {collapse === 'ON' ? (
        <div
          className={clsx(
            'grid grid-cols-8 grid-rows-6',
            'left-0 top-0 fixed w-[70vw] h-[90vh] rounded-br-md z-20 p-5',
            'sm:w-[50vw] md:w-[40vw] lg:w-[27vw]',
            'bg-inherit',
            'border-b-[1px] border-r-[1px] border-gray-300 dark:border-gray-800'
          )}
        >
          {/* close button */}
          <Button onClick={offCollapse} className='flex text-2xl'>
            <TbX />
          </Button>

          <div className='col-start-8 row-start-1'>
            <Linkdoc href='/' target='_self' onClick={offCollapse}>
              <Logo />
            </Linkdoc>
          </div>
          {/* links */}
          <ul className='col-start-2 row-start-2'>
            {sitemap.map((link, id) => (
              <li key={id}>
                <Linkdoc target='_self' onClick={offCollapse} href={link.route}>
                  {link.label}
                </Linkdoc>
              </li>
            ))}
          </ul>

          {/* highlight */}
          <div className='col-start-2 row-start-3 pt-16 col-span-6'>
            <Highlight />
          </div>

          {/* dark Toggle */}
          <div className='col-start-1 row-start-6'>
            <DarkmodeToggle />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Collapse;
