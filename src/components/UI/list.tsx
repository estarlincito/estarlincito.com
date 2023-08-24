import { Box, Em, Heading, Text } from '@radix-ui/themes';

interface ListProps {
  title: string;
  arr: string[];
  dash?: boolean;
  italic?: boolean;
}

const List = ({ title, arr, dash, italic }: ListProps) => {
  return (
    <Box>
      <Heading size='4' mb='3'>
        {title}
      </Heading>
      <ul>
        {arr.map((tema, id) => (
          <li key={id}>
            <Text size='3'>
              {dash && '-'} {italic !== undefined ? <Em>{tema}</Em> : tema}
            </Text>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default List;
