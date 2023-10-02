import { Flex, Separator, Text } from '@radix-ui/themes';
import { Message } from 'ai';
import { TbAlien, TbMoodBoy } from 'react-icons/tb';
import CopyChat from './copy';

const Content = ({ content, role }: Message) => {
  return (
    <>
      <Flex direction='row' gap='5' align='center'>
        {role === 'user' ? (
          <Text as='span'>
            <TbMoodBoy opacity='0.8' />
          </Text>
        ) : (
          <Text as='span'>
            <TbAlien opacity='0.8' />
          </Text>
        )}

        <Text as='p'>{content}</Text>
        <CopyChat text={content} />
      </Flex>

      {role === 'assistant' ? <Separator size='4' mt='5' /> : null}
    </>
  );
};

export default Content;
