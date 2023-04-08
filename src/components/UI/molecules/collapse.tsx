'use client';
import { TbX } from 'react-icons/tb';
import { DarkmodeToggle } from '@UI/atoms';
import { useCollapse } from '@/Hooks';
import { Button, _Link } from '@/components/HOC';
import { sitemap } from '@/utils';

const Collapse = () => {
  const { offCollapse } = useCollapse();

  return (
    <div className='left-0 top-0 fixed grid grid-cols-8 grid-rows-6 w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-[27vw] h-[90vh] rounded-br-md z-50 bg-gray-50 dark:bg-gray-900 shadow-sm p-5'>
      {/* close button */}
      <Button onClick={offCollapse} className='flex text-2xl'>
        <TbX />
      </Button>
      {/* links */}
      <ul className='col-start-2 row-start-2'>
        {sitemap.map((link, id) => (
          <li key={id}>
            <_Link target='_self' onClick={offCollapse} href={link.route}>
              {link.label}
            </_Link>
          </li>
        ))}
      </ul>

      {/* dark Toggle */}
      <div className='col-start-1 row-start-6'>
        <DarkmodeToggle />
      </div>
    </div>
  );
};

export default Collapse;
