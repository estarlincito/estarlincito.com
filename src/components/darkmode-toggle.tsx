'use client';
import useTheme from '@/Hooks/useTheme';
import * as Icons from '@radix-ui/react-icons';
import IconButton from './UI/Iconbutton';

const DarkmodeToggle = () => {
  const { currentTheme, themeToggle } = useTheme();
  return (
    <>
      {currentTheme === 'dark' ? (
        <IconButton onClick={themeToggle}>
          <Icons.SunIcon width='18' height='18' />
        </IconButton>
      ) : (
        <IconButton onClick={themeToggle}>
          <Icons.MoonIcon width='18' height='18' />
        </IconButton>
      )}
    </>
  );
};
export default DarkmodeToggle;
