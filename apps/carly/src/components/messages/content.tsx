import { Box, Card } from '@repo/ui';
import { type Message } from 'ai';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import CopyMessage from './copy_message';

const Content = ({ content, role }: Message) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  return (
    <Box
      asChild
      style={{
        cursor: 'default',
        justifySelf: role === 'assistant' ? 'start' : 'end',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card variant='ghost'>
        <Box style={{ borderBlockColor: 'red', borderRadius: '10px' }}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </Box>
        <Box height='10px'>
          {(isHovered || isTouchDevice) && <CopyMessage text={content} />}
        </Box>
      </Card>
    </Box>
  );
};

export default Content;
