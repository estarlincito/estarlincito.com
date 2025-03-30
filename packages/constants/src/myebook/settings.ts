import { copyright as copyright_, isDev } from '@estarlincito/utils';

export const copyright = copyright_(2023);
export const locale = 'en-US';
export const siteName = 'MyEbook';
export const theme = 'system';
export const url = isDev
  ? 'http://localhost:3000'
  : 'https://myebook.estarlincito.com';
export const version = '1.0.0';
