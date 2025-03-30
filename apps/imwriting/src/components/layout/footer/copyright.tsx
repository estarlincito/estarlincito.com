import { Link, Text } from '@radix-ui/themes';
import { imwriting } from '@repo/constants';
import React from 'react';

const Copyright = () => {
  return (
    <Text as='p' size='3'>
      {imwriting.copyright}
      &nbsp;
      <Link weight='bold' href='/' target='_self' color='gray'>
        Estarlincito
      </Link>
    </Text>
  );
};

export default Copyright;
