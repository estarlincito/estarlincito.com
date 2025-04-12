'use client';
import { accounts } from '@repo/constants';
import { ThemeProvider } from 'next-themes';

const AppThemeProvider = () => (
  <ThemeProvider attribute='class' defaultTheme={accounts.theme} />
);

export default AppThemeProvider;
