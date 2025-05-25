import { CopyMessage } from '@app/carly/components/messages/copy_message';
import { Box } from '@repo/ui/components/box';
import { Card, CardContent } from '@repo/ui/components/card';
import { cn } from '@repo/ui/lib/utils';
import type { Message } from 'ai';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export const Content = ({ content, role }: Message) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  return (
    <Card
      className={cn(
        role === 'assistant' ? 'justify-self-start' : 'justify-self-end',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent>
        <ReactMarkdown>{content}</ReactMarkdown>

        <Box className='h-[20px]'>
          {(isHovered || isTouchDevice) && <CopyMessage text={content} />}
        </Box>
      </CardContent>
    </Card>
  );
};
