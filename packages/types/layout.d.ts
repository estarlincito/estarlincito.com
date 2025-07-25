import { LocalesParams } from '@repo/content/utils/locales';
import type { ReactNode } from 'react';

export interface LayoutProps extends LocalesParams {
  children: ReactNode;
}
