import type { ComponentProps, ReactNode } from 'react';

import {
  Breadcrumb,
  type Links,
  Section,
  Separator,
  Summary,
  Title,
} from '@/components/ui/index.js';

type ContainerProps = ComponentProps<typeof Section>;

interface Props extends ContainerProps {
  summary?: string;
  children?: ReactNode;
  separator?: boolean;
  blockquote?: boolean;
  highContrast?: boolean;
  pathname?: string;
  links?: Links;
  title: string;
}

export const Header = ({
  children,
  title,
  summary,
  separator,
  blockquote,
  pathname,
  size,
  links,
  highContrast,
  ...props
}: Props) => (
  <Section {...props} size={size ?? { initial: '2', md: '4' }}>
    {children ?? (
      <>
        {links && pathname && (
          <Breadcrumb links={links} my='2' pathname={pathname} />
        )}
        <Title content={title} />
        <Summary
          blockquote={blockquote}
          content={summary}
          highContrast={highContrast}
        />
        {separator && <Separator my='2' size='4' />}
      </>
    )}
  </Section>
);
