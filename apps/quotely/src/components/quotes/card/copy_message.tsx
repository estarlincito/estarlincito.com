'use client';
import { clipMaster } from '@estarlincito/utils';
import { CopyIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';
import toast from 'react-hot-toast';

interface Props {
  text: string;
}

const CopyQuote = ({ text }: Props) => {
  return (
    <IconButton
      variant='ghost'
      onClick={() => {
        void clipMaster(text);
        toast.success('Quote has been copied to clipboard!');
      }}
    >
      <CopyIcon />
    </IconButton>
  );
};

export default CopyQuote;
