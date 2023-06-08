'use client';
import useNote from '@/Hooks/useNotes';
import NoteCard from './notecard';

const NoteList = ({}) => {
  const { notes } = useNote();

  return (
    <>
      {notes.length === 0 ? (
        <h2 className='text-xl font-bold my-5'>Note added yet</h2>
      ) : (
        <>
          <h2 className='text-xl font-bold my-5'>Note List</h2>
          <div className='flex flex-col gap-y-4'>
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default NoteList;
