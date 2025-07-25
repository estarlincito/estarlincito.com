'use client';
import { Box } from '@repo/ui/components/box';
import { Brand } from '@repo/ui/components/brand';
import { buttonVariants } from '@repo/ui/components/button';
import { LocaleSwitcher } from '@repo/ui/components/locale-switcher';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@repo/ui/components/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@repo/ui/components/sheet';
import { ThemeSwitcher } from '@repo/ui/components/theme-switcher';
import { Flex } from '@repo/ui/layouts/flex';
import { cn } from '@repo/ui/lib/utils';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavigationProps {
  siteName: string;
  menuLinks: {
    label: string;
    route: string;
  }[];
}
export const Navigation = ({ menuLinks, siteName }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      setPath(`${window.location.pathname}${window.location.hash}`);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const Routes = () =>
    menuLinks.length > 0 &&
    menuLinks.map(({ label, route }) => (
      <NavigationMenuItem key={route}>
        <NavigationMenuLink data-active={path === route} href={route}>
          {label}
        </NavigationMenuLink>
      </NavigationMenuItem>
    ));

  return (
    <>
      {/* Desktop Navigation */}
      <NavigationMenu className='hidden md:block'>
        <NavigationMenuList className='gap-4'>
          <Routes />
          <ThemeSwitcher />
          <LocaleSwitcher />
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger
          aria-label='Open menu'
          className={cn(
            'md:hidden',
            buttonVariants({ size: 'icon', variant: 'ghost' }),
          )}
        >
          <MenuIcon className='h-6 w-6' />
        </SheetTrigger>

        <SheetContent className='w-[250px] pt-12' side='right'>
          <Box className='ml-5'>
            <Brand siteName={siteName} />
          </Box>
          <NavigationMenu className='flex h-full'>
            <NavigationMenuList className='flex-col items-start gap-2 w-full p-3'>
              <Routes />
            </NavigationMenuList>
          </NavigationMenu>
          <Flex className='p-5 gap-x-1'>
            <ThemeSwitcher />
            <LocaleSwitcher />
          </Flex>
        </SheetContent>
        <SheetTitle className='hidden' />
      </Sheet>
    </>
  );
};
