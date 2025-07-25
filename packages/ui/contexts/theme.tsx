'use client';
import { ThemeProvider } from 'next-themes';
import type { ComponentProps } from 'react';

export const AppThemeProvider = (
  props: ComponentProps<typeof ThemeProvider>,
) => <ThemeProvider enableSystem attribute='class' {...props} />;
