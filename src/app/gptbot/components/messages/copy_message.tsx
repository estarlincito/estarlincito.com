import clipboard from '@/lib/clipboard';
import { CopyIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';

interface CopyMessageProps {
  text: string;
}

const CopyMessage = ({ text }: CopyMessageProps) => {
  return (
    <IconButton
      variant='ghost'
      onClick={() => {
        clipboard(text, 'Text has been copied to clipboard!');
      }}
    >
      <CopyIcon />
    </IconButton>
  );
};

export default CopyMessage;
