'use client';
import { CronContext } from '@/context/cron';
import { useContext } from 'react';

const useCron = () => {
  const cronContext = useContext(CronContext);

  if (cronContext === undefined) {
    throw new Error('Check if CronContext code is corret');
  }

  const { cron, setCron } = cronContext;

  const handleAction = async (formdata: FormData) => {
    type Name = 'title' | 'email' | 'timer' | 'message';

    const get = (name: Name) => {
      return formdata.get(name) as string;
    };

    setCron([
      {
        title: get('title'),
        email: get('email'),
        message: get('message'),
        timer: get('timer') as unknown as number,
      },
    ]);
  };

  const handleDelete = () => {
    setCron([]);
  };

  return { handleAction, handleDelete, cron };
};

export default useCron;
