import { Brand } from '@repo/ui/components/brand';
import { Flex } from '@repo/ui/layouts/flex';
import { Navigation } from '@repo/ui/layouts/navbar/navigation';
import { cn } from '@repo/ui/lib/utils';
import type { ComponentProps } from 'react';

type NavbarProps = ComponentProps<typeof Navigation> &
  ComponentProps<typeof Brand>;

export const Navbar = ({ menuLinks, siteName, lng }: NavbarProps) => (
  <>
    <Flex
      className={cn(
        'items-center justify-between p-3',
        'fixed z-1',
        'top-0 right-0 left-0',
        'bg-white dark:bg-gray-950',
        'h-20',
      )}
    >
      <Brand lng={lng} siteName={siteName} />
      <Navigation menuLinks={menuLinks} siteName={siteName} />
    </Flex>

    <div className='h-20' />
  </>
);
