'use client';
import useGPT from '@/Hooks/useGPT';
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
        'flex justify-between'
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
          'cursor-pointer'
        )}
      >
        <option value=''>None</option>
        <option value='spelling'>Spelling</option>
        <option value='fix'>Fix</option>
        <option value='this in Spanish'>This in Spanish</option>
        <option value='this in English'>This in English</option>
        <option value='que significa'>Que significa?</option>
      </select>

      <input
        type='text'
        name='search'
        placeholder='Send a message.'
        required
        className={clsx(
          'w-[400px] ml-2 p-3 outline-none font-light rounded-sm',
          'text-black',
          'dark:bg-black dark:text-white'
        )}
      />

      <button
        className={clsx(
          'text-xl p-2',
          'text-gray-400 hover:text-gray-500 active:hover:text-gray-900',
          'dark:text-gray-600 dark:hover:text-gray-400 dark:active:hover:text-gray-200'
        )}
      >
        <TbSend />
      </button>
    </form>
  );
};

export default Formsearch;
