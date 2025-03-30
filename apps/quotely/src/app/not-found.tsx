import { quotely } from '@repo/constants';
import { notFoundMeta, NotFoundPage } from '@repo/ui';

const { locale, siteName, url } = quotely;

export const metadata = notFoundMeta({ locale, siteName, url });
export default NotFoundPage;
