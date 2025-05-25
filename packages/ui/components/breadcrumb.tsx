import { Slot } from '@radix-ui/react-slot';
import type { LinksType } from '@repo/types/link.js';
import { cn } from '@repo/ui/lib/utils';
import { ChevronRight } from 'lucide-react';
import * as React from 'react';

function RootBreadcrumb({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label='breadcrumb' data-slot='breadcrumb' {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      className={cn(
        'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
        className,
      )}
      data-slot='breadcrumb-list'
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      className={cn('inline-flex items-center gap-1.5', className)}
      data-slot='breadcrumb-item'
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      className={cn('hover:text-foreground transition-colors', className)}
      data-slot='breadcrumb-link'
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      aria-current='page'
      aria-disabled='true'
      className={cn('text-foreground font-normal', className)}
      data-slot='breadcrumb-page'
      role='link'
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      aria-hidden='true'
      className={cn('[&>svg]:size-3.5', className)}
      data-slot='breadcrumb-separator'
      role='presentation'
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

export interface BreadcrumbProps
  extends Pick<React.HTMLAttributes<HTMLElement>, 'className'> {
  links: LinksType;
  pathname?: string;
}

export const Breadcrumb = ({ className, links, pathname }: BreadcrumbProps) => {
  let pathname_ = pathname;

  if (links.length === 1) {
    pathname_ = links[0].route;
  }

  return (
    <RootBreadcrumb className={cn('', className)}>
      <BreadcrumbList>
        {[{ label: 'Home', route: '/' }, ...links].map(
          ({ route, label }, index, arr) => (
            <React.Fragment key={label}>
              <BreadcrumbItem className='hidden md:block'>
                {pathname_ === route ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={route}>{label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {index !== arr.length - 1 && (
                <BreadcrumbSeparator className='hidden md:block' />
              )}
            </React.Fragment>
          ),
        )}
      </BreadcrumbList>
    </RootBreadcrumb>
  );
};
