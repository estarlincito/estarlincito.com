'use client';
import useCollapse from '@/Hooks/useCollapse';
import { Box } from '@radix-ui/themes';

const Opacity = () => {
  const { collapse, offCollapse } = useCollapse();

  return (
    <>
      {collapse === 'ON' ? (
        <Box
          as='div'
          onClick={offCollapse}
          position='fixed'
          top='0'
          bottom='0'
          right='0'
          left='0'
          style={{ backgroundColor: '#000000d6', zIndex: 2 }}
        />
      ) : null}
    </>
  );
};

export default Opacity;
