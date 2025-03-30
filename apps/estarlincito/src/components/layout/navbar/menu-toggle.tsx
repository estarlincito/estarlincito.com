'use client';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';

import useCollapse from '@/Hooks/useCollapse';

const MenuToggle = () => {
  const { collapse, toggleCollapse } = useCollapse();

  return (
    <IconButton variant='soft' onClick={toggleCollapse}>
      {collapse ? (
        <Cross1Icon width='18' height='18' />
      ) : (
        <HamburgerMenuIcon width='18' height='18' />
      )}
    </IconButton>
  );
};
export default MenuToggle;
