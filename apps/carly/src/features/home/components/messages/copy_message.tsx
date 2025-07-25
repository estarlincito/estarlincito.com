import { clipMaster } from '@estarlincito/utils';
import { CopyIcon } from '@radix-ui/react-icons';
import { Button } from '@repo/ui/components/button';
import { toast } from 'sonner';

export interface CopyMessageProps {
  text: string;
  successMessage: string;
}

export const CopyMessage = ({ text, successMessage }: CopyMessageProps) => (
  <Button
    variant='ghost'
    onClick={() => {
      void clipMaster(text);
      toast.success(successMessage);
    }}
  >
    <CopyIcon />
  </Button>
);
