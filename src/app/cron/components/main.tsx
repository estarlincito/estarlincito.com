'use client';
import useCron from '@/Hooks/useCron';
import clsx from 'clsx';
import Add from './add';
import Cron from './cron';

const Main = () => {
  const { cron } = useCron();

  return (
    <div
      className={clsx(
        'max-w-2xl mx-auto',
        'h-[80vh]',
        'flex flex-col justify-between',
        'p-5'
      )}
    >
      {cron.length === 0 ? <Add /> : <Cron />}
    </div>
  );
};

export default Main;
