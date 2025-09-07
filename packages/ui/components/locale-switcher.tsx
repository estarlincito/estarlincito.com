'use client';
import type { Translations } from '@repo/content/shared/locales';
import { Button } from '@repo/ui/components/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@repo/ui/components/dropdown-menu';
import { Text } from '@repo/ui/components/text';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@repo/ui/components/tooltip';
import { useClient } from '@repo/ui/hooks/useClient';
import { useTranslation } from '@repo/ui/hooks/useTranslation';
import { Languages } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const LocaleSwitcher = () => {
  const isClient = useClient();
  const router = useRouter();
  const { translations } = useTranslation<Translations>();

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
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button size='icon' variant='outline'>
              <Languages />
              <span className='sr-only'>{translations.locales.tooltip}</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <Text>{translations.locales.tooltip}</Text>
        </TooltipContent>
      </Tooltip>

      <DropdownMenuContent align='end'>
        {Object.entries(translations.locales).map(
          ([key, value]) =>
            key !== 'tooltip' && (
              <DropdownMenuItem key={key} onClick={() => setLocale(key)}>
                {value}
              </DropdownMenuItem>
            ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
