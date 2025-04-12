import { copyright as copyright_, isDev, num } from '@estarlincito/utils';

export const copyright = copyright_(num('2023'));
export const locale = 'en-US';
export const siteName = 'Estarlincito';
export const theme = 'light';
export const url = isDev ? 'http://localhost:3000' : 'https://estarlincito.com';
export const version = '1.0.0';
