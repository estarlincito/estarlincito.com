import { estarlincito } from '@repo/constants';
import { contactMeta, ContactPage } from '@repo/ui';
const { locale, siteName, url } = estarlincito;
export const metadata = contactMeta({ locale, siteName, url });
export default ContactPage;
