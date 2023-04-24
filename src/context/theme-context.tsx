'use client';
import { useLocalStorage } from '@/Hooks';
import { ChildrenProps, Theme, ThemeContextValue } from '@/types';
import { createContext } from 'react';

//set context

export const ThemeContext = createContext({} as ThemeContextValue);

export const ThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage<Theme>(
    'theme',
    'light'
  );

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
