'use client';
import { ThemeProvider } from 'next-themes';
import React from 'react';

import ChildrenProps from '@/types/children';

const AppThemeProvider = ({ children }: ChildrenProps) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
