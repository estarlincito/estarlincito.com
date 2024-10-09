'use client';
import useQuotes from '@/Hooks/useQuotes';
import { Box, Card, Em, Flex, Strong, Text } from '@radix-ui/themes';
import CopyQuote from './copy_message';

const Quote = () => {
  const { quote, author } = useQuotes();

  return (
    <Box my='8' width='21.875rem'>
      <Card size='2' variant='classic'>
        <Em>{quote}</Em>
        <br />
        <br />
        <Flex justify='between'>
          <Text>
            By: <Strong>{author}</Strong>
          </Text>
          <CopyQuote text={quote} />
        </Flex>
      </Card>
    </Box>
  );
};

export default Quote;
