import { Button } from '@/components/ui/button.jsx';
import { Flex, Link } from '@/components/ui/index.js';

export interface Route {
  route: string;
  key: number;
  label: string;
}

export interface NavigationProps {
  pathname: string;
  siteMap: Route[];
}

export const Navigation = ({ pathname, siteMap }: NavigationProps) => (
  <Flex align='center' direction='row' justify='center'>
    {siteMap.map(({ route, key, label }) => (
      <Button
        asChild
        data-active={pathname === route}
        key={key}
        mx={pathname === route ? '3' : '2'}
        variant='ghost'
      >
        <Link href={route} underline='none'>
          {label}
        </Link>
      </Button>
    ))}
  </Flex>
);
