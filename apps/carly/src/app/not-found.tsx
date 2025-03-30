import { carly } from '@repo/constants';
import { notFoundMeta, NotFoundPage } from '@repo/ui';

const { locale, siteName, url } = carly;

export const metadata = notFoundMeta({ locale, siteName, url });
export default NotFoundPage;
