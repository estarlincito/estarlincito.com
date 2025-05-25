// import { Separator } from '@repo/ui/components/separator';
import { Brand } from '@repo/ui/components/brand';
import { Navigation } from '@repo/ui/layouts/navbar/navigation';
import { cn } from '@repo/ui/lib/utils';
import React from 'react';

type NavbarProps = Pick<React.ComponentProps<typeof Navigation>, 'routes'> &
  Pick<React.ComponentProps<typeof Brand>, 'siteName'>;

export const Navbar = ({ routes, siteName }: NavbarProps) => (
  <>
    <nav
      className={cn(
        'flex items-center justify-between p-3',
        'fixed z-1',
        'top-0 right-0 left-0',
        'bg-white dark:bg-gray-950',

        'h-20',
      )}
    >
      <Brand siteName={siteName} />
      <Navigation routes={routes} />
    </nav>

    <div className='h-20'>{/* <Separator /> */}</div>
  </>
);
