'use client';
import { estarlincito } from '@repo/constants';
import { ThemeProvider } from 'next-themes';

import type Children from '@/types/children';
const { theme } = estarlincito;

const AppThemeProvider = (props: Children) => {
  return (
    <ThemeProvider attribute='class' defaultTheme={theme}>
      {props.children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
