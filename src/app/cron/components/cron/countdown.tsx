'use client';
import { allSeconds } from '@/lib/allSeconds';
import formatTimer from '@/lib/formatTimer';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

interface CountdownProps {
  timer: number;
}

const Countdown = ({ timer }: CountdownProps) => {
  const [countdown, setCountdown] = useState(allSeconds(timer));
  const timerId: any = useRef();
  const { hours, minutes, seconds } = formatTimer(countdown);

  //set timer
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timerId.current);
    }
    return () => clearInterval(timerId.current);
  }, [countdown]);

  return (
    <div
      className={clsx(
        'h-52 w-52 rounded-full justify-self-center',
        'bg-gray-200',
        'flex flex-col justify-center text-center'
      )}
    >
      <div className='text-gray-950'>
        <span className='text-3xl font-bold'>
          {hours}
          {minutes}
        </span>

        <span>{seconds}</span>
      </div>
    </div>
  );
};

export default Countdown;
