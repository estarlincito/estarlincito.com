import clsx from 'clsx';
import { TbArrowBadgeRight, TbBrandGoogleHome } from 'react-icons/tb';
import Link from './link';

interface NavProps {
  category: string;
  subcategory: string;
  urlCat: string;
  urlSub: string;
  className: string;
}

const Nav = (props: NavProps) => {
  return (
    <ul
      className={clsx(
        'text-sm flex items-center gap-x-3 select-none',
        'text-black/70 dark:text-white/70',
        props.className && props.className
      )}
    >
      <Link href='/'>
        <TbBrandGoogleHome />
      </Link>

      <Link href='/blog'>
        <TbArrowBadgeRight />
        <span>Blog</span>
      </Link>

      <Link href={props.urlCat}>
        <TbArrowBadgeRight />
        <span>{props.category}</span>
      </Link>

      <Link href={props.urlSub}>
        <TbArrowBadgeRight />
        <span>{props.subcategory}</span>
      </Link>
    </ul>
  );
};

export default Nav;
