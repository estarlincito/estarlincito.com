import { estarlincito } from '@repo/constants';
import { notFoundMeta, NotFoundPage } from '@repo/ui';
const { locale, siteName, url } = estarlincito;
export const metadata = notFoundMeta({ locale, siteName, url });
export default NotFoundPage;
