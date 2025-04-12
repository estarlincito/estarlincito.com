import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { IconButton, Link } from '@repo/ui';

const HireMeLink = () => (
  <Link href='/contact' target='_self'>
    <IconButton variant='soft'>
      <ChatBubbleIcon height='18' width='18' />
    </IconButton>
  </Link>
);

export default HireMeLink;
