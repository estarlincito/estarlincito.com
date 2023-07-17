'use client';
import useGPT from '@/Hooks/useGPT';
import GPT from '@Constants/gpt';
import clsx from 'clsx';
import { TbSend } from 'react-icons/tb';

const Formsearch = () => {
  const { handleAction, reset } = useGPT();
  return (
    <form
      className={clsx(
        'border border-gray-200 rounded-sm',
        'dark:border-gray-700',
        'p-3',
        'grid grid-cols-12 gap-1'
      )}
      action={handleAction}
      ref={reset}
    >
      <select
        name='type'
        className={clsx(
          'outline-none rounded-sm text-gray-400',
          'text-black',
          'dark:bg-black',
          'cursor-pointer',
          'hidden',
          'md:block',
          'col-span-3'
        )}
      >
        {GPT.options.map(({ value, label }, id) => (
          <option value={value} key={id}>
            {label}
          </option>
        ))}
      </select>

      <input
        type='text'
        name='search'
        placeholder='Send a message.'
        required
        className={clsx(
          'max-w-[400px] p-3 outline-none font-light rounded-sm',
          'text-black',
          'dark:bg-black dark:text-white',
          'md:col-span-8',
          'col-span-11'
        )}
      />

      <button
        className={clsx(
          'text-xl',
          'text-gray-400 hover:text-gray-500 active:hover:text-gray-900',
          'dark:text-gray-600 dark:hover:text-gray-400 dark:active:hover:text-gray-200',
          'col-span-1'
        )}
      >
        <TbSend />
      </button>
    </form>
  );
};

export default Formsearch;
