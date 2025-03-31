'use client';
import '../styles/globals.css';

import { Box, Flex, Link, Strong } from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';
import { z } from 'zod';

const ZBreadcrumbItemSchema = z.object({
  route: z.string(),
  title: z.string(),
});

const slugSchema = z.tuple([ZBreadcrumbItemSchema]).rest(ZBreadcrumbItemSchema);

export type Slug = z.infer<typeof slugSchema>;

interface Props {
  slug: Slug;
  usePathname: () => string;
}

const styles = stylez.create({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const Breadcrumb = ({ slug, usePathname }: Props) => {
  const pathname = usePathname();
  const [firstSlug, secondSlug, thirdSlug] = slugSchema.parse(slug);

  return (
    <Flex align='center' gap='1'>
      <Link size='2' href='/' target='_self'>
        <Strong>Home</Strong>
      </Link>
      <Link size='2'>
        <Strong>/</Strong>
      </Link>

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
          <Link size='2'>
            <Strong>/</Strong>
          </Link>

          <Link size='2' href={secondSlug.route} target='_self'>
            <Strong>{secondSlug.title}</Strong>
          </Link>
        </>
      )}

      {thirdSlug && (
        <>
          <Link size='2'>
            <Strong>/</Strong>
          </Link>

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
