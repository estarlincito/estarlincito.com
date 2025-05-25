import { QuoteCard } from '@app/quotely/components/quote-card';
import { SECTIONS } from '@app/quotely/constants/home';
import { getRandomQuote } from '@app/quotely/lib/quotes';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Container } from '@repo/ui/layouts/container';
import { Section } from '@repo/ui/layouts/section';

export const QuoteOfTheDay = async () => {
  const quoteData = await getRandomQuote();

  return (
    <Container asChild size='1'>
      <Section>
        <Heading
          className='text-center'
          content={SECTIONS.QUOTE_OF_THE_DAY.title}
        />
        <QuoteCard {...quoteData} />

        <Link
          className='self-center'
          label={SECTIONS.QUOTE_OF_THE_DAY.cta.label}
          route={SECTIONS.QUOTE_OF_THE_DAY.cta.route}
        />
      </Section>
    </Container>
  );
};
