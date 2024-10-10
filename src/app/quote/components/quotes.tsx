'use client';
import useQuotes from '@/Hooks/useQuotes';
import { Card, Em, Flex, Strong, Text } from '@radix-ui/themes';
import CopyQuote from './copy_message';

const Quotes = () => {
  const { quotes } = useQuotes();

  return (
    <Flex direction='column' gap='1'>
      {quotes.slice(1, 5).map(({ quote, author }, id) => (
        <Card size='2' variant='classic' key={id}>
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
      ))}
    </Flex>
  );
};

export default Quotes;
