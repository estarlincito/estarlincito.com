'use client';
import { Box } from '@radix-ui/themes';
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
        onClick={toggleCollapse}
        position='fixed'
        top='9'
        bottom='0'
        right='0'
        left='0'
        {...stylez.className(styles)}
      />
    )
  );
};

export default Opacity;
