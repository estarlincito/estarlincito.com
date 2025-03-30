'use client';
import { ObjectUtils } from '@estarlincito/utils';
import { accounts } from '@repo/constants';
import { errorMeta, ErrorPage } from '@repo/ui';

const meta = ObjectUtils.getKeys(accounts, ['locale', 'siteName', 'url']);
export const metadata = errorMeta(meta);
export default ErrorPage;
