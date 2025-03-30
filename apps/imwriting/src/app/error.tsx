'use client';
import { ObjectUtils } from '@estarlincito/utils';
import { imwriting } from '@repo/constants';
import { errorMeta, ErrorPage } from '@repo/ui';

const meta = ObjectUtils.getKeys(imwriting, ['locale', 'siteName', 'url']);

export const metadata = errorMeta(meta);
export default ErrorPage;
