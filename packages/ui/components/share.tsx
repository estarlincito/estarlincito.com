'use client';
import type { Translations } from '@repo/content/shared/locales';
import { Button } from '@repo/ui/components/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@repo/ui/components/dialog';
import { Input } from '@repo/ui/components/input';
import { Label } from '@repo/ui/components/label';
import { Text } from '@repo/ui/components/text';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@repo/ui/components/tooltip';
import { useTranslation } from '@repo/ui/hooks/useTranslation';
import { cn } from '@repo/ui/lib/utils';
import { Share2 } from 'lucide-react';
import type { ComponentProps } from 'react';

interface ShareProps extends ComponentProps<typeof Button> {
  route: string;
}

export const Share = ({ variant = 'ghost', className, route }: ShareProps) => {
  const { translations } = useTranslation<Translations>();

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              className={cn('w-fit cursor-pointer', className)}
              variant={variant}
            >
              <Share2 />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <Text>{translations.share.tooltip}</Text>
        </TooltipContent>
      </Tooltip>

      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>{translations.share.title}</DialogTitle>
          <DialogDescription>{translations.share.summary}</DialogDescription>
        </DialogHeader>
        <div className='flex items-center gap-2'>
          <div className='grid flex-1 gap-2'>
            <Label className='sr-only' htmlFor='link'>
              Link
            </Label>
            <Input readOnly defaultValue={route} id='link' />
          </div>
        </div>
        <DialogFooter className='sm:justify-start'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              {translations.share.label}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
