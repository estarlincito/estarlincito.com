import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Box, Flex, IconButton, Link, Strong, Text } from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';
import { z } from 'zod';
export * from './search-params.js';
import '../../styles/globals.css';

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

      <Flex gapX='3' align='center'>
        <Text>
          {startIndex}–{endIndex} of {props.count + 1}
        </Text>

        <Link href={prev ? prev : undefined} {...stylez.className(styles)}>
          <IconButton size='1' variant='ghost' disabled={prev === null && true}>
            <ChevronLeftIcon width='18' height='18' />
          </IconButton>
        </Link>

        <Link href={next ? next : undefined} {...stylez.className(styles)}>
          <IconButton size='1' variant='ghost' disabled={next === null && true}>
            <ChevronRightIcon width='18' height='18' />
          </IconButton>
        </Link>
      </Flex>
    </Flex>
  );
};
