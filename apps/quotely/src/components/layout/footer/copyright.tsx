import { Link, Text } from '@radix-ui/themes';
import { quotely } from '@repo/constants';
import React from 'react';

const Copyright = () => {
  return (
    <Text as='p' size='3'>
      {quotely.copyright}
      &nbsp;
      <Link weight='bold' href='/' target='_self' color='gray'>
        Estarlincito
      </Link>
    </Text>
  );
};

export default Copyright;
