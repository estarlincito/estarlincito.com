'use client';
import { estarlincito } from '@repo/constants';
import { errorMeta, ErrorPage } from '@repo/ui';
const { locale, siteName, url } = estarlincito;
export const metadata = errorMeta({ locale, siteName, url });
export default ErrorPage;
