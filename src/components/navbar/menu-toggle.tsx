'use client';
import useCollapse from '@/Hooks/useCollapse';
import Button from '@/components/UI/button';
import { TbMenu } from 'react-icons/tb';

const MenuToggle = () => {
  const { OnCollapse } = useCollapse();

  return (
    <Button onClick={OnCollapse} className='text-2xl'>
      <TbMenu />
    </Button>
  );
};
export default MenuToggle;
