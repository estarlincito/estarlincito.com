'use client';
import { imwriting } from '@repo/constants';
import { errorMeta, ErrorPage } from '@repo/ui';
const { locale, siteName, url } = imwriting;
export const metadata = errorMeta({ locale, siteName, url });
export default ErrorPage;
