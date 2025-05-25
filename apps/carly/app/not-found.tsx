import { locale, siteName, url } from '@app/carly/settings';
import { notFoundMeta, NotFoundPage } from '@repo/ui/pages/not-found';

export const metadata = notFoundMeta({ locale, siteName, url });
export default NotFoundPage;
