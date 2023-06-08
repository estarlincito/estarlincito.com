'use client';
import useNote from '@/Hooks/useNotes';
import { FC } from 'react';

interface CopyButtonProps {
  content: string;
}

const CopyButton: FC<CopyButtonProps> = ({ content }) => {
  const { copyNote } = useNote();
  return (
    <button
      className='hover:text-violet-200 active:text-violet-400'
      onClick={() => {
        copyNote(content);
      }}
    >
      Copy
    </button>
  );
};

export default CopyButton;
