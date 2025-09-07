import type { MenuLinks } from '@repo/content/estarlincito/routes';
import { host, siteName } from '@repo/content/estarlincito/settings';
import { Breadcrumb } from '@repo/ui/components/breadcrumb';
import { Button } from '@repo/ui/components/button';
import { Link } from '@repo/ui/components/link';
import { SidebarInset, SidebarTrigger } from '@repo/ui/components/sidebar';
import { Flex } from '@repo/ui/layouts/flex';
import { cn } from '@repo/ui/lib/utils';
import { getPathname } from '@repo/utils/pathname';
import { headers } from 'next/headers';

const toBreadcrumb = (path: string, menuLinks: MenuLinks) => {
  let active = '';
  const links = [];

  const allLinks = [
    ...menuLinks.application.items,
    ...menuLinks.projects.items,
    { label: menuLinks.projects.label, route: menuLinks.projects.route },
  ];

  for (const { label, route } of allLinks) {
    // set home
    if (route === `/${menuLinks.lng}`) links.push({ label, route });

    // set active
    if (route === path) active = label;

    // resolving doble links
    const paths = path.split('/');
    if (paths.length > 3) {
      if (route === paths.slice(0, 3).join('/')) links.push({ label, route });
    }
  }

  return {
    active,
    links,
  };
};

export const Navbar = async (menuLinks: MenuLinks) => {
  const path = await getPathname(headers);
  const breadcrumb = toBreadcrumb(path, menuLinks);

  return (
    <SidebarInset>
      <header
        className={cn(
          'flex sticky top-0 h-16 shrink-0 px-4',
          'items-center gap-2',
          'bg-background',
        )}
      >
        <SidebarTrigger className='-ml-1' />
        <Flex className='justify-between w-full items-center'>
          {path === `/${menuLinks.lng}` ? (
            <Link
              className='font-bold p-0 h-fit'
              route={`${host}/${menuLinks.lng}`}
              variant='default'
            >
              {siteName}
            </Link>
          ) : (
            <Breadcrumb {...breadcrumb} />
          )}

          <Button asChild className='font-bold' variant='ghost'>
            <Link variant='default' {...menuLinks.cta} />
          </Button>
        </Flex>
      </header>
    </SidebarInset>
  );
};
