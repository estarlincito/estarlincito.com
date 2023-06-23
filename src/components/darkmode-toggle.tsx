'use client';
import Button from '@/components/UI/button';
import useTheme from '@/Hooks/useTheme';

import { TbMoon, TbSun } from 'react-icons/tb';

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
