'use client';
import useGPT from '@/Hooks/useGPT';
import { Flex, ScrollArea, Separator } from '@radix-ui/themes';
import Bot from './bot';
import Human from './human';

const Chat = () => {
  const { chat, smooth } = useGPT();

  return (
    <ScrollArea type='hover' scrollbars='vertical' ref={smooth}>
      <Flex p='8' gap='5' direction='column'>
        {chat.length === 1 ? null : (
          <>
            {chat.slice(1, chat.length).map(({ answer, question }, id) => (
              <Flex key={id} direction='column' gap='3'>
                <Human question={question} />
                <Bot answer={answer} />
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
