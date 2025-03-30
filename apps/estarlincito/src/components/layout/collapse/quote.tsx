import { Blockquote, Em } from '@radix-ui/themes';

import useQuotes from '@/Hooks/useQuotes';

const Quote = () => {
  const { random } = useQuotes();

  return (
    <Blockquote>
      <Em>{random.quote}</Em>
    </Blockquote>
  );
};

export default Quote;
