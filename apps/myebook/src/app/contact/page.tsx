import { imwriting } from '@repo/constants';
import { contactMeta, ContactPage } from '@repo/ui';
const { locale, siteName, url } = imwriting;
export const metadata = contactMeta({ locale, siteName, url });
export default ContactPage;
