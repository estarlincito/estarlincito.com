'use client';
import { quotely } from '@repo/constants';
import { ThemeProvider } from 'next-themes';

import type Props from '@/types/children';

const AppThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider attribute='class' defaultTheme={quotely.theme}>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
