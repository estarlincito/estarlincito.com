import useQuotes from '@/Hooks/useQuotes';
import { Blockquote, Em } from '@radix-ui/themes';

const Quote = () => {
  const { random } = useQuotes();

  return (
    <Blockquote>
      <Em>{random.quote}</Em>
    </Blockquote>
  );
};

export default Quote;
