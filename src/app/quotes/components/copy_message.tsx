import clipboard from '@/lib/clipboard';
import { CopyIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';

interface CopyQuoteProps {
  text: string;
}

const CopyQuote = ({ text }: CopyQuoteProps) => {
  return (
    <IconButton
      variant='ghost'
      onClick={() => {
        clipboard(text, 'Quote has been copied to clipboard!');
      }}
    >
      <CopyIcon />
    </IconButton>
  );
};

export default CopyQuote;
