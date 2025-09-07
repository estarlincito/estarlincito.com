import type { Translations } from '@repo/content/shared/locales';
import { Button } from '@repo/ui/components/button';
import { Flex } from '@repo/ui/layouts/flex';
import { ChevronLeft, ChevronRight, type LucideProps } from 'lucide-react';
import React from 'react';

interface PaginationLinkProps {
  type: 'next' | 'prev';
  route: string;
  disabled: boolean;
  label: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}

const PaginationLink = ({
  label,
  Icon,
  disabled,
  route,
  type,
}: PaginationLinkProps) => {
  const Label = (props: { label: string }) => (
    <span className='hidden sm:block'>{props.label}</span>
  );

  return disabled ? (
    <Button disabled={disabled} variant='ghost'>
      {type === 'next' ? (
        <>
          <Label label={label} />
          <Icon />
        </>
      ) : (
        <>
          <Icon />
          <Label label={label} />
        </>
      )}
    </Button>
  ) : (
    <Button asChild variant='ghost'>
      {type === 'next' ? (
        <a href={route}>
          <Label label={label} /> <Icon />
        </a>
      ) : (
        <a href={route}>
          <Icon />
          <Label label={label} />
        </a>
      )}
    </Button>
  );
};

export interface PaginationProps extends Pick<Translations, 'pagination'> {
  totalPages: number;
  page: number;
  route?: string;
}

export const Pagination = ({
  totalPages,
  page,
  route = '',
  pagination,
}: PaginationProps) =>
  totalPages > 1 && (
    <Flex className='justify-between items-center'>
      <PaginationLink
        disabled={page <= 1}
        Icon={ChevronLeft}
        label={pagination.previous}
        route={`${route}${page - 1}`}
        type='prev'
      />
      <Flex>
        <span className='hidden sm:block'>{pagination.page}</span> &nbsp;
        {page}
        &nbsp;{pagination.of}&nbsp;
        {totalPages}
      </Flex>
      <PaginationLink
        disabled={page >= totalPages}
        Icon={ChevronRight}
        label={pagination.next}
        route={`${route}${page + 1}`}
        type='next'
      />
    </Flex>
  );
