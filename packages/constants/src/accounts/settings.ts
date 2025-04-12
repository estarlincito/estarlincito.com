import { copyright as copyright_, isDev, num } from '@estarlincito/utils';

export const copyright = copyright_(num('2023'));
export const locale = 'en-US';
export const siteName = 'Estarlincito';
export const theme = 'system';
export const url = isDev
  ? 'http://localhost:3005'
  : 'https://accounts.estarlincito.com';
export const version = '1.0.0';
