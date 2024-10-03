import useQuotes from '@/Hooks/useQuotes';
import { Blockquote, Em } from '@radix-ui/themes';

const Quote = () => {
  const { quote } = useQuotes();

  return (
    <Blockquote>
      <Em>{quote}</Em>
    </Blockquote>
  );
};

export default Quote;
