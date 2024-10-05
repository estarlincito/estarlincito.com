import { Card, Flex, Text } from '@radix-ui/themes';
import { Message } from 'ai';
import { TbAlien, TbMoodBoy } from 'react-icons/tb';
import Styled from '../../gpt.module.scss';
import CopyMessage from './copy_message';

const Content = ({ content, role }: Message) => {
  return (
    <Card
      variant='classic'
      className={role === 'assistant' ? Styled.assistant : Styled.user}
    >
      <Flex direction='row' gap='5' align='center'>
        {role === 'user' ? (
          <Text as='span' size='5'>
            <TbMoodBoy opacity='0.8' />
          </Text>
        ) : (
          <Text as='span' size='5'>
            <TbAlien opacity='0.8' />
          </Text>
        )}

        <Text as='p' className='gpt_content'>
          {content}
        </Text>
        <CopyMessage text={content} />
      </Flex>
    </Card>
  );
};

export default Content;
