import { ObjectUtils } from '@estarlincito/utils';
import { imwriting } from '@repo/constants';
const meta = ObjectUtils.getKeys(imwriting, ['locale', 'siteName', 'url']);

import { contactMeta, ContactPage } from '@repo/ui';
export const metadata = contactMeta(meta);
export default ContactPage;
