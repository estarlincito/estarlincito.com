import { imwriting } from '@repo/constants';
import { notFoundMeta, NotFoundPage } from '@repo/ui';
const { locale, siteName, url } = imwriting;
export const metadata = notFoundMeta({ locale, siteName, url });
export default NotFoundPage;
