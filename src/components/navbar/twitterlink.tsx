import IconButton from '@UI/Iconbutton';
import { TwitterLogoIcon } from '@radix-ui/react-icons';
import { Link } from '@radix-ui/themes';

const TwitterLink = () => {
  return (
    <Link href='https://twitter.com/estarlincito' target='_blank'>
      <IconButton>
        <TwitterLogoIcon width='18' height='18' />
      </IconButton>
    </Link>
  );
};

export default TwitterLink;
