import { Flex } from '@radix-ui/themes';
import React from 'react';

import Props from '@/types/children';

const Contents = ({ children }: Props) => {
  return (
    <Flex direction='column' gap='5'>
      {children}
    </Flex>
  );
};

export default Contents;
