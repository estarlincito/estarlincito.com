import { type Message } from '@ai-sdk/react';
import { Flex, Grid, ScrollArea } from '@repo/ui';
import { useEffect, useRef } from 'react';

import Content from './content';
interface Props {
  messages: Message[];
}
const Messages = ({ messages }: Props) => {
  // smooth
  const smooth = useRef<HTMLDivElement>(null);

  useEffect(() => {
    smooth.current?.scrollTo({
      behavior: 'smooth',
      top: smooth.current?.scrollHeight,
    });
  }, [messages]);

  return (
    <ScrollArea ref={smooth} scrollbars='vertical' type='hover'>
      <Flex direction='column' gap='5' p='8'>
        {messages.map(({ role, content, id }) => (
          <Grid gap='3' key={id}>
            <Content content={content} id={id} role={role} />
          </Grid>
        ))}
      </Flex>
    </ScrollArea>
  );
};

export default Messages;
