'use client';
import useGPT from '@/Hooks/useGPT';
import clsx from 'clsx';

const Result = () => {
  const { answer } = useGPT();

  return (
    <div
      className={clsx(
        'bg-white',
        'dark:text-black',
        'min-h-[150px] max-h-[400px] p-5 rounded-sm overflow-auto'
      )}
    >
      {answer === '' ? (
        <p>
          <em>
            Welcome to <b>Estarlincito GPT</b>
          </em>
        </p>
      ) : (
        <div className='flex flex-col  gap-y-8'>
          <p className='font-light overflow-auto'>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Result;
