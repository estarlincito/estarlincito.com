import { Box, Card, Flex, Text } from '@radix-ui/themes';
import { Message } from 'ai';
import { TbAlien, TbMoodBoy } from 'react-icons/tb';
import CopyMessage from './copy_message';

const Content = ({ content, role }: Message) => {
  return (
    <Box
      asChild
      maxWidth={{ initial: '95%', sm: '80%' }}
      style={{
        cursor: 'default',
        justifySelf: role === 'assistant' ? 'start' : 'end',
      }}
    >
      <Card variant='classic'>
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

          <Text as='p' style={{ whiteSpace: 'pre-wrap' }}>
            {content}
          </Text>
          <CopyMessage text={content} />
        </Flex>
      </Card>
    </Box>
  );
};

export default Content;
