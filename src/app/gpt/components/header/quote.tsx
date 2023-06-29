'use client';
import useGPT from '@/Hooks/useGPT';

const Quote = () => {
  const { quote } = useGPT();

  return (
    <p>
      <em>{quote.quote}</em>
    </p>
  );
};

export default Quote;
