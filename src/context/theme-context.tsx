'use client';
import { useLocalStorage } from '@/Hooks';
import { Children, Theme } from '@/types';
import { createContext } from 'react';

//set context
interface Context {
  currentTheme: Theme;
  setCurrentTheme: (currentTheme: Theme) => void;
}

export const ThemeContext = createContext({} as Context);

export const ThemeProvider: React.FC<Children> = ({ children }) => {
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
