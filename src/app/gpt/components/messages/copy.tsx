import { CopyIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';
import toast from 'react-hot-toast';

interface CopyMessageProps {
  text: string;
}

const CopyMessage = ({ text }: CopyMessageProps) => {
  const copyMessage = (text: string) => {
    navigator.clipboard.writeText(text.replaceAll('\n', ''));
    toast.success('Copied');
  };

  return (
    <IconButton
      variant='ghost'
      onClick={() => {
        copyMessage(text);
      }}
    >
      <CopyIcon />
    </IconButton>
  );
};

export default CopyMessage;
