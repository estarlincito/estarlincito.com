'use client';
import '@/styles/globals.css';

import type { FlexProps } from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';
import { z } from 'zod';

import { withDefaultProps } from '@/hocs/default-props.jsx';

import { Link as L } from './link.jsx';
import { Box, Flex } from './radix.js';

const LinkSchema = z.object({
  href: z.string(),
  title: z.string(),
});

const LinksSchema = z.tuple([LinkSchema]).rest(LinkSchema);

export type Links = z.infer<typeof LinksSchema>;

interface Props {
  links: Links;
  pathname: string;
}

const styles = stylez.create({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const Breadcrumb = ({
  links,
  pathname,
  ...props
}: Props & FlexProps) => {
  const [firstLink, secondLink, thirdLink] = LinksSchema.parse(links);
  const Link = withDefaultProps(L, { size: '2', weight: 'bold' });

  return (
    <Flex align='center' gap='1' {...props}>
      <Link href='/' title='Home' />
      <Link title='/' />

      <Link
        {...firstLink}
        underline={pathname === firstLink.href ? 'always' : 'hover'}
      />

      {secondLink && (
        <>
          <Link title='/' />

          <Link
            {...secondLink}
            underline={pathname === secondLink.href ? 'always' : 'hover'}
          />
        </>
      )}

      {thirdLink && (
        <>
          <Link title='/' />

          <Box
            asChild
            maxWidth={{
              initial: '5.625rem',
              md: '12.5rem',
            }}
            overflow='hidden'
            {...stylez.className(styles)}
          >
            <Link
              {...thirdLink}
              underline={pathname === thirdLink.href ? 'always' : 'hover'}
            />
          </Box>
        </>
      )}
    </Flex>
  );
};
