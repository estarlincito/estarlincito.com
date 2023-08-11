'use client';
import useCron from '@/Hooks/useCron';
import Button from '@/components/UI/button';
import clsx from 'clsx';
import { TbTrash } from 'react-icons/tb';
import Countdown from './countdown';

const Cron = () => {
  const {
    cron: [{ title, email, message, timer }],
    handleDelete,
  } = useCron();

  return (
    <div
      className={clsx(
        'border border-gray-400 rounded-lg',
        'dark:border-gray-500',
        'grid p-8 gap-y-9'
      )}
    >
      <h1>{title}</h1>

      <Countdown timer={timer} />
      <div className='flex flex-row justify-between'>
        <h3>{email}</h3>

        <Button onClick={handleDelete}>
          <TbTrash />
        </Button>
      </div>
    </div>
  );
};

export default Cron;
