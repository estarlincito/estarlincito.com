'use client';
import useGPT from '@/Hooks/useGPT';
import { Flex, ScrollArea, Separator } from '@radix-ui/themes';
import Message from './human';

const Chat = () => {
  const { chat, smooth } = useGPT();

  return (
    <ScrollArea type='hover' scrollbars='vertical' ref={smooth}>
      <Flex p='8' gap='5' direction='column'>
        {chat.length === 1 ? null : (
          <>
            {chat.slice(1, chat.length).map(({ role, content }, id) => (
              <Flex key={id} direction='column' gap='3'>
                <Message content={content} role={role} />
                <Separator size='4' mt='5' />
              </Flex>
            ))}
          </>
        )}
      </Flex>
    </ScrollArea>
  );
};

export default Chat;
