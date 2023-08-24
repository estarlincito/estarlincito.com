import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { Link } from '@radix-ui/themes';
import IconButton from '@UI/Iconbutton';

const HireMeLink = () => {
  return (
    <Link href='/contact' target='_self'>
      <IconButton>
        <ChatBubbleIcon width='18' height='18' />
      </IconButton>
    </Link>
  );
};

export default HireMeLink;
