'use client';
import useLocalStorage from '@/Hooks/useLocalstorage';
import ChildrenProps from '@/types/children';
import Theme from '@/types/theme';
import { createContext } from 'react';

interface ThemeContext {
  currentTheme: Theme;
  setCurrentTheme: (currentTheme: Theme) => void;
}

export const ThemeContext = createContext({} as ThemeContext);

export const ThemeProvider = (props: ChildrenProps) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage<Theme>(
    'theme',
    'light'
  );

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
