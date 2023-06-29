'use client';
import useGPT from '@/Hooks/useGPT';
import clsx from 'clsx';
import Bot from './bot';
import Human from './human';

const Chat = () => {
  const { chat, smooth } = useGPT();

  return (
    <div
      ref={smooth}
      className={clsx(
        'p-8 overflow-scroll scroll-smooth',
        'flex flex-col gap-y-5'
      )}
    >
      {chat.length === 1 ? null : (
        <>
          {chat.slice(1, chat.length).map(({ answer, question }, id) => (
            <div key={id} className='flex flex-col gap-y-8'>
              <Human question={question} />
              <Bot answer={answer} />
              <hr className='bg-gray-500 border-none h-[1px]' />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Chat;
