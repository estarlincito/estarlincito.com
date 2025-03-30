'use client';
import { clipMaster } from '@estarlincito/utils';
import { Link1Icon } from '@radix-ui/react-icons';
import React from 'react';
import toast from 'react-hot-toast';

import IconButton from '@/components/ui/Icon-button';

interface Props {
  url: string;
}

const URL = ({ url }: Props) => {
  const onClick = () => {
    void clipMaster(url);
    toast.success('URL has been copied to clipboard!');
  };

  return (
    <IconButton variant='soft' onClick={onClick}>
      <Link1Icon height='16px' width='16px' />
    </IconButton>
  );
};

export default URL;
