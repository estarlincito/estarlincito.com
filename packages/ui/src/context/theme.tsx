'use client';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

export const AppThemeProvider = ({
  children,
  defaultTheme,
}: {
  children: ReactNode;
  defaultTheme: string;
}) => (
  <ThemeProvider attribute='class' defaultTheme={defaultTheme}>
    {children}
  </ThemeProvider>
);
