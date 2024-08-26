import * as Icons from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import IconButton from './UI/Iconbutton';

const DarkmodeToggle = () => {
  const { setTheme, theme } = useTheme();

  const themeToggle = () => {
    const _currentTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(_currentTheme);
  };

  return (
    <>
      {theme === 'dark' ? (
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
