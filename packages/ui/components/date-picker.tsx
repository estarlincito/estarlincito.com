'use client';

import { Button } from '@repo/ui/components/button';
import { Calendar } from '@repo/ui/components/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@repo/ui/components/popover';
import { cn } from '@repo/ui/lib/utils';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import type { ControllerRenderProps, Path } from 'react-hook-form';

export type DatePickerProps = ControllerRenderProps<
  Record<string, Date>,
  Path<Record<string, Date>>
> &
  Pick<React.ComponentProps<'input'>, 'placeholder' | 'lang' | 'className'>;

export const DatePicker = ({
  placeholder,
  value,
  lang = 'en',
  onChange,
}: DatePickerProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'w-[240px] pl-3 text-left font-normal',
            !value && 'text-muted-foreground',
          )}
          variant='outline'
        >
          {value ? (
            new Intl.DateTimeFormat(lang, { dateStyle: 'medium' }).format(value)
          ) : (
            <span>{placeholder}</span>
          )}
          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent align='start' className='w-auto p-0'>
        <Calendar
          captionLayout='dropdown'
          mode='single'
          selected={value}
          onSelect={(e) => {
            onChange(e);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};
