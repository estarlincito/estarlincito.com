'use client';
import { Box } from '@repo/ui';
import stylez from '@stylezjs/stylez';

import useCollapse from '@/Hooks/useCollapse';

const styles = stylez.create({
  backgroundColor: '#000000d6',
  zIndex: 2,
});

const Opacity = () => {
  const { collapse, toggleCollapse } = useCollapse();

  return (
    collapse && (
      <Box
        as='div'
        bottom='0'
        left='0'
        position='fixed'
        right='0'
        top='9'
        onClick={toggleCollapse}
        {...stylez.className(styles)}
      />
    )
  );
};

export default Opacity;
