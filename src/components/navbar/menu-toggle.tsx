'use client';
import useCollapse from '@/Hooks/useCollapse';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import IconButton from '@UI/Iconbutton';

const MenuToggle = () => {
  const { OnCollapse } = useCollapse();

  return (
    <IconButton onClick={OnCollapse}>
      <HamburgerMenuIcon width='18' height='18' />
    </IconButton>
  );
};
export default MenuToggle;
