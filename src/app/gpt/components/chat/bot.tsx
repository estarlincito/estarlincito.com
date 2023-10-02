import { Text } from '@radix-ui/themes';
import { TbAlien } from 'react-icons/tb';
import Boxchat from './boxchat';
import CopyChat from './copy';

interface BotProps {
  assistant?: string;
}

const Bot = ({ assistant }: BotProps) => {
  return (
    <Boxchat>
      <Text as='span'>
        <TbAlien />
      </Text>

      <Text as='p' className='font-serif'>
        {assistant}
      </Text>

      <CopyChat text={assistant!} />
    </Boxchat>
  );
};

export default Bot;
