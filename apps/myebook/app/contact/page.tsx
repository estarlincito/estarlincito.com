import { locale, siteName, url } from '@app/myebook/settings';
import { contactMeta, ContactPage } from '@repo/ui/pages/contact';

export const metadata = contactMeta({ locale, siteName, url });
export default ContactPage;
