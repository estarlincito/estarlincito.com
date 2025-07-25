/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@repo/ui/components/button';
import { Flex } from '@repo/ui/layouts/flex';
import { type PaginationResult } from '@repo/ui/lib/pagination';
import { ChevronLeft, ChevronRight, type LucideProps } from 'lucide-react';
import React from 'react';

interface PaginationLinkProps {
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
}: PaginationLinkProps) => {
  const Label = (props: { label: string }) => (
    <span className='hidden sm:block'>{props.label}</span>
  );

  return disabled ? (
    <Button disabled={disabled} variant='ghost'>
      {label === 'Next' ? (
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
      {label === 'Next' ? (
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

type PaginationProps = Pick<
  PaginationResult<any>,
  'count' | 'prev' | 'next' | 'startIndex' | 'endIndex'
>;

export const Pagination = ({
  count,
  prev,
  next,
  startIndex,
  endIndex,
}: PaginationProps) => (
  <Flex className='justify-between items-center'>
    <PaginationLink
      disabled={prev === null && true}
      Icon={ChevronLeft}
      label='Previous'
      route={prev ?? 'undefined'}
    />
    <Flex>
      <span className='hidden sm:block'>Showing</span> &nbsp;{startIndex + 1}–
      {endIndex}
      &nbsp;of&nbsp;
      {count}
    </Flex>
    <PaginationLink
      disabled={next === null && true}
      Icon={ChevronRight}
      label='Next'
      route={next ?? 'undefined'}
    />
  </Flex>
);
