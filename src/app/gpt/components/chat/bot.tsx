import { Text } from '@radix-ui/themes';
import { TbAlien } from 'react-icons/tb';
import Boxchat from './boxchat';
import CopyChat from './copy';

interface BotProps {
  answer?: string;
}

const Bot = ({ answer }: BotProps) => {
  return (
    <Boxchat>
      <Text as='span'>
        <TbAlien />
      </Text>

      <Text as='p' className='font-serif'>
        {answer}
      </Text>

      <CopyChat text={answer!} />
    </Boxchat>
  );
};

export default Bot;
