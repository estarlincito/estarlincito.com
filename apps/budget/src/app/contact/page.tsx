import { ObjectUtils } from '@estarlincito/utils';
import { budget } from '@repo/constants';
import { contactMeta, ContactPage } from '@repo/ui';
const meta = ObjectUtils.getKeys(budget, ['locale', 'siteName', 'url']);
export const metadata = contactMeta(meta);
export default ContactPage;
