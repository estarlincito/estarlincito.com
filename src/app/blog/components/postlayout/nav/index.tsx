import { DotFilledIcon } from '@radix-ui/react-icons';
import { Flex, Link as Linkr, Strong } from '@radix-ui/themes';

interface LinkProps {
  route: string;
  children: React.ReactNode;
}

const Link = ({ route, children }: LinkProps) => {
  return (
    <Linkr size='2' color='gray' href={route} target='_self'>
      {children}
    </Linkr>
  );
};

interface NavProps {
  category: string;
  subcategory: string;
  urlCat: string;
  urlSub: string;
}

const Nav = (props: NavProps) => {
  return (
    <Flex align='center' gap='1'>
      <Link route={props.urlCat}>
        <Strong>{props.category}</Strong>
      </Link>

      <DotFilledIcon width='14' height='14' />

      <Link route={props.urlSub}>
        <Strong>{props.subcategory}</Strong>
      </Link>
    </Flex>
  );
};

export default Nav;
