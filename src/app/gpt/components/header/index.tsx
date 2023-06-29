'use client';
import useGPT from '@/Hooks/useGPT';
import Boxl from '../boxl';
import Quote from './quote';

const Header = () => {
  const { chat } = useGPT();

  return (
    <>
      {chat.length === 1 ? (
        <Boxl>
          <h1 className='font-bold text-lg'>Estarlincito GPT</h1>
          <Quote />
        </Boxl>
      ) : null}
    </>
  );
};

export default Header;
