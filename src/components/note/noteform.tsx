'use client';
import useNote from '@/Hooks/useNotes';
import clsx from 'clsx';

const NoteForm = () => {
  const { handleChange, handleSubmit } = useNote();
  const inputcss = clsx('outline-none', 'rounded-lg', 'p-2', 'text-black');

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        'bg-violet-500 rounded-lg',
        'p-5 flex flex-col gap-y-3 justify-center',
        'min-h-[400px]'
      )}
    >
      <label className='font-bold'>Title</label>
      <input
        type='text'
        className={clsx(inputcss, '')}
        required
        name='title'
        onChange={handleChange}
      />
      <label className='font-bold'>Content</label>
      <textarea
        className={clsx(inputcss, 'resize-none')}
        cols={10}
        rows={10}
        name='content'
        required
        onChange={handleChange}
      />
      <button
        className='font-bold mt-5 hover:text-violet-200 active:text-violet-400'
        type='submit'
      >
        Add
      </button>
    </form>
  );
};

export default NoteForm;
