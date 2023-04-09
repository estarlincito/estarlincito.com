'use client';
import { useCollapse } from '@/Hooks';
import { TbMenu } from 'react-icons/tb';
import { Button } from '@/components/HOC';

const MenuToggle = () => {
  const { OnCollapse } = useCollapse();

  return (
    <Button onClick={OnCollapse} className='text-2xl'>
      <TbMenu />
    </Button>
  );
};
export default MenuToggle;
