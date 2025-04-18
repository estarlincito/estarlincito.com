import { copyright as copyright_, isDev, num } from '@estarlincito/utils';

export const copyright = copyright_(num('2023'));
export const locale = 'en-US';
export const siteName = 'Carly';
export const theme = 'system';
export const url = isDev
  ? 'http://localhost:3003'
  : 'https://carly.estarlincito.com';
export const version = '1.0.0';
