import { ObjectUtils } from '@estarlincito/utils';
import { accounts } from '@repo/constants';
import { notFoundMeta, NotFoundPage } from '@repo/ui';

const meta = ObjectUtils.getKeys(accounts, ['locale', 'siteName', 'url']);
export const metadata = notFoundMeta(meta);
export default NotFoundPage;
