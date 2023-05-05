import clsx from 'clsx';
import { TbArrowBadgeRight, TbBrandGoogleHome } from 'react-icons/tb';
import Li from './li';

interface Props {
  category: string;
  subcategory: string;
  urlCat: string;
  urlSub: string;
  className: string;
}

const Nav: React.FC<Props> = ({
  category,
  subcategory,
  urlCat,
  urlSub,
  className,
}) => {
  return (
    <ul
      className={clsx(
        'text-sm flex items-center gap-x-3 select-none',
        'text-black/70 dark:text-white/70',
        className && className
      )}
    >
      <Li href='/'>
        <TbBrandGoogleHome />
      </Li>

      <Li href='/blog'>
        <TbArrowBadgeRight />
        <span>Blog</span>
      </Li>

      <Li href={urlCat}>
        <TbArrowBadgeRight />
        <span>{category}</span>
      </Li>

      <Li href={urlSub}>
        <TbArrowBadgeRight />
        <span>{subcategory}</span>
      </Li>
    </ul>
  );
};

export default Nav;
