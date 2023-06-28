'use client';
import useGPT from '@/Hooks/useGPT';
import { TbCopy } from 'react-icons/tb';

interface ActionProps {}

const Action = (props: ActionProps) => {
  const { handleCopy, handleReset, answer } = useGPT();
  return (
    <>
      {answer === '' ? null : (
        <div>
          <button className='text-white text-xl' onClick={handleCopy}>
            <TbCopy />
          </button>

          {/* <button onClick={handleReset}>reset</button> */}
        </div>
      )}
    </>
  );
};

export default Action;
