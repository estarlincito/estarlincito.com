'use client';
import { TbMoon, TbSun } from 'react-icons/tb';

import { Button } from '@/components/HOC';
import { useTheme } from '@/Hooks';

const DarkmodeToggle = () => {
  const { currentTheme, themeToggle } = useTheme();
  return (
    <>
      {currentTheme === 'dark' ? (
        <Button onClick={themeToggle} className='text-2xl'>
          <TbSun />
        </Button>
      ) : (
        <Button onClick={themeToggle} className='text-2xl'>
          <TbMoon />
        </Button>
      )}
    </>
  );
};
export default DarkmodeToggle;
