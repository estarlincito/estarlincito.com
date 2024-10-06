'use client';
import clipboard from '@/lib/clipboard';
import { Link1Icon } from '@radix-ui/react-icons';
import IconBTN from './Icon_btn';

interface Props {
  url: string;
}

const CopyURL = ({ url }: Props) => {
  return (
    <IconBTN
      onClick={() => {
        clipboard(url, 'URL has been copied to clipboard!');
      }}
    >
      <Link1Icon />
    </IconBTN>
  );
};

export default CopyURL;
