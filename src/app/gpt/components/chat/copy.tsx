'use client';
import useGPT from '@/Hooks/useGPT';
import clsx from 'clsx';
import { TbCopy } from 'react-icons/tb';

interface CopyChatProps {
  text: string;
}

const CopyChat = ({ text }: CopyChatProps) => {
  const { copyChat } = useGPT();

  return (
    <button
      onClick={() => {
        copyChat(text);
      }}
      className={clsx(
        'text-gray-400 hover:text-gray-500 active:hover:text-gray-900',
        'dark:text-gray-600 dark:hover:text-gray-400 dark:active:hover:text-gray-200'
      )}
    >
      <TbCopy />
    </button>
  );
};

export default CopyChat;
