'use client';
import { carly } from '@repo/constants';
import { ThemeProvider } from 'next-themes';
import type React from 'react';

import type Children from '@/types/children';

const AppThemeProvider: React.FC<Children> = ({ children }) => {
  return (
    <ThemeProvider attribute='class' defaultTheme={carly.theme}>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
