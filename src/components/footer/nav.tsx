import Footer from '@/constants/footer';
import sitemap from '@/constants/siteMap';
import Links from '@/types/links';
import Target from '@/types/target';
import { Box, Flex, Heading, Link, Text } from '@radix-ui/themes';

import Styled from './nav.module.scss';

interface NavlinksProps {
  title: string;
  links: Links[];
  target: Target;
}
const Navlinks = ({ title, links, target }: NavlinksProps) => {
  return (
    <Box>
      <Heading size='4'>{title}</Heading>

      <Flex direction='column' ml='3' mt='3'>
        {links.map(({ route, label }, id) => (
          <Link
            key={id}
            href={route}
            target={target}
            color='gray'
            weight='bold'
          >
            {label}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

const Copyright = () => {
  const date = new Date();
  const currentgeYear = date.getFullYear();
  const buildYear = 2023;
  const ownYears = `${buildYear}-${currentgeYear}`;

  return (
    <Text as='p' size='3'>
      &nbsp; Copyright © {buildYear === currentgeYear ? buildYear : ownYears}
      &nbsp;
      <Link color='gray' weight='bold' href='/' target='_self'>
        Estarlincito
      </Link>
    </Text>
  );
};

const Nav = () => {
  return (
    <Flex direction='column' gap='5'>
      <Box className={Styled.nav}>
        <Navlinks title='Sitemap' links={sitemap} target='_self' />
        <Navlinks title='Hire me:' links={Footer.hireme} target='_blank' />
        <Navlinks title='Categories' links={Footer.catsLinks} target='_self' />
      </Box>
      <Copyright />
    </Flex>
  );
};

export default Nav;
