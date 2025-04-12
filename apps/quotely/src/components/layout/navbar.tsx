import { quotely } from '@repo/constants';
import { getPathname } from '@repo/lib';
import { Navbar as NavbarP } from '@repo/ui';
import { headers } from 'next/headers';

const Navbar = async () => {
  const pathname = await getPathname(headers);

  return (
    <NavbarP
      hireme={quotely.hireme.allLinks}
      logo='/assets/favicons/android-chrome-512x512.png'
      pathname={pathname}
      siteMap={quotely.siteMap}
      siteName={quotely.siteName}
      url={quotely.url}
    />
  );
};

export default Navbar;
