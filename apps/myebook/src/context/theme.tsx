'use client';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

const AppThemeProvider = ({ children }: { children: ReactNode }) => (
  <ThemeProvider attribute='class' defaultTheme='system'>
    {children}
  </ThemeProvider>
);

export default AppThemeProvider;
