import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import stylez from '@stylezjs/stylez';
import type { z } from 'zod';

import { Link } from '@/components/ui/link.jsx';
import { Box, Flex, IconButton, Strong } from '@/components/ui/radix.js';

export * from './search-params.js';
import '@/styles/globals.css';

import { num } from '@estarlincito/utils';

import { Text } from '@/components/ui/text.jsx';

import { pagination, PaginationProps } from './pagination.js';

const styles = stylez.create({ alignItems: 'center', display: 'inline-flex' });

export const Pagination = (props: z.infer<typeof PaginationProps>) => {
  PaginationProps.safeParse(props);
  const { prev, next, startIndex, endIndex } = pagination(props);

  return (
    <Flex gapX='2'>
      <Box>
        <Strong>{props.title}</Strong>
      </Box>

      <Flex align='center' gapX='3'>
        <Text>
          {startIndex}–{endIndex} of {props.count + num('1')}
        </Text>

        <Link href={prev ?? undefined} {...stylez.className(styles)}>
          <IconButton disabled={prev === null && true} size='1' variant='ghost'>
            <ChevronLeftIcon height='18' width='18' />
          </IconButton>
        </Link>

        <Link href={next ?? undefined} {...stylez.className(styles)}>
          <IconButton disabled={next === null && true} size='1' variant='ghost'>
            <ChevronRightIcon height='18' width='18' />
          </IconButton>
        </Link>
      </Flex>
    </Flex>
  );
};
