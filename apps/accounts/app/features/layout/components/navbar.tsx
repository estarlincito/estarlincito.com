import type { Locale } from '@repo/content/shared/locales';
import { Brand } from '@repo/ui/components/brand';

interface NavbarProps {
  lng: Locale;
  siteName: 'Estarlincito';
}

const Navbar = (props: NavbarProps) => (
  <nav className='p-5'>
    <Brand {...props} />
  </nav>
);

export default Navbar;
