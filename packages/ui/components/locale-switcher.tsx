'use client';
import { Button } from '@repo/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/ui/components/dropdown-menu';
import { useClient } from '@repo/ui/hooks/useClient';
import { Languages } from 'lucide-react';
import { useRouter } from 'next/navigation';

const locales = { en: 'English', es: 'Español' };

export const LocaleSwitcher = () => {
  const isClient = useClient();
  const router = useRouter();

  const setLocale = (lang: string) => {
    if (isClient) {
      document.cookie = `locale=${lang}; path=/`;
      const { pathname } = window.location;
      const { search } = window.location;
      const { hash } = window.location;
      const currentPath = `${pathname}${search}${hash}`;
      const newPath = currentPath.replace(/^\/(en|es)/, `/${lang}`);

      router.push(newPath);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='outline'>
          <Languages />
          <span className='sr-only'>Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {Object.entries(locales).map(([key, value]) => (
          <DropdownMenuItem key={key} onClick={() => setLocale(key)}>
            {value}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
