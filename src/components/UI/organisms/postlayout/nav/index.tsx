import { TbArrowBadgeRight, TbBrandGoogleHome } from 'react-icons/tb';
import clsx from 'clsx';
import Li from './li';

interface Props {
  category: string;
  subcategory: string;
  slug_category: string;
  slug_subcategory: string;
}

const Nav: React.FC<Props> = ({
  category,
  subcategory,
  slug_category,
  slug_subcategory,
}) => {
  return (
    <ul
      className={clsx(
        'text-sm flex items-center gap-x-3 select-none',
        'text-black/70 dark:text-white/70',
        '-order-6'
      )}
    >
      <Li href='/'>
        <TbBrandGoogleHome />
      </Li>

      <Li href='/blog'>
        <TbArrowBadgeRight />
        <span>Blog</span>
      </Li>

      <Li href={slug_category}>
        <TbArrowBadgeRight />
        <span>{category}</span>
      </Li>

      <Li href={slug_subcategory}>
        <TbArrowBadgeRight />
        <span>{subcategory}</span>
      </Li>
    </ul>
  );
};

export default Nav;
