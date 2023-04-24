'use client';
import { ThemeContext } from '@/context';
import { useContext } from 'react';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error('Check if ThemeContext code is corret');
  }
  const { currentTheme, setCurrentTheme } = themeContext;

  // add dark class to HTML
  currentTheme == 'dark' &&
    document.documentElement.classList.add(currentTheme);

  //Theme Toggle
  const themeToggle = () => {
    const _currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(_currentTheme);

    //remove dark class
    _currentTheme === 'light' &&
      document.documentElement.classList.remove('dark');
  };

  return { currentTheme, themeToggle };
};
