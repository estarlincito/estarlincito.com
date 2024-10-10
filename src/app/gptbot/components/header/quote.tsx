import useQuotes from '@/Hooks/useQuotes';
import { Em, Text } from '@radix-ui/themes';

const Quote = () => {
  const { random } = useQuotes();

  return (
    <Text>
      <Em>{random.quote}</Em>
    </Text>
  );
};

export default Quote;
