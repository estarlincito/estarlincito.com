'use client';
import useCollapse from '@/Hooks/useCollapse';
import { Box } from '@radix-ui/themes';
import styled from './opacity.module.scss';

const Opacity = () => {
  const { collapse, offCollapse } = useCollapse();

  return (
    <>
      {collapse === 'ON' ? (
        <Box onClick={offCollapse} className={styled.opacity} />
      ) : null}
    </>
  );
};

export default Opacity;
