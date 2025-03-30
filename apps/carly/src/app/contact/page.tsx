import { carly } from '@repo/constants';
import { contactMeta, ContactPage } from '@repo/ui';

const { locale, siteName, url } = carly;

export const metadata = contactMeta({ locale, siteName, url });
export default ContactPage;
