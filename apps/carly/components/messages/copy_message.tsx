import { clipMaster } from '@estarlincito/utils';
import { CopyIcon } from '@radix-ui/react-icons';
import { Button } from '@repo/ui/components/button';
import { toast } from 'sonner';

interface CopyMessageProps {
  text: string;
}

export const CopyMessage = ({ text }: CopyMessageProps) => (
  <Button
    variant='ghost'
    onClick={() => {
      void clipMaster(text);
      toast.success('Text has been copied to clipboard!');
    }}
  >
    <CopyIcon />
  </Button>
);
