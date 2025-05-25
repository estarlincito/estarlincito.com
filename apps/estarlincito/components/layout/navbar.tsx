// import { ESTARLINCITO_ROUTES } from '@app/estarlincito/constants/paths';
import { url as accountsUrl } from '@app/accounts/settings';
import { siteName, url } from '@app/estarlincito/settings';
import { getPathname } from '@repo/lib/pathname';
import type { LinksType } from '@repo/types';
import { Breadcrumb } from '@repo/ui/components/breadcrumb';
import { Button } from '@repo/ui/components/button';
import { Link } from '@repo/ui/components/link';
import { SidebarInset, SidebarTrigger } from '@repo/ui/components/sidebar';
import { Flex } from '@repo/ui/layouts/flex';
import { cn } from '@repo/ui/lib/utils';
import { headers } from 'next/headers';

export const Navbar = async () => {
  const path = await getPathname(headers);
  const paths = path.split('/');

  if (paths.includes('')) {
    paths.shift();
  }

  const routes = paths.map((route) => {
    let label = '';
    if (route[0]) label = route.replace(route[0], route[0].toUpperCase());

    return {
      label,
      route: `/${route}`,
    };
  });

  return (
    <SidebarInset>
      <header
        className={cn(
          'flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 px-4',
          // 'border-b',
        )}
      >
        <SidebarTrigger className='-ml-1' />
        {/* <Separator className='mr-2 h-4' orientation='vertical' /> */}
        <Flex className='justify-between w-full items-center'>
          {path === '/' || path === '/about' || path === '/contact' ? (
            <Link className='font-bold p-0 h-fit' variant='default'>
              {siteName}
            </Link>
          ) : (
            <Breadcrumb links={routes as LinksType} pathname='/portfolio' />
          )}

          <Button asChild className='font-bold' variant='ghost'>
            <Link
              route={`${accountsUrl}/signin?redirect=${url}`}
              variant='default'
            >
              Sign in
            </Link>
          </Button>
        </Flex>
      </header>
    </SidebarInset>
  );
};
