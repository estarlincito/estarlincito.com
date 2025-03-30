import { Box, Em, Heading, Strong, Text } from '@radix-ui/themes';
import React from 'react';

type Props = {
  description: string;
  list: {
    title: string;
    details: string;
  }[];
  closingNote: string;
};

const Topics = ({ description, list, closingNote }: Props) => {
  return (
    <Box>
      <Heading size='4' mb='4'>
        {description}
      </Heading>
      <ul>
        {list.map((topic, id) => (
          <li key={id}>
            <Text size='3'>
              <Strong>{topic.title}</Strong> - <Em>{topic.details}</Em>
            </Text>
          </li>
        ))}
      </ul>
      <Box mt='4'>{closingNote}</Box>
    </Box>
  );
};

export default Topics;
