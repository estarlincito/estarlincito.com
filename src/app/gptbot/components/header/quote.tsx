import useQuotes from '@/Hooks/useQuotes';
import { Em, Text } from '@radix-ui/themes';

const Quote = () => {
  const { quote } = useQuotes();

  return (
    <Text>
      <Em>{quote}</Em>
    </Text>
  );
};

export default Quote;
