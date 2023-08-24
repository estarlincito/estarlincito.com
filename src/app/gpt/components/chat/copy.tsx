'use client';
import useGPT from '@/Hooks/useGPT';
import { CopyIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';

interface CopyChatProps {
  text: string;
}

const CopyChat = ({ text }: CopyChatProps) => {
  const { copyChat } = useGPT();

  return (
    <IconButton
      variant='ghost'
      onClick={() => {
        copyChat(text);
      }}
    >
      <CopyIcon />
    </IconButton>
  );
};

export default CopyChat;
