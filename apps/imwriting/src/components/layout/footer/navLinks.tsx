import { Box, Flex, Heading, Link } from '@radix-ui/themes';
import { imwriting } from '@repo/constants';
import React from 'react';
const { hireme, topics, siteMap } = imwriting;

import { allArticles } from 'contentlayer/generated';

import Links from '@/types/links';
import Target from '@/types/target';

interface Props {
  title: string;
  links: Links[];
  target: Target;
}

const LinkList = ({ title, links, target }: Props) => {
  return (
    <Box>
      <Heading size='4'>{title}</Heading>

      <Flex direction='column' ml='3' mt='3'>
        {links.map(({ route, label }, id) => (
          <Link
            key={id}
            href={route}
            target={target}
            weight='bold'
            color='gray'
          >
            {label}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

const NavLinks = () => {
  const { catlinks } = topics(allArticles);
  return (
    <Flex
      justify={{ initial: 'start', md: 'center' }}
      direction={{ initial: 'column', md: 'row' }}
      gap='6'
      pt='6'
    >
      <LinkList title='Sitemap' links={siteMap} target='_self' />
      <LinkList title='Hire me:' links={hireme.links} target='_blank' />
      <LinkList title='Categories' links={catlinks} target='_self' />
    </Flex>
  );
};

export default NavLinks;
