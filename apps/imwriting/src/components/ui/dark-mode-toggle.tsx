import * as Icons from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import IconButton from '@/components/ui/Icon-button';

const DarkModeToggle = () => {
  const { setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  //Ensure the component is only rendered after the client has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themeToggle = (): void => {
    const _currentTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(_currentTheme);
  };

  return (
    <IconButton variant='soft' onClick={themeToggle}>
      {theme === 'dark' ? (
        <Icons.SunIcon width='18' height='18' />
      ) : (
        <Icons.MoonIcon width='18' height='18' />
      )}
    </IconButton>
  );
};
export default DarkModeToggle;
