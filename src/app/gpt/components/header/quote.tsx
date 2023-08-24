'use client';
import useGPT from '@/Hooks/useGPT';
import { Em, Text } from '@radix-ui/themes';

const Quote = () => {
  const { quote } = useGPT();

  return (
    <Text>
      <Em>{quote.quote}</Em>
    </Text>
  );
};

export default Quote;
