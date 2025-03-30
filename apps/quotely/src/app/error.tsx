'use client';
import { ObjectUtils } from '@estarlincito/utils';
import { quotely } from '@repo/constants';
import { errorMeta, ErrorPage } from '@repo/ui';

const meta = ObjectUtils.getKeys(quotely, ['locale', 'siteName', 'url']);

export const metadata = errorMeta(meta);
export default ErrorPage;
