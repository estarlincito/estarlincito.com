'use client';
import { clipMaster } from '@estarlincito/utils';
import { CopyIcon } from '@radix-ui/react-icons';
import { Button } from '@repo/ui/components/button';
import { toast } from 'sonner';

interface Props {
  text: string;
}

export const CopyQuote = ({ text }: Props) => (
  <Button
    variant='ghost'
    onClick={() => {
      void clipMaster(text);
      toast.success('Quote has been copied to clipboard!');
    }}
  >
    <CopyIcon />
  </Button>
);
