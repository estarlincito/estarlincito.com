import * as Icons from '@radix-ui/react-icons';
import { useIsClient } from '@repo/hooks';
import { IconButton } from '@repo/ui';
import { useTheme } from 'next-themes';

const DarkModeToggle = () => {
  const { setTheme, theme } = useTheme();

  const isClient = useIsClient();
  if (!isClient) return null;

  const themeToggle = () => {
    const _currentTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(_currentTheme);
  };

  return (
    <IconButton variant='soft' onClick={themeToggle}>
      {theme === 'dark' ? (
        <Icons.SunIcon height='18' width='18' />
      ) : (
        <Icons.MoonIcon height='18' width='18' />
      )}
    </IconButton>
  );
};
export default DarkModeToggle;
