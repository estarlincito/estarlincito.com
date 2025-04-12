import { imwriting } from '@repo/constants';
import { getPathname } from '@repo/lib';
import { Navbar as Nav } from '@repo/ui';
import { headers } from 'next/headers';

const Navbar = async () => {
  const pathname = await getPathname(headers);

  return (
    <Nav
      hireme={imwriting.hireme.allLinks}
      logo='/assets/favicons/android-chrome-512x512.png'
      pathname={pathname}
      siteMap={imwriting.siteMap}
      siteName={imwriting.siteName}
      url={imwriting.url}
    />
  );
};

export default Navbar;
