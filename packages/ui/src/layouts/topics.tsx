import { Box, Em, Heading, Text } from '@radix-ui/themes';

interface Props {
  topics: {
    data: string[];
    label: string;
  };
  dash?: boolean;
  italic?: boolean;
}

export const Topics = ({ topics, dash, italic }: Props) => {
  return (
    <Box>
      <Heading size='4' mb='3'>
        {topics.label}
      </Heading>
      <ul>
        {topics.data.map((topic, id) => (
          <li key={id}>
            <Text size='3'>
              {dash && '-'} {italic !== undefined ? <Em>{topic}</Em> : topic}
            </Text>
          </li>
        ))}
      </ul>
    </Box>
  );
};
