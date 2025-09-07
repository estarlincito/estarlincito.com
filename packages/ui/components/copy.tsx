'use client';
import { clipMaster } from '@estarlincito/utils';
import type { Translations } from '@repo/content/shared/locales';
import { Button } from '@repo/ui/components/button';
import { Text } from '@repo/ui/components/text';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@repo/ui/components/tooltip';
import { useTranslation } from '@repo/ui/hooks/useTranslation';
import { cn } from '@repo/ui/lib/utils';
import { CopyIcon } from 'lucide-react';
import type { ComponentProps } from 'react';
import { toast } from 'sonner';

interface CopyProps extends ComponentProps<typeof Button> {
  text: string;
  tooltip?: string;
}

export const Copy = ({
  text,
  tooltip,
  variant = 'ghost',
  className,
  ...rest
}: CopyProps) => {
  const { translations } = useTranslation<Translations>();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          {...rest}
          className={cn('cursor-pointer w-fit', className)}
          variant={variant}
          onClick={() => {
            try {
              void clipMaster(text);
              toast.success(translations.copy.clipboardCopied);
            } catch {
              toast.error(translations.copy.clipboardCopyDenied);
            }
          }}
        >
          <CopyIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <Text>{tooltip ?? translations.copy.tooltip}</Text>
      </TooltipContent>
    </Tooltip>
  );
};
