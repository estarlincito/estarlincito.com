'use client';
// import IconButton from '@/components/UI/Iconbutton';
import clipboard from '@/lib/clipboard';
import { Link1Icon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';

interface Props {
  url: string;
}
const CopyURL = ({ url }: Props) => {
  return (
    <IconButton
      variant='ghost'
      size='3'
      my='4'
      onClick={() => {
        clipboard(url, 'URL has been copied to clipboard!');
      }}
    >
      <Link1Icon />
    </IconButton>
  );
};

export default CopyURL;
