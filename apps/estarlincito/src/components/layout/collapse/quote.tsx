import { Blockquote, Em } from '@repo/ui';

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
