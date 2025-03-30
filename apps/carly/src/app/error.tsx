'use client';
import { carly } from '@repo/constants';
import { errorMeta, ErrorPage } from '@repo/ui';
const { locale, siteName, url } = carly;

export const metadata = errorMeta({ locale, siteName, url });
export default ErrorPage;
