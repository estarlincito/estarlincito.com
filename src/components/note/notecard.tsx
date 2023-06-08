import { Note } from '@/types/note';
import clsx from 'clsx';
import { FC } from 'react';
import CopyButton from './copybutton';

interface NoteCardProps {
  note: Note;
}

const NoteCard: FC<NoteCardProps> = ({ note: { title, content, date } }) => {
  return (
    <div
      className={clsx(
        'bg-violet-500 rounded-lg p-5',
        'text-white',
        'flex flex-col gap-y-2'
      )}
    >
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='font-light'>{content}</p>

      <div>
        {/* <h4>{date}</h4> */}
        <CopyButton content={content} />
        {/* <Linkdoc href='/note/edict' target='_self'>
          Edict
        </Linkdoc> */}
      </div>
    </div>
  );
};

export default NoteCard;
