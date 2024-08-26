'use client';
import ChildrenProps from '@/types/children';
import { ThemeProvider } from 'next-themes';

const AppThemeProvider = (props: ChildrenProps) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='light'>
      {props.children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
