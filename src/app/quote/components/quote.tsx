'use client';
import useQuotes from '@/Hooks/useQuotes';
import { Box, Card, Em, Flex, Strong, Text } from '@radix-ui/themes';
import CopyQuote from './copy_message';

const Quote = () => {
  const { random } = useQuotes();

  return (
    <Box my='8' width='21.875rem'>
      <Card size='2' variant='classic'>
        <Em>{random.quote}</Em>
        <br />
        <br />
        <Flex justify='between'>
          <Text>
            By: <Strong>{random.author}</Strong>
          </Text>
          <CopyQuote text={random.quote} />
        </Flex>
      </Card>
    </Box>
  );
};

export default Quote;
