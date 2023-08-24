import { Text } from '@radix-ui/themes';
import { TbMoodBoy } from 'react-icons/tb';
import Boxchat from './boxchat';
import CopyChat from './copy';

interface HumanProps {
  question: string;
}

const Human = ({ question }: HumanProps) => {
  return (
    <Boxchat>
      <Text as='span'>
        <TbMoodBoy />
      </Text>

      <Text as='p'>{question}</Text>

      <CopyChat text={question} />
    </Boxchat>
  );
};

export default Human;
