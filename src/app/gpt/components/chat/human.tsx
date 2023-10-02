import { Text } from '@radix-ui/themes';
import { TbMoodBoy } from 'react-icons/tb';
import Boxchat from './boxchat';
import CopyChat from './copy';

interface HumanProps {
  content: string;
  role: 'user' | 'assistant';
}

const Human = ({ content }: HumanProps) => {
  return (
    <Boxchat>
      <Text as='span'>
        <TbMoodBoy />
      </Text>

      <Text as='p'>{content}</Text>

      <CopyChat text={content} />
    </Boxchat>
  );
};

export default Human;
