import { Content } from '@app/carly/components/messages/content';
import { ScrollArea } from '@repo/ui/components/scroll-area';
import { Flex } from '@repo/ui/layouts/flex';
import { Grid } from '@repo/ui/layouts/grid';
import { type Message } from 'ai';
import * as React from 'react';

export const Messages = ({ messages }: { messages: Message[] }) => {
  const smooth = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    smooth.current?.scrollTo({
      behavior: 'smooth',
      top: smooth.current?.scrollHeight,
    });
  }, [messages]);

  return (
    <ScrollArea
      className='h-[60vh]'

      // ref={smooth}
    >
      <Flex className='flex-col gap-5 p-8'>
        {messages.map(({ id, ...rest }) => (
          <Grid className='gap-3' key={id}>
            <Content id={id} {...rest} />
          </Grid>
        ))}
      </Flex>
    </ScrollArea>
  );
};
