import { siteName } from '@repo/content/accounts/settings';
import { Brand } from '@repo/ui/components/brand';

const Navbar = () => (
  <nav className='p-5'>
    <Brand siteName={siteName} />
  </nav>
);

export default Navbar;
