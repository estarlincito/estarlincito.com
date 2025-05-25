'use client';
import { buttonVariants } from '@repo/ui/components/button';
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
import { ThemeToggle } from '@repo/ui/components/theme-toggle';
import { Flex } from '@repo/ui/layouts/flex';
import { cn } from '@repo/ui/lib/utils';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavigationProps {
  routes: {
    label: string;
    route: string;
  }[];
}
export const Navigation = ({ routes }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [hash, setHash] = useState<string>('');
  const [path, setPath] = useState<string[]>([]);

  useEffect(() => {
    const handleHashChange = () => {
      // setHash(window.location.hash);
      setPath([window.location.hash, window.location.pathname]);
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const Routes = () =>
    routes.length > 0 &&
    routes.map(({ label, route }) => (
      <NavigationMenuItem key={route}>
        <NavigationMenuLink data-active={path.includes(route)} href={route}>
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
          <ThemeToggle />
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
          <NavigationMenu className='flex h-full'>
            <NavigationMenuList className='flex-col items-start gap-2 w-full p-3'>
              {/* {routes.map(({ label, route }) => (
                <NavigationMenuItem className='w-full' key={route}>
                  <NavigationMenuLink
                    data-active={path.includes(route)}
                    href={route}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))} */}
              <Routes />
            </NavigationMenuList>
          </NavigationMenu>
          <Flex className='p-5 gap-x-1'>
            <ThemeToggle />
            {/* <Button size='icon' variant='outline'>
              <UserRoundCog />
            </Button> */}
          </Flex>
        </SheetContent>
        <SheetTitle className='hidden' />
      </Sheet>
    </>
  );
};
