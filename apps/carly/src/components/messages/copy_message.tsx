import { clipMaster } from '@estarlincito/utils';
import { CopyIcon } from '@radix-ui/react-icons';
import { IconButton } from '@repo/ui';
import toast from 'react-hot-toast';

interface CopyMessageProps {
  text: string;
}

const CopyMessage = ({ text }: CopyMessageProps) => (
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

export default CopyMessage;
