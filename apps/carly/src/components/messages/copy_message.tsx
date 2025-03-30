import { clipMaster } from '@estarlincito/utils';
import { CopyIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';
import React from 'react';
import toast from 'react-hot-toast';

interface CopyMessageProps {
  text: string;
}

const CopyMessage: React.FC<CopyMessageProps> = ({ text }) => {
  return (
    <IconButton
      variant='ghost'
      onClick={() => {
        void clipMaster(text);
        toast.success('Text has been copied to clipboard!');
      }}
    >
      <CopyIcon />
    </IconButton>
  );
};

export default CopyMessage;
