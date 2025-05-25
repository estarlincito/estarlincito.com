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
  pathname?: string;
}

export const Header = ({
  children,
  title,
  summary,
  separator,
  blockquote,
  pathname,
  links,
  ...props
}: HeaderProps) => (
  <header {...props}>
    {children ?? (
      <>
        {links && (
          <Breadcrumb className='my-2' links={links} pathname={pathname} />
        )}
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
