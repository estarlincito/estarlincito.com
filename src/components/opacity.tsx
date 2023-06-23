'use client';
import useCollapse from '@/Hooks/useCollapse';

const Opacity = () => {
  const { collapse, offCollapse } = useCollapse();

  return (
    <>
      {collapse === 'ON' ? (
        <div
          onClick={offCollapse}
          className='bg-[#000000d6] fixed z-10 top-0 right-0 left-0 bottom-0'
        />
      ) : null}
    </>
  );
};

export default Opacity;
