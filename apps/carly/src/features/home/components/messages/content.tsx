import { Box } from '@repo/ui/components/box';
import { Card, CardContent } from '@repo/ui/components/card';
import { cn } from '@repo/ui/lib/utils';
import type { Message } from 'ai';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import {
  CopyMessage,
  type CopyMessageProps,
} from '@/features/home/components/messages/copy_message';

export const Content = ({
  content,
  role,
  successMessage,
}: Message & Pick<CopyMessageProps, 'successMessage'>) => {
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
          {(isHovered || isTouchDevice) && (
            <CopyMessage successMessage={successMessage} text={content} />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
