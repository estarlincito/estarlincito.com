import { type Message } from '@ai-sdk/react';
import { Flex, Grid, ScrollArea } from '@radix-ui/themes';
import React, { useEffect, useRef } from 'react';

import Content from './content';
interface Props {
  messages: Message[];
}
const Messages: React.FC<Props> = ({ messages }) => {
  // smooth
  const smooth = useRef<HTMLDivElement>(null);

  useEffect(() => {
    smooth.current?.scrollTo({
      behavior: 'smooth',
      top: smooth.current?.scrollHeight,
    });
  }, [messages]);

  return (
    <ScrollArea ref={smooth} type='hover' scrollbars='vertical'>
      <Flex p='8' gap='5' direction='column'>
        {messages.map(({ role, content, id }) => (
          <Grid key={id} gap='3'>
            <Content role={role} content={content} id={id} />
          </Grid>
        ))}
      </Flex>
    </ScrollArea>
  );
};

export default Messages;
