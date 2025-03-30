'use client';
import { imwriting } from '@repo/constants';
import { ThemeProvider } from 'next-themes';
import React from 'react';

import Props from '@/types/children';

const AppThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider attribute='class' defaultTheme={imwriting.theme}>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
