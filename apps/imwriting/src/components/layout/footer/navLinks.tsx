import { imwriting } from '@repo/constants';
import { Box, Flex, Heading, Link } from '@repo/ui';

const { hireme, topics, siteMap } = imwriting;

import { allArticles } from 'contentlayer/generated';

import type Links from '@/types/links';
import type Target from '@/types/target';

interface Props {
  title: string;
  links: Links[];
  target: Target;
}

const LinkList = ({ title, links, target }: Props) => (
  <Box>
    <Heading size='4'>{title}</Heading>

    <Flex direction='column' ml='3' mt='3'>
      {links.map(({ route, label, key }) => (
        <Link color='gray' href={route} key={key} target={target} weight='bold'>
          {label}
        </Link>
      ))}
    </Flex>
  </Box>
);

const NavLinks = () => {
  const { catlinks } = topics(allArticles);

  return (
    <Flex
      direction={{ initial: 'column', md: 'row' }}
      gap='6'
      justify={{ initial: 'start', md: 'center' }}
      pt='6'
    >
      <LinkList links={siteMap} target='_self' title='Sitemap' />
      <LinkList links={hireme.allLinks} target='_blank' title='Hire me:' />
      <LinkList links={catlinks} target='_self' title='Categories' />
    </Flex>
  );
};

export default NavLinks;
