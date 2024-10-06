import { DotFilledIcon } from '@radix-ui/react-icons';
import { Flex, Link, Strong } from '@radix-ui/themes';

interface NavProps {
  category: string;
  subcategory: string;
  urlCat: string;
  urlSub: string;
}

const Nav = (props: NavProps) => {
  return (
    <Flex align='center' gap='1'>
      <Link size='2' href={props.urlCat} target='_self'>
        <Strong>{props.category}</Strong>
      </Link>

      <DotFilledIcon width='14' height='14' />

      <Link size='2' href={props.urlSub} target='_self'>
        <Strong>{props.subcategory}</Strong>
      </Link>
    </Flex>
  );
};

export default Nav;
