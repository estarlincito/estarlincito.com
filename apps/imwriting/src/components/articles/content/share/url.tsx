'use client';
import { clipMaster } from '@estarlincito/utils';
import { Link1Icon } from '@radix-ui/react-icons';
import toast from 'react-hot-toast';

import IconButton from '@/components/ui/Icon-button';

interface Props {
  url: string;
}

const Url = ({ url }: Props) => {
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

export default Url;
