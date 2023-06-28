'use client';
import useGPT from '@/Hooks/useGPT';
import Search from './search';
import Type from './type';

const GPTForm = () => {
  const { handleAction, reset } = useGPT();
  return (
    <form action={handleAction} ref={reset} className='flex flex-col gap-y-5'>
      <Search />
      <Type />
    </form>
  );
};

export default GPTForm;
