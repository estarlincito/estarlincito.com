'use client';
import { Box, Flex, Link, Strong, Text } from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';
import { usePathname } from 'next/navigation';

import { Slug } from '../types/slug';

type Color =
  | (
      | 'gray'
      | 'gold'
      | 'bronze'
      | 'brown'
      | 'yellow'
      | 'amber'
      | 'orange'
      | 'tomato'
      | 'red'
      | 'ruby'
      | 'crimson'
      | 'pink'
      | 'plum'
      | 'purple'
      | 'violet'
      | 'iris'
      | 'indigo'
      | 'blue'
      | 'cyan'
      | 'teal'
      | 'jade'
      | 'green'
      | 'grass'
      | 'lime'
      | 'mint'
      | 'sky'
    )
  | undefined;

interface Props {
  slug: Slug;
  color?: Color;
  //usePathname: () => string;
}

const styles = stylez.create({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const Breadcrumb = ({ slug, color }: Props) => {
  const pathname = usePathname();
  const [firstSlug, secondSlug, thirdSlug] = slug;
  return (
    <Flex align='center' gap='1'>
      <Link size='2' href='/' target='_self'>
        <Strong>Home</Strong>
      </Link>
      <Text color={color ? color : 'indigo'} size='2' as='span'>
        <Strong>/</Strong>
      </Text>

      <Link
        size='2'
        href={firstSlug.route}
        target='_self'
        underline={pathname === firstSlug.route ? 'always' : 'hover'}
      >
        <Strong>{firstSlug.title}</Strong>
      </Link>

      {secondSlug && (
        <>
          <Text color={color ? color : 'indigo'} size='2' as='span'>
            <Strong>/</Strong>
          </Text>

          <Link size='2' href={secondSlug.route} target='_self'>
            <Strong>{secondSlug.title}</Strong>
          </Link>
        </>
      )}

      {thirdSlug && (
        <>
          <Text color={color ? color : 'indigo'} size='2' as='span'>
            <Strong>/</Strong>
          </Text>

          <Box
            asChild
            maxWidth={{
              initial: '5.625rem',
              md: '12.5rem',
            }}
            overflow='hidden'
            {...stylez.className(styles)}
          >
            <Link size='2' href={thirdSlug.route} target='_self'>
              <Strong>{thirdSlug.title}</Strong>
            </Link>
          </Box>
        </>
      )}
    </Flex>
  );
};
