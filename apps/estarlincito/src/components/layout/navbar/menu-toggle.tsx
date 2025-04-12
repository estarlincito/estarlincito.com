'use client';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { IconButton } from '@repo/ui';

import useCollapse from '@/Hooks/useCollapse';

const MenuToggle = () => {
  const { collapse, toggleCollapse } = useCollapse();

  return (
    <IconButton variant='soft' onClick={toggleCollapse}>
      {collapse ? (
        <Cross1Icon height='18' width='18' />
      ) : (
        <HamburgerMenuIcon height='18' width='18' />
      )}
    </IconButton>
  );
};
export default MenuToggle;
