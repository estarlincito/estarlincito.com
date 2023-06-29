import { TbAlien } from 'react-icons/tb';
import BoxChat from './box';
import CopyChat from './copy';

interface BotProps {
  answer?: string;
}

const Bot = ({ answer }: BotProps) => {
  return (
    <BoxChat>
      <span>
        <TbAlien />
      </span>
      <p className='font-serif'>{answer}</p>
      <CopyChat text={answer!} />
    </BoxChat>
  );
};

export default Bot;
