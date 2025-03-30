import { ObjectUtils } from '@estarlincito/utils';
import { imwriting } from '@repo/constants';
import { notFoundMeta, NotFoundPage } from '@repo/ui';

const meta = ObjectUtils.getKeys(imwriting, ['locale', 'siteName', 'url']);
export const metadata = notFoundMeta(meta);
export default NotFoundPage;
