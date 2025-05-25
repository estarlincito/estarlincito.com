import type { LinkType } from '@repo/types';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Flex } from '@repo/ui/layouts/flex';
import type { JSX, ReactNode } from 'react';

interface BlockProps {
  title: string;
  children: ReactNode;
  link: LinkType;
}

export const Block = ({ title, children, link }: BlockProps): JSX.Element => (
  <Flex className='items-center flex-col gap-5 max-w-lg'>
    <Heading className='text-center mb-2' content={title} />
    {children}
    <Link {...link} />
  </Flex>
);
