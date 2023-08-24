import { Flex, Link as Linkr } from '@radix-ui/themes';
import clsx from 'clsx';
import { TbBrandGoogleHome } from 'react-icons/tb';

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
  className: string;
}

const Nav = (props: NavProps) => {
  return (
    <Flex
      align='center'
      gap='3'
      className={clsx('select-none', props.className && props.className)}
    >
      <Link route='/'>
        <TbBrandGoogleHome />
      </Link>

      <Link route='/blog'>Blog</Link>

      <Link route={props.urlCat}>{props.category}</Link>

      <Link route={props.urlSub}>{props.subcategory}</Link>
    </Flex>
  );
};

export default Nav;
