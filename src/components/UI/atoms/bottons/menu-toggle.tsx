'use client';
import { useCollapse } from '@/Hooks';
import { TbMenu } from 'react-icons/tb';
import { Collapse } from '@UI/molecules';
import { Button } from '@/components/HOC';

const MenuToggle = () => {
  const { collapse, OnCollapse } = useCollapse();

  return (
    <>
      {collapse === 'OFF' ? (
        <Button onClick={OnCollapse} className='text-2xl'>
          <TbMenu />
        </Button>
      ) : (
        <Collapse />
      )}
    </>
  );
};
export default MenuToggle;
