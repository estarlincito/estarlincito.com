'use client';
import { Flex, ScrollArea } from '@radix-ui/themes';
import { Message } from 'ai';
import { useEffect, useRef } from 'react';
import Content from './content';

interface MessagesPros {
  messages: Message[];
}
const Messages = ({ messages }: MessagesPros) => {
  const smooth = useRef<HTMLDivElement>(null);

  useEffect(() => {
    smooth.current?.scrollTo({
      top: smooth.current?.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <ScrollArea type='hover' scrollbars='vertical' ref={smooth}>
      <Flex p='8' gap='5' direction='column'>
        {messages.map(({ role, content, id }) => (
          <Flex key={id} direction='column' gap='3'>
            <Content role={role} content={content} id={id} />
          </Flex>
        ))}
      </Flex>
    </ScrollArea>
  );
};

export default Messages;
