import { Box, Flex, Separator } from '@/components/ui/radix.js';

import { Brand } from './brand.jsx';
import { Hireme, type HiremeProps } from './hireme.jsx';
import { Navigation, type Route } from './navigation.jsx';

interface Props extends HiremeProps {
  siteName: string;
  pathname: string;
  siteMap: Route[];
  url: string;
  logo: string;
}

export const Navbar = ({
  siteMap,
  pathname,
  hireme,
  url,
  siteName,
  logo,
}: Props) => (
  <Box>
    <Flex direction='row' justify={{ initial: 'center', sm: 'between' }} p='3'>
      <Brand logo={logo} siteName={siteName} url={url} />

      <Navigation pathname={pathname} siteMap={siteMap} />

      <Hireme hireme={hireme} />
    </Flex>
    <Separator size='4' />
  </Box>
);
