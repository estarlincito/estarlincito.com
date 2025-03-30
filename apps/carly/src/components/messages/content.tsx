import { Box, Card } from '@radix-ui/themes';
import { type Message } from 'ai';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import CopyMessage from './copy_message';

const Content: React.FC<Message> = ({ content, role }) => {
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
