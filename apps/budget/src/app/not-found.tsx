import { ObjectUtils } from '@estarlincito/utils';
import { budget } from '@repo/constants';
import { notFoundMeta, NotFoundPage } from '@repo/ui';
const meta = ObjectUtils.getKeys(budget, ['locale', 'siteName', 'url']);
export const metadata = notFoundMeta(meta);
export default NotFoundPage;
