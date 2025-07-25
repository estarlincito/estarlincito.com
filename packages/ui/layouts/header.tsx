import type { LinksType } from '@repo/types';
import type { Box } from '@repo/ui/components/box';
import { Breadcrumb } from '@repo/ui/components/breadcrumb';
import { Heading } from '@repo/ui/components/heading';
import { Separator } from '@repo/ui/components/separator';
import { Summary } from '@repo/ui/components/summary';
import type { ComponentProps } from 'react';

interface HeaderProps extends ComponentProps<typeof Box> {
  summary?: string;
  separator?: boolean;
  blockquote?: boolean;
  title: string;
  links?: LinksType;
  active?: string;
}

export const Header = ({
  children,
  title,
  summary,
  separator,
  active,
  blockquote,
  links,
  ...props
}: HeaderProps) => (
  <header {...props}>
    {children ?? (
      <>
        {links && <Breadcrumb active={active} className='my-2' links={links} />}
        <Heading content={title} />
        <Summary
          blockquote={blockquote}
          className='text-2xl font-light opacity-80'
          content={summary}
        />
        {separator && <Separator className='mt-3' />}
      </>
    )}
  </header>
);
