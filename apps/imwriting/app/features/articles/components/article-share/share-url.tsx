'use client';
import { clipMaster } from '@estarlincito/utils';
import { Button } from '@repo/ui/components/button';
import { Link } from 'lucide-react';
import { toast } from 'sonner';

interface Props {
  url: string;
}

export const ShareUrl = ({ url }: Props) => {
  const onClick = () => {
    void clipMaster(url);
    toast.success('URL has been copied to clipboard!');
  };

  return (
    <Button size='icon' variant='ghost' onClick={onClick}>
      <Link height='16px' width='16px' />
    </Button>
  );
};
