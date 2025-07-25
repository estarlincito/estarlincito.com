import { Button } from '@repo/ui/components/button';
import { Flex } from '@repo/ui/layouts/flex';
import { pagination, type PaginationProps } from 'lib/pagination-3';
import { ChevronLeft, ChevronRight, type LucideProps } from 'lucide-react';
import React from 'react';

interface PaginationLinkProps {
route: string;
disabled: boolean;
label: string;
Icon: React.ForwardRefExoticComponent<
Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>

> ;
> }

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

export const Pagination = (props: PaginationProps) => {
const { prev, next, startIndex, endIndex } = pagination(props);

return (
<Flex className='justify-between items-center'>
<PaginationLink
disabled={prev === null && true}
Icon={ChevronLeft}
label='Previous'
route={prev ?? 'undefined'}
/>
<Flex>
<span className='hidden sm:block'>Showing</span> &nbsp;{startIndex}–
{endIndex}
&nbsp;of&nbsp;
{props.count}
</Flex>
<PaginationLink
disabled={next === null && true}
Icon={ChevronRight}
label='Next'
route={next ?? 'undefined'}
/>
</Flex>
);
};
