import { IconButton, Link } from '@radix-ui/themes';
import { FaXTwitter } from 'react-icons/fa6';

const TwitterLink = () => {
  return (
    <Link href='https://x.com/estarlincito' target='_blank'>
      <IconButton variant='soft'>
        <FaXTwitter width='18' height='18' />
      </IconButton>
    </Link>
  );
};

export default TwitterLink;
