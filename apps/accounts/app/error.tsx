'use client';
import { locale, siteName, url } from '@app/accounts/settings';
import { errorMeta, ErrorPage } from '@repo/ui/pages/error';
export const metadata = errorMeta({ locale, siteName, url });
export default ErrorPage;
