'use client';
import { useCollapse } from '@/Hooks';

const Opacity = () => {
  const { collapse, offCollapse } = useCollapse();

  return (
    <>
      {collapse === 'ON' ? (
        <div
          onClick={offCollapse}
          className='bg-[#000000b2] fixed w-[100vw] h-[100vh]'
        ></div>
      ) : null}
    </>
  );
};

export default Opacity;
