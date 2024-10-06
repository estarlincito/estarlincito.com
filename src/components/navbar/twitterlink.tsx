import IconButton from '@UI/Iconbutton';
import { Link } from '@radix-ui/themes';
import { FaXTwitter } from 'react-icons/fa6';

const TwitterLink = () => {
  return (
    <Link href='https://twitter.com/estarlincito' target='_blank'>
      <IconButton>
        <FaXTwitter width='18' height='18' />
      </IconButton>
    </Link>
  );
};

export default TwitterLink;
