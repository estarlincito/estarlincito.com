import { ObjectUtils } from '@estarlincito/utils';
import { quotely } from '@repo/constants';
const meta = ObjectUtils.getKeys(quotely, ['locale', 'siteName', 'url']);

import { contactMeta, ContactPage } from '@repo/ui';
export const metadata = contactMeta(meta);
export default ContactPage;
