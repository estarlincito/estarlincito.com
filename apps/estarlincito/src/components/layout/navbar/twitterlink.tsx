import { IconButton, Link } from '@repo/ui';
import { FaXTwitter } from 'react-icons/fa6';

const TwitterLink = () => (
  <Link href='https://x.com/estarlincito' target='_blank'>
    <IconButton variant='soft'>
      <FaXTwitter height='18' width='18' />
    </IconButton>
  </Link>
);

export default TwitterLink;
