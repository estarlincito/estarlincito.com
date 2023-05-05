'use client';
import { useCollapse } from '@/Hooks';
import { Button } from '@/components/HOC';
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
