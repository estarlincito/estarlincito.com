import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { IconButton, Link } from '@radix-ui/themes';

const HireMeLink = () => {
  return (
    <Link href='/contact' target='_self'>
      <IconButton variant='soft'>
        <ChatBubbleIcon width='18' height='18' />
      </IconButton>
    </Link>
  );
};

export default HireMeLink;
