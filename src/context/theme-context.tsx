'use client';
import { useLocalStorage } from '@/Hooks';
import { ChildrenProps, Theme } from '@/types';
import { createContext } from 'react';

//Types
interface ThemeContext {
  currentTheme: Theme;
  setCurrentTheme: (currentTheme: Theme) => void;
}

export const ThemeContext = createContext({} as ThemeContext);

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
